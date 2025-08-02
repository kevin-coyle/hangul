// Hangul character data with detailed stroke information
const hangulData = {
    consonants: [
        {
            char: 'ㄱ',
            romanization: 'g/k',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[350, 200], [350, 400]] }
            ]
        },
        {
            char: 'ㄴ',
            romanization: 'n',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[200, 200], [200, 400]] },
                { type: 'line', points: [[200, 400], [400, 400]] }
            ]
        },
        {
            char: 'ㄷ',
            romanization: 'd/t',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[150, 200], [150, 400]] },
                { type: 'line', points: [[150, 400], [350, 400]] }
            ]
        },
        {
            char: 'ㄹ',
            romanization: 'r/l',
            strokeCount: 5,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[350, 200], [350, 300]] },
                { type: 'line', points: [[150, 300], [350, 300]] },
                { type: 'line', points: [[150, 300], [150, 400]] },
                { type: 'line', points: [[150, 400], [350, 400]] }
            ]
        },
        {
            char: 'ㅁ',
            romanization: 'm',
            strokeCount: 4,
            strokes: [
                { type: 'line', points: [[150, 200], [150, 400]] },
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[350, 200], [350, 400]] },
                { type: 'line', points: [[150, 400], [350, 400]] }
            ]
        },
        {
            char: 'ㅂ',
            romanization: 'b/p',
            strokeCount: 4,
            strokes: [
                { type: 'line', points: [[200, 150], [200, 400]] },
                { type: 'line', points: [[300, 150], [300, 400]] },
                { type: 'line', points: [[150, 250], [350, 250]] },
                { type: 'line', points: [[150, 350], [350, 350]] }
            ]
        },
        {
            char: 'ㅅ',
            romanization: 's',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[250, 200], [200, 400]] },
                { type: 'line', points: [[250, 200], [300, 400]] }
            ]
        },
        {
            char: 'ㅇ',
            romanization: 'ng',
            strokeCount: 1,
            strokes: [
                { type: 'circle', center: [250, 300], radius: 80 }
            ]
        },
        {
            char: 'ㅈ',
            romanization: 'j',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[250, 250], [200, 400]] },
                { type: 'line', points: [[250, 250], [300, 400]] }
            ]
        },
        {
            char: 'ㅊ',
            romanization: 'ch',
            strokeCount: 4,
            strokes: [
                { type: 'line', points: [[250, 150], [250, 200]] },
                { type: 'line', points: [[150, 250], [350, 250]] },
                { type: 'line', points: [[250, 300], [200, 400]] },
                { type: 'line', points: [[250, 300], [300, 400]] }
            ]
        },
        {
            char: 'ㅋ',
            romanization: 'k',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[150, 300], [350, 300]] },
                { type: 'line', points: [[350, 200], [350, 400]] }
            ]
        },
        {
            char: 'ㅌ',
            romanization: 't',
            strokeCount: 4,
            strokes: [
                { type: 'line', points: [[150, 200], [350, 200]] },
                { type: 'line', points: [[150, 200], [150, 350]] },
                { type: 'line', points: [[150, 350], [350, 350]] },
                { type: 'line', points: [[150, 300], [350, 300]] }
            ]
        },
        {
            char: 'ㅍ',
            romanization: 'p',
            strokeCount: 4,
            strokes: [
                { type: 'line', points: [[150, 150], [350, 150]] },
                { type: 'line', points: [[150, 400], [350, 400]] },
                { type: 'line', points: [[200, 200], [200, 350]] },
                { type: 'line', points: [[300, 200], [300, 350]] }
            ]
        },
        {
            char: 'ㅎ',
            romanization: 'h',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[250, 150], [250, 200]] },
                { type: 'line', points: [[150, 250], [350, 250]] },
                { type: 'circle', center: [250, 350], radius: 60 }
            ]
        }
    ],
    vowels: [
        {
            char: 'ㅏ',
            romanization: 'a',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[250, 150], [250, 450]] },
                { type: 'line', points: [[250, 300], [350, 300]] }
            ]
        },
        {
            char: 'ㅑ',
            romanization: 'ya',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[250, 150], [250, 450]] },
                { type: 'line', points: [[250, 250], [350, 250]] },
                { type: 'line', points: [[250, 350], [350, 350]] }
            ]
        },
        {
            char: 'ㅓ',
            romanization: 'eo',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[350, 150], [350, 450]] },
                { type: 'line', points: [[250, 300], [350, 300]] }
            ]
        },
        {
            char: 'ㅕ',
            romanization: 'yeo',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[350, 150], [350, 450]] },
                { type: 'line', points: [[250, 250], [350, 250]] },
                { type: 'line', points: [[250, 350], [350, 350]] }
            ]
        },
        {
            char: 'ㅗ',
            romanization: 'o',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[150, 350], [450, 350]] },
                { type: 'line', points: [[300, 250], [300, 350]] }
            ]
        },
        {
            char: 'ㅛ',
            romanization: 'yo',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[150, 350], [450, 350]] },
                { type: 'line', points: [[250, 250], [250, 350]] },
                { type: 'line', points: [[350, 250], [350, 350]] }
            ]
        },
        {
            char: 'ㅜ',
            romanization: 'u',
            strokeCount: 2,
            strokes: [
                { type: 'line', points: [[150, 250], [450, 250]] },
                { type: 'line', points: [[300, 250], [300, 350]] }
            ]
        },
        {
            char: 'ㅠ',
            romanization: 'yu',
            strokeCount: 3,
            strokes: [
                { type: 'line', points: [[150, 250], [450, 250]] },
                { type: 'line', points: [[250, 250], [250, 350]] },
                { type: 'line', points: [[350, 250], [350, 350]] }
            ]
        },
        {
            char: 'ㅡ',
            romanization: 'eu',
            strokeCount: 1,
            strokes: [
                { type: 'line', points: [[150, 300], [450, 300]] }
            ]
        },
        {
            char: 'ㅣ',
            romanization: 'i',
            strokeCount: 1,
            strokes: [
                { type: 'line', points: [[300, 150], [300, 450]] }
            ]
        }
    ]
};

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    backgroundColor: '#ffffff',
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Game variables
let graphics;
let isDrawing = false;
let drawnPath = [];
let allStrokes = [];
let currentStroke = 0;
let currentCharacter = null;
let score = 0;
let level = 1;
let characterText;
let guideText;
let hintGraphics;
let strokeGuideGraphics;
let showingHint = false;
let congratsImage;
let backgroundImage;
let bgMusic0;
let bgMusic1;
let bgMusic2;
let successSound;
let currentBgMusic = 0;
let isMuted = false;
let gameStarted = false;
let bgMusicArray = [];

