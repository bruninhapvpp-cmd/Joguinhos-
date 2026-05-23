# 🚀 Deployment Guide

Complete guide to deploy your Arcade Collectible Bot to production servers.

---

## 🎯 Hosting Options

### 1. **Railway** ⭐ RECOMMENDED
- Free tier available
- Auto-deploys from GitHub
- Perfect for bots
- Easy environment variables

### 2. **Heroku** (Paid)
- Free tier ended
- Still popular option
- Easy deployment

### 3. **Replit**
- Free hosting
- Easy to use
- Good for testing

### 4. **VPS/Own Server**
- Full control
- Best performance
- Requires Linux knowledge

### 5. **Oracle Cloud** (Free)
- Always free tier
- Good performance
- Requires setup

---

## 🚆 Railway Deployment (Best Option)

### Step 1: Prepare Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Railway Account

1. Visit [railway.app](https://railway.app)
2. Click "Start Project"
3. Login with GitHub

### Step 3: Deploy from GitHub

1. Click "New Project"
2. Select "GitHub Repo"
3. Choose `bruninhapvpp-cmd/Joguinhos-`
4. Confirm deployment

### Step 4: Add Environment Variables

**In Railway Dashboard:**

1. Go to your project
2. Click "Variables" tab
3. Add new variable:
   - **Name:** `BOT_TOKEN`
   - **Value:** Your Telegram bot token

4. Click "Save"

### Step 5: Verify Deployment

```
Railway automatically starts the bot:
- Logs appear in dashboard
- Bot should respond to commands
- Data saves to `data/` folder
```

### Redeploy on Code Changes

```bash
git add .
git commit -m "Update bot features"
git push origin main
# Railway auto-deploys in 1-2 minutes
```

---

## 🦸 Heroku Deployment

### Step 1: Install Heroku CLI

```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows - Download installer
# https://devcenter.heroku.com/articles/heroku-cli

# Linux
curl https://cli-assets.heroku.com/install.sh | sh
```

### Step 2: Login to Heroku

```bash
heroku login
# Opens browser to login
# Returns to terminal when done
```

### Step 3: Create App

```bash
heroku create your-arcade-bot-name
# Creates app and adds git remote
```

### Step 4: Add Bot Token

```bash
heroku config:set BOT_TOKEN=your_telegram_token
# Verifies: Config vars set
```

### Step 5: Deploy

```bash
git push heroku main
# Deploys to Heroku
# Shows build process in terminal
```

### Step 6: View Logs

```bash
heroku logs --tail
# Shows live logs
# Press CTRL+C to exit
```

---

## 🌐 Replit Deployment

### Step 1: Create Replit Project

1. Visit [replit.com](https://replit.com)
2. Click "+ Create"
3. Select "Import from GitHub"
4. Paste repo URL

### Step 2: Add Secrets

1. Click "Secrets" icon (left sidebar)
2. Add secret:
   - **Key:** `BOT_TOKEN`
   - **Value:** Your token

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run Bot

Click "Run" button or:

```bash
npm start
```

### Step 5: Keep Running 24/7

Use Replit's "Always On" feature:
- Requires Replit Pro
- Or use external uptime service

---

## 🖥️ VPS Deployment (Ubuntu/Debian)

### Step 1: SSH into Server

```bash
ssh user@your-server-ip
```

### Step 2: Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 3: Clone Repository

```bash
cd /home/user
git clone https://github.com/bruninhapvpp-cmd/Joguinhos-.git
cd Joguinhos-
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Setup Environment

```bash
cp .env.example .env
nano .env
# Edit and add BOT_TOKEN
# Save: CTRL+X, Y, ENTER
```

### Step 6: Install PM2 (Process Manager)

```bash
npm install -g pm2
```

### Step 7: Start Bot with PM2

```bash
pm2 start bot.js --name "arcade-bot"
pm2 save              # Save config
pm2 startup          # Auto-start on reboot
```

### Step 8: Verify Running

```bash
pm2 list
# Shows running processes
```

### Step 9: View Logs

```bash
pm2 logs arcade-bot
# View live logs
# CTRL+C to exit
```

### Step 10: Update Bot

```bash
cd Joguinhos-
git pull origin main
npm install
pm2 restart arcade-bot
```

---

## 🔮 Oracle Cloud (Always Free)

### Step 1: Create Oracle Account

1. Visit [oracle.com/cloud/free](https://oracle.com/cloud/free)
2. Create account (always free tier)

### Step 2: Create Linux Instance

1. Go to Compute → Instances
2. Click "Create Instance"
3. Select "Ubuntu 22.04"
4. Configure shape: "Micro" (always free)

### Step 3: Setup Instance

```bash
# Add Node.js repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git

# Clone and setup
git clone https://github.com/bruninhapvpp-cmd/Joguinhos-.git
cd Joguinhos-
npm install

# Configure
cp .env.example .env
nano .env  # Add BOT_TOKEN
```

### Step 4: Run with PM2

```bash
npm install -g pm2
pm2 start bot.js --name arcade-bot
pm2 startup
pm2 save
```

---

## 🔒 Security Best Practices

### 1. Protect Your Token

```bash
# Never commit .env
echo ".env" >> .gitignore

# Use strong tokens only
# Regenerate if leaked
```

### 2. Firewall Setup

```bash
# Only allow necessary ports
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

### 3. Keep Updated

```bash
# Update system regularly
sudo apt update
sudo apt upgrade

# Update Node dependencies
npm update
npm audit fix
```

### 4. Backup Data

```bash
# Daily backup of users.json
0 2 * * * tar -czf /backups/arcade-bot-$(date +\%Y\%m\%d).tar.gz /home/user/Joguinhos-/data/
```

---

## 📊 Monitoring

### Check Bot Status

```bash
# With PM2
pm2 status
pm2 logs arcade-bot

# With systemd
systemctl status arcade-bot
journalctl -u arcade-bot -f
```

### Monitor Resources

```bash
# CPU and Memory
top
# Press 'q' to quit

# Disk usage
df -h

# Check bot process
ps aux | grep bot
```

### Alert on Crashes

```bash
# PM2 with email alerts
pm2 install pm2-auto-pull
pm2 link  # Connect to PM2 monitoring
```

---

## 🐛 Troubleshooting Deployment

### Bot Won't Start

```bash
# Check logs
npm start

# Check node version
node --version  # Should be 18+

# Check token
echo $BOT_TOKEN

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Kill process on port
lsof -i :3000
kill -9 <PID>
```

### Out of Memory

```bash
# Check memory
free -h

# Increase swap
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### Data Disappears

```bash
# Check directory exists
ls -la data/

# Check file permissions
chmod 755 data/
chmod 644 data/*.json

# Ensure auto-save working
# Should see data files updated recently
ls -lat data/
```

---

## 📈 Scaling Up

### For 1,000+ Players

**Current Setup Handles:** ~10,000 players

**When to Upgrade:**

```
Players: 10,000+ → Database (MongoDB)
Traffic: High    → Load Balancer
Storage: Growing → Cloud Storage
```

### Database Migration

```bash
npm install mongoose
# Then update bot.js to use MongoDB
# Connection string from MongoDB Atlas
```

### Load Balancing

```bash
# Use PM2 Cluster Mode
pm2 start bot.js -i max --name arcade-bot
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Railway

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
        run: |
          npm install -g @railway/cli
          railway deploy
```

---

## 📱 Mobile Friendly Setup

### Telegram Desktop Client

Bot works on:
- ✅ Telegram Web
- ✅ Telegram Desktop
- ✅ Telegram Mobile
- ✅ All platforms

No special configuration needed!

---

## 🎯 Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] `.env` not in repository
- [ ] `.env.example` up to date
- [ ] Node modules not committed
- [ ] `package.json` updated
- [ ] Bot token ready
- [ ] Server/platform selected
- [ ] Environment variables set
- [ ] Bot starts successfully
- [ ] Bot responds to commands
- [ ] Data saves correctly
- [ ] Logs available for monitoring
- [ ] Backup strategy in place
- [ ] Auto-restart configured

---

## 🚀 Post-Deployment

### Verify Everything Works

```bash
# Test in Telegram
/start
/girar
/perfil
/inventario
```

### Monitor First Week

- Check logs daily
- Monitor resource usage
- Test all commands
- Invite beta testers
- Gather feedback

### Scale Gradually

- Start with few players
- Monitor stability
- Add features based on feedback
- Scale infrastructure as needed

---

## 📞 Support

### Deployment Issues?

- Check server logs
- Verify environment variables
- Test locally first
- Check GitHub issues
- Contact support

### Common Solutions

| Issue | Solution |
|-------|----------|
| Bot won't start | Check BOT_TOKEN, Node version |
| Data not saving | Check folder permissions |
| High memory | Use PM2 Cluster mode |
| Slow response | Check server CPU/RAM |
| Bot crashes | Check logs, update packages |

---

## 🎉 You're Live!

Your arcade bot is now live and ready for players!

**Next Steps:**
1. Share bot link with friends
2. Monitor performance
3. Gather user feedback
4. Optimize features
5. Plan future updates

**Happy hosting! 🚀✨**

---

**Last Updated:** May 2026
**Bot Version:** 1.0.0
