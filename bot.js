require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const fs = require('fs');
const path = require('path');

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INITIALIZATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const bot = new Telegraf(process.env.BOT_TOKEN);
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const USERS_FILE = path.join(DATA_DIR, 'users.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DATA MANAGEMENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const loadUsers = () => {
  if (fs.existsSync(USERS_FILE)) {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  }
  return {};
};

const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

const loadEvents = () => {
  if (fs.existsSync(EVENTS_FILE)) {
    return JSON.parse(fs.readFileSync(EVENTS_FILE, 'utf8'));
  }
  return { active: 'normal', events: {} };
};

const saveEvents = (events) => {
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));
};

let users = loadUsers();
let events = loadEvents();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COLLECTIBLES DATABASE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const COLLECTIBLES = {
  sanrio: [
    { id: 'hello_kitty', name: '🎀 Hello Kitty', rarity: 'common', image: 'https://via.placeholder.com/300?text=Hello+Kitty' },
    { id: 'kuromi', name: '🖤 Kuromi', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=Kuromi' },
    { id: 'my_melody', name: '🎀 My Melody', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=My+Melody' },
    { id: 'cinnamoroll', name: '☁️ Cinnamoroll', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Cinnamoroll' },
    { id: 'pompompurin', name: '🐶 Pompompurin', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Pompompurin' },
    { id: 'keroppi', name: '🐸 Keroppi', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=Keroppi' },
    { id: 'badtz_maru', name: '🐧 Badtz Maru', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Badtz+Maru' },
    { id: 'aggretsuko', name: '🐼 Aggretsuko', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Aggretsuko' },
  ],
  barbie: [
    { id: 'mermaid_barbie', name: '🧜‍♀️ Mermaid Barbie', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Mermaid+Barbie' },
    { id: 'vintage_barbie', name: '✨ Vintage Barbie', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Vintage+Barbie' },
    { id: 'fairy_barbie', name: '🧚 Fairy Barbie', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Fairy+Barbie' },
    { id: 'fashionista_barbie', name: '👗 Fashionista Barbie', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=Fashionista+Barbie' },
    { id: 'pink_dream_barbie', name: '💕 Pink Dream Barbie', rarity: 'legendary', image: 'https://via.placeholder.com/300?text=Pink+Dream+Barbie' },
    { id: 'collector_barbie', name: '💎 Collector Barbie', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Collector+Barbie' },
  ],
  funko: [
    { id: 'demon_slayer_funko', name: '⚔️ Demon Slayer Funko', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Demon+Slayer' },
    { id: 'jjk_funko', name: '👿 JJK Funko', rarity: 'epic', image: 'https://via.placeholder.com/300?text=JJK+Funko' },
    { id: 'one_piece_funko', name: '🏴‍☠️ One Piece Funko', rarity: 'rare', image: 'https://via.placeholder.com/300?text=One+Piece' },
    { id: 'naruto_funko', name: '🌪️ Naruto Funko', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=Naruto' },
    { id: 'horror_funko', name: '👻 Horror Funko', rarity: 'legendary', image: 'https://via.placeholder.com/300?text=Horror+Funko' },
    { id: 'movie_funko', name: '🎬 Movie Funko', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Movie+Funko' },
  ],
  flowers: [
    { id: 'moon_rose', name: '🌙 Moon Rose', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Moon+Rose' },
    { id: 'crystal_tulip', name: '💎 Crystal Tulip', rarity: 'epic', image: 'https://via.placeholder.com/300?text=Crystal+Tulip' },
    { id: 'ghost_lily', name: '👻 Ghost Lily', rarity: 'legendary', image: 'https://via.placeholder.com/300?text=Ghost+Lily' },
    { id: 'eclipse_flower', name: '🌑 Eclipse Flower', rarity: 'mythical', image: 'https://via.placeholder.com/300?text=Eclipse+Flower' },
    { id: 'sakura_blossom', name: '🌸 Sakura Blossom', rarity: 'uncommon', image: 'https://via.placeholder.com/300?text=Sakura+Blossom' },
    { id: 'night_bloom', name: '🌙 Night Bloom', rarity: 'rare', image: 'https://via.placeholder.com/300?text=Night+Bloom' },
  ],
  secret: [
    { id: 'cursed_plushie', name: '🖤 Cursed Plushie', rarity: 'mythical', image: 'https://via.placeholder.com/300?text=Cursed+Plushie' },
    { id: 'glitch_item', name: '⚡ Glitch Item', rarity: 'secret', image: 'https://via.placeholder.com/300?text=Glitch+Item' },
    { id: 'moon_relic', name: '🌙 Moon Relic', rarity: 'legendary', image: 'https://via.placeholder.com/300?text=Moon+Relic' },
    { id: 'haunted_doll', name: '👁️ Haunted Doll', rarity: 'mythical', image: 'https://via.placeholder.com/300?text=Haunted+Doll' },
  ],
};

const RARITY_COLORS = {
  common: '⚪',
  uncommon: '🟢',
  rare: '🔵',
  epic: '🟣',
  legendary: '🟡',
  mythical: '🔴',
  secret: '⬛',
  'event limited': '🌟',
};

const RARITY_WEIGHTS = {
  common: 40,
  uncommon: 25,
  rare: 18,
  epic: 10,
  legendary: 5,
  mythical: 1.5,
  secret: 0.5,
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const getOrCreateUser = (userId) => {
  if (!users[userId]) {
    users[userId] = {
      userId,
      username: 'unknown',
      spins: 3,
      extraSpins: 0,
      lastSpinReset: new Date().toDateString(),
      lastMiniGames: {},
      inventory: {},
      achievements: [],
      level: 1,
      experience: 0,
      coins: 0,
      lastStealAttempt: 0,
      lastGift: 0,
      collections: {},
      stats: {
        totalSpins: 0,
        totalCollected: 0,
        legendaryCount: 0,
        mythicalCount: 0,
      },
    };
    saveUsers(users);
  }
  return users[userId];
};

const resetDailySpins = () => {
  const today = new Date().toDateString();
  Object.keys(users).forEach((userId) => {
    const user = users[userId];
    if (user.lastSpinReset !== today) {
      user.spins = 3;
      user.extraSpins = 0;
      user.lastMiniGames = {};
      user.lastSpinReset = today;
    }
  });
  saveUsers(users);
};

const weightedRandom = (weights) => {
  const total = Object.values(weights).reduce((a, b) => a + b, 0);
  let random = Math.random() * total;
  for (const [key, value] of Object.entries(weights)) {
    random -= value;
    if (random <= 0) return key;
  }
  return Object.keys(weights)[0];
};

const getRandomCollectible = () => {
  const rarity = weightedRandom(RARITY_WEIGHTS);
  const categories = Object.keys(COLLECTIBLES);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const items = COLLECTIBLES[category].filter((item) => item.rarity === rarity);
  
  if (items.length === 0) {
    const allItems = COLLECTIBLES[category];
    return allItems[Math.floor(Math.random() * allItems.length)];
  }
  
  return items[Math.floor(Math.random() * items.length)];
};

const formatRarity = (rarity) => {
  const color = RARITY_COLORS[rarity] || '⭐';
  return `${color} ${rarity.charAt(0).toUpperCase() + rarity.slice(1)}`;
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ARCADE MESSAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const ARCADE_MESSAGES = {
  spin: [
    '🎠 Neon lights flicker softly across the arcade...\n\n✨ The claw machine whirrs to life...',
    '🎪 The arcade comes alive with pastel glows...\n\n🧸 You reach for the controls...',
    '🌙 Midnight chimes through the arcade speakers...\n\n💫 The machines hum mysteriously...',
    '🎰 Coins cascade through glowing slots...\n\n🌈 Colors dance around you...',
    '✨ The arcade breathes with kawaii energy...\n\n🎀 Magic fills the air...',
  ],
  win: [
    '🎉 The machine lights up brilliantly!',
    '✨ A gentle chime echoes through the arcade!',
    '💫 The claw grips perfectly!',
    '🌟 The machine hums with joy!',
    '🎊 Sparkles burst everywhere!',
  ],
  noSpins: [
    '💔 The machines have gone silent for now...',
    '🌙 Come back tomorrow for more spins...',
    '😴 The arcade is resting until midnight...',
  ],
};

const randomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN SPIN COMMAND
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bot.command('girar', async (ctx) => {
  try {
    resetDailySpins();
    const user = getOrCreateUser(ctx.from.id);
    user.username = ctx.from.username || ctx.from.first_name;

    const totalSpins = user.spins + user.extraSpins;

    if (totalSpins === 0) {
      return ctx.reply(randomMessage(ARCADE_MESSAGES.noSpins) + '\n\n🎮 Play mini-games to earn extra spins!\n/pesca, /cacapalavra, /descubra');
    }

    // Deduct spin
    if (user.spins > 0) {
      user.spins--;
    } else {
      user.extraSpins--;
    }

    user.stats.totalSpins++;

    // Get collectible
    const collectible = getRandomCollectible();
    const rarity = collectible.rarity;

    if (rarity === 'legendary' || rarity === 'mythical' || rarity === 'secret') {
      user.stats.legendaryCount++;
    }

    // Add to inventory
    if (!user.inventory[collectible.id]) {
      user.inventory[collectible.id] = 0;
    }
    user.inventory[collectible.id]++;
    user.stats.totalCollected++;

    // Award coins and XP
    const rarityXP = { common: 10, uncommon: 25, rare: 50, epic: 100, legendary: 200, mythical: 300, secret: 500 };
    user.experience += rarityXP[rarity] || 10;
    user.coins += rarityXP[rarity] || 10;

    // Level up check
    if (user.experience >= user.level * 100) {
      user.level++;
      user.spins += 1;
      await ctx.reply(`🎉 LEVEL UP! You're now level ${user.level}!\n⭐ +1 bonus spin awarded!`);
    }

    saveUsers(users);

    // Send message
    let message = randomMessage(ARCADE_MESSAGES.spin) + '\n\n';
    message += randomMessage(ARCADE_MESSAGES.win) + '\n\n';
    message += `🧸 You won:\n\n${collectible.name}\n${formatRarity(rarity)}\n\n`;
    message += `📊 Spins left: ${user.spins + user.extraSpins}\n`;
    message += `💰 +${rarityXP[rarity] || 10} coins | ⭐ +${rarityXP[rarity] || 10} XP`;

    // Try to send image
    try {
      await ctx.replyWithPhoto(collectible.image, { caption: message });
    } catch {
      await ctx.reply(message);
    }
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Something went wrong in the arcade...');
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MINI GAMES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FISHING_WORDS = ['plushie', 'arcade', 'kawaii', 'sanrio', 'barbie', 'funko', 'collect', 'treasure'];
const GUESS_WORDS = ['hello_kitty', 'kuromi', 'cinnamoroll', 'mermaid_barbie', 'funko', 'kuromi_sakura'];

bot.command('pesca', async (ctx) => {
  try {
    resetDailySpins();
    const user = getOrCreateUser(ctx.from.id);

    if (user.lastMiniGames.pesca === new Date().toDateString()) {
      return ctx.reply('🎣 You already fished today! Come back tomorrow.');
    }

    const catches = ['🧸 Plushie', '🐠 Fish', '🎀 Ribbon', '💎 Gem', '🌸 Flower', '⭐ Star Fragment'];
    const result = catches[Math.floor(Math.random() * catches.length)];

    const success = Math.random() > 0.3;

    if (success) {
      user.extraSpins++;
      user.lastMiniGames.pesca = new Date().toDateString();
      saveUsers(users);

      ctx.reply(`🎣 *Fishing Results*\n\nYou caught: ${result}\n\n✨ +1 Extra Spin!\n\n${user.spins + user.extraSpins} spins remaining`);
    } else {
      user.lastMiniGames.pesca = new Date().toDateString();
      saveUsers(users);

      ctx.reply(`🎣 *Fishing Results*\n\nThe fish got away... 🐟\n\nBetter luck tomorrow!`);
    }
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Fishing game error');
  }
});

bot.command('cacapalavra', async (ctx) => {
  try {
    resetDailySpins();
    const user = getOrCreateUser(ctx.from.id);

    if (user.lastMiniGames.cacapalavra === new Date().toDateString()) {
      return ctx.reply('🔤 You already played word search today!');
    }

    const word = FISHING_WORDS[Math.floor(Math.random() * FISHING_WORDS.length)];
    const hiddenWord = word.split('').map((c, i) => i % 2 === 0 ? c : '_').join('');

    ctx.reply(`🔤 *Word Search Challenge*\n\nFind the word: ${hiddenWord}\n\nReply with /responder [word]`);

    // Store the answer temporarily (in production, use Redis)
    user.currentWordGame = word;
    saveUsers(users);
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Word search error');
  }
});

bot.command('descubra', async (ctx) => {
  try {
    resetDailySpins();
    const user = getOrCreateUser(ctx.from.id);

    if (user.lastMiniGames.descubra === new Date().toDateString()) {
      return ctx.reply('🧠 You already played guess the word today!');
    }

    const word = GUESS_WORDS[Math.floor(Math.random() * GUESS_WORDS.length)];
    const hint = word.split('').map((c, i) => i % 2 === 0 ? c : '_').join('');

    ctx.reply(`🧠 *Guess the Collectible*\n\n${hint}\n\nReply with /descobrir [name]`);

    user.currentGuessGame = word;
    saveUsers(users);
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Guess game error');
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INVENTORY & PROFILE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bot.command('inventario', async (ctx) => {
  try {
    const user = getOrCreateUser(ctx.from.id);

    if (Object.keys(user.inventory).length === 0) {
      return ctx.reply('📦 Your inventory is empty! Start spinning at /girar');
    }

    let message = '📦 *Your Inventory*\n\n';
    const inv = user.inventory;

    Object.entries(inv).forEach(([id, count]) => {
      // Find item by ID
      let item = null;
      for (const category of Object.values(COLLECTIBLES)) {
        const found = category.find((i) => i.id === id);
        if (found) {
          item = found;
          break;
        }
      }

      if (item) {
        message += `${item.name} x${count}\n`;
      }
    });

    message += `\n💰 Total: ${Object.values(inv).reduce((a, b) => a + b, 0)} items`;

    ctx.reply(message);
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Error loading inventory');
  }
});

bot.command('perfil', async (ctx) => {
  try {
    const user = getOrCreateUser(ctx.from.id);

    const message = `
👤 *Profile: @${user.username}*

⭐ Level: ${user.level}
💫 Experience: ${user.experience} XP
💰 Coins: ${user.coins}

🎮 Stats:
├ Total Spins: ${user.stats.totalSpins}
├ Collectibles: ${user.stats.totalCollected}
├ Legendary: ${user.stats.legendaryCount}
└ Mythical: ${user.stats.mythicalCount}

🎠 Daily Spins: ${user.spins}
⚡ Extra Spins: ${user.extraSpins}
    `;

    ctx.reply(message);
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Error loading profile');
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SOCIAL SYSTEMS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bot.command('presentear', async (ctx) => {
  try {
    const args = ctx.message.text.split(' ');
    if (args.length < 2) {
      return ctx.reply('Usage: /presentear @username item_id\n\nExample: /presentear @friend hello_kitty');
    }

    ctx.reply('🎁 Gift system coming soon!');
  } catch (error) {
    console.error(error);
    ctx.reply('❌ Error in gift system');
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ATMOSPHERE COMMANDS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bot.command('arcade', async (ctx) => {
  ctx.reply(`
✨ *Welcome to the Arcade* ✨

🎠 Neon lights flicker across rows of glowing machines
🧸 Plushies press against glass, waiting to be won
🎀 Kawaii decorations cover every surface
🌙 The atmosphere feels cozy yet mysterious

Commands:
/girar - Spin the claw machine (3 daily spins)
/pesca - Go fishing 🎣
/cacapalavra - Word search 🔤
/descubra - Guess the word 🧠
/inventario - Check your collection
/perfil - View your profile
/arcade - See this message
  `);
});

bot.command('start', async (ctx) => {
  const user = getOrCreateUser(ctx.from.id);
  ctx.reply(`
🎀 *Welcome to Arcade Collectibles!* 🎀

Your premium collectible arcade experience awaits!

🎠 Features:
✨ Spin claw machines daily
🧸 Collect plushies & rare items
🎀 Japanese arcade aesthetic
🌸 Social trading & gifting
🎮 Mini games for bonus spins

/arcade - View full guide
/girar - Start spinning!
  `);
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ERROR HANDLING & STARTUP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
});

bot.launch();

console.log('🎀 Arcade Collectible Bot is running!');
console.log('Press CTRL+C to stop');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
