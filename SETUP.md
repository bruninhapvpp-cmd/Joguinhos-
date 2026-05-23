# 🎀 Installation & Setup Guide

Complete guide to get your Arcade Collectible Bot running!

---

## 📋 Prerequisites

Before starting, make sure you have:

- **Node.js** 18 or higher ([Download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com))
- **Telegram Account** (free)
- **Telegram Bot Token** (from @BotFather)

### Get Your Bot Token

1. Open Telegram and search for `@BotFather`
2. Send `/start` and follow the prompts
3. Send `/newbot` to create a new bot
4. Choose a name and username for your bot
5. Copy the **API Token** (looks like: `123456789:ABCDefGHijKlmnOpqRstUvwxyz`)
6. Keep this secret! Don't share it!

---

## 🚀 Quick Start (5 minutes)

### Step 1: Clone the Repository

```bash
git clone https://github.com/bruninhapvpp-cmd/Joguinhos-.git
cd Joguinhos-
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- `telegraf` - Telegram bot framework
- `dotenv` - Environment variables
- `axios` - HTTP requests (optional)
- `nodemon` - Dev auto-reload (optional)

### Step 3: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and add your bot token:

```env
BOT_TOKEN=YOUR_BOT_TOKEN_HERE
NODE_ENV=production
```

### Step 4: Run the Bot

```bash
npm start
```

You should see:
```
🎀 Arcade Collectible Bot is running!
Press CTRL+C to stop
```

### Step 5: Test Your Bot

Open Telegram and:
1. Search for your bot username
2. Send `/start`
3. Send `/girar` to spin!

---

## 💻 Development Mode

For active development with auto-reload:

```bash
npm run dev
```

This uses `nodemon` to restart the bot when files change.

---

## 📁 File Structure

```
Joguinhos-/
├── bot.js                 # Main bot (core systems)
├── bot-enhanced.js        # Extended features (social, exploration, stealing)
├── features.js            # Configuration (achievements, events, etc)
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore             # Git ignore
├── README.md              # Main documentation
├── SETUP.md              # This file
└── data/                  # Data directory (auto-created)
    ├── users.json         # Player profiles
    └── events.json        # Event data
```

---

## ⚙️ Configuration Files

### .env File

```env
# Required
BOT_TOKEN=your_telegram_bot_token

# Optional
NODE_ENV=production       # or 'development'
PORT=3000                 # For web servers
```

### data/users.json

Auto-generated. Stores all player data:
- Profiles
- Inventory
- Statistics
- Achievements
- Experience

### data/events.json

Auto-generated. Stores event data:
- Active events
- Event configurations
- Rotation schedules

---

## 🎮 Customization Guide

### Adding New Collectibles

Edit `bot.js` in the `COLLECTIBLES` section:

```javascript
const COLLECTIBLES = {
  sanrio: [
    // Add new item
    {
      id: 'my_new_item',
      name: '🎀 My New Item',
      rarity: 'rare',  // common, uncommon, rare, epic, legendary, mythical, secret
      image: 'https://example.com/image.jpg'
    }
  ]
};
```

**Image Requirements:**
- Public URL (must be accessible)
- JPG, PNG, or GIF
- Square aspect ratio recommended
- Use placeholder: `https://via.placeholder.com/300?text=Item+Name`

### Changing Rarity Rates

In `bot.js`, modify `RARITY_WEIGHTS`:

```javascript
const RARITY_WEIGHTS = {
  common: 40,      // 40% chance
  uncommon: 25,    // 25% chance
  rare: 18,        // 18% chance
  epic: 10,        // 10% chance
  legendary: 5,    // 5% chance
  mythical: 1.5,   // 1.5% chance
  secret: 0.5,     // 0.5% chance
};
```

**Total should equal 100**

### Daily Reset Time

Find `resetDailySpins()` in `bot.js`:

```javascript
const resetDailySpins = () => {
  const today = new Date().toDateString(); // UTC midnight
  // Change timezone:
  // const today = new Date().toLocaleString('en-US', 
  //   { timeZone: 'America/New_York' }).split(',')[0];
  // ...
};
```

### Spin Limits

In `/girar` command:

```javascript
if (totalSpins === 0) {
  // Change the default spins per day
  user.spins = 3; // Edit this number
}
```

### Mini-Game Cooldown

In mini-game commands (`/pesca`, `/cacapalavra`, `/descubra`):

```javascript
// Change from toDateString() (daily) to other options:
// - Every hour: new Date().toISOString().slice(0, 13)
// - Every week: new Date().toISOString().slice(0, 10) with week calc
```

### Event Configuration

In `features.js`, modify `EVENTS`:

```javascript
EVENTS: {
  my_event: {
    name: '🎉 My Event Name',
    active: true,                    // Enable/disable
    boostedRarities: ['epic', 'legendary'],
    exclusiveItems: ['item_id'],
    rarityBoost: 1.5,               // 1.5x rarity boost
  }
}
```

### Stealing Mechanics

In `features.js`, adjust `STEAL_CONFIG`:

```javascript
STEAL_CONFIG: {
  cooldown: 3600,                   // 1 hour in seconds
  baseSuccessRate: 0.6,             // 60% base chance
  backfireChance: 0.2,              // 20% backfire on fail
  rarityMultiplier: {
    common: 1.0,                    // 100% for common
    legendary: 0.3,                 // 30% for legendary
    secret: 0.05,                   // 5% for secret
  },
}
```

---

## 🌐 Deployment

