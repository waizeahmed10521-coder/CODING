
// setup speech recognition
let recognition = new SpeechRecognition()
recognition.lang = "en-US"
recognition.continuous = false



// grab necessary tags from html file
let listenBtn = document.querySelector(".listenBtn")
let humanPara = document.querySelector(".humanPara")
let computerPara = document.querySelector(".computerPara")


// now start the recognition on button click

listenBtn.onclick =  ()=> {
    recognition.start()
    listenBtn.textContent = "Listening.."
}


// change the btn text again when recognition ends
recognition.onend = () => {
    listenBtn.textContent = "Listen"
}



// get the result (what human said)
recognition.onresult =  (event)=> {
    let userSpeech = event.results[0][0].transcript
    // firstly show the text
    humanPara.textContent = userSpeech
    // secondly give response based on the userSpeech
    giveResponse(userSpeech)


}





// function to convert text to voice
function textToSpeech(text) {
    let utterableText = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterableText)
}



function giveResponse(text) {

    // 1st response
    if (
        text == "hi"  || 
        text == "hello" ||
        text == "hey"
    ) {
        let response = "Hello, How are you?"
        // give the response in voice
        textToSpeech(response)
        // give the response as text in computer para
        computerPara.textContent = response
    }



    // 2nd response
    else if (
        text.includes("good") ||
        text.includes("fine") ||
        text.includes("great")
    ) {
        let response = "Glad to hear"
        textToSpeech(response)
        computerPara.textContent = response
    }


    // 3rd response
    else if (
        text.includes("what about you") ||
        text.includes("how are you") ||
        text.includes("what's up") ||
        text.includes("how are you doing")
    ) {
        let response = "I'm doing well, thank you for asking!"
        textToSpeech(response)
        computerPara.textContent = response
    }





}