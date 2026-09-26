// setup the recognition

let recognition = new SpeechRecognition()
recognition.lang = "en-US"
recognition.continuous = false



// grab some tags from html
let listenBtn = document.querySelector(".listenBtn")
let container = document.querySelector(".container")



// start the recognition when btn is clicked
listenBtn.onclick =  ()=> {
    recognition.start()
}


// find the result

recognition.onresult =  (event)=> {
    let userColor = event.results[0][0].transcript
    console.log(userColor)
    container.style.backgroundColor = userColor
}