### Railway (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Arcade bot ready"
   git push origin main
   ```

2. **Connect to Railway**
   - Visit [railway.app](https://railway.app)
   - Click "New Project"
   - Select "GitHub Repo"
   - Choose your repository

3. **Add Environment Variable**
   - In Railway Dashboard
   - Click your project
   - Variables tab
   - Add `BOT_TOKEN`

4. **Deploy**
   - Railway auto-deploys on push

### Heroku (Free tier ended)

```bash
heroku login
heroku create your-bot-name
heroku config:set BOT_TOKEN=your_token
git push heroku main
```

### VPS / Own Server

```bash
# SSH into your server
ssh user@your-server.com

# Clone and setup
git clone https://github.com/bruninhapvpp-cmd/Joguinhos-.git
cd Joguinhos-
npm install
cp .env.example .env
# Edit .env with your token

# Run with PM2 (process manager)
npm install -g pm2
pm2 start bot.js --name arcade-bot
pm2 save              # Auto-restart on reboot
pm2 startup          # Enable auto-start on reboot
```

---

## 🐛 Troubleshooting

### Bot not responding

**Problem:** Bot doesn't reply to commands

**Solutions:**
```bash
# 1. Check BOT_TOKEN
echo $BOT_TOKEN

# 2. Verify token in .env is correct
cat .env

# 3. Check logs
npm start  # Look for errors

# 4. Restart bot
npm start
```

### Data not saving

**Problem:** Inventory/profile disappears after restart

**Solutions:**
```bash
# 1. Check data directory exists
ls -la data/

# 2. Check file permissions
chmod 755 data/
chmod 644 data/*.json

# 3. Verify disk space
df -h

# 4. Manual reset
rm data/users.json
npm start  # Will recreate
```

### Images not loading

**Problem:** Collectibles have no images

**Solutions:**
1. Verify image URLs are public
2. Check internet connection
3. Use placeholder URLs: `https://via.placeholder.com/300?text=ItemName`
4. Bot still sends message even if image fails

### Daily reset not working

**Problem:** Spins don't reset at midnight

**Solutions:**
```bash
# 1. Check system time
date

# 2. Update timezone in bot.js resetDailySpins()

# 3. Manual fix - remove users.json (CAREFUL!)
rm data/users.json  # Players lose data!
```

### npm install fails

**Problem:** Dependencies won't install

**Solutions:**
```bash
# 1. Clear cache
npm cache clean --force

# 2. Update npm
npm install -g npm@latest

# 3. Check Node version
node --version  # Should be 18+

# 4. Try again
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Monitoring

### Check Bot Status

```bash
# See if process is running
ps aux | grep bot.js

# Check logs
pm2 logs arcade-bot  # If using PM2

# System resources
top  # CPU/Memory usage
```

### Backup Data

```bash
# Backup player data
cp data/users.json data/users.backup.json

# Backup everything
tar -czf arcade-bot-backup.tar.gz data/
```

### View Statistics

Check `data/users.json` for:
- Total players: `Object.keys(users).length`
- Total collectibles: Sum of inventory counts
- Most active: Highest `stats.totalSpins`

---

## 🔒 Security Tips

### Protect Your Token

```bash
# Never commit .env to Git
cat .gitignore
# Should contain: .env

# Use environment variables on servers
export BOT_TOKEN='your_token'
npm start
```

### Validate Input

Bot already validates:
- User IDs
- Command arguments
- File access
- JSON parsing

### Rate Limiting

Built-in protections:
- Stealing cooldown: 1 hour
- Mini-games: 1 per day
- Gift cooldown: tracked

---

## 📈 Performance Tips

### Optimize for Large Player Base

**Current capacity:** ~10,000 players on single machine

To scale:
1. **Use MongoDB** instead of JSON files
2. **Add Redis** for caching
3. **Split into microservices**
4. **Use load balancer**

### Reduce Memory Usage

```javascript
// Already optimized in bot.js:
- Lightweight JSON storage
- No memory leaks
- Efficient data structures
- No heavy loops
```

### Database Migration (Future)

When ready to upgrade from JSON:

```bash
npm install mongoose
# Then replace file I/O with MongoDB calls
```

---

## 🆘 Get Help

### Debug Mode

Add to `bot.js`:

```javascript
bot.on('error', (err) => {
  console.error('🔴 Bot Error:', err);
});

bot.on('warn', (msg) => {
  console.warn('🟡 Warning:', msg);
});
```

### Check Logs

```bash
# Save logs to file
npm start > bot.log 2>&1

# View logs
tail -f bot.log
```

### Contact Support

- 📧 Email: bruninhapvpp@gmail.com
- 🐛 GitHub Issues: [Report bug](https://github.com/bruninhapvpp-cmd/Joguinhos-/issues)
- 💬 Discussions: [Ask questions](https://github.com/bruninhapvpp-cmd/Joguinhos-/discussions)

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Bot token added to .env
- [ ] `npm install` completed successfully
- [ ] Bot starts: `npm start` works
- [ ] Bot responds to `/start`
- [ ] Can spin: `/girar` works
- [ ] Can check profile: `/perfil` works
- [ ] Data saves: Close and restart bot
- [ ] No errors in console

---

## 🎉 Success!

Your arcade bot is ready! 

**Next steps:**
1. Invite friends to play
2. Customize collectibles
3. Add events
4. Monitor player activity
5. Gather feedback

**Happy collecting! 🧸✨**

---

**Last Updated:** May 2026
**Bot Version:** 1.0.0
