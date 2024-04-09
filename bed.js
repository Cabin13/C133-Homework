img= ""
var modelStatus= ""
var results= []

function preload() {
    img= loadImage("bed.jpg");
}

function setup() {
    canvas= createCanvas(400, 247)
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Detecting Objects"
}

function modelLoaded() {
    console.log("model loaded")
    modelStatus= true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    else {
        console.log(results)
    }
}

function draw() {
    if (status=="") {
        for (i=0; i<objects.length; i++) {
            accuracy= floor(objects[i].confidence*100) + "%"
            fill("#6c4444")
            text(objects[i].label + " -> " + accuracy, objects[i].x, objects[i].y)
            noFill()
            stroke("#6c4444")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            }
    }
}