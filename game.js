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
let referenceGuideGraphics;
let showingHint = false;
let congratsImage;
let backgroundImage;
let bgMusic0;
let bgMusic1;
let bgMusic2;
let bgMusic3;
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
    this.load.audio('bgMusic3', 'song3.mp3');
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

    // Create reference box in bottom right
    const referenceBox = this.add.rectangle(680, 480, 200, 160, 0xffffff, 0.95);
    referenceBox.setStrokeStyle(3, 0x000000);

    // Add "Reference" label
    const referenceLabel = this.add.text(680, 400, 'REFERENCE & GUIDE', {
        fontSize: '12px',
        fontFamily: 'monospace',
        color: '#666666',
        backgroundColor: '#ffffff',
        padding: { x: 5, y: 2 },
        align: 'center'
    });
    referenceLabel.setOrigin(0.5);

    // Display character in reference box (smaller to make room for guides)
    characterText = this.add.text(640, 440, '', {
        fontSize: '50px',
        fontFamily: 'monospace',
        color: '#333333',
        align: 'center',
        padding: { x: 5, y: 5 }
    });
    characterText.setOrigin(0.5);

    // Create separate graphics for reference box guides
    referenceGuideGraphics = this.add.graphics();

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
    guideText = this.add.text(400, 80, 'Draw freely on the canvas! Check the reference box for stroke guides!', {
        fontSize: '18px',
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
    bgMusic3 = this.sound.add('bgMusic3', { loop: false, volume: 0.3 });
    successSound = this.sound.add('success', { volume: 0.5 });

    // Store in array for easy cycling
    bgMusicArray = [bgMusic0, bgMusic1, bgMusic2, bgMusic3];

    // Set up auto-progression when songs end
    bgMusic0.on('complete', () => playNextSong());
    bgMusic1.on('complete', () => playNextSong());
    bgMusic2.on('complete', () => playNextSong());
    bgMusic3.on('complete', () => playNextSong());

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
                guideText.setText(`Stroke ${currentStroke + 1} of ${currentCharacter.strokeCount} - See guide in reference box!`);
                guideText.setStyle({
                    backgroundColor: '#667eea',
                    color: '#ffffff'
                });
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
    referenceGuideGraphics.clear();

    if (currentCharacter) {
        guideText.setText(`Stroke 1 of ${currentCharacter.strokeCount} - See guide in reference box!`);
        guideText.setStyle({
            backgroundColor: '#667eea',
            color: '#ffffff'
        });
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
    guideText.setText(`Stroke 1 of ${currentCharacter.strokeCount} - See guide in reference box!`);
    guideText.setStyle({
        backgroundColor: '#667eea',
        color: '#ffffff'
    });
}

function checkDrawing() {
    // Check if all strokes are completed
    if (currentStroke === currentCharacter.strokeCount) {
        // Validate each stroke against the expected pattern
        let allStrokesValid = true;
        let feedback = [];

        for (let i = 0; i < allStrokes.length; i++) {
            const drawnStroke = allStrokes[i];
            const expectedStroke = currentCharacter.strokes[i];
            const isValid = validateStroke(drawnStroke, expectedStroke);



            if (!isValid) {
                allStrokesValid = false;
                feedback.push(`Stroke ${i + 1} doesn't match the expected pattern`);
            }
        }

        if (allStrokesValid) {
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
            referenceGuideGraphics.clear();

            // Play success sound
            if (!isMuted) {
                successSound.play();
            }

            // Show congratulations animation
            showCongratulations();

            // Automatically advance to next character after celebration
            setTimeout(() => {
                nextCharacter();
            }, 2500); // Wait for congratulations animation to finish
        } else {
            // Some strokes don't match - show feedback
            graphics.clear();
            graphics.lineStyle(8, 0xff6b6b, 1); // Red color for incorrect strokes

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

            // Show feedback
            guideText.setText('Not quite right. Try again!');
            guideText.setStyle({
                backgroundColor: '#ff6b6b',
                color: '#ffffff'
            });

            // Auto-clear after 2 seconds to try again
            setTimeout(() => {
                clearDrawing();
            }, 2000);
        }
    }
}

function validateStroke(drawnStroke, expectedStroke) {
    if (!drawnStroke || drawnStroke.length < 3) {
        return false; // Too short to be a valid stroke
    }

    if (expectedStroke.type === 'line') {
        return validateLineStroke(drawnStroke, expectedStroke);
    } else if (expectedStroke.type === 'circle') {
        return validateCircleStroke(drawnStroke, expectedStroke);
    }

    return false;
}

function validateLineStroke(drawnStroke, expectedStroke) {
    const tolerance = 200; // Very forgiving pixel tolerance
    const expectedPoints = expectedStroke.points;

    // Check if start point is close to expected start
    const startPoint = drawnStroke[0];
    const expectedStart = expectedPoints[0];
    if (distance(startPoint, { x: expectedStart[0], y: expectedStart[1] }) > tolerance) {
        return false;
    }

    // Check if end point is close to expected end
    const endPoint = drawnStroke[drawnStroke.length - 1];
    const expectedEnd = expectedPoints[expectedPoints.length - 1];
    if (distance(endPoint, { x: expectedEnd[0], y: expectedEnd[1] }) > tolerance) {
        return false;
    }

    // For simple lines (2 points), check if the drawn path is roughly straight
    if (expectedPoints.length === 2) {
        return validateStraightLine(drawnStroke, expectedPoints[0], expectedPoints[1], tolerance);
    }

    // For complex paths, check if drawn points follow the expected path
    return validateComplexPath(drawnStroke, expectedPoints, tolerance);
}

function validateCircleStroke(drawnStroke, expectedStroke) {
    const tolerance = 150; // Very forgiving pixel tolerance for circle matching
    const expectedCenter = expectedStroke.center;
    const expectedRadius = expectedStroke.radius;

    // Check if the drawn stroke forms a roughly circular shape
    let validPointsCount = 0;
    const totalPoints = drawnStroke.length;

    for (let point of drawnStroke) {
        const distFromCenter = distance(point, { x: expectedCenter[0], y: expectedCenter[1] });

        // Check if point is within tolerance of the expected circle
        if (Math.abs(distFromCenter - expectedRadius) <= tolerance) {
            validPointsCount++;
        }
    }

    // Only need 30% of points to be close to the expected circle
    return (validPointsCount / totalPoints) >= 0.3;
}

function validateStraightLine(drawnStroke, startPoint, endPoint, tolerance) {
    // Check if most points in the drawn stroke are close to the expected line
    let validPointsCount = 0;
    const totalPoints = drawnStroke.length;

    for (let point of drawnStroke) {
        const distToLine = pointToLineDistance(
            point,
            { x: startPoint[0], y: startPoint[1] },
            { x: endPoint[0], y: endPoint[1] }
        );

        if (distToLine <= tolerance) {
            validPointsCount++;
        }
    }

    // Only need 40% of points to be close to the expected line
    return (validPointsCount / totalPoints) >= 0.4;
}

function validateComplexPath(drawnStroke, expectedPoints, tolerance) {
    // For complex paths with multiple segments, check if drawn stroke follows the general direction
    const sampledPoints = samplePoints(drawnStroke, expectedPoints.length);
    let validSegments = 0;

    for (let i = 0; i < expectedPoints.length; i++) {
        if (i < sampledPoints.length) {
            const dist = distance(sampledPoints[i], { x: expectedPoints[i][0], y: expectedPoints[i][1] });
            if (dist <= tolerance) {
                validSegments++;
            }
        }
    }

    // Only need 30% of key points to match
    return (validSegments / expectedPoints.length) >= 0.3;
}

function samplePoints(drawnStroke, numSamples) {
    if (drawnStroke.length <= numSamples) {
        return drawnStroke;
    }

    const sampledPoints = [];
    const interval = drawnStroke.length / numSamples;

    for (let i = 0; i < numSamples; i++) {
        const index = Math.floor(i * interval);
        sampledPoints.push(drawnStroke[index]);
    }

    return sampledPoints;
}

function distance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function pointToLineDistance(point, lineStart, lineEnd) {
    const A = point.x - lineStart.x;
    const B = point.y - lineStart.y;
    const C = lineEnd.x - lineStart.x;
    const D = lineEnd.y - lineStart.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;

    if (lenSq === 0) {
        return distance(point, lineStart);
    }

    let param = dot / lenSq;

    let xx, yy;

    if (param < 0) {
        xx = lineStart.x;
        yy = lineStart.y;
    } else if (param > 1) {
        xx = lineEnd.x;
        yy = lineEnd.y;
    } else {
        xx = lineStart.x + param * C;
        yy = lineStart.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;

    return Math.sqrt(dx * dx + dy * dy);
}

function drawStrokeGuide() {
    if (!currentCharacter || currentStroke >= currentCharacter.strokeCount) return;

    referenceGuideGraphics.clear();

    // Scale and offset for reference box
    const scale = 0.25; // Scale down to fit in reference box
    const offsetX = 720; // Right side of reference box
    const offsetY = 480; // Center of reference box
    const baseOffsetX = -300 * scale; // Center the scaled strokes
    const baseOffsetY = -300 * scale;

    // Draw previous strokes in light gray
    referenceGuideGraphics.lineStyle(2, 0xcccccc, 0.5);
    for (let i = 0; i < currentStroke; i++) {
        const stroke = currentCharacter.strokes[i];
        if (stroke.type === 'line') {
            referenceGuideGraphics.beginPath();
            const startX = offsetX + baseOffsetX + (stroke.points[0][0] * scale);
            const startY = offsetY + baseOffsetY + (stroke.points[0][1] * scale);
            referenceGuideGraphics.moveTo(startX, startY);
            for (let j = 1; j < stroke.points.length; j++) {
                const x = offsetX + baseOffsetX + (stroke.points[j][0] * scale);
                const y = offsetY + baseOffsetY + (stroke.points[j][1] * scale);
                referenceGuideGraphics.lineTo(x, y);
            }
            referenceGuideGraphics.strokePath();
        } else if (stroke.type === 'circle') {
            const centerX = offsetX + baseOffsetX + (stroke.center[0] * scale);
            const centerY = offsetY + baseOffsetY + (stroke.center[1] * scale);
            const radius = stroke.radius * scale;
            referenceGuideGraphics.strokeCircle(centerX, centerY, radius);
        }
    }

    // Draw current stroke guide in yellow
    const currentStrokeData = currentCharacter.strokes[currentStroke];
    referenceGuideGraphics.lineStyle(3, 0xffd93d, 1.0);

    if (currentStrokeData.type === 'line') {
        // Draw stroke path
        referenceGuideGraphics.beginPath();
        const startX = offsetX + baseOffsetX + (currentStrokeData.points[0][0] * scale);
        const startY = offsetY + baseOffsetY + (currentStrokeData.points[0][1] * scale);
        referenceGuideGraphics.moveTo(startX, startY);
        for (let i = 1; i < currentStrokeData.points.length; i++) {
            const x = offsetX + baseOffsetX + (currentStrokeData.points[i][0] * scale);
            const y = offsetY + baseOffsetY + (currentStrokeData.points[i][1] * scale);
            referenceGuideGraphics.lineTo(x, y);
        }
        referenceGuideGraphics.strokePath();

        // Draw start point indicator
        referenceGuideGraphics.fillStyle(0xff0000, 1);
        referenceGuideGraphics.fillCircle(startX, startY, 4);

        // Draw arrow at end
        const lastIdx = currentStrokeData.points.length - 1;
        const endX = offsetX + baseOffsetX + (currentStrokeData.points[lastIdx][0] * scale);
        const endY = offsetY + baseOffsetY + (currentStrokeData.points[lastIdx][1] * scale);
        const prevX = offsetX + baseOffsetX + (currentStrokeData.points[lastIdx - 1][0] * scale);
        const prevY = offsetY + baseOffsetY + (currentStrokeData.points[lastIdx - 1][1] * scale);

        const angle = Math.atan2(endY - prevY, endX - prevX);
        referenceGuideGraphics.fillStyle(0x00ff00, 1);
        referenceGuideGraphics.fillTriangle(
            endX, endY,
            endX - 6 * Math.cos(angle - 0.5), endY - 6 * Math.sin(angle - 0.5),
            endX - 6 * Math.cos(angle + 0.5), endY - 6 * Math.sin(angle + 0.5)
        );
    } else if (currentStrokeData.type === 'circle') {
        const centerX = offsetX + baseOffsetX + (currentStrokeData.center[0] * scale);
        const centerY = offsetY + baseOffsetY + (currentStrokeData.center[1] * scale);
        const radius = currentStrokeData.radius * scale;
        referenceGuideGraphics.strokeCircle(centerX, centerY, radius);

        // Draw start point at top of circle
        referenceGuideGraphics.fillStyle(0xff0000, 1);
        referenceGuideGraphics.fillCircle(centerX, centerY - radius, 4);
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