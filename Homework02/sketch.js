let cvsWrapper = null;
let isStart;
let isOver;
// let bgImg;
let baseImg;
let startImg;
let gmoverImg;
// let bdImg;
let bgScale;
let baseScale;
let x1, x2;
let bg_v;
let bd_x, bd_y;
let bd_vy, a;
let bd_rot, bd_rot_a;
let assets = {};
let bran;
let bd_ram;
let wing;
let startflap;
let showup, showdown;
let pu_x, pu_y, pd_x, pd_y;

// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    // bgImg = loadImage("assets/sprites/background-day.png");
    baseImg = loadImage("assets/sprites/base.png");
    startImg = loadImage("assets/sprites/message.png")
    assets["background"] = ["day", "night"].map(
        back => loadImage(`assets/sprites/background-${back}.png`)
    );

    assets["bird"] = ["blue", "red", "yellow"].map(
        color => ["upflap", "midflap", "downflap"].map(
            flap => loadImage(`assets/sprites/${color}bird-${flap}.png`)
        )
    );
    soundFormats('ogg', 'wav');
    assets["sound"] = ["wing", "swoosh", "point", "hit", "die"].map(
        move => loadSound(`assets/audio/${move}.ogg`)
    );
    assets["pipe"] = ["upper", "lower"].map(
        place => ["green", "red"].map(
            color => loadImage(`assets/sprites/pipe-${color}-${place}.png`)
        )
    );
    gmoverImg = loadImage("assets/sprites/gameover.png");
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    // setup code below
    // createCanvas(400, 400);
    // assets.sound[0].play();
    // flapsound = setInterval( flapsound, 600);
    isStart = false;
    isOver = false;
    bran = Math.floor(Math.random() * 2);
    x1 = 0;
    bg_v = 0;
    bgScale = width / assets.background[bran].width;
    baseScale = width / baseImg.width;
    x2 = assets.background[bran].width * bgScale;
    bd_x = width / 2;
    bd_y = height / 4;
    bd_vy = 0;
    // a = 0.5;
    bd_rot = 0;
    // bd_rot_a = PI / 90;
    bd_ram = Math.floor(Math.random() * 3);
    wing = 0;
    startflap = setInterval(flap, 200);
    pu_x = width;
    pu_y = -height / 5; // assets.pipe[0][0].height;
    show_up = false;
    // pipes = setInterval(showuppipe, 2000);
    pd_x = width;
    pd_y = height - assets.pipe[1][0].height - baseImg.height;
    // pipes = setInterval(showdownpipe, 3000);
}

function start() {
    bg_v = 5;
    a = 0.5;
    bd_rot_a = PI / 90;
    pipes = setInterval(showuppipe, 2000);
    pipes = setInterval(showdownpipe, 3000);
}

function flap() {
    wing++;
    wing = wing % 3;
}

function showuppipe() {
    showup = true;
}

function showdownpipe() {
    showdown = true;
}

function draw() {
    // Render function (called per frame.)
    background(0);
    // translate(x1, y1);
    image(assets.background[bran], x1, 0, assets.background[bran].width * bgScale, assets.background[bran].height * bgScale);
    image(assets.background[bran], x2, 0, assets.background[bran].width * bgScale, assets.background[bran].height * bgScale);
    if (showdown) {
        image(assets.pipe[1][0], pd_x, pd_y);
        pd_x -= bg_v;
        if (pd_x < -assets.pipe[1][0].width) {
            showdown = false;
            pd_x = width;
        }
    }
    if (showup) {
        image(assets.pipe[0][0], pu_x, pu_y);
        pu_x -= bg_v;
        // console.log(pu_x);
        if (pu_x < -assets.pipe[0][0].width) {
            showup = false;
            pu_x = width;
        }
    }
    image(baseImg, 0, height - baseImg.height * baseScale, baseImg.width * baseScale, baseImg.height * baseScale);
    if (!isStart) {
        image(startImg, width / 2 - startImg.width / 2, height / 3 - startImg.height / 2);
    }
    else {
        x1 -= bg_v;
        x2 -= bg_v;
        if (x1 < -assets.background[bran].width * bgScale) {
            x1 = width - 10;
        }
        if (x2 < -assets.background[bran].width * bgScale) {
            x2 = width - 10;
        }
        if (bd_y > (height - baseImg.height * baseScale - assets.bird[bd_ram][wing].height)
            || ((pu_x < bd_x + assets.bird[bd_ram][wing].width) && (bd_x < pu_x + assets.pipe[0][0].width)) && (bd_y < pu_y + assets.pipe[0][0].height)
            || ((pd_x < bd_x + assets.bird[bd_ram][wing].width - 5) && (bd_x < pd_x + assets.pipe[1][0].width)) && (bd_y + assets.bird[bd_ram][wing].height > pd_y)
            || bd_y < 0) {
            GameOver();
        }
        bd_vy += a;
        bd_y += bd_vy;
        bd_rot += bd_rot_a;
        translate(bd_x, bd_y);
        rotate(bd_rot);
        image(assets.bird[bd_ram][wing], 0, 0);
        translate(0, 0);
    }
}

function GameOver() {
    isOver = true;
    // bd_y = height - baseImg.height * baseScale - assets.bird[bd_ram][wing].height;
    a = 0;
    bd_vy = 0;
    bg_v = 0;
    bd_rot_a = 0;
    startflap = clearInterval(startflap);
    // flapsound = clearInterval(flapsound);
    image(gmoverImg, width / 2 - gmoverImg.width / 2, height / 2.8);
}

function keyPressed() {
    if (keyCode === 32) {
        if (!isStart) {
            isStart = true;
            start();
        }
        else if (!isOver) {
            bd_vy = -10;
            bd_rot = - PI / 4;
            assets.sound[0].play();
        }
    }
}