// Initialize the game
const game = new Phaser.Game(config);

function preload() {
    // Load images
    this.load.image('background', 'bg.png');
    this.load.image('congrats', 'congrats.png');

    // Load audio files
    this.load.audio('bgMusic0', 'song0.mp3');
    this.load.audio('bgMusic1', 'song1.mp3');
    this.load.audio('bgMusic2', 'song2.mp3');
    this.load.audio('success', 'success.mp3');
}

function create() {
    // Add background image
    backgroundImage = this.add.image(400, 300, 'background');
    backgroundImage.setDisplaySize(800, 600);

    // Set up the drawing area with semi-transparent white
    const drawingArea = this.add.rectangle(400, 300, 700, 500, 0xffffff, 0.9);
    drawingArea.setStrokeStyle(4, 0x000000);

    // Create guide lines
    createGuideLines(this);

    // Display character with pixelated font style
    characterText = this.add.text(400, 300, '', {
        fontSize: '160px',
        fontFamily: 'monospace',
        color: '#cccccc',
        align: 'center',
        padding: { x: 10, y: 10 }
    });
    characterText.setOrigin(0.5);

    // Create graphics objects on top
    strokeGuideGraphics = this.add.graphics();
    hintGraphics = this.add.graphics();
    graphics = this.add.graphics();

    // Create congratulations image (hidden initially)
    congratsImage = this.add.image(400, 300, 'congrats');
    congratsImage.setScale(0.8);
    congratsImage.setVisible(false);
    congratsImage.setDepth(100);

    // Guide text with 8-bit style
    guideText = this.add.text(400, 80, 'Draw the character!', {
        fontSize: '20px',
        fontFamily: 'monospace',
        color: '#000000',
        backgroundColor: '#ffff00',
        padding: { x: 10, y: 5 },
        align: 'center'
    });
    guideText.setOrigin(0.5);

    // Set up input handlers
    this.input.on('pointerdown', startDrawing, this);
    this.input.on('pointermove', draw, this);
    this.input.on('pointerup', stopDrawing, this);

    // Set up audio
    bgMusic0 = this.sound.add('bgMusic0', { loop: false, volume: 0.3 });
    bgMusic1 = this.sound.add('bgMusic1', { loop: false, volume: 0.3 });
    bgMusic2 = this.sound.add('bgMusic2', { loop: false, volume: 0.3 });
    successSound = this.sound.add('success', { volume: 0.5 });

    // Store in array for easy cycling
    bgMusicArray = [bgMusic0, bgMusic1, bgMusic2];

    // Set up auto-progression when songs end
    bgMusic0.on('complete', () => playNextSong());
    bgMusic1.on('complete', () => playNextSong());
    bgMusic2.on('complete', () => playNextSong());

    // Don't start music yet - wait for start button

    // Initialize first character
    nextCharacter();

    // Set up button handlers
    document.getElementById('clear-btn').addEventListener('click', clearDrawing);
    document.getElementById('next-btn').addEventListener('click', nextCharacter);
    document.getElementById('hint-btn').addEventListener('click', toggleHint);
    document.getElementById('mute-btn').addEventListener('click', toggleMute);
    document.getElementById('music-btn').addEventListener('click', switchMusic);

    // Set up start button (only set up once when Phaser is ready)
    if (!gameStarted) {
        document.getElementById('start-btn').addEventListener('click', startGame);
    }
}

