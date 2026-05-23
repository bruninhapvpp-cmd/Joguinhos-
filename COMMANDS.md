# 🎮 Quick Commands Reference

Fast lookup guide for all Arcade Collectible Bot commands.

---

## 🎠 Core Gameplay Commands

### `/girar` - Spin the Claw Machine
**Cooldown:** 3 daily spins (reset at midnight)

Spin to win collectibles! Each spin grants a random item.

```
/girar
```

**Response:**
```
🎠 Neon lights flicker softly...
✨ The claw machine whirrs to life...

🎉 The machine lights up brilliantly!

🧸 You won:
🎀 Hello Kitty
⭐ Rarity: Common

📊 Spins left: 2
💰 +10 coins | ⭐ +10 XP
```

---

## 🎮 Mini-Games

### `/pesca` - Go Fishing
**Cooldown:** Once per day  
**Reward:** +1 Extra spin (on success)

Fish for treasures and collectibles!

```
/pesca
```

**Response:**
```
🎣 Fishing Results

You caught: 🧸 Plushie

✨ +1 Extra Spin!

3 spins remaining
```

---

### `/cacapalavra` - Word Search
**Cooldown:** Once per day  
**Reward:** +1 Extra spin (on success)

Find the hidden word to win an extra spin!

```
/cacapalavra
```

**Response:**
```
🔤 Word Search Challenge

Find the word: P_U_H_E

Reply with /responder [word]
```

To answer:
```
/responder plushie
```

---

### `/descubra` - Guess the Collectible
**Cooldown:** Once per day  
**Reward:** +1 Extra spin (on success)

Guess the collectible name!

```
/descubra
```

**Response:**
```
🧠 Guess the Collectible

K _ R O M I

Reply with /descobrir [name]
```

To answer:
```
/descobrir kuromi
```

---

## 📦 Inventory & Collection Commands

### `/inventario` - View Your Inventory
**Cooldown:** None

See all items you've collected.

```
/inventario
```

**Response:**
```
📦 Your Inventory

🎀 Hello Kitty x2
🖤 Kuromi x1
🌙 Moon Rose x1

💰 Total: 4 items
```

---

### `/colecao` - View Collections by Category
**Cooldown:** None

See progress on each collection category.

```
/colecao
```

**Response:**
```
🎪 Your Collections

🎀 Sanrio: 4/8 (50%)
💕 Barbie: 2/6 (33%)
🧿 Funko Pop: 1/6 (17%)
🌸 Flowers: 1/6 (17%)
🌙 Secret: 0/4 (0%)

📊 Overall: 8/30 (27%)
```

---

## 👤 Profile & Stats

### `/perfil` - View Your Profile
**Cooldown:** None

See your stats and achievements.

```
/perfil
```

**Response:**
```
👤 Profile: @username

⭐ Level: 5
💫 Experience: 450 XP
💰 Coins: 2500

🎮 Stats:
├ Total Spins: 45
├ Collectibles: 28
├ Legendary: 3
└ Mythical: 0

🎠 Daily Spins: 2
⚡ Extra Spins: 1
```

---

### `/rank` - View Leaderboards
**Cooldown:** None

See top players by different criteria.

```
/rank                    # Top 10 by level
/rank collected          # Top 10 by items
/rank legendary          # Top 10 by legendary
/rank coins              # Top 10 by coins
```

**Response:**
```
👑 Top 10 Ranking (level)

🥇 @player1 - Level 15
🥈 @player2 - Level 12
🥉 @player3 - Level 11
#4 @player4 - Level 10
...
```

---

### `/conquistas` - View Achievements
**Cooldown:** None

See all your unlocked achievements.

```
/conquistas
```

**Response:**
```
🏆 Your Achievements

🎁 First Prize
   Collected your first item

⭐ Star Collector
   Collected your first legendary item

👑 Mega Collector
   Collected 100 items
```

---

## 👥 Social Commands

### `/presentear` - Send a Gift
**Cooldown:** None  
**Cost:** 1 item from your inventory

Gift a collectible to another player!

```
/presentear @friend hello_kitty
```

**Response:**
```
🎁 Gift Sent!

You sent 🎀 Hello Kitty to @friend

💝 Spread the joy!
```

---

