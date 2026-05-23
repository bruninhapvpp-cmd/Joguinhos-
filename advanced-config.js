// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ADVANCED CONFIGURATION FILE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Easy to customize all bot parameters in one place

module.exports = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GAME MECHANICS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GAME: {
    // Daily spins configuration
    DAILY_SPINS: 3,
    EXTRA_SPINS_PER_MINIGAME: 1,
    MAX_EXTRA_SPINS_PER_DAY: 3,

    // Experience and leveling
    XP_PER_LEVEL: 100,
    BASE_XP_REWARDS: {
      common: 10,
      uncommon: 25,
      rare: 50,
      epic: 100,
      legendary: 200,
      mythical: 300,
      secret: 500,
    },

    // Coin rewards
    COINS_PER_STEAL: 25,
    COINS_PER_GIFT: 10,
    COINS_FROM_MINI_GAMES: {
      pesca: 50,
      cacapalavra: 75,
      descubra: 75,
    },

    // Daily reset time (UTC)
    DAILY_RESET_HOUR: 0, // Midnight
    DAILY_RESET_MINUTE: 0,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RARITY SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  RARITY: {
    WEIGHTS: {
      common: 40,
      uncommon: 25,
      rare: 18,
      epic: 10,
      legendary: 5,
      mythical: 1.5,
      secret: 0.5,
    },

    // Emoji indicators
    EMOJIS: {
      common: '⚪',
      uncommon: '🟢',
      rare: '🔵',
      epic: '🟣',
      legendary: '🟡',
      mythical: '🔴',
      secret: '⬛',
      'event limited': '🌟',
    },

    // Event rarity boosts
    EVENT_BOOST_MULTIPLIER: 1.5,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MINI-GAMES CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  MINI_GAMES: {
    // Fishing game
    PESCA: {
      enabled: true,
      cooldown_hours: 24,
      success_rate: 0.7,
      rewards: ['🧸 Plushie', '🐠 Fish', '🎀 Ribbon', '💎 Gem', '🌸 Flower', '⭐ Star Fragment'],
    },

    // Word search game
    CACAPALAVRA: {
      enabled: true,
      cooldown_hours: 24,
      success_rate: 0.5,
      difficulty: 'medium', // easy, medium, hard
    },

    // Guess the word game
    DESCUBRA: {
      enabled: true,
      cooldown_hours: 24,
      success_rate: 0.4,
      max_attempts: 3,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SOCIAL SYSTEMS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SOCIAL: {
    // Stealing mechanics
    STEALING: {
      enabled: true,
      cooldown_hours: 1,
      base_success_rate: 0.6,
      backfire_chance: 0.2,
      backfire_multiplier: 1.5,

      // Rarity-based multipliers
      rarity_modifiers: {
        common: 1.0,
        uncommon: 0.9,
        rare: 0.7,
        epic: 0.5,
        legendary: 0.3,
        mythical: 0.1,
        secret: 0.05,
      },
    },

    // Gifting system
    GIFTING: {
      enabled: true,
      cooldown_minutes: 0, // No cooldown
      requires_verification: false,
    },

    // Trading system
    TRADING: {
      enabled: false, // Coming soon
      cooldown_hours: 0,
      max_pending_trades: 5,
      trade_timeout_hours: 24,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXPLORATION SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  EXPLORATION: {
    enabled: true,
    cooldown_hours: 24,
    success_rate: 0.6,

    // Locations with their properties
    locations: [
      'moon_garden',
      'abandoned_greenhouse',
      'rain_forest',
      'cemetery_garden',
      'sakura_park',
      'crystal_lake',
      'hidden_cafe_garden',
    ],

    // Rewards for exploration
    exploration_rewards: {
      coins: 50,
      experience: 75,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ACHIEVEMENTS SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ACHIEVEMENTS: {
    enabled: true,
    show_notifications: true,

    // Milestone thresholds
    milestones: {
      first_collectible: 1,
      collector_10: 10,
      collector_50: 50,
      collector_100: 100,
      first_legendary: 1,
      mythical_hunter: 1,
      level_5: 5,
      level_10: 10,
      daily_streak_7: 7,
      daily_streak_30: 30,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EVENTS SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  EVENTS: {
    enabled: true,

    // Current active events (rotate as needed)
    active_events: ['midnight_arcade'],

    // Event configurations
    event_configs: {
      halloween: {
        rarity_boost: 1.5,
        exclusive_items: ['cursed_plushie', 'haunted_doll'],
      },
      sanrio: {
        rarity_boost: 1.3,
        exclusive_items: ['aggretsuko', 'badtz_maru'],
      },
      barbie_dream: {
        rarity_boost: 1.4,
        exclusive_items: ['pink_dream_barbie'],
      },
      sakura_festival: {
        rarity_boost: 1.3,
        exclusive_items: ['sakura_blossom'],
      },
      midnight_arcade: {
        rarity_boost: 1.2,
        exclusive_items: ['moon_rose', 'glitch_item'],
      },
      neon_nights: {
        rarity_boost: 1.15,
        exclusive_items: [],
      },
      valentine: {
        rarity_boost: 1.3,
        exclusive_items: ['pink_dream_barbie', 'moon_rose'],
      },
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ATMOSPHERE & AESTHETICS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ATMOSPHERE: {
    enabled: true,

    // Scene messages
    scenes: {
      rain: {
        emoji: '🌧️',
        title: 'Rainy Arcade Night',
      },
      night: {
        emoji: '🌙',
        title: 'Midnight Arcade',
      },
      neon: {
        emoji: '⚡',
        title: 'Neon Paradise',
      },
      evento: {
        emoji: '🎉',
        title: 'Special Event!',
      },
    },

    // Spinning messages
    spin_messages: [
      '🎠 Neon lights flicker softly across the arcade...',
      '🎪 The arcade comes alive with pastel glows...',
      '🌙 Midnight chimes through the arcade speakers...',
      '🎰 Coins cascade through glowing slots...',
      '✨ The arcade breathes with kawaii energy...',
    ],

    win_messages: [
      '🎉 The machine lights up brilliantly!',
      '✨ A gentle chime echoes through the arcade!',
      '💫 The claw grips perfectly!',
      '🌟 The machine hums with joy!',
      '🎊 Sparkles burst everywhere!',
    ],

    no_spins_messages: [
      '💔 The machines have gone silent for now...',
      '🌙 Come back tomorrow for more spins...',
      '😴 The arcade is resting until midnight...',
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // IMAGES CONFIGURATION
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  IMAGES: {
    enabled: true,
    use_placeholder_on_fail: true,
    placeholder_url: 'https://via.placeholder.com/300?text=',

    // Timeout for image loading
    timeout_seconds: 5,

    // Fallback behavior
    fallback: 'text_only', // 'text_only' or 'skip_image'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BOT SETTINGS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  BOT: {
    // Rate limiting
    rate_limit: {
      enabled: true,
      commands_per_minute: 30,
    },

    // Logging
    logging: {
      enabled: true,
      level: 'info', // 'debug', 'info', 'warn', 'error'
      log_file: 'bot.log',
    },

    // Data persistence
    data: {
      auto_save_interval_seconds: 60,
      backup_enabled: false,
      backup_interval_hours: 24,
    },

    // Commands
    commands: {
      prefix: '/',
      help_command: '/start',
      admin_only_commands: [],
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ECONOMY SETTINGS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ECONOMY: {
    starting_coins: 0,
    max_coins: 999999,

    // Coin sinks (where coins go)
    coin_sinks: {
      premium_features: true,
      cosmetics: false,
      lucky_boxes: true,
    },

    // Coin sources (where coins come from)
    coin_sources: {
      spins: true,
      mini_games: true,
      theft: true,
      achievements: false,
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RESTRICTIONS & LIMITS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  LIMITS: {
    // User restrictions
    max_inventory_items: 1000,
    max_level: 999,
    max_daily_spins: 10,

    // Cooldown restrictions
    min_cooldown_seconds: 1,
    max_cooldown_seconds: 86400, // 24 hours

    // Data size
    max_users_before_warning: 5000,
    max_inventory_per_user: 500,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FEATURE FLAGS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  FEATURES: {
    // Core features
    spins: true,
    mini_games: true,
    inventory: true,
    profile: true,

    // Social features
    gifting: true,
    trading: false, // Coming soon
    stealing: true,

    // Advanced features
    exploration: true,
    achievements: true,
    events: true,
    atmosphere: true,

    // Admin features
    admin_commands: false,
    debug_mode: false,
    maintenance_mode: false,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MESSAGES & TEXT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  MESSAGES: {
    welcome: '✨ Welcome to the most aesthetic arcade experience ✨',
    legendary_drop: '🌟 A legendary item glows before you! 🌟',
    mythical_drop: '🔴 Something impossible happens... 🔴',
    secret_drop: '⬛ Something forbidden emerges from the machine... ⬛',
    daily_complete: '🎉 You have completed your daily spins! See you tomorrow! 🎉',
    error_generic: '❌ Something went wrong in the arcade...',
    maintenance: '🔧 Bot is under maintenance. Try again later!',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // HELPER FUNCTIONS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // Get XP reward for rarity
  getXpReward(rarity) {
    return this.GAME.BASE_XP_REWARDS[rarity] || 10;
  },

  // Get coin reward for rarity
  getCoinReward(rarity) {
    return this.GAME.BASE_XP_REWARDS[rarity] || 10; // Can be customized
  },

  // Check if feature is enabled
  isFeatureEnabled(featureName) {
    return this.FEATURES[featureName] || false;
  },

  // Get rarity emoji
  getRarityEmoji(rarity) {
    return this.RARITY.EMOJIS[rarity] || '⭐';
  },

  // Check if mini-game is enabled
  isMiniGameEnabled(gameName) {
    return this.MINI_GAMES[gameName.toUpperCase()]?.enabled || false;
  },

  // Get stealing cooldown in milliseconds
  getStealingCooldown() {
    return this.SOCIAL.STEALING.cooldown_hours * 60 * 60 * 1000;
  },

  // Get daily reset time
  getDailyResetTime() {
    const now = new Date();
    const reset = new Date(now);
    reset.setHours(this.GAME.DAILY_RESET_HOUR);
    reset.setMinutes(this.GAME.DAILY_RESET_MINUTE);
    reset.setSeconds(0);

    // If reset time has passed today, return tomorrow's time
    if (reset < now) {
      reset.setDate(reset.getDate() + 1);
    }

    return reset;
  },
};
