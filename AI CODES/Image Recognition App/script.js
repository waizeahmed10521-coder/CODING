
// global variables
let classifier
let img





// load the model and image
function preload() {
    classifier = ml5.imageClassifier("MobileNet")
    img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEAsJ1YjYkIQ1jXQkPPp2_xNF6qocQIRIXCSB42rAhw&s=10") 
}



// create the canvas
function setup() {
    createCanvas(600, 400)
    background("lightgray")

    // show the image
    image(img, 0, 0, 600, 400)

    // detect the image
    classifier.classify(img,   gotResult)
}





function gotResult(results) {
    console.log(results)

    let name = results[0].label
    let possibility = results[0].confidence

    // now show on the canvas
    text(name, 50, 70)
    text(possibility, 50, 100)
}