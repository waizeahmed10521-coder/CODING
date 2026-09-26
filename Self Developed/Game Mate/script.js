// grab all tags from html

let container=document.querySelector(".container")
let tittle=document.querySelector(".tittle")
let tittle2=document.querySelector(".tittle2")
let talkBtn=document.querySelector(".talkBtn")
let messageContainer=document.querySelector(".messageContainer")
let humanPara=document.querySelector(".humanPara")
let gameMatePara=document.querySelector(".gameMatePara")

// set the recognition

let recognition=new SpeechRecognition()
recognition.lang="en-UK"
recognition.lang="en-US"
recognition.continuous=false

// start recognition

talkBtn.onclick=()=>{
    recognition.start()
    talkBtn.textContent="Listening.."
}

// talk btn change on end

recognition.onend=()=>{
    talkBtn.textContent="TALK HERE"
}

// get result 

recognition.onresult=(event)=>{
    let userSpeech = event.results[0][0].transcript.toLowerCase().replace(/\s/g, "")
    // now show the text
    humanPara.textContent=userSpeech
    // game mate responce
    giveResponce(userSpeech)
    // show user speech
    humanPara.textContent=userSpeech;
}

// text to speech

function textToSpeech(text){
    let utterableText=new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterableText)
}

function giveResponce(text){
    // GTA-V
    if(
        text.includes("gta5")||
        text.includes("gtav")
    ){
        let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core 2 Quad Q6600 @ 2.40GHz / AMD Phenom 9850 @ 2.5GHz\nMemory (RAM): 4GB\nVideo Card (GPU): NVIDIA 9800 GT (1GB) / AMD HD 4870 (1GB)\nStorage: 125GB HDD"
        textToSpeech(responce);
        gameMatePara.textContent=responce;
    }
    // GTA-IV
if(
    text.includes("gta4")||
    text.includes("gtaiv")
){
    let responce="OS: Windows 7\nProcessor (CPU): Intel Core 2 Duo 1.8GHz / AMD Athlon X2 64 2.4GHz\nMemory (RAM): 1.5GB\nVideo Card (GPU): 256MB NVIDIA 7900 / ATI X1900\nStorage: 22GB HDD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GTA-SAN-ANDREAS
if(
    text.includes("gtasanandreas")||
    text.includes("gtasa")
){
    let responce="OS: Windows 2000/XP\nProcessor (CPU): Pentium III 1GHz\nMemory (RAM): 256MB\nVideo Card (GPU): 64MB DirectX 9 compatible GPU\nStorage: 4.7GB HDD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GTA-VICE-CITY
if(
    text.includes("gtavicecity")||
    text.includes("vicecity")
){
    let responce="OS: Windows 98/ME/2000/XP\nProcessor (CPU): Pentium III 800MHz\nMemory (RAM): 128MB\nVideo Card (GPU): 32MB DirectX 9 compatible GPU\nStorage: 1.5GB HDD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GTA-III
if(
    text.includes("gta3")||
    text.includes("gtaiii")
){
    let responce="OS: Windows 98/ME/2000/XP\nProcessor (CPU): Pentium III 700MHz\nMemory (RAM): 128MB\nVideo Card (GPU): 32MB DirectX 9 compatible GPU\nStorage: 500MB HDD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// MINECRAFT
if(
    text.includes("minecraft")||
    text.includes("minecraftjava")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3 / AMD equivalent\nMemory (RAM): 4GB\nVideo Card (GPU): Intel HD Graphics / equivalent\nStorage: 4GB+"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// VALORANT
if(
    text.includes("valorant")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core 2 Duo E8400\nMemory (RAM): 4GB\nVideo Card (GPU): Intel HD Graphics 4000\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// COUNTER STRIKE 2
if(
    text.includes("cs2")||
    text.includes("counterstrike2")
){
    let responce="OS: Windows 10\nProcessor (CPU): Intel Core i5-750\nMemory (RAM): 8GB\nVideo Card (GPU): DirectX 11 compatible GPU with 1GB VRAM\nStorage: 85GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// TEAM FORTRESS 2
if(
    text.includes("tf2")||
    text.includes("teamfortress2")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 512MB\nVideo Card (GPU): DirectX 8.1 compatible GPU\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// LEFT 4 DEAD 2
if(
    text.includes("left4dead2")||
    text.includes("l4d2")
){
    let responce="OS: Windows 7 32/64-bit\nProcessor (CPU): Pentium 4 3.0GHz\nMemory (RAM): 2GB\nVideo Card (GPU): 128MB Shader Model 2.0 compatible GPU\nStorage: 13GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PORTAL 2
if(
    text.includes("portal2")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Dual Core 2.0GHz\nMemory (RAM): 2GB\nVideo Card (GPU): DirectX 9 compatible GPU\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HALF LIFE 2
if(
    text.includes("halflife2")||
    text.includes("hl2")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 512MB\nVideo Card (GPU): DirectX 8.1 compatible GPU\nStorage: 6.5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// TERRARIA
if(
    text.includes("terraria")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 2.0GHz Processor\nMemory (RAM): 2.5GB\nVideo Card (GPU): 128MB Video Memory\nStorage: 200MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// STARDEW VALLEY
if(
    text.includes("stardewvalley")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 2GHz Processor\nMemory (RAM): 2GB\nVideo Card (GPU): 256MB Video Memory\nStorage: 500MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// AMONG US
if(
    text.includes("amongus")
){
    let responce="OS: Windows 7 SP1+\nProcessor (CPU): 1GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): DirectX 10 compatible GPU\nStorage: 250MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BRAWLHALLA
if(
    text.includes("brawlhalla")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 2GB\nVideo Card (GPU): 512MB Video Memory\nStorage: 800MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// UNTURNED
if(
    text.includes("unturned")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 3GHz Processor\nMemory (RAM): 8GB\nVideo Card (GPU): NVIDIA GTX 460\nStorage: 4GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ROBLOX
if(
    text.includes("roblox")
){
    let responce="OS: Windows 10/11\nProcessor (CPU): 1.6GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): DirectX 10 compatible GPU\nStorage: 20MB+"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// EURO TRUCK SIMULATOR 2
if(
    text.includes("eurotruck")||
    text.includes("ets2")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Dual Core 2.4GHz\nMemory (RAM): 4GB\nVideo Card (GPU): NVIDIA GTX 460 / equivalent\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// TRACKMANIA NATIONS FOREVER
if(
    text.includes("trackmania")||
    text.includes("trackmanianations")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 1.6GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): 256MB GPU\nStorage: 750MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// NEED FOR SPEED MOST WANTED
if(
    text.includes("nfsmw")||
    text.includes("needforspeedmostwanted")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Pentium 4\nMemory (RAM): 1GB\nVideo Card (GPU): 128MB GPU\nStorage: 3GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// NEED FOR SPEED CARBON
if(
    text.includes("nfscarbon")||
    text.includes("needforspeedcarbon")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): 128MB GPU\nStorage: 6GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// NFS HOT PURSUIT
if(
    text.includes("nfshotpursuit")||
    text.includes("hotpursuit")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 7800\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FAR CRY 2
if(
    text.includes("farcry2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): 256MB GPU\nStorage: 12GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FAR CRY 3
if(
    text.includes("farcry3")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo E6700\nMemory (RAM): 4GB\nVideo Card (GPU): NVIDIA 8800 GTX\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ASSASSINS CREED
if(
    text.includes("assassinscreed")||
    text.includes("ac1")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): 256MB GPU\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ASSASSINS CREED 2
if(
    text.includes("assassinscreed2")||
    text.includes("ac2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8800\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// SKYRIM
if(
    text.includes("skyrim")||
    text.includes("elderscrollsskyrim")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Dual Core 2GHz\nMemory (RAM): 2GB\nVideo Card (GPU): 512MB GPU\nStorage: 6GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FALLOUT 3
if(
    text.includes("fallout3")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): 256MB GPU\nStorage: 7GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FALLOUT NEW VEGAS
if(
    text.includes("falloutnewvegas")||
    text.includes("newvegas")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): 256MB GPU\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BIOSHOCK
if(
    text.includes("bioshock")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.4GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): 128MB GPU\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BIOSHOCK INFINITE
if(
    text.includes("bioshockinfinite")
){
    let responce="OS: Windows Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): Radeon HD 3870\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BORDERLANDS 2
if(
    text.includes("borderlands2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.4GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8500 GT\nStorage: 13GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DISHONORED
if(
    text.includes("dishonored")
){
    let responce="OS: Windows Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 3GB\nVideo Card (GPU): GeForce GTX 460\nStorage: 9GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// SLEEPING DOGS
if(
    text.includes("sleepingdogs")
){
    let responce="OS: Windows Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8800 GT\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// MAFIA 2
if(
    text.includes("mafia2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8600\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// MAX PAYNE 3
if(
    text.includes("maxpayne3")
){
    let responce="OS: Windows 7/Vista\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8600 GT\nStorage: 35GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// TOMB RAIDER 2013
if(
    text.includes("tombraider")||
    text.includes("tombraider2013")
){
    let responce="OS: Windows Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 1GB\nVideo Card (GPU): Radeon HD 2600 XT\nStorage: 12GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ROCKET LEAGUE
if(
    text.includes("rocketleague")||
    text.includes("rocket league")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 2GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): NVIDIA GTX 260\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PALADINS
if(
    text.includes("paladins")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 4GB\nVideo Card (GPU): GeForce 8800 GT\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DOTA 2
if(
    text.includes("dota2")||
    text.includes("dota")
){
    let responce="OS: Windows 7/8/10/11\nProcessor (CPU): Dual Core 2.8GHz\nMemory (RAM): 4GB\nVideo Card (GPU): DirectX 9 compatible GPU\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WARFRAME
if(
    text.includes("warframe")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 4GB\nVideo Card (GPU): GeForce 8600 GT\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DON'T STARVE TOGETHER
if(
    text.includes("dontstarvetogether")||
    text.includes("dst")
){
    let responce="OS: Windows 7/Vista/XP\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): Radeon HD 5450\nStorage: 3GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HADES
if(
    text.includes("hades")
){
    let responce="OS: Windows 7 SP1\nProcessor (CPU): Dual Core 2.4GHz\nMemory (RAM): 4GB\nVideo Card (GPU): 1GB VRAM GPU\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HOLLOW KNIGHT
if(
    text.includes("hollowknight")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo E5200\nMemory (RAM): 4GB\nVideo Card (GPU): GeForce 9800 GTX\nStorage: 9GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CUPHEAD
if(
    text.includes("cuphead")
){
    let responce="OS: Windows 7\nProcessor (CPU): Intel Core 2 Duo E8400\nMemory (RAM): 4GB\nVideo Card (GPU): 1GB VRAM GPU\nStorage: 4GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FORTNITE
if(
    text.includes("fortnite")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-3225\nMemory (RAM): 8GB\nVideo Card (GPU): Intel HD 4000\nStorage: 30GB+"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// APEX LEGENDS
if(
    text.includes("apexlegends")||
    text.includes("apex")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i3-6300\nMemory (RAM): 6GB\nVideo Card (GPU): NVIDIA GTX 950\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// RED DEAD REDEMPTION 2
if(
    text.includes("reddeadredemption2")||
    text.includes("rdr2")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): NVIDIA GTX 770 2GB / AMD Radeon R9 280 3GB\nStorage: 150GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CYBERPUNK 2077
if(
    text.includes("cyberpunk2077")||
    text.includes("cyberpunk")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i7-6700 / AMD Ryzen 5 1600\nMemory (RAM): 12GB\nVideo Card (GPU): NVIDIA GTX 1060 6GB / AMD Radeon RX 580 8GB\nStorage: 70GB SSD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}



// PUBG BATTLEGROUNDS
if(
    text.includes("pubg")||
    text.includes("pubgbattlegrounds")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4430 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): NVIDIA GTX 960 2GB / AMD Radeon R7 370 2GB\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// THE WITCHER 3
if(
    text.includes("witcher3")||
    text.includes("thewitcher3")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Phenom II X4 940\nMemory (RAM): 6GB\nVideo Card (GPU): NVIDIA GTX 660 / AMD Radeon HD 7870\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ARK SURVIVAL EVOLVED
if(
    text.includes("ark")||
    text.includes("arksurvivalevolved")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-8320\nMemory (RAM): 8GB\nVideo Card (GPU): NVIDIA GTX 670 2GB / AMD Radeon HD 7870 2GB\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// RUST
if(
    text.includes("rust")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600 / AMD Ryzen 5 1400\nMemory (RAM): 12GB\nVideo Card (GPU): GTX 1060 6GB / RX 580 8GB\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ELDEN RING
if(
    text.includes("eldenring")||
    text.includes("elden")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-8400 / AMD Ryzen 3 3300X\nMemory (RAM): 12GB\nVideo Card (GPU): GTX 1060 3GB / AMD RX 580 4GB\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HOGWARTS LEGACY
if(
    text.includes("hogwartslegacy")||
    text.includes("hogwarts")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600 / AMD Ryzen 5 1400\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 960 4GB / RX 470 4GB\nStorage: 85GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// OVERWATCH 2
if(
    text.includes("overwatch2")||
    text.includes("overwatch")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3 / AMD Phenom X3 8650\nMemory (RAM): 6GB\nVideo Card (GPU): NVIDIA GTX 600 series / AMD Radeon HD 7000 series\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CALL OF DUTY WARZONE
if(
    text.includes("warzone")||
    text.includes("callofdutywarzone")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-6100 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / AMD Radeon RX 470\nStorage: 125GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CALL OF DUTY BLACK OPS III
if(
    text.includes("blackops3")||
    text.includes("codblackops3")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i3-530 / AMD Phenom II X4 810\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 470 / Radeon HD 6970\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CALL OF DUTY MODERN WARFARE
if(
    text.includes("codmodernwarfare")||
    text.includes("modernwarfare2019")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4340 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1650 / Radeon HD 7950\nStorage: 175GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BATTLEFIELD 1
if(
    text.includes("battlefield1")||
    text.includes("bf1")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i5-6600 / AMD FX-6350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 2GB / Radeon HD 7850 2GB\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BATTLEFIELD 4
if(
    text.includes("battlefield4")||
    text.includes("bf4")
){
    let responce="OS: Windows 8 64-bit\nProcessor (CPU): Intel Core 2 Duo 2.4GHz / AMD Athlon X2 2.8GHz\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 560 / Radeon HD 6950\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BATTLEFIELD V
if(
    text.includes("battlefield5")||
    text.includes("battlefieldv")||
    text.includes("bf5")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD FX-8350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 3GB / RX 560 4GB\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// RAINBOW SIX SIEGE
if(
    text.includes("rainbowsixsiege")||
    text.includes("r6siege")||
    text.includes("r6")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-560 / AMD Phenom II X4 945\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 460 / Radeon HD 5870\nStorage: 61GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// LEAGUE OF LEGENDS
if(
    text.includes("leagueoflegends")||
    text.includes("lol")
){
    let responce="OS: Windows 10/11\nProcessor (CPU): Intel Core i3-530 / AMD A6-3650\nMemory (RAM): 2GB\nVideo Card (GPU): Intel HD Graphics 4600 / AMD Radeon HD 6570\nStorage: 16GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GENSHIN IMPACT
if(
    text.includes("genshin")||
    text.includes("genshinimpact")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5 or equivalent\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1030 / equivalent\nStorage: 110GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PALWORLD
if(
    text.includes("palworld")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-3570K / AMD equivalent\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1050 2GB / Radeon RX 470\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// LETHAL COMPANY
if(
    text.includes("lethalcompany")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 / equivalent\nStorage: 1GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FALL GUYS
if(
    text.includes("fallguys")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5 / AMD equivalent\nMemory (RAM): 8GB\nVideo Card (GPU): NVIDIA GTX 660 / AMD Radeon HD 7950\nStorage: 2GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HUMAN FALL FLAT
if(
    text.includes("humanfallflat")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core2 Duo E6750\nMemory (RAM): 4GB\nVideo Card (GPU): GeForce GT 740 / Radeon HD 5770\nStorage: 2GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// THE SIMS 4
if(
    text.includes("sims4")||
    text.includes("thesims4")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-3220 / AMD Ryzen 3 1200\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 650 / Radeon HD 7750\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PAYDAY 2
if(
    text.includes("payday2")
){
    let responce="OS: Windows 7\nProcessor (CPU): 2GHz Intel Dual Core\nMemory (RAM): 4GB\nVideo Card (GPU): NVIDIA 8800 / Radeon HD 2600\nStorage: 83GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DEAD BY DAYLIGHT
if(
    text.includes("deadbydaylight")||
    text.includes("dbd")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4170 / AMD FX-8300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 460 / AMD HD 6850\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PHASMOPHOBIA
if(
    text.includes("phasmophobia")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4590 / AMD Ryzen 5 1500X\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / AMD Radeon R9 290\nStorage: 21GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// SUBNAUTICA
if(
    text.includes("subnautica")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Haswell 2.5GHz\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 550 Ti / Radeon 7750\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// SUBNAUTICA BELOW ZERO
if(
    text.includes("subnauticabelowzero")||
    text.includes("belowzero")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3 / AMD Ryzen 3\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / Radeon 570\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DYING LIGHT
if(
    text.includes("dyinglight")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-2500 / AMD FX-8320\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 560 / Radeon HD 6870\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DYING LIGHT 2
if(
    text.includes("dyinglight2")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-9100 / Ryzen 3 2300X\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 560\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// RESIDENT EVIL 2
if(
    text.includes("residentevil2")||
    text.includes("re2")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260x\nStorage: 26GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// RESIDENT EVIL 4
if(
    text.includes("residentevil4")||
    text.includes("re4")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-7500 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 560\nStorage: 67GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DEVIL MAY CRY 5
if(
    text.includes("devilmaycry5")||
    text.includes("dmc5")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260x\nStorage: 35GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// MONSTER HUNTER WORLD
if(
    text.includes("monsterhunterworld")||
    text.includes("mhw")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260x\nStorage: 52GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DARK SOULS III
if(
    text.includes("darksouls3")||
    text.includes("ds3")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i3-2100 / AMD FX-6300\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 750 Ti / Radeon HD 7950\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// SEKIRO
if(
    text.includes("sekiro")||
    text.includes("sekiroshadowsdietwice")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i3-2100 / AMD FX-6300\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 760 / Radeon HD 7950\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FORZA HORIZON 4
if(
    text.includes("forzahorizon4")||
    text.includes("fh4")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4170 / AMD FX-6120\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 650 Ti / Radeon R7 250X\nStorage: 80GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FORZA HORIZON 5
if(
    text.includes("forzahorizon5")||
    text.includes("fh5")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / Radeon RX 470\nStorage: 110GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// EA SPORTS FC 24
if(
    text.includes("fc24")||
    text.includes("eafc24")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 570\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// FIFA 23
if(
    text.includes("fifa23")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 570\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// STAR WARS JEDI FALLEN ORDER
if(
    text.includes("jedifallenorder")||
    text.includes("fallenorder")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i3-3220 / AMD FX-6100\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 650 / Radeon HD 7750\nStorage: 55GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DOOM
if(
    text.includes("doom")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-8320\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 670 2GB / Radeon HD 7870 2GB\nStorage: 55GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// DOOM ETERNAL
if(
    text.includes("doometernal")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4430 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / Radeon R9 280\nStorage: 80GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HITMAN
if(
    text.includes("hitman")||
    text.includes("hitman2016")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Phenom II X4 940\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HITMAN 2
if(
    text.includes("hitman2")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Phenom II X4 940\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ASSASSIN'S CREED ORIGINS
if(
    text.includes("assassinscreedorigins")||
    text.includes("acorigins")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-6350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon R9 270\nStorage: 42GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ASSASSIN'S CREED ODYSSEY
if(
    text.includes("assassinscreedodyssey")||
    text.includes("acodyssey")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon R9 285\nStorage: 46GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WATCH DOGS
if(
    text.includes("watchdogs")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core 2 Quad Q8400 / AMD Phenom II X4 940\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 460 / Radeon HD 5850\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WATCH DOGS 2
if(
    text.includes("watchdogs2")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400S / AMD FX-6120\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// CONTROL
if(
    text.includes("control")
){
    let responce="OS: Windows 7/10 64-bit\nProcessor (CPU): Intel Core i5-4690 / AMD FX-4350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 780 / Radeon R9 280X\nStorage: 42GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// METRO EXODUS
if(
    text.includes("metroexodus")||
    text.includes("metro")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-4440 / AMD FX-8370\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 670 / Radeon HD 7870\nStorage: 59GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BORDERLANDS 3
if(
    text.includes("borderlands3")
){
    let responce="OS: Windows 7/10 64-bit\nProcessor (CPU): Intel Core i5-3570 / AMD FX-8350\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 680 / Radeon HD 7970\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// PAYDAY 3
if(
    text.includes("payday3")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-9400F / AMD Ryzen 5 2600\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1650 / RX 570\nStorage: 65GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// A PLAGUE TALE INNOCENCE
if(
    text.includes("aplaguetale")||
    text.includes("plaguetale")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4690 / AMD FX-8300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 101 - MORTAL KOMBAT 11
if(
    text.includes("mortalkombat11")||
    text.includes("mk11")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-7500 / AMD Ryzen 5 1400\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1060 / Radeon RX 580\nStorage: 110GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 102 - TEKKEN 7
if(
    text.includes("tekken7")||
    text.includes("tekken")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i3-4160\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 2GB / GTX 750 Ti 2GB\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 103 - STREET FIGHTER V
if(
    text.includes("streetfighter5")||
    text.includes("streetfighterv")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i3-4160\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 480 / GTX 570 / GTX 670\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 104 - DRAGON BALL FIGHTERZ
if(
    text.includes("dragonballfighterz")||
    text.includes("fighterz")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-3470\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 650 Ti / Radeon HD 6870\nStorage: 6GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 105 - DARK SOULS REMASTERED
if(
    text.includes("darksoulsremastered")||
    text.includes("darksouls1")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core i5-2300 / AMD FX-6300\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 460 / Radeon HD 6870\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 106 - DARK SOULS II
if(
    text.includes("darksouls2")||
    text.includes("ds2")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo E8500\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 465 / Radeon HD 6870\nStorage: 23GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 107 - BIOSHOCK 2
if(
    text.includes("bioshock2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.4GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): NVIDIA 7800 GT / Radeon X1900\nStorage: 11GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 108 - DEUS EX HUMAN REVOLUTION
if(
    text.includes("deusex")||
    text.includes("deusexhumanrevolution")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): Radeon HD 3600 / GeForce 8600\nStorage: 17GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 109 - MIRROR'S EDGE
if(
    text.includes("mirrorsedge")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo\nMemory (RAM): 1GB\nVideo Card (GPU): GeForce 6800 / Radeon X1600\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 110 - MIRROR'S EDGE CATALYST
if(
    text.includes("mirrorsedgecatalyst")||
    text.includes("mecatalyst")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i3-3250 / AMD FX-6350\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 650 Ti / Radeon R9 270X\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 111 - BATMAN ARKHAM ASYLUM
if(
    text.includes("batmanarkhamasylum")||
    text.includes("arkhamasylum")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Pentium 4 3GHz\nMemory (RAM): 1GB\nVideo Card (GPU): NVIDIA 6600 / Radeon X1300\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 112 - BATMAN ARKHAM CITY
if(
    text.includes("batmanarkhamcity")||
    text.includes("arkhamcity")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo 2.4GHz\nMemory (RAM): 2GB\nVideo Card (GPU): GTX 460 / Radeon HD 6850\nStorage: 17GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 113 - BATMAN ARKHAM KNIGHT
if(
    text.includes("batmanarkhamknight")||
    text.includes("arkhamknight")
){
    let responce="OS: Windows 7/8.1 64-bit\nProcessor (CPU): Intel Core i5-2500K\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 2GB\nStorage: 45GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 114 - WATCH DOGS LEGION
if(
    text.includes("watchdogslegion")||
    text.includes("wdlegion")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 480\nStorage: 45GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 115 - FAR CRY 4
if(
    text.includes("farcry4")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-750 / AMD Phenom II X4 955\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 460 / Radeon HD 5850\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 116 - FAR CRY 5
if(
    text.includes("farcry5")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 670 / Radeon R9 270\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 117 - FAR CRY 6
if(
    text.includes("farcry6")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 460\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 118 - ASSASSIN'S CREED UNITY
if(
    text.includes("assassinscreedunity")||
    text.includes("acunity")
){
    let responce="OS: Windows 7/8.1 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD FX-8350\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 680 / Radeon HD 7970\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 119 - ASSASSIN'S CREED SYNDICATE
if(
    text.includes("assassinscreedsyndicate")||
    text.includes("acsyndicate")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400S / AMD FX-6350\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 / Radeon R9 270\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 120 - ASSASSIN'S CREED BLACK FLAG
if(
    text.includes("assassinscreedblackflag")||
    text.includes("acblackflag")
){
    let responce="OS: Windows 7/8.1/10\nProcessor (CPU): Intel Core 2 Quad Q8400\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 260 / Radeon HD 4870\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 121 - JUST CAUSE 2
if(
    text.includes("justcause2")
){
    let responce="OS: Windows Vista/7\nProcessor (CPU): Dual Core 2.6GHz\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8800 / Radeon HD 2600\nStorage: 7GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 122 - JUST CAUSE 3
if(
    text.includes("justcause3")
){
    let responce="OS: Windows Vista/7/8.1 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Phenom II X6 1075T\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 670 / Radeon HD 7870\nStorage: 54GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 123 - JUST CAUSE 4
if(
    text.includes("justcause4")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-8350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R9 270\nStorage: 59GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 124 - MAFIA DEFINITIVE EDITION
if(
    text.includes("mafiadefinitiveedition")||
    text.includes("mafiadefinitive")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-2550K / AMD FX-8120\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 / Radeon R9 270\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 125 - MAFIA III
if(
    text.includes("mafia3")
){
    let responce="OS: Windows 7 64-bit\nProcessor (CPU): Intel Core 2 Quad Q6600 / AMD Athlon II X4 750K\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 650 / Radeon HD 7870\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 126 - LA NOIRE
if(
    text.includes("lanoire")||
    text.includes("l.a.noire")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo 3GHz\nMemory (RAM): 4GB\nVideo Card (GPU): GeForce 8600 GT / Radeon HD 3000\nStorage: 16GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 127 - SPEC OPS THE LINE
if(
    text.includes("specopstheline")||
    text.includes("specops")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo 2GHz\nMemory (RAM): 2GB\nVideo Card (GPU): NVIDIA 7800 / Radeon X1800\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 128 - SLEEPING DOGS DEFINITIVE EDITION
if(
    text.includes("sleepingdogsdefinitive")||
    text.includes("sleepingdogsdefinitiveedition")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-2400 / AMD FX-8320\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 560 / Radeon HD 7790\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 129 - SAINTS ROW THE THIRD
if(
    text.includes("saintsrow3")||
    text.includes("saintsrowthethird")
){
    let responce="OS: Windows 7\nProcessor (CPU): 2GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): GTX 260 / Radeon HD 4850\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 130 - SAINTS ROW IV
if(
    text.includes("saintsrow4")||
    text.includes("saintsrowiv")
){
    let responce="OS: Windows Vista/7/8\nProcessor (CPU): Intel Core 2 Duo 2GHz\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 260 / Radeon HD 5850\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 131 - BORDERLANDS
if(
    text.includes("borderlands")||
    text.includes("borderlands1")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.4GHz Dual Core\nMemory (RAM): 1GB\nVideo Card (GPU): GeForce 8600 GT / Radeon HD 2600\nStorage: 8GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 132 - BORDERLANDS THE PRE-SEQUEL
if(
    text.includes("borderlandspresequel")||
    text.includes("presequel")
){
    let responce="OS: Windows XP/Vista/7/8\nProcessor (CPU): 2.4GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): GTX 560 / Radeon HD 6970\nStorage: 13GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 133 - PAYDAY THE HEIST
if(
    text.includes("paydaytheheist")||
    text.includes("payday1")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2GHz Intel Dual Core\nMemory (RAM): 1GB\nVideo Card (GPU): NVIDIA 8800 / Radeon HD 2600\nStorage: 6GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 134 - LEFT 4 DEAD
if(
    text.includes("left4dead")||
    text.includes("l4d")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Pentium 4 3GHz\nMemory (RAM): 1GB\nVideo Card (GPU): 128MB Shader Model 2.0 GPU\nStorage: 7.5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 135 - PORTAL
if(
    text.includes("portal")||
    text.includes("portal1")
){
    let responce="OS: Windows 7/Vista/XP\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 512MB\nVideo Card (GPU): DirectX 8.1 compatible GPU\nStorage: 5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 136 - HALF LIFE 2 EPISODE ONE
if(
    text.includes("halflife2episodeone")||
    text.includes("episodeone")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 512MB\nVideo Card (GPU): DirectX 8.1 compatible GPU\nStorage: 4.5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 137 - HALF LIFE 2 EPISODE TWO
if(
    text.includes("halflife2episodetwo")||
    text.includes("episodetwo")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): 1.7GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): DirectX 9 compatible GPU\nStorage: 6.5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 138 - PAYPAL? NO - DEAD SPACE
if(
    text.includes("deadspace")||
    text.includes("deadspace2008")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.8GHz Processor\nMemory (RAM): 1GB\nVideo Card (GPU): GeForce 6800 / Radeon X1600\nStorage: 7.5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 139 - DEAD SPACE 2
if(
    text.includes("deadspace2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.8GHz Processor\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 6800 / Radeon X1600\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 140 - DEAD SPACE REMAKE
if(
    text.includes("deadspaceremake")||
    text.includes("deadspace2023")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Ryzen 5 2600x / Core i5-8600\nMemory (RAM): 16GB\nVideo Card (GPU): RX 5700 / GTX 1070\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 141 - RESIDENT EVIL 7
if(
    text.includes("residentevil7")||
    text.includes("re7")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260x\nStorage: 24GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 142 - RESIDENT EVIL 3
if(
    text.includes("residentevil3")||
    text.includes("re3")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260x\nStorage: 45GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 143 - OUTLAST
if(
    text.includes("outlast")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2.2GHz Dual Core\nMemory (RAM): 2GB\nVideo Card (GPU): GTX 260 / Radeon HD 4850\nStorage: 5GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 144 - OUTLAST 2
if(
    text.includes("outlast2")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i3-530 / AMD FX-4100\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 260 / Radeon HD 4870\nStorage: 30GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 145 - AMNESIA THE DARK DESCENT
if(
    text.includes("amnesia")||
    text.includes("amnesiathedarkdescent")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): 2GHz Processor\nMemory (RAM): 2GB\nVideo Card (GPU): Radeon X1000 / GeForce 6\nStorage: 3GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 146 - LITTLE NIGHTMARES
if(
    text.includes("littlenightmares")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core i3\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 460 / Radeon R7 260\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 147 - LITTLE NIGHTMARES II
if(
    text.includes("littlenightmares2")||
    text.includes("littlenightmaresii")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-2300 / AMD FX-4350\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 570 / Radeon HD 7850\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 148 - CELESTE
if(
    text.includes("celeste")
){
    let responce="OS: Windows 7\nProcessor (CPU): Intel Core i3\nMemory (RAM): 2GB\nVideo Card (GPU): Intel HD Graphics 4000\nStorage: 1.2GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 149 - UNDERTALE
if(
    text.includes("undertale")
){
    let responce="OS: Windows XP/Vista/7/8/10\nProcessor (CPU): 2GHz Processor\nMemory (RAM): 2GB\nVideo Card (GPU): 128MB Video Memory\nStorage: 200MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 150 - DEAD CELLS
if(
    text.includes("deadcells")
){
    let responce="OS: Windows 7/8/10\nProcessor (CPU): Intel Core 2 Duo E8400\nMemory (RAM): 2GB\nVideo Card (GPU): GeForce 8800 GTS / Radeon HD 4850\nStorage: 500MB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 151 - EA SPORTS FC 24
if(
    text.includes("fc24")||
    text.includes("eafc24")||
    text.includes("fifa24")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 570\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 152 - EA SPORTS FC 25
if(
    text.includes("fc25")||
    text.includes("eafc25")||
    text.includes("fifa25")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 570\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 153 - EA SPORTS FC 26
if(
    text.includes("fc26")||
    text.includes("eafc26")||
    text.includes("fifa26")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 570\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 154 - CALL OF DUTY WARZONE
if(
    text.includes("warzone")||
    text.includes("codwarzone")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-6100 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 470\nStorage: 125GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 155 - CALL OF DUTY BLACK OPS 6
if(
    text.includes("blackops6")||
    text.includes("bo6")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600 / AMD Ryzen 5 1400\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 470\nStorage: 149GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 156 - CALL OF DUTY MODERN WARFARE
if(
    text.includes("modernwarfare")||
    text.includes("codmw")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4340 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1650 / Radeon HD 7950\nStorage: 175GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 157 - OVERWATCH 2
if(
    text.includes("overwatch2")||
    text.includes("overwatch")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 600 series / Radeon HD 7000 series\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 158 - RAINBOW SIX SIEGE
if(
    text.includes("rainbowsixsiege")||
    text.includes("r6siege")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-8100 / AMD Ryzen 3 3100\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / Radeon R9 280X\nStorage: 61GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 159 - DESTINY 2
if(
    text.includes("destiny2")||
    text.includes("destiny")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-3250 / AMD FX-4350\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 / Radeon HD 7850\nStorage: 105GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 160 - FORZA HORIZON 4
if(
    text.includes("forzahorizon4")||
    text.includes("fh4")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4170 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 650 Ti / Radeon R7 250X\nStorage: 80GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 161 - FORZA HORIZON 5
if(
    text.includes("forzahorizon5")||
    text.includes("fh5")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / RX 470\nStorage: 110GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 162 - GTA ONLINE
if(
    text.includes("gtaonline")||
    text.includes("gtao")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core 2 Quad Q6600 / AMD Phenom 9850\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 125GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 163 - HOGWARTS LEGACY
if(
    text.includes("hogwartslegacy")||
    text.includes("hogwarts")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600 / AMD Ryzen 5 1400\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 960 4GB / RX 470 4GB\nStorage: 85GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 164 - ELDEN RING
if(
    text.includes("eldenring")||
    text.includes("elden")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-8400 / AMD Ryzen 3 3300X\nMemory (RAM): 12GB\nVideo Card (GPU): GTX 1060 3GB / RX 580 4GB\nStorage: 60GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 165 - GOD OF WAR
if(
    text.includes("godofwar")||
    text.includes("gow")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 470\nStorage: 70GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 166 - GOD OF WAR RAGNAROK
if(
    text.includes("godofwarragnarok")||
    text.includes("ragnarok")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4670K / AMD Ryzen 3 1200\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1060 / RX 5500 XT\nStorage: 190GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 167 - SPIDER-MAN REMASTERED
if(
    text.includes("spidermanremastered")||
    text.includes("spiderman")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4160 / AMD Ryzen 3 1300X\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 950 / RX 470\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 168 - SPIDER-MAN MILES MORALES
if(
    text.includes("spidermanmilesmorales")||
    text.includes("milesmorales")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4160 / AMD Ryzen 3 1300X\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 950 / RX 470\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 169 - THE WITCHER 3
if(
    text.includes("witcher3")||
    text.includes("thewitcher3")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD Phenom II X4 940\nMemory (RAM): 6GB\nVideo Card (GPU): GTX 660 / Radeon HD 7870\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 170 - THE WITCHER 2
if(
    text.includes("witcher2")||
    text.includes("thewitcher2")
){
    let responce="OS: Windows XP/Vista/7\nProcessor (CPU): Intel Core 2 Duo 2.2GHz\nMemory (RAM): 1GB\nVideo Card (GPU): GeForce 8800 / Radeon HD 3850\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 171 - MINECRAFT DUNGEONS
if(
    text.includes("minecraftdungeons")||
    text.includes("mcdungeons")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4690\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon R7 370\nStorage: 10GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 172 - LEAGUE OF LEGENDS
if(
    text.includes("leagueoflegends")||
    text.includes("lol")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-530 / AMD A6-3650\nMemory (RAM): 2GB\nVideo Card (GPU): Intel HD Graphics 4600 / Radeon HD 6570\nStorage: 16GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 173 - PUBG PC
if(
    text.includes("pubg")||
    text.includes("pubgpc")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4430 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / Radeon R7 370\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 174 - HELLDIVERS 2
if(
    text.includes("helldivers2")||
    text.includes("helldivers")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i7-4790K / AMD Ryzen 7 2700\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1050 Ti / RX 470\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 175 - BALDUR'S GATE 3
if(
    text.includes("baldursgate3")||
    text.includes("bg3")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4690 / AMD FX-8350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / RX 480\nStorage: 150GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 176 - MONSTER HUNTER WILDS
if(
    text.includes("monsterhunterwilds")||
    text.includes("mhwilds")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-10400 / AMD Ryzen 5 3600\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1660 / RX 5600 XT\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 177 - PALWORLD
if(
    text.includes("palworld")||
    text.includes("palworldgame")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-3570K / AMD Ryzen 5 1400\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1050 / RX 470\nStorage: 40GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 178 - LETHAL COMPANY
if(
    text.includes("lethalcompany")||
    text.includes("lethal")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-7400 / AMD Ryzen 5 1400\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 / RX 470\nStorage: 1GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 179 - CONTENT WARNING
if(
    text.includes("contentwarning")||
    text.includes("contentwarninggame")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-7500 / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / RX 470\nStorage: 6GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 180 - AMONG US VR
if(
    text.includes("amongusvr")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4590 / AMD Ryzen 5 1500X\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / Radeon R9 290\nStorage: 2GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 181 - MARVEL RIVALS
if(
    text.includes("marvelrivals")||
    text.includes("marvel")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-7500 / AMD Ryzen 5 1600X\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1060 / RX 580\nStorage: 70GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 182 - THE FINALS
if(
    text.includes("thefinals")||
    text.includes("finals")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-9600K / AMD Ryzen 5 3600\nMemory (RAM): 12GB\nVideo Card (GPU): GTX 1050 Ti / RX 580\nStorage: 16GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 183 - DEAD BY DAYLIGHT
if(
    text.includes("deadbydaylight")||
    text.includes("dbd")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-4170 / AMD FX-8120\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 460 / Radeon HD 6850\nStorage: 50GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 184 - PHASMOPHOBIA
if(
    text.includes("phasmophobia")||
    text.includes("phasmophobia")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4590 / AMD Ryzen 5 2600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 970 / Radeon R9 390\nStorage: 21GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 185 - ESCAPE FROM TARKOV
if(
    text.includes("escapefromtarkov")||
    text.includes("tarkov")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i5-8600 / AMD Ryzen 5 3600\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1660 / RX 580\nStorage: 80GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 186 - DAYZ
if(
    text.includes("dayz")||
    text.includes("dayzgame")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-4430 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R9 270X\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 187 - ARMA 3
if(
    text.includes("arma3")||
    text.includes("arma")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-8350\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 660 / Radeon HD 7800\nStorage: 70GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 188 - SONS OF THE FOREST
if(
    text.includes("sonsoftheforest")||
    text.includes("sonsoftheforestgame")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-8400 / AMD Ryzen 3 3300X\nMemory (RAM): 12GB\nVideo Card (GPU): GTX 1060 3GB / RX 570 4GB\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 189 - SUBNAUTICA
if(
    text.includes("subnautica")||
    text.includes("subnauticagame")
){
    let responce="OS: Windows Vista/7/8/10\nProcessor (CPU): Intel Haswell 2 cores\nMemory (RAM): 8GB\nVideo Card (GPU): Intel HD 4600 / GTX 550 Ti\nStorage: 20GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 190 - NO MAN'S SKY
if(
    text.includes("nomanssky")||
    text.includes("nomanssky")
){
    let responce="OS: Windows 10/11 64-bit\nProcessor (CPU): Intel Core i3-9320 / AMD Ryzen 3 1300X\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1060 / Radeon RX 470\nStorage: 15GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 191 - STARFIELD
if(
    text.includes("starfield")||
    text.includes("starfieldgame")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): AMD Ryzen 5 2600X / Intel Core i7-6800K\nMemory (RAM): 16GB\nVideo Card (GPU): RX 5700 / GTX 1070 Ti\nStorage: 125GB SSD"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 192 - HORIZON ZERO DAWN
if(
    text.includes("horizonzerodawn")||
    text.includes("horizon")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-2500K / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 780 / Radeon R9 290\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 193 - HORIZON FORBIDDEN WEST
if(
    text.includes("horizonforbiddenwest")||
    text.includes("forbiddenwest")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-8100 / AMD Ryzen 3 1300X\nMemory (RAM): 16GB\nVideo Card (GPU): GTX 1650 / RX 5500 XT\nStorage: 150GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 194 - GHOST OF TSUSHIMA
if(
    text.includes("ghostoftsushima")||
    text.includes("ghosttsushima")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i3-8100 / AMD Ryzen 3 3100\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 960 / RX 5500 XT\nStorage: 75GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 195 - SEKIRO
if(
    text.includes("sekiro")||
    text.includes("sekiroshadowsdietwice")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i3-2100 / AMD FX-6300\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 760 / Radeon HD 7950\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 196 - DEVIL MAY CRY 5
if(
    text.includes("devilmaycry5")||
    text.includes("dmc5")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260X\nStorage: 35GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 197 - MONSTER HUNTER WORLD
if(
    text.includes("monsterhunterworld")||
    text.includes("mhw")
){
    let responce="OS: Windows 7/8/10 64-bit\nProcessor (CPU): Intel Core i5-4460 / AMD FX-6300\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R7 260X\nStorage: 52GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 198 - DARK SOULS III
if(
    text.includes("darksouls3")||
    text.includes("ds3")
){
    let responce="OS: Windows 7/8.1/10 64-bit\nProcessor (CPU): Intel Core i3-2100 / AMD FX-6300\nMemory (RAM): 4GB\nVideo Card (GPU): GTX 750 Ti / Radeon HD 7950\nStorage: 25GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 199 - GTA TRILOGY DEFINITIVE EDITION
if(
    text.includes("gtatrilogy")||
    text.includes("gtadefinitive")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 760 / Radeon R9 280\nStorage: 45GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// 200 - BATTLEFIELD 2042
if(
    text.includes("battlefield2042")||
    text.includes("bf2042")
){
    let responce="OS: Windows 10 64-bit\nProcessor (CPU): Intel Core i5-6600K / AMD Ryzen 5 1600\nMemory (RAM): 8GB\nVideo Card (GPU): GTX 1050 Ti / Radeon RX 560\nStorage: 100GB"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HI / HELLO
if(
    text.includes("hi")||
    text.includes("hello")
){
    let responce="Hello! I am Game Mate. How can I help you with games?"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HOW ARE YOU
if(
    text.includes("howareyou")||
    text.includes("howareu")
){
    let responce="I am doing great! Ready to help you with games."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// BYE / GOODBYE
if(
    text.includes("bye")||
    text.includes("goodbye")
){
    let responce="Goodbye! See you again. Happy gaming!"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WHO CREATED YOU
if(
    text.includes("whocreatedyou")||
    text.includes("whomadeyou")
){
    let responce="I was created by Waize Ahmed Arshan as a Game Mate project."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WHAT IS YOUR NAME
if(
    text.includes("whatisyourname")||
    text.includes("yourname")
){
    let responce="My name is Game Mate."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WHAT CAN YOU DO
if(
    text.includes("whatcanyoudo")||
    text.includes("whatdoyoudo")
){
    let responce="I can tell you about game requirements. Just tell me the name of a game."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// THANK YOU / THANKS
if(
    text.includes("thankyou")||
    text.includes("thanks")
){
    let responce="You're welcome! Enjoy your gaming."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// HELP
if(
    text.includes("help")||
    text.includes("whatcanIask")
){
    let responce="You can ask me about game requirements. For example, say GTA 5, GTA 4, Valorant, Minecraft, or any game I know."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GOOD MORNING
if(
    text.includes("goodmorning")
){
    let responce="Good morning! Ready to find some game requirements?"
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// GOOD NIGHT
if(
    text.includes("goodnight")
){
    let responce="Good night! Have a good sleep and happy gaming tomorrow."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WHAT IS GAME MATE
if(
    text.includes("whatisgamemate")||
    text.includes("what is gamemate")
){
    let responce="Game Mate is a simple gaming assistant that tells you the requirements of different games."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// ARE YOU AN AI
if(
    text.includes("areyouanai")||
    text.includes("areyouai")
){
    let responce="Yes, I am an AI based gaming assistant called Game Mate."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}


// WHO ARE YOU
if(
    text.includes("whoareyou")||
    text.includes("whatareyou")
){
    let responce="I am Game Mate, your gaming requirements assistant."
    textToSpeech(responce);
    gameMatePara.textContent=responce;
}
}