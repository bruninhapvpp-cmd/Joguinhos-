# 🎀 Arcade Collectible Bot - Premium Telegram Experience

A beautiful, addictive collectible arcade bot for Telegram with Japanese gachapon inspiration, kawaii aesthetics, and immersive gameplay.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Node](https://img.shields.io/badge/node-18%2B-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

### 🎠 Daily Spin System
- **3 Daily Spins** - Reset at midnight automatically
- **Extra Spins** - Earn through mini-games
- **Rarity System** - Common to Mythical items
- **Image Support** - Collectible photos with fallback

### 🎮 Mini Games
- **🎣 Fishing** (/pesca) - Catch treasures
- **🔤 Word Search** (/cacapalavra) - Find hidden words
- **🧠 Guess the Word** (/descubra) - Identify collectibles

### 🧸 Massive Collections
- **🎀 Sanrio** - Hello Kitty, Kuromi, Cinnamoroll...
- **💕 Barbie** - Mermaid, Vintage, Fairy, Dream editions
- **🧿 Funko Pop** - Anime, Horror, Movies, Games
- **🌸 Flowers** - Moon Rose, Crystal Tulip, Ghost Lily...
- **🌙 Secret Items** - Cursed plushies, Glitch items, Relics

### ⭐ Rarity Levels
```
⚪ Common        - 40%
🟢 Uncommon      - 25%
🔵 Rare          - 18%
🟣 Epic          - 10%
🟡 Legendary     - 5%
🔴 Mythical      - 1.5%
⬛ Secret        - 0.5%
```

### 👥 Social Systems
- **💌 Gift System** - Send collectibles to friends
- **🔄 Trading** - Exchange items fairly
- **🎭 Stealing** - Risky item theft with cooldowns
- **👑 Rankings** - Compete on leaderboards

### 🌸 Exploration System
- **7 Locations** - Moon Garden, Greenhouse, Rain Forest...
- **Flower Hunts** - Solve clues to find rare flowers
- **Discovery Rewards** - Unlock achievements

### 🏆 Achievements
- 🎁 First Prize
- ⭐ Star Collector
- 👑 Mega Collector
- 🔥 Week Warrior
- And 7+ more!

### 🎪 Event System
- 🎃 Halloween Event
- 🎀 Sanrio Celebration
- 💕 Barbie Dream Event
- 🌸 Sakura Festival
- 🌙 Midnight Arcade
- ⚡ Neon Nights
- 💕 Valentine Event

### 🌙 Atmosphere Features
- **/arcade** - Welcome guide
- **/chuva** - Rainy arcade scene
- **/noite** - Midnight vibes
- **/neon** - Neon paradise
- **/evento** - Special event atmosphere

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Telegram Bot Token (from @BotFather)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bruninhapvpp-cmd/Joguinhos-.git
cd Joguinhos-
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment**
```bash
cp .env.example .env
# Edit .env and add your BOT_TOKEN
```

4. **Run the bot**
```bash
npm start
```

### For Development
```bash
npm run dev
```

---

## 📋 Commands

### Core Commands
| Command | Description |
|---------|-------------|
| `/girar` | Spin the claw machine (3 daily) |
| `/pesca` | Go fishing for treasures |
| `/cacapalavra` | Word search mini-game |
| `/descubra` | Guess the collectible |
| `/inventario` | View your collection |
| `/perfil` | See your profile stats |
| `/colecao` | View complete collection |
| `/rank` | View leaderboards |

### Social Commands
| Command | Description |
|---------|-------------|
| `/presentear` | Send gifts to players |
| `/trocar` | Trade collectibles |
| `/roubar` | Attempt to steal items |

### Atmosphere Commands
| Command | Description |
|---------|-------------|
| `/arcade` | Full guide |
| `/chuva` | Rainy ambiance |
| `/noite` | Night scene |
| `/neon` | Neon aesthetic |
| `/evento` | Event info |

### Exploration
| Command | Description |
|---------|-------------|
| `/explorarflor` | Flower hunt exploration |

---

## 📊 User Profile Structure

```json
{
  "userId": "123456789",
  "username": "player_name",
  "level": 5,
  "experience": 450,
  "coins": 2500,
  "spins": 3,
  "extraSpins": 2,
  "lastSpinReset": "5/23/2026",
  "inventory": {
    "hello_kitty": 2,
    "kuromi": 1,
    "moon_rose": 1
  },
  "achievements": ["first_collectible", "first_legendary"],
  "stats": {
    "totalSpins": 45,
    "totalCollected": 28,
    "legendaryCount": 3,
    "mythicalCount": 0
  }
}
```

---

## 🎨 Customization

### Adding Collectibles

Edit `bot.js` COLLECTIBLES section:

```javascript
const COLLECTIBLES = {
  sanrio: [
    { 
      id: 'new_item', 
      name: '🎀 New Item Name', 
      rarity: 'rare', 
      image: 'https://your-image-url.jpg' 
    }
  ]
};
```

### Adding Events

Edit `features.js` EVENTS section:

```javascript
my_event: {
  name: '🎉 My Event',
  active: true,
  boostedRarities: ['legendary'],
  exclusiveItems: ['exclusive_item_id'],
  rarityBoost: 1.5,
}
```

### Changing Rarity Rates

Modify `RARITY_WEIGHTS` in `bot.js`:

```javascript
const RARITY_WEIGHTS = {
  common: 40,
  uncommon: 25,
  rare: 18,
  epic: 10,
  legendary: 5,
  mythical: 1.5,
  secret: 0.5,
};
```

---

## 🗂️ File Structure

```
Joguinhos-/
├── bot.js              # Main bot logic & core systems
├── features.js         # Advanced features (achievements, events, etc)
├── package.json        # Dependencies
├── .env.example        # Environment template
├── .gitignore          # Git ignore rules
├── data/               # User data storage
│   ├── users.json      # Player profiles
│   └── events.json     # Event data
└── README.md          # This file
```

---

## 💾 Data Storage

The bot uses lightweight JSON file storage for Railway/Heroku compatibility.

**Data files** are automatically created in `/data`:
- `users.json` - All player profiles and inventories
- `events.json` - Current event status

**Automatic backups recommended** for production.

---

## ⚙️ Configuration

### Daily Reset Time
Default: Midnight (UTC)

To change, modify in `bot.js`:
```javascript
const resetDailySpins = () => {
  const today = new Date().toDateString(); // Change timezone logic here
  // ...
};
```

### Spin Cooldown
Default: 3 spins per day, reset at midnight

Edit in `/girar` command handler.

### Mini-game Cooldown
Default: Once per day

Edit in individual mini-game commands.

### Stealing Cooldown
Default: 1 hour

Edit in `features.js` STEAL_CONFIG.

---

## 🌐 Deployment

### Railway
1. Push code to GitHub
2. Connect to Railway
3. Set `BOT_TOKEN` environment variable
4. Deploy!

### Heroku
```bash
heroku login
heroku create your-app-name
heroku config:set BOT_TOKEN=your_token
git push heroku main
```

### VPS/Local
```bash
npm start
# Keep running with PM2 or screen
pm2 start bot.js --name arcade-bot
```

---

## 🐛 Troubleshooting

### Bot not responding
- Check BOT_TOKEN in `.env`
- Verify internet connection
- Check logs: `npm start`

### Data not saving
- Ensure `/data` directory exists
- Check file permissions
- Verify disk space available

### Images not loading
- Bot still sends message with fallback
- Check image URLs are valid
- Images must be publicly accessible

### Daily reset not working
- Verify system timezone
- Check if data file corrupted
- Manual reset: delete users.json and restart

---

## 🎯 Roadmap

- [ ] Database migration (MongoDB)
- [ ] Web dashboard
- [ ] Voice commands
- [ ] Group chats support
- [ ] Trading marketplace
- [ ] Battle system
- [ ] Guilds/Clans
- [ ] Premium subscription tiers

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and create a PR

---

## 📄 License

MIT License - feel free to use and modify!

---

## 💬 Support

- 🐛 Report bugs on GitHub Issues
- 💡 Suggest features in Discussions
- 📧 Email: bruninhapvpp@gmail.com

---

## 🙏 Credits

Inspired by:
- Japanese claw machines
- Gachapon arcades
- Sanrio culture
- Barbie aesthetics
- Funko Pop collecting
- Cozy fantasy games

---

## ⭐ Features Highlights

✨ **Lightweight** - Runs on minimal resources
🎨 **Beautiful** - Aesthetic arcade vibes
🔄 **Scalable** - Easy to add new collectibles
💫 **Addictive** - Daily engagement mechanics
🎮 **Fun** - Mini-games and exploration
👥 **Social** - Trading and gifting systems
🌙 **Immersive** - Atmospheric storytelling

---

## 🌟 Show Your Support

If you love the bot, give it a star! ⭐

Made with 💖 for collectors and arcade fans

**Happy collecting! 🧸✨**