### `/roubar` - Attempt to Steal
**Cooldown:** 1 hour  
**Risk:** Can fail or backfire

Try to steal from another player (risky!).

```
/roubar @player
```

**Outcomes:**

**Success (60% base chance):**
```
🎭 Theft Successful!

You stole: 🖤 Kuromi

+25 coins
```

**Failure (Can happen):**
```
😅 Theft Failed!

The arcade security caught you!
The guards threw you out!
Try again later.
```

**Backfire (20% chance on fail):**
```
💥 BACKFIRE!

Your stealing attempt backfired!
@player stole 🌙 Moon Rose from YOU!
```

---

### `/trocar` - Trading System
**Status:** Coming Soon

Trade collectibles with other players.

```
/trocar @player
```

---

## 🌸 Exploration Commands

### `/explorarflor` - Flower Exploration
**Cooldown:** Once per day

Explore locations to find rare flowers!

```
/explorarflor
```

**Response:**
```
🌸 Flower Exploration

📍 You arrive at: 🌙 Moon Garden
Silver petals glow under the moonlight

💡 Clue: "Seek where shadows dance"

Can you find the hidden flower?
Reply with /descobrirflor [flower_name]
```

To answer:
```
/descobrirflor moon_rose
```

**Success:**
```
🌸 Correct! 🌸

You discovered: 🌙 Moon Rose
🔵 Rarity: Rare

✨ +50 coins
⭐ +75 XP

Discovery complete! 🎉
```

---

## 🎪 Atmosphere Commands

### `/arcade` - Full Guide
**Cooldown:** None

See the complete bot guide and all commands.

```
/arcade
```

---

### `/chuva` - Rainy Arcade Scene
**Cooldown:** None

Feel the cozy rainy arcade vibes.

```
/chuva
```

**Response:**
```
🌧️ Rainy Arcade Night

🌧️ Rain patters softly against arcade windows
💧 Neon reflections shimmer on wet glass
🌙 The machines glow even brighter
☔ Cozy and mysterious inside
```

---

### `/noite` - Midnight Scene
**Cooldown:** None

Experience the mysterious midnight arcade.

```
/noite
```

**Response:**
```
🌙 Midnight Arcade

🌙 The clock strikes midnight
✨ Arcade spirits stir to life
🎠 Machines hum with extra magic
👻 The atmosphere feels alive and mystical
```

---

### `/neon` - Neon Paradise
**Cooldown:** None

Immerse in neon and electric vibes.

```
/neon
```

**Response:**
```
⚡ Neon Paradise

⚡ Electric colors everywhere
🌈 Pink, blue, purple, and cyan
💫 The air crackles with energy
✨ Everything feels hyperreal
```

---

### `/evento` - Event Scene
**Cooldown:** None

Check the current special event atmosphere.

```
/evento
```

**Response:**
```
🎉 Special Event!

🎉 A special event is happening!
✨ Exclusive items are available
🎊 Rare drops are boosted!
🌟 The whole arcade shimmers with energy
```

---

## 🚀 Getting Started Commands

### `/start` - Welcome Message
**Cooldown:** None

Get started with the bot!

```
/start
```

**Response:**
```
🎀 Welcome to Arcade Collectibles! 🎀

Your premium collectible arcade experience awaits!

🎠 Features:
✨ Spin claw machines daily
🧸 Collect plushies & rare items
🎀 Japanese arcade aesthetic
🌸 Social trading & gifting
🎮 Mini games for bonus spins

/arcade - View full guide
/girar - Start spinning!
```

---

## 📊 Command Categories

### Daily Commands (Reset at Midnight)
- `/girar` - 3 free spins
- `/pesca` - 1 fishing game
- `/cacapalavra` - 1 word search
- `/descubra` - 1 guess game
- `/explorarflor` - 1 exploration

### Anytime Commands (No Cooldown)
- `/inventario` - View inventory
- `/colecao` - View collections
- `/perfil` - View profile
- `/rank` - View leaderboards
- `/conquistas` - View achievements
- `/arcade` - Bot guide
- `/chuva`, `/noite`, `/neon`, `/evento` - Atmosphere

### Limited Cooldown Commands
- `/roubar` - 1 hour cooldown
- `/presentear` - No cooldown (item cost)
- `/trocar` - Coming soon

---

## 💡 Pro Tips

### Maximize Spins
1. Play all 3 mini-games daily for +3 extra spins
2. That gives you 6 spins total per day!

### Get More Coins
1. Spin at midnight when event boost is active
2. Steal successfully from other players (+25 coins)
3. Complete mini-games (+50-75 coins)

### Build Collections Faster
1. Play every day for bonus spins
2. Focus on one collection at a time
3. Use /colecao to track progress
4. Gift duplicates to friends

### Stay Safe When Stealing
1. Start with common items (high success)
2. Avoid stealing legendary items (10% success)
3. Remember 20% backfire chance
4. Wait 1 hour between attempts

### Climb the Ranks
1. Collect lots of items (/rank collected)
2. Find legendary drops (rare but high XP)
3. Level up consistently
4. Unlock achievements

---

## 🎯 Command Syntax Guide

### Basic Commands
```
/command                    # No arguments
```

### Commands with Arguments
```
/presentear @username itemid
/roubar @username
/descubir kuromi
```

### Optional Arguments
```
/rank                       # Default: level
/rank collected            # Alternative: collected
/rank legendary            # Alternative: legendary
```

---

## ❌ Common Mistakes

### ❌ Wrong: Spaces in usernames
```
/presentear @user name hello_kitty
```
**✅ Right:**
```
/presentear @username hello_kitty
```

### ❌ Wrong: Case sensitive
```
/GIRAR
/Girar
```
**✅ Right:**
```
/girar
```

### ❌ Wrong: Extra spaces
```
/girar                  
```
**✅ Right:**
```
/girar
```

---

## 🎮 Command Chains

### Daily Routine
```
1. /girar              (spin 1)
2. /pesca              (spin 1 + extra)
3. /cacapalavra        (spin 1 + extra)
4. /descubra           (spin 1 + extra)
5. /explorarflor       (explore & find flower)
6. /inventario         (check new items)
7. /perfil             (see XP progress)
```

### Social Interaction
```
1. /rank               (see who's active)
2. /presentear @friend item  (gift duplicate)
3. /roubar @rival      (attempt steal)
4. /conquistas         (check achievements)
```

---

## 📱 Mobile Tips

**For Telegram Mobile:**
- Tap command suggestions at bottom
- Commands auto-complete
- Use @username autocomplete
- Tap links to navigate

**For Telegram Desktop:**
- Type `/` to see command list
- Scroll to find your command
- Use TAB to autocomplete

---

## 🆘 Troubleshooting Commands

### Bot not responding?
```
/start           # Try the welcome message
/arcade          # Check bot guide
```

### Data not saved?
```
/perfil          # Check if profile exists
/inventario      # Check if inventory saved
```

### Command didn't work?
- Check cooldown timers
- Verify command spelling
- Check arguments format
- Restart bot: `/start`

---

## 📈 Commands by Progression

### New Player (Level 1)
Start with: `/start` → `/girar` → `/inventario`

### Intermediate (Level 5)
Add: `/pesca` → `/rank` → `/presentear`

### Advanced (Level 10+)
Master: `/roubar` → `/explorarflor` → `/conquistas`

### Pro (Level 20+)
Dominate: `/rank legendary` → `/coletcao` → Strategy

---

## 🎁 Full Command List

| Command | Type | Cooldown | Reward |
|---------|------|----------|---------|
| /girar | Spin | 3/day | Collectible |
| /pesca | Game | 1/day | +1 Spin |
| /cacapalavra | Game | 1/day | +1 Spin |
| /descubra | Game | 1/day | +1 Spin |
| /explorarflor | Adventure | 1/day | Flower |
| /inventario | Info | None | View items |
| /colecao | Info | None | View progress |
| /perfil | Info | None | View stats |
| /rank | Info | None | View rankings |
| /conquistas | Info | None | View badges |
| /presentear | Social | None | Gift item |
| /roubar | Social | 1/hour | Steal item |
| /trocar | Social | - | Coming soon |
| /arcade | Help | None | Full guide |
| /chuva | Vibe | None | Scene |
| /noite | Vibe | None | Scene |
| /neon | Vibe | None | Scene |
| /evento | Vibe | None | Scene |
| /start | Help | None | Welcome |

---

**Happy collecting! 🧸✨**

*Last Updated: May 2026*
