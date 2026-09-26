// const SpeechRecognition =
// window.SpeechRecognition || window.webkitSpeechRecognition;

// let recognition=new SpeechRecognition()
// recognition.lang="en-uk"
// recognition.lang="en-us"
// recognition.continuous=false

// // Tags from html

// let.listenBtn=document.querySelector(".listenBtn")
// let.container=document.querySelector(".container")

// // Start recognition

// listenBtn.onclick=()=>{
//     recognition.start()
// }

// // Result

// recognition.onresult=(event)=>{
//     let userColor=event.results[0][0].transcript
//     console.log(userColor)
//     container.style.background=userColor;
// }

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous=false
recognition.lang = "en-US";

let listenBtn = document.querySelector(".listenBtn");
let container = document.querySelector(".container");

listenBtn.onclick = () => {
    recognition.start();
};

recognition.onresult = (event) => {
    let userColor = event.results[0][0].transcript
        .toLowerCase()
        .trim();

    console.log(userColor);
    container.style.backgroundColor = userColor;
};