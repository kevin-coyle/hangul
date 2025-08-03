# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Hangul Drawing Practice** web application - an educational game that teaches users how to write Korean characters (Hangul) through interactive stroke-by-stroke drawing practice.

## Tech Stack

- **Pure client-side HTML5 application** - No build process or server required
- **Phaser 3** (v3.70.0) - Game framework loaded from CDN
- **Vanilla JavaScript** - No transpilation needed
- **CSS3** with 8-bit retro aesthetic using Press Start 2P font
- **Capacitor** - For native mobile app packaging (Android platform configured)

## Development Commands

For web development:
```bash
# Run locally with Python (from www directory)
cd www && python -m http.server

# Or with Node.js (from www directory)
cd www && npx serve

# Or simply open www/index.html in a browser
```

For Capacitor mobile development:
```bash
# Sync web assets to native platforms
npx cap sync

# Run on Android
npx cap run android

# Open in Android Studio
npx cap open android
```

## Architecture

The web application is located in the `www/` directory and consists of three main files:

1. **www/index.html** - UI structure with start screen and game container
2. **www/game.js** - Core game logic (1048 lines) containing:
   - Character database with stroke definitions for consonants and vowels
   - Phaser game scene setup and rendering
   - Drawing validation logic using distance-based stroke matching
   - Score/level progression system
   - Audio management for background music and sound effects
3. **www/style.css** - 8-bit retro styling

Additional files:
- **www/*.mp3** - Background music tracks and sound effects  
- **www/*.png** - Background and congratulations images
- **capacitor.config.json** - Capacitor configuration
- **android/** - Native Android project files

### Key Game Components

- **Character Data Structure** (game.js:1-300): Each character contains:
  - `char`: The Korean character
  - `romanization`: English representation
  - `strokeCount`: Number of strokes
  - `strokes`: Array of stroke objects with type ('line' or 'circle') and coordinates

- **Drawing Validation** (game.js:572-780): 
  - `checkDrawing()` function validates completed strokes against character data
  - `validateStroke()` function uses distance-based matching with configurable tolerance
  - Line strokes: 200px tolerance for start/end points, perpendicular distance validation
  - Circle strokes: 150px tolerance for radius matching
  - Provides visual feedback for correct/incorrect strokes

- **Game States**:
  - Start screen with fullscreen prompt and mobile orientation detection
  - Main game loop with character presentation and drawing canvas
  - Real-time stroke validation with visual feedback
  - Level progression, scoring system, and character cycling
  - Responsive design with mobile touch support

### Audio System

- 5 background music tracks (song0.mp3 - song4.mp3) that cycle automatically
- Success sound effect (success.mp3) plays on correct stroke completion
- Mute/unmute functionality with Web Audio API context management
- Music track selection and automatic progression
- Mobile-friendly audio initialization (requires user interaction)

## Testing

No automated tests exist. Manual testing involves:
1. Opening the game in a browser
2. Drawing characters and verifying stroke validation
3. Testing audio controls and level progression
4. Checking responsive behavior and fullscreen mode

## Common Tasks

When modifying character data:
- Edit the `hangulData` object in www/game.js:1-300
- Ensure stroke coordinates fit within the 500x500 canvas
- Test stroke validation tolerances if adding complex strokes

When adjusting game difficulty:
- Modify stroke validation tolerances: lines (200px) at www/game.js:695, circles (150px) at www/game.js:722
- Adjust score multipliers in `checkDrawing()` function at www/game.js:572
- Change level progression logic in the scoring system

When deploying to mobile:
- Run `npx cap sync` after making changes to www/ files
- Test on device with `npx cap run android`