function update() {
    // Game update logic
}

function createGuideLines(scene) {
    const guideGraphics = scene.add.graphics();
    guideGraphics.lineStyle(1, 0xcccccc, 0.5);

    // Vertical center line
    guideGraphics.moveTo(400, 50);
    guideGraphics.lineTo(400, 550);

    // Horizontal center line
    guideGraphics.moveTo(50, 300);
    guideGraphics.lineTo(750, 300);

    // Quarter lines
    guideGraphics.moveTo(225, 50);
    guideGraphics.lineTo(225, 550);
    guideGraphics.moveTo(575, 50);
    guideGraphics.lineTo(575, 550);
    guideGraphics.moveTo(50, 175);
    guideGraphics.lineTo(750, 175);
    guideGraphics.moveTo(50, 425);
    guideGraphics.lineTo(750, 425);

    guideGraphics.strokePath();
}

function startDrawing(pointer) {
    console.log('Start drawing at:', pointer.x, pointer.y);
    isDrawing = true;
    drawnPath = [{ x: pointer.x, y: pointer.y }];
}

function draw(pointer) {
    if (isDrawing) {
        drawnPath.push({ x: pointer.x, y: pointer.y });

        // Redraw everything
        graphics.clear();

        // Draw previous strokes
        graphics.lineStyle(8, 0x764ba2, 1);
        for (let stroke of allStrokes) {
            if (stroke.length > 0) {
                graphics.beginPath();
                graphics.moveTo(stroke[0].x, stroke[0].y);

                for (let i = 1; i < stroke.length; i++) {
                    graphics.lineTo(stroke[i].x, stroke[i].y);
                }

                graphics.strokePath();
            }
        }

        // Draw current stroke
        graphics.lineStyle(8, 0x764ba2, 1);
        graphics.beginPath();

        if (drawnPath.length > 0) {
            graphics.moveTo(drawnPath[0].x, drawnPath[0].y);

            for (let i = 1; i < drawnPath.length; i++) {
                graphics.lineTo(drawnPath[i].x, drawnPath[i].y);
            }

            graphics.strokePath();
        }
    }
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;

        // Save the current stroke
        if (drawnPath.length > 10) {
            allStrokes.push([...drawnPath]);
            currentStroke++;

            // Update guide text
            if (currentCharacter && currentStroke < currentCharacter.strokeCount) {
                guideText.setText(`Stroke ${currentStroke + 1} of ${currentCharacter.strokeCount}`);
                drawStrokeGuide();
            } else {
                checkDrawing();
            }
        }

        drawnPath = [];
    }
}

function clearDrawing() {
    graphics.clear();
    drawnPath = [];
    allStrokes = [];
    currentStroke = 0;
    showingHint = false;
    hintGraphics.clear();
    strokeGuideGraphics.clear();

    if (currentCharacter) {
        guideText.setText(`Stroke 1 of ${currentCharacter.strokeCount}`);
        drawStrokeGuide();
    }
}

function nextCharacter() {
    // Select random character
    const allCharacters = [...hangulData.consonants, ...hangulData.vowels];
    currentCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];

    // Clear drawing (which will also set up the first stroke guide)
    clearDrawing();

    // Update display
    characterText.setText(currentCharacter.char);
    document.getElementById('current-char').textContent = currentCharacter.char;
    document.getElementById('romanization').textContent = currentCharacter.romanization;

    // Reset guide text
    guideText.setText(`Stroke 1 of ${currentCharacter.strokeCount}`);
    guideText.setColor('#667eea');
}

function checkDrawing() {
    // Check if all strokes are completed
    if (currentStroke === currentCharacter.strokeCount) {
        // Success! Redraw all strokes in green
        graphics.clear();
        graphics.lineStyle(8, 0x4ecdc4, 1);

        for (let stroke of allStrokes) {
            if (stroke.length > 0) {
                graphics.beginPath();
                graphics.moveTo(stroke[0].x, stroke[0].y);

                for (let i = 1; i < stroke.length; i++) {
                    graphics.lineTo(stroke[i].x, stroke[i].y);
                }

                graphics.strokePath();
            }
        }

        // Update score
        score += 10 * currentCharacter.strokeCount;
        document.getElementById('score').textContent = score;

        // Level up every 100 points
        if (score > 0 && score % 100 === 0) {
            level++;
            document.getElementById('level').textContent = level;
        }

        // Show success message
        guideText.setText('Perfect! All strokes completed!');
        guideText.setStyle({
            backgroundColor: '#00ff00',
            color: '#000000'
        });
        strokeGuideGraphics.clear();

        // Play success sound
        if (!isMuted) {
            successSound.play();
        }

        // Show congratulations animation
        showCongratulations();
    }
}

function drawStrokeGuide() {
    if (!currentCharacter || currentStroke >= currentCharacter.strokeCount) return;

    strokeGuideGraphics.clear();

    // Draw previous strokes in light gray
    strokeGuideGraphics.lineStyle(4, 0xcccccc, 0.5);
    for (let i = 0; i < currentStroke; i++) {
        const stroke = currentCharacter.strokes[i];
        if (stroke.type === 'line') {
            strokeGuideGraphics.beginPath();
            strokeGuideGraphics.moveTo(stroke.points[0][0], stroke.points[0][1]);
            for (let j = 1; j < stroke.points.length; j++) {
                strokeGuideGraphics.lineTo(stroke.points[j][0], stroke.points[j][1]);
            }
            strokeGuideGraphics.strokePath();
        } else if (stroke.type === 'circle') {
            strokeGuideGraphics.strokeCircle(stroke.center[0], stroke.center[1], stroke.radius);
        }
    }

    // Draw current stroke guide in yellow
    const currentStrokeData = currentCharacter.strokes[currentStroke];
    strokeGuideGraphics.lineStyle(4, 0xffd93d, 0.8);

    if (currentStrokeData.type === 'line') {
        // Draw stroke path
        strokeGuideGraphics.beginPath();
        strokeGuideGraphics.moveTo(currentStrokeData.points[0][0], currentStrokeData.points[0][1]);
        for (let i = 1; i < currentStrokeData.points.length; i++) {
            strokeGuideGraphics.lineTo(currentStrokeData.points[i][0], currentStrokeData.points[i][1]);
        }
        strokeGuideGraphics.strokePath();

        // Draw start point indicator
        strokeGuideGraphics.fillStyle(0xff0000, 1);
        strokeGuideGraphics.fillCircle(currentStrokeData.points[0][0], currentStrokeData.points[0][1], 8);

        // Draw arrow at end
        const lastIdx = currentStrokeData.points.length - 1;
        const endX = currentStrokeData.points[lastIdx][0];
        const endY = currentStrokeData.points[lastIdx][1];
        const prevX = currentStrokeData.points[lastIdx - 1][0];
        const prevY = currentStrokeData.points[lastIdx - 1][1];

        const angle = Math.atan2(endY - prevY, endX - prevX);
        strokeGuideGraphics.fillStyle(0x00ff00, 1);
        strokeGuideGraphics.fillTriangle(
            endX, endY,
            endX - 15 * Math.cos(angle - 0.5), endY - 15 * Math.sin(angle - 0.5),
            endX - 15 * Math.cos(angle + 0.5), endY - 15 * Math.sin(angle + 0.5)
        );
    } else if (currentStrokeData.type === 'circle') {
        strokeGuideGraphics.strokeCircle(currentStrokeData.center[0], currentStrokeData.center[1], currentStrokeData.radius);

        // Draw start point at top of circle
        strokeGuideGraphics.fillStyle(0xff0000, 1);
        strokeGuideGraphics.fillCircle(currentStrokeData.center[0], currentStrokeData.center[1] - currentStrokeData.radius, 8);
    }
}

function showCongratulations() {
    // Show congratulations image with bounce animation
    congratsImage.setVisible(true);
    congratsImage.setScale(0);
    congratsImage.setAlpha(1);

    const scene = game.scene.scenes[0];

    // Bounce in animation
    scene.tweens.add({
        targets: congratsImage,
        scale: { from: 0, to: 0.8 },
        duration: 500,
        ease: 'Back.easeOut',
        onComplete: () => {
            // Wait then fade out
            scene.time.delayedCall(1500, () => {
                scene.tweens.add({
                    targets: congratsImage,
                    alpha: 0,
                    duration: 500,
                    onComplete: () => {
                        congratsImage.setVisible(false);
                    }
                });
            });
        }
    });
}

function toggleHint() {
    showingHint = !showingHint;

    if (showingHint) {
        // Show all strokes at once
        hintGraphics.clear();
        hintGraphics.lineStyle(4, 0xffd93d, 0.6);

        for (let i = 0; i < currentCharacter.strokes.length; i++) {
            const stroke = currentCharacter.strokes[i];

            // Draw stroke number
            if (stroke.type === 'line') {
                hintGraphics.fillStyle(0xff0000, 1);
                hintGraphics.fillCircle(stroke.points[0][0], stroke.points[0][1], 12);
                hintGraphics.fillStyle(0xffffff, 1);
                const numberText = game.scene.scenes[0].add.text(stroke.points[0][0], stroke.points[0][1], String(i + 1), {
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    color: '#ffffff',
                    align: 'center'
                });
                numberText.setOrigin(0.5);

                // Draw the stroke
                hintGraphics.lineStyle(4, 0xffd93d, 0.6);
                hintGraphics.beginPath();
                hintGraphics.moveTo(stroke.points[0][0], stroke.points[0][1]);
                for (let j = 1; j < stroke.points.length; j++) {
                    hintGraphics.lineTo(stroke.points[j][0], stroke.points[j][1]);
                }
                hintGraphics.strokePath();
            } else if (stroke.type === 'circle') {
                hintGraphics.fillStyle(0xff0000, 1);
                hintGraphics.fillCircle(stroke.center[0], stroke.center[1] - stroke.radius, 12);
                hintGraphics.fillStyle(0xffffff, 1);
                const numberText = game.scene.scenes[0].add.text(stroke.center[0], stroke.center[1] - stroke.radius, String(i + 1), {
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    color: '#ffffff',
                    align: 'center'
                });
                numberText.setOrigin(0.5);

                hintGraphics.lineStyle(4, 0xffd93d, 0.6);
                hintGraphics.strokeCircle(stroke.center[0], stroke.center[1], stroke.radius);
            }
        }
    } else {
        hintGraphics.clear();
    }
}

function playNextSong() {
    if (isMuted) return;

    // Move to next song in sequence
    currentBgMusic = (currentBgMusic + 1) % bgMusicArray.length;
    bgMusicArray[currentBgMusic].play();

    // Update button text
    document.getElementById('music-btn').textContent = `♪ SONG ${currentBgMusic}`;
}

function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('mute-btn');

    if (isMuted) {
        // Mute all sounds
        bgMusicArray.forEach(music => {
            if (music.isPlaying) music.pause();
        });
        muteBtn.textContent = '🔇 UNMUTE';
        muteBtn.style.backgroundColor = '#ff6b6b';
    } else {
        // Unmute and resume current music
        if (bgMusicArray[currentBgMusic]) {
            bgMusicArray[currentBgMusic].resume();
        }
        muteBtn.textContent = '🔊 MUTE';
        muteBtn.style.backgroundColor = '#4ecdc4';
    }
}

function switchMusic() {
    if (isMuted) return; // Don't switch if muted

    // Stop current song
    bgMusicArray[currentBgMusic].stop();

    // Move to next song
    currentBgMusic = (currentBgMusic + 1) % bgMusicArray.length;

    // Play new song
    bgMusicArray[currentBgMusic].play();

    // Update button text
    document.getElementById('music-btn').textContent = `♪ SONG ${currentBgMusic}`;
}

function startGame() {
    if (gameStarted) return;

    gameStarted = true;

    // Request fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }

    // Hide start screen and show game
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.body.style.display = 'flex';

    // Start background music with song0
    if (!isMuted && bgMusic0) {
        bgMusic0.play();
    }

    // Focus on the game
    if (game.canvas) {
        game.canvas.focus();
    }
}