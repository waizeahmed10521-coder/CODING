Webcam.set({
    width: 300,
    height: 280,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90,
    flip_horiz: true,
    fps: 45
})




let startCamBtn = document.querySelector(".startCamBtn")

startCamBtn.onclick = () => {
    Webcam.attach(".cameraContainer")
}





let stopCamBtn = document.querySelector(".stopCamBtn")

stopCamBtn.onclick = () => {
    Webcam.reset()
}




// set up the speech recognition

let recognition = new SpeechRecognition()

recognition.lang = "en-US"
recognition.continuous = false



let listenBtn = document.querySelector(".listenBtn")

listenBtn.onclick = () => {
    recognition.start()
}


// now check result/user's voice command

recognition.onresult = (event) => {
    let userSpeech = event.results[0][0].transcript
    console.log(userSpeech)


    // now take picture if user wants
    if (
        userSpeech.includes("selfie") ||
        userSpeech.includes("photo") ||
        userSpeech.includes("picture")
    ) {

        // take the photo
        Webcam.snap( function(data_uri) {
            let imageTag = document.querySelector(".imageTag")
            imageTag.src = data_uri
	    } );

    }



}