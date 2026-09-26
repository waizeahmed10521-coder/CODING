
// global variables
let classifier
let canvas
let button
let para1
let para2
let para3
let para4
let para5



// load the model
function preload() {
    classifier = ml5.imageClassifier("DoodleNet")
}




// setup the canvas and others
function setup() {
    canvas = createCanvas(280, 280)
    background("lightgray")


    // now identify the canvas
    classifier.classifyStart(canvas,  gotResult)

    // create a button to clear the canvas
    button = createButton("Clear")
    // call the clear canvas function on btn click
    button.mousePressed(clea)
    
    // make paras to show the results
    para1 = createP("Result 1")
    para2 = createP("Result 2")
    para3 = createP("Result 3")
    para4 = createP("Result 4")
    para5 = createP("Result 5")

    
}



// function to draw anything
function draw() {

    // set the pen color and size
    stroke("black")
    strokeWeight(18)

    if (mouseIsPressed) {
        line(pmouseX, pmouseY,   mouseX, mouseY)
    }


}








// function to clear the canvas
function clearTheCanvas() {
    background("lightgrey")
}






function gotResult(results) {

    console.log(results)

    let result1 = results[0].label
    let result2 = results[1].label
    let result3 = results[2].label
    let result4 = results[3].label
    let result5 = results[4].label


    // now show these in the paragraphs
    para1.html(result1)
    para2.html(result2)
    para3.html(result3)
    para4.html(result4)
    para5.html(result5)

}