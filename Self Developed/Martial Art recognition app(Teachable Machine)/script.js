let classifier
let imageName=""
let modelLink="https://teachablemachine.withgoogle.com/models/IbXcXDKkB/"



async function setup() {
    // model load
    classifier=await ml5.imageClassifier(modelLink)

    // canvas
    createCanvas(400,400)
    background("white")
    // start recognition
    let img= document.querySelector("#preview")
    
    image(img, 0, 0, 400, 400)
}

// for file input 

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.onload=()=>{
            classifier.classify(preview,gotResults)
        }
    }

});

function gotResults(results){
    console.log(results)
    imageName=results[0].label
}

function draw(){
    background("white")
    textSize(40)
    color("green")
    text(imageName,60,200)
}