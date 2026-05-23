// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ADVANCED FEATURES - EXTENDED BOT FUNCTIONALITY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

module.exports = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FLOWER EXPLORATION SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  EXPLORATION_LOCATIONS: {
    moon_garden: {
      name: '🌙 Moon Garden',
      description: 'Silver petals glow under the moonlight',
      flowers: ['moon_rose', 'night_bloom'],
      clues: ['Seek where shadows dance', 'Silver light guides the way'],
    },
    abandoned_greenhouse: {
      name: '🌿 Abandoned Greenhouse',
      description: 'Vines creep across forgotten glass',
      flowers: ['ghost_lily', 'eclipse_flower'],
      clues: ['Hidden behind rusty panes', 'Where nature reclaims'],
    },
    rain_forest: {
      name: '🌧️ Rain Forest',
      description: 'Misty and alive with secrets',
      flowers: ['sakura_blossom', 'crystal_tulip'],
      clues: ['Under leaves of jade', 'Where mist conceals treasure'],
    },
    cemetery_garden: {
      name: '💀 Cemetery Garden',
      description: 'Beautifully haunted and ancient',
      flowers: ['ghost_lily', 'cursed_plushie'],
      clues: ['Where forgotten souls rest', 'Among timeless stones'],
    },
    sakura_park: {
      name: '🌸 Sakura Park',
      description: 'Pink blossoms dance in the wind',
      flowers: ['sakura_blossom', 'moon_rose'],
      clues: ['Under falling petals', 'Where spring eternal blooms'],
    },
    crystal_lake: {
      name: '💎 Crystal Lake',
      description: 'Water sparkles with magical light',
      flowers: ['crystal_tulip', 'eclipse_flower'],
      clues: ['Where light refracts', 'By waters deep and clear'],
    },
    hidden_cafe_garden: {
      name: '☕ Hidden Café Garden',
      description: 'Cozy nook behind an old café',
      flowers: ['night_bloom', 'sakura_blossom'],
      clues: ['Secret spot behind the café', 'Where hearts find peace'],
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ACHIEVEMENT SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ACHIEVEMENTS: {
    first_collectible: {
      id: 'first_collectible',
      name: '🎀 First Prize',
      description: 'Collected your first item',
      icon: '🎁',
    },
    first_legendary: {
      id: 'first_legendary',
      name: '⭐ Star Collector',
      description: 'Collected your first legendary item',
      icon: '✨',
    },
    collector_10: {
      id: 'collector_10',
      name: '🧸 Small Collector',
      description: 'Collected 10 items',
      icon: '📦',
    },
    collector_50: {
      id: 'collector_50',
      name: '🎪 Arcade Fan',
      description: 'Collected 50 items',
      icon: '🎠',
    },
    collector_100: {
      id: 'collector_100',
      name: '🏆 Mega Collector',
      description: 'Collected 100 items',
      icon: '👑',
    },
    mythical_hunter: {
      id: 'mythical_hunter',
      name: '🔴 Mythical Hunter',
      description: 'Collected a mythical item',
      icon: '🌟',
    },
    level_5: {
      id: 'level_5',
      name: '🚀 Rising Star',
      description: 'Reached level 5',
      icon: '⭐',
    },
    level_10: {
      id: 'level_10',
      name: '👑 Arcade Master',
      description: 'Reached level 10',
      icon: '👑',
    },
    daily_streak_7: {
      id: 'daily_streak_7',
      name: '🔥 Week Warrior',
      description: '7 day spin streak',
      icon: '🔥',
    },
    flower_collector: {
      id: 'flower_collector',
      name: '🌸 Botanist',
      description: 'Collected 5 different flowers',
      icon: '🌺',
    },
    sanrio_fan: {
      id: 'sanrio_fan',
      name: '🎀 Sanrio Enthusiast',
      description: 'Collected all Sanrio items',
      icon: '🐰',
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TRADING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  TRADING_MESSAGES: {
    offer_sent: '💌 Trade offer sent to {username}!',
    offer_received: '{username} wants to trade with you!\n\nThey offer: {offered}\nThey want: {requested}',
    trade_completed: '✅ Trade completed! You received {received}',
    trade_declined: '❌ Trade offer declined',
    trade_expired: '⏰ Trade offer expired',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // STEALING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEAL_CONFIG: {
    cooldown: 3600, // 1 hour
    baseSuccessRate: 0.6,
    rarityMultiplier: {
      common: 1.0,
      uncommon: 0.9,
      rare: 0.7,
      epic: 0.5,
      legendary: 0.3,
      mythical: 0.1,
      secret: 0.05,
    },
    backfireChance: 0.2,
  },

  STEAL_MESSAGES: {
    success: '🎭 You successfully stole {item} from {username}!',
    fail: '😅 Failed to steal from {username}! The arcade guards caught you!',
    backfire: '💥 OH NO! Your stealing backfired! {username} stole {item} from YOU!',
    cooldown: '⏰ You can only steal once per hour. Try again later.',
    no_items: '📦 {username} has no items to steal from!',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EVENT SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  EVENTS: {
    halloween: {
      name: '🎃 Halloween Event',
      active: false,
      boostedRarities: ['legendary', 'mythical'],
      exclusiveItems: ['cursed_plushie', 'haunted_doll'],
      rarityBoost: 1.5,
    },
    sanrio: {
      name: '🎀 Sanrio Celebration',
      active: false,
      boostedRarities: ['rare', 'epic'],
      exclusiveItems: ['aggretsuko', 'badtz_maru'],
      rarityBoost: 1.3,
    },
    barbie_dream: {
      name: '💕 Barbie Dream Event',
      active: false,
      boostedRarities: ['epic', 'legendary'],
      exclusiveItems: ['pink_dream_barbie'],
      rarityBoost: 1.4,
    },
    sakura_festival: {
      name: '🌸 Sakura Festival',
      active: false,
      boostedRarities: ['rare', 'epic'],
      exclusiveItems: ['sakura_blossom'],
      rarityBoost: 1.3,
    },
    midnight_arcade: {
      name: '🌙 Midnight Arcade',
      active: true,
      boostedRarities: ['legendary', 'mythical'],
      exclusiveItems: ['moon_rose', 'glitch_item'],
      rarityBoost: 1.2,
    },
    neon_nights: {
      name: '⚡ Neon Nights',
      active: false,
      boostedRarities: ['epic'],
      exclusiveItems: [],
      rarityBoost: 1.15,
    },
    valentine: {
      name: '💕 Valentine Event',
      active: false,
      boostedRarities: ['rare', 'epic'],
      exclusiveItems: ['pink_dream_barbie', 'moon_rose'],
      rarityBoost: 1.3,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RANKING SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  RANKING_CRITERIA: {
    by_level: 'level',
    by_collected: 'stats.totalCollected',
    by_legendary: 'stats.legendaryCount',
    by_coins: 'coins',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ATMOSPHERE SCENES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ATMOSPHERE_SCENES: {
    rain: {
      emoji: '🌧️',
      title: 'Rainy Arcade Night',
      description: `
🌧️ Rain patters softly against the arcade windows
💧 Neon reflections shimmer on wet glass
🌙 The machines glow even brighter in darkness
☔ Cozy and mysterious inside
      `,
    },
    night: {
      emoji: '🌙',
      title: 'Midnight Arcade',
      description: `
🌙 The clock strikes midnight
✨ Arcade spirits stir to life
🎠 Machines hum with extra magic
👻 The atmosphere feels alive and mystical
      `,
    },
    neon: {
      emoji: '⚡',
      title: 'Neon Paradise',
      description: `
⚡ Electric colors everywhere
🌈 Pink, blue, purple, and cyan
💫 The air crackles with energy
✨ Everything feels hyperreal and beautiful
      `,
    },
    evento: {
      emoji: '🎉',
      title: 'Special Event!',
      description: `
🎉 A special event is happening!
✨ Exclusive items are available
🎊 Rare drops are boosted!
🌟 The whole arcade shimmers with energy
      `,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MINI GAME CONTENT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  FISHING_REWARDS: {
    rare: { emoji: '💎', name: 'Rare Treasure', coins: 100 },
    common: { emoji: '🐠', name: 'Fish', coins: 10 },
    epic: { emoji: '⭐', name: 'Legendary Catch', coins: 200 },
    junk: { emoji: '🗑️', name: 'Old Boot', coins: 0 },
  },

  GUESSING_HINTS: {
    hello_kitty: ['famous sanrio character', 'starts with H', 'has a big bow'],
    kuromi: ['sanrio character', 'demon horns', 'purple color'],
    cinnamoroll: ['sanrio', 'flying clouds', 'cute puppy'],
    mermaid_barbie: ['barbie', 'ocean themed', 'under the sea'],
    funko: ['collectible pop', 'vinyl figure', 'anime character'],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PREMIUM FEATURES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PREMIUM_PERKS: {
    double_spins: {
      name: '2x Spins',
      cost: 500,
      duration: 86400,
      effect: 'spinMultiplier',
    },
    lucky_box: {
      name: 'Lucky Box',
      cost: 200,
      duration: 0,
      effect: 'guaranteedRare',
    },
    spinning_star: {
      name: 'Spinning Star',
      cost: 300,
      duration: 3600,
      effect: 'rarityBoost',
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AESTHETIC MESSAGES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  AESTHETIC_MESSAGES: {
    welcome: '✨ Welcome to the most aesthetic arcade experience ✨',
    legendary_drop: '🌟 A legendary item glows before you! 🌟',
    mythical_drop: '🔴 Something impossible happens... 🔴',
    secret_drop: '⬛ Something forbidden emerges from the machine... ⬛',
    daily_complete: '🎉 You have completed your daily spins! See you tomorrow! 🎉',
  },
};
