let xs = []
let ys = []

let is_animating = false;
let text_is_animating = false;

let s = function (sketch) {
    sketch.setup = function () {
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth, h);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        canvas.style.position = "fixed"
        canvas.style.pointerEvents = "none"
        canvas.style.zIndex = "9999999999"
    }

    sketch.draw = function () {
        // Starte Animation nach 500 Frames
        if (sketch.frameCount === 500) {
            is_animating = true;
        }

         // Starte TextAnimation nach 700 Frames
         if (sketch.frameCount === 900) {
            text_is_animating = true;
      
        }        
        // Animation ausführen, falls aktiviert
        if (is_animating === true) {
            sketch.animation();
        }

        // TextAnimation ausführen, falls aktiviert
        if (text_is_animating === true) {
            sketch.textAnimation();
        }
     
        sketch.createButton('ja sehr gern!');
        button.position (400,400);
    }

    // Die ellipsen-Animation
    sketch.animation = function () {
        sketch.clear();
        let posX = Math.random() * sketch.width;
        let posY = Math.random() * sketch.height;
        xs.push(posX)
        ys.push(posY)
        sketch.frameRate(60);

        sketch.fill(255, 250, 250, 10);
        sketch.noStroke();
        for (let i = 0; i < xs.length; i++) {
            let x = xs[i];
            let y = ys[i];
            sketch.ellipse(x, y, 400);
        }
    }
    // Die Text Animation
    let XPOS = sketch.windowWidth / 2;
    let YPOS = 0;
   
    sketch.textAnimation = function () {
        sketch.textAlign(sketch.CENTER, sketch.TOP);
        sketch.textLeading(60)
        sketch.noStroke();
        sketch.fill(10);
        sketch.textSize(30);
        sketch.text("take a break, eat some cake\n(づ๑•ᴗ•๑)づ🎂", XPOS,YPOS);
        YPOS = sketch.constrain(YPOS+1, 0, sketch.windowHeight/2)

    }

    // Stoppt Animation bei Mausklick
    sketch.mouseClicked = function () {
        is_animating = !is_animating;
        text_is_animating = !text_is_animating;

        if (!is_animating,text_is_animating) {
            // Stoppen – z.B. nur pausieren
        } else {
            // Neustart – alles zurücksetzen
            xs = [];
            ys = [];
            sketch.clear();  // Falls du das Canvas leeren willst
        }

    }
    
}

let myp5 = new p5(s);
