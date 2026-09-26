	Webcam.set({
		width: 520,
		height: 400,
		dest_width: 640,
		dest_height: 480,
		image_format: 'jpeg',
		jpeg_quality: 90,
		force_flash: false,
		flip_horiz: true,
		fps: 1000
	});

let startCamBtn=document.querySelector(".startCamBtn")

startCamBtn.onclick=()=>{
    Webcam.attach(".containerCanvas")
}

let stopCamBtn=document.querySelector(".stopCamBtn")

stopCamBtn.onclick=()=>{
    webcam.reset()
}

// recognition setup

let recognition=new SpeechRecognition()

recognition.lang="en-US"
recognition.continuous=false

let listenBtn=document.querySelector(".listenBtn")

listenBtn.onclick=()=>{
    recognition.start()
}

// result/voice command

recognition.onresult = (event) => {
    let userSpeech = event.results[0][0].transcript
    console.log(userSpeech)


    // picture if user wants 
    if (
        userSpeech.includes("selfie") ||
        userSpeech.includes("photo") ||
        userSpeech.includes("picture")||
        userSpeech.includes("snap")
    ) {

        // photo take
        Webcam.snap( function(data_uri) {
            let imageTag = document.querySelector(".imageTag")
            imageTag.src = data_uri
	    } );

    }
}