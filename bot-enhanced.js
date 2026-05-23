// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ENHANCED BOT FEATURES - SOCIAL, EXPLORATION, STEALING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// This file extends bot.js with advanced features

const features = require('./features.js');

module.exports = (bot, users, saveUsers, getOrCreateUser, COLLECTIBLES, getRandomCollectible, formatRarity, randomMessage) => {
  
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // INVENTORY & COLLECTION COMMANDS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('colecao', async (ctx) => {
    try {
      const user = getOrCreateUser(ctx.from.id);
      let message = '🎪 *Your Collections*\n\n';

      const categories = {
        '🎀 Sanrio': 'sanrio',
        '💕 Barbie': 'barbie',
        '🧿 Funko Pop': 'funko',
        '🌸 Flowers': 'flowers',
        '🌙 Secret': 'secret',
      };

      let totalCollected = 0;
      let totalAvailable = 0;

      for (const [categoryName, categoryId] of Object.entries(categories)) {
        const items = COLLECTIBLES[categoryId];
        totalAvailable += items.length;

        let collected = 0;
        items.forEach((item) => {
          if (user.inventory[item.id]) {
            collected++;
            totalCollected++;
          }
        });

        const percentage = ((collected / items.length) * 100).toFixed(0);
        message += `${categoryName}: ${collected}/${items.length} (${percentage}%)\n`;
      }

      const overallPercentage = ((totalCollected / totalAvailable) * 100).toFixed(0);
      message += `\n📊 Overall: ${totalCollected}/${totalAvailable} (${overallPercentage}%)`;

      ctx.reply(message);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Error loading collections');
    }
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RANKING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('rank', async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      const rankType = args[0] || 'level';

      const sortedUsers = Object.values(users).sort((a, b) => {
        switch (rankType) {
          case 'collected':
            return b.stats.totalCollected - a.stats.totalCollected;
          case 'legendary':
            return b.stats.legendaryCount - a.stats.legendaryCount;
          case 'coins':
            return b.coins - a.coins;
          default: // level
            return b.level - a.level;
        }
      });

      let message = `👑 *Top 10 Ranking (${rankType})*\n\n`;

      sortedUsers.slice(0, 10).forEach((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
        let value = '';

        switch (rankType) {
          case 'collected':
            value = `${user.stats.totalCollected} items`;
            break;
          case 'legendary':
            value = `${user.stats.legendaryCount} legendary`;
            break;
          case 'coins':
            value = `${user.coins} coins`;
            break;
          default:
            value = `Level ${user.level}`;
        }

        message += `${medal} @${user.username || 'unknown'} - ${value}\n`;
      });

      ctx.reply(message);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Error loading rankings');
    }
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FLOWER EXPLORATION SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('explorarflor', async (ctx) => {
    try {
      const user = getOrCreateUser(ctx.from.id);
      
      const locations = Object.keys(features.EXPLORATION_LOCATIONS);
      const selectedLocation = locations[Math.floor(Math.random() * locations.length)];
      const location = features.EXPLORATION_LOCATIONS[selectedLocation];

      let message = `🌸 *Flower Exploration*\n\n`;
      message += `📍 You arrive at: ${location.name}\n`;
      message += `${location.description}\n\n`;

      const clue = location.clues[Math.floor(Math.random() * location.clues.length)];
      message += `💡 Clue: "${clue}"\n\n`;
      message += `Can you find the hidden flower?\n`;
      message += `Reply with /descobrirflor [flower_name]`;

      user.currentExploration = {
        location: selectedLocation,
        flowers: location.flowers,
        clue: clue,
      };

      saveUsers(users);
      ctx.reply(message);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Exploration error');
    }
  });

  bot.command('descobrirflor', async (ctx) => {
    try {
      const user = getOrCreateUser(ctx.from.id);
      const args = ctx.message.text.split(' ').slice(1);
      const guess = args.join('_').toLowerCase();

      if (!user.currentExploration) {
        return ctx.reply('🌸 No exploration in progress! Use /explorarflor to start.');
      }

      const location = features.EXPLORATION_LOCATIONS[user.currentExploration.location];
      const correctFlower = user.currentExploration.flowers[
        Math.floor(Math.random() * user.currentExploration.flowers.length)
      ];

      if (guess === correctFlower || guess.includes(correctFlower.split('_')[0])) {
        // Find the flower item
        let flowerItem = null;
        COLLECTIBLES.flowers.forEach((item) => {
          if (item.id === correctFlower) {
            flowerItem = item;
          }
        });

        if (flowerItem) {
          if (!user.inventory[flowerItem.id]) {
            user.inventory[flowerItem.id] = 0;
          }
          user.inventory[flowerItem.id]++;
          user.stats.totalCollected++;
          user.coins += 50;
          user.experience += 75;

          saveUsers(users);

          ctx.reply(`
🌸 *Correct!* 🌸

You discovered: ${flowerItem.name}
${formatRarity(flowerItem.rarity)}

✨ +50 coins
⭐ +75 XP

Discovery complete! 🎉
          `);
        }
      } else {
        ctx.reply('❌ That\'s not the right flower... Try again tomorrow at /explorarflor');
      }

      user.currentExploration = null;
      saveUsers(users);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Discovery error');
    }
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // STEALING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('roubar', async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      if (args.length === 0) {
        return ctx.reply('Usage: /roubar @username\n\nExample: /roubar @friend');
      }

      const targetUsername = args[0].replace('@', '');
      const user = getOrCreateUser(ctx.from.id);

      // Check cooldown
      const now = Date.now();
      const lastSteal = user.lastStealAttempt || 0;
      const cooldown = features.STEAL_CONFIG.cooldown * 1000;

      if (now - lastSteal < cooldown) {
        const timeLeft = Math.ceil((cooldown - (now - lastSteal)) / 60000);
        return ctx.reply(`⏰ ${features.STEAL_MESSAGES.cooldown}\n\nTry again in ${timeLeft} minutes.`);
      }

      // Find target user
      let targetUser = null;
      for (const [id, userData] of Object.entries(users)) {
        if (userData.username && userData.username.toLowerCase() === targetUsername.toLowerCase()) {
          targetUser = userData;
          break;
        }
      }

      if (!targetUser) {
        return ctx.reply(`❌ User @${targetUsername} not found or hasn't played yet.`);
      }

      // Check if target has items
      const targetItems = Object.entries(targetUser.inventory).filter(([id, count]) => count > 0);
      if (targetItems.length === 0) {
        return ctx.reply(features.STEAL_MESSAGES.no_items.replace('{username}', targetUsername));
      }

      user.lastStealAttempt = now;

      // Calculate success
      const randomItem = targetItems[Math.floor(Math.random() * targetItems.length)];
      const itemId = randomItem[0];

      // Find item details
      let itemDetails = null;
      for (const category of Object.values(COLLECTIBLES)) {
        const found = category.find((i) => i.id === itemId);
        if (found) {
          itemDetails = found;
          break;
        }
      }

      const baseChance = features.STEAL_CONFIG.baseSuccessRate;
      const rarityChance = features.STEAL_CONFIG.rarityMultiplier[itemDetails?.rarity] || 0.5;
      const successRate = baseChance * rarityChance;
      const success = Math.random() < successRate;

      if (success) {
        // Steal successful
        targetUser.inventory[itemId]--;
        if (!user.inventory[itemId]) {
          user.inventory[itemId] = 0;
        }
        user.inventory[itemId]++;
        user.coins += 25;

        saveUsers(users);

        ctx.reply(`
🎭 *Theft Successful!* 🎭

You stole: ${itemDetails?.name}

+25 coins
${features.STEAL_MESSAGES.success
  .replace('{item}', itemDetails?.name)
  .replace('{username}', targetUsername)}
        `);
      } else if (Math.random() < features.STEAL_CONFIG.backfireChance) {
        // Backfire - they steal from you
        const userItems = Object.entries(user.inventory).filter(([id, count]) => count > 0);
        
        if (userItems.length > 0) {
          const stolenItem = userItems[Math.floor(Math.random() * userItems.length)];
          const stolenItemId = stolenItem[0];

          let stolenItemDetails = null;
          for (const category of Object.values(COLLECTIBLES)) {
            const found = category.find((i) => i.id === stolenItemId);
            if (found) {
              stolenItemDetails = found;
              break;
            }
          }

          user.inventory[stolenItemId]--;
          if (!targetUser.inventory[stolenItemId]) {
            targetUser.inventory[stolenItemId] = 0;
          }
          targetUser.inventory[stolenItemId]++;

          saveUsers(users);

          ctx.reply(`
💥 *BACKFIRE!* 💥

Your stealing attempt backfired!
${features.STEAL_MESSAGES.backfire
  .replace('{username}', targetUsername)
  .replace('{item}', stolenItemDetails?.name)}
          `);
        } else {
          ctx.reply('❌ Failed to steal! The guards caught you!');
        }
      } else {
        // Just failure
        ctx.reply(`
😅 *Theft Failed!* 😅

${features.STEAL_MESSAGES.fail.replace('{username}', targetUsername)}

The arcade security is tight! Try again later.
        `);
      }

      saveUsers(users);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Stealing error');
    }
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ACHIEVEMENT SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('conquistas', async (ctx) => {
    try {
      const user = getOrCreateUser(ctx.from.id);

      let message = '🏆 *Your Achievements*\n\n';

      if (user.achievements.length === 0) {
        message += 'No achievements yet! Start playing to unlock them!';
      } else {
        user.achievements.forEach((achievementId) => {
          const achievement = features.ACHIEVEMENTS[achievementId];
          if (achievement) {
            message += `${achievement.icon} ${achievement.name}\n`;
            message += `   ${achievement.description}\n\n`;
          }
        });
      }

      ctx.reply(message);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Error loading achievements');
    }
  });

  const unlockAchievement = (user, achievementId) => {
    if (!user.achievements.includes(achievementId)) {
      user.achievements.push(achievementId);
      return true;
    }
    return false;
  };

  // Helper to check and unlock achievements
  const checkAchievements = (user) => {
    // First collectible
    if (user.stats.totalCollected === 1) {
      unlockAchievement(user, 'first_collectible');
    }

    // First legendary
    if (user.stats.legendaryCount === 1) {
      unlockAchievement(user, 'first_legendary');
    }

    // Collection milestones
    if (user.stats.totalCollected >= 10) {
      unlockAchievement(user, 'collector_10');
    }
    if (user.stats.totalCollected >= 50) {
      unlockAchievement(user, 'collector_50');
    }
    if (user.stats.totalCollected >= 100) {
      unlockAchievement(user, 'collector_100');
    }

    // Mythical hunter
    if (user.stats.mythicalCount > 0) {
      unlockAchievement(user, 'mythical_hunter');
    }

    // Level achievements
    if (user.level >= 5) {
      unlockAchievement(user, 'level_5');
    }
    if (user.level >= 10) {
      unlockAchievement(user, 'level_10');
    }
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ATMOSPHERE EXTENDED COMMANDS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('chuva', async (ctx) => {
    const scene = features.ATMOSPHERE_SCENES.rain;
    ctx.reply(`${scene.emoji} *${scene.title}*${scene.description}`);
  });

  bot.command('noite', async (ctx) => {
    const scene = features.ATMOSPHERE_SCENES.night;
    ctx.reply(`${scene.emoji} *${scene.title}*${scene.description}`);
  });

  bot.command('neon', async (ctx) => {
    const scene = features.ATMOSPHERE_SCENES.neon;
    ctx.reply(`${scene.emoji} *${scene.title}*${scene.description}`);
  });

  bot.command('evento', async (ctx) => {
    const scene = features.ATMOSPHERE_SCENES.evento;
    ctx.reply(`${scene.emoji} *${scene.title}*${scene.description}`);
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GIFT SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('presentear', async (ctx) => {
    try {
      const args = ctx.message.text.split(' ').slice(1);
      if (args.length < 2) {
        return ctx.reply('Usage: /presentear @username item_id\n\nExample: /presentear @friend hello_kitty');
      }

      const targetUsername = args[0].replace('@', '');
      const itemId = args[1].toLowerCase();
      const user = getOrCreateUser(ctx.from.id);

      if (!user.inventory[itemId] || user.inventory[itemId] === 0) {
        return ctx.reply('❌ You don\'t have this item to gift!');
      }

      // Find target
      let targetUser = null;
      for (const [id, userData] of Object.entries(users)) {
        if (userData.username && userData.username.toLowerCase() === targetUsername.toLowerCase()) {
          targetUser = userData;
          break;
        }
      }

      if (!targetUser) {
        return ctx.reply(`❌ User @${targetUsername} not found`);
      }

      // Find item
      let itemDetails = null;
      for (const category of Object.values(COLLECTIBLES)) {
        const found = category.find((i) => i.id === itemId);
        if (found) {
          itemDetails = found;
          break;
        }
      }

      if (!itemDetails) {
        return ctx.reply('❌ Item not found');
      }

      // Transfer
      user.inventory[itemId]--;
      if (!targetUser.inventory[itemId]) {
        targetUser.inventory[itemId] = 0;
      }
      targetUser.inventory[itemId]++;
      user.lastGift = Date.now();

      saveUsers(users);

      ctx.reply(`
🎁 *Gift Sent!* 🎁

You sent ${itemDetails.name} to @${targetUsername}

💝 Spread the joy!
      `);
    } catch (error) {
      console.error(error);
      ctx.reply('❌ Gifting error');
    }
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRADING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bot.command('trocar', async (ctx) => {
    ctx.reply('🔄 *Trading System*\n\n Coming soon! Direct DM @friend for now.');
  });

  // Export achievement checker
  return { unlockAchievement, checkAchievements };
};
