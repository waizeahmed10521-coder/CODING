let classifier
let soundName=""
let modelLink="https://teachablemachine.withgoogle.com/models/hQgX9h_Lx/"

async function setup(){
    // load the model
    classifier=await ml5.soundClassifier(modelLink)

    // canvas
    createCanvas(400,400)
    background("black")
    // sound identify
    classifier.classifyStart(gotresults)
}

function gotresults(results){
    console.log(results)
    soundName=results[0].label
}

function draw(){
    background("black")
    textSize(40)
    stroke("white")
    text(soundName,60,200)
}