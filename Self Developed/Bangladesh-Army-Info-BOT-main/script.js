// Setup

let recognition=new SpeechRecognition()
recognition.lang="en-US"
recognition.continuous=false

// Grab Tags

let listenBtn=document.querySelector(".listenBtn")
let humanPara=document.querySelector(".humanPara")
let computerPara=document.querySelector(".computerPara")
let btn=document.querySelector(".btn")
let back=document.querySelector(".back")

// Recognition Start

listenBtn.onclick=()=>{
    recognition.start()
    listenBtn.textContent="Listening..."
}

// Change the BTN when the recocnition ends

recognition.onend=()=>{
    listenBtn.textContent="Listen"
}

// Get the result

recognition.onresult=(event)=>{
    let userSpeech=event.results[0][0].transcript.toLowerCase()
    // Show the text
    humanPara.textContent=userSpeech
    // Computer response
    giveResponse(userSpeech)
       // Show user's speech
    humanPara.textContent = userSpeech;
}

// Function for text to speech

function textToSpeech(text){
    let utterableText= new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterableText)
}

function giveResponse(text){

    // 1. Who is the Chief of Bangladesh Army Staff?
if(
    text.includes("who is the chief of bangladesh army staff") ||
    text.includes("who is the army chief") ||
    text.includes("who leads the bangladesh army")
){
    let response = "The Chief of Army Staff of Bangladesh Army is General Waker-Uz-Zaman.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 2. What is Dhaka Cantonment?
else if(
    text.includes("what is dhaka cantonment") ||
    text.includes("tell me about dhaka cantonment") ||
    text.includes("where is dhaka cantonment")
){
    let response = "Dhaka Cantonment is a major military area and headquarters of the Bangladesh Armed Forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 3. How can I join Bangladesh Army?
else if(
    text.includes("how can i join bangladesh army") ||
    text.includes("how do i join the army") ||
    text.includes("join bangladesh army")
){
    let response = "You can join the Bangladesh Army through official recruitment programs.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 4. What is BMA?
else if(
    text.includes("what is bma") ||
    text.includes("what is bangladesh military academy") ||
    text.includes("tell me about bma")
){
    let response = "BMA stands for Bangladesh Military Academy, where army officers receive training.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 5. What is Artillery?
else if(
    text.includes("what is artillery") ||
    text.includes("tell me about artillery") ||
    text.includes("what does artillery do")
){
    let response = "Artillery is a military branch that provides fire support using heavy weapons.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 6. What is Army Aviation?
else if(
    text.includes("what is army aviation") ||
    text.includes("tell me about army aviation") ||
    text.includes("what does army aviation do")
){
    let response = "Army Aviation operates helicopters and aircraft to support military operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 7. What is Military Training?
else if(
    text.includes("what is military training") ||
    text.includes("tell me about military training") ||
    text.includes("can you explain military training")
){
    let response = "Military training prepares soldiers with discipline, skills, and physical fitness.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 8. What is a Cantonment?
else if(
    text.includes("what is a cantonment") ||
    text.includes("tell me about cantonment") ||
    text.includes("what does cantonment mean")
){
    let response = "A cantonment is a permanent military station where soldiers live and work.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 9. What is a Soldier?
else if(
    text.includes("what is a soldier") ||
    text.includes("who is a soldier") ||
    text.includes("tell me about soldiers")
){
    let response = "A soldier is a member of the armed forces who serves and protects the nation.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 10. What is a Lieutenant?
else if(
    text.includes("what is a lieutenant") ||
    text.includes("tell me about lieutenant rank") ||
    text.includes("who is a lieutenant")
){
    let response = "A Lieutenant is a junior commissioned officer rank in the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 11. What is a Captain?
else if(
    text.includes("what is a captain") ||
    text.includes("tell me about captain rank") ||
    text.includes("who is a captain")
){
    let response = "A Captain is an officer responsible for leading soldiers and military operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 12. What is a Major?
else if(
    text.includes("what is a major") ||
    text.includes("tell me about major rank") ||
    text.includes("who is a major")
){
    let response = "A Major is a field officer rank above Captain and below Lieutenant Colonel.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 13. What is a Colonel?
else if(
    text.includes("what is a colonel") ||
    text.includes("tell me about colonel rank") ||
    text.includes("who is a colonel")
){
    let response = "A Colonel is a senior military officer who commands large units.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 14. What is a General?
else if(
    text.includes("what is a general") ||
    text.includes("tell me about general rank") ||
    text.includes("who is a general")
){
    let response = "A General is one of the highest-ranking officers in the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 15. What is Military Discipline?
else if(
    text.includes("what is military discipline") ||
    text.includes("tell me about military discipline") ||
    text.includes("why is military discipline important")
){
    let response = "Military discipline ensures order, responsibility, and effectiveness within the armed forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 16. What is Military Leadership?
else if(
    text.includes("what is military leadership") ||
    text.includes("tell me about military leadership") ||
    text.includes("can you explain military leadership")
){
    let response = "Military leadership is the ability to guide, motivate, and command soldiers effectively.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 17. What is Military Strategy?
else if(
    text.includes("what is military strategy") ||
    text.includes("tell me about military strategy") ||
    text.includes("can you explain military strategy")
){
    let response = "Military strategy is the planning and coordination of military operations to achieve objectives.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 18. What is Military Intelligence?
else if(
    text.includes("what is military intelligence") ||
    text.includes("tell me about military intelligence") ||
    text.includes("what does military intelligence do")
){
    let response = "Military intelligence gathers and analyzes information to support military decisions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 19. What is Military Engineering?
else if(
    text.includes("what is military engineering") ||
    text.includes("tell me about military engineering") ||
    text.includes("what does military engineering do")
){
    let response = "Military engineering involves building infrastructure and supporting combat operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 20. What is Signals Corps?
else if(
    text.includes("what is signals corps") ||
    text.includes("tell me about signals corps") ||
    text.includes("what does signals corps do")
){
    let response = "Signals Corps is responsible for military communication and information systems.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 21. What is Army Medical Corps?
else if(
    text.includes("what is army medical corps") ||
    text.includes("tell me about army medical corps") ||
    text.includes("what does army medical corps do")
){
    let response = "Army Medical Corps provides healthcare and medical support to military personnel.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 22. What is Military Logistics?
else if(
    text.includes("what is military logistics") ||
    text.includes("tell me about military logistics") ||
    text.includes("what does military logistics mean")
){
    let response = "Military logistics involves supplying troops with equipment, food, fuel, and other resources.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 23. What is Border Security?
else if(
    text.includes("what is border security") ||
    text.includes("tell me about border security") ||
    text.includes("why is border security important")
){
    let response = "Border security protects a country's borders from illegal activities and threats.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 24. What is National Security?
else if(
    text.includes("what is national security") ||
    text.includes("tell me about national security") ||
    text.includes("why is national security important")
){
    let response = "National security protects a nation's sovereignty, people, and interests.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 25. What is Peacekeeping?
else if(
    text.includes("what is peacekeeping") ||
    text.includes("tell me about peacekeeping") ||
    text.includes("can you explain peacekeeping")
){
    let response = "Peacekeeping helps maintain peace and stability in conflict-affected areas.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 26. What is a Peacekeeping Mission?
else if(
    text.includes("what is a peacekeeping mission") ||
    text.includes("tell me about peacekeeping missions") ||
    text.includes("what does a peacekeeping mission do")
){
    let response = "A peacekeeping mission supports peace, protects civilians, and helps maintain stability.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 27. What is Military Equipment?
else if(
    text.includes("what is military equipment") ||
    text.includes("tell me about military equipment") ||
    text.includes("what equipment does the army use")
){
    let response = "Military equipment includes weapons, vehicles, communication systems, and protective gear.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 28. What is an Armored Vehicle?
else if(
    text.includes("what is an armored vehicle") ||
    text.includes("tell me about armored vehicles") ||
    text.includes("what does an armored vehicle do")
){
    let response = "An armored vehicle is a protected military vehicle designed for combat and transport.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 29. What is a Military Operation?
else if(
    text.includes("what is a military operation") ||
    text.includes("tell me about military operations") ||
    text.includes("what does a military operation mean")
){
    let response = "A military operation is a planned action carried out to achieve specific objectives.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 30. What is Military Service?
else if(
    text.includes("what is military service") ||
    text.includes("tell me about military service") ||
    text.includes("can you explain military service")
){
    let response = "Military service means serving in the armed forces to protect and support the nation.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 31. What is Physical Fitness in Army?
else if(
    text.includes("what is physical fitness in army") ||
    text.includes("why is physical fitness important in army") ||
    text.includes("tell me about army fitness")
){
    let response = "Physical fitness in the Army helps soldiers stay strong, healthy, and ready for duty.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 32. What is Army Recruitment?
else if(
    text.includes("what is army recruitment") ||
    text.includes("tell me about army recruitment") ||
    text.includes("how does army recruitment work")
){
    let response = "Army recruitment is the process of selecting and enrolling qualified candidates into the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 33. What is Officer Training?
else if(
    text.includes("what is officer training") ||
    text.includes("tell me about officer training") ||
    text.includes("how are army officers trained")
){
    let response = "Officer training prepares future leaders with military knowledge, leadership, and discipline.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 34. What is Military Honor?
else if(
    text.includes("what is military honor") ||
    text.includes("tell me about military honor") ||
    text.includes("can you explain military honor")
){
    let response = "Military honor reflects integrity, duty, respect, and commitment to service.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 35. What is Military Ethics?
else if(
    text.includes("what is military ethics") ||
    text.includes("tell me about military ethics") ||
    text.includes("can you explain military ethics")
){
    let response = "Military ethics are moral principles that guide the behavior of military personnel.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 36. Why is the Army Important?
else if(
    text.includes("why is the army important") ||
    text.includes("why do we need an army") ||
    text.includes("importance of the army")
){
    let response = "The Army protects national sovereignty and supports the country during emergencies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 37. What is Teamwork in Army?
else if(
    text.includes("what is teamwork in army") ||
    text.includes("tell me about teamwork in army") ||
    text.includes("why is teamwork important in army")
){
    let response = "Teamwork in the Army helps soldiers work together efficiently to achieve missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 38. What is Army Reserve?
else if(
    text.includes("what is army reserve") ||
    text.includes("tell me about army reserve") ||
    text.includes("can you explain army reserve")
){
    let response = "Army Reserve personnel support the military when additional forces are needed.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 39. What is Military Technology?
else if(
    text.includes("what is military technology") ||
    text.includes("tell me about military technology") ||
    text.includes("can you explain military technology")
){
    let response = "Military technology includes equipment and systems used for defense and military operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 40. Thank You
else if(
    text.includes("thank you") ||
    text.includes("thanks") ||
    text.includes("thank you so much")
){
    let response = "You are welcome. Feel free to ask another question.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 41. What is Bangladesh Army?
else if(
    text.includes("what is bangladesh army") ||
    text.includes("tell me about bangladesh army") ||
    text.includes("can you explain bangladesh army")
){
    let response = "The Bangladesh Army is the land warfare branch of the Armed Forces of Bangladesh.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 42. When was Bangladesh Army established?
else if(
    text.includes("when was bangladesh army established") ||
    text.includes("when was the bangladesh army founded") ||
    text.includes("when did bangladesh army start")
){
    let response = "The Bangladesh Army was established during the Liberation War of 1971.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 43. What is the role of Bangladesh Army?
else if(
    text.includes("what is the role of bangladesh army") ||
    text.includes("what does the bangladesh army do") ||
    text.includes("what are the responsibilities of the bangladesh army")
){
    let response = "The Bangladesh Army protects the nation and assists during emergencies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 44. Where is Army Headquarters?
else if(
    text.includes("where is army headquarters") ||
    text.includes("where is the army headquarters") ||
    text.includes("where is bangladesh army headquarters")
){
    let response = "The Bangladesh Army headquarters is located in Dhaka Cantonment.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 45. What is the motto of Bangladesh Army?
else if(
    text.includes("what is the motto of bangladesh army") ||
    text.includes("what is bangladesh army motto") ||
    text.includes("tell me the motto of bangladesh army")
){
    let response = "The motto of the Bangladesh Army is Army, Peace, and Solidarity.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 46. Does Bangladesh Army join UN missions?
else if(
    text.includes("does bangladesh army join un missions") ||
    text.includes("does bangladesh army participate in un missions") ||
    text.includes("is bangladesh army involved in un peacekeeping")
){
    let response = "Yes, the Bangladesh Army actively participates in United Nations peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 47. Can women join Bangladesh Army?
else if(
    text.includes("can women join bangladesh army") ||
    text.includes("can girls join bangladesh army") ||
    text.includes("are women allowed in bangladesh army")
){
    let response = "Yes, women can join the Bangladesh Army if they meet the required qualifications.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 48. What is Infantry?
else if(
    text.includes("what is infantry") ||
    text.includes("tell me about infantry") ||
    text.includes("what does infantry mean")
){
    let response = "Infantry is the branch of the Army that fights on foot during ground operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 49. What is a Tank?
else if(
    text.includes("what is a tank") ||
    text.includes("tell me about tanks") ||
    text.includes("what does a tank do")
){
    let response = "A tank is a heavily armored combat vehicle used in military operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 50. Hello / Hi / Hey
else if(
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
){
    let response = "Hello! I am your Bangladesh Army Information Assistant. How can I help you today?";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 51. What is an Army Brigade?
else if(
    text.includes("what is an army brigade") ||
    text.includes("tell me about army brigade") ||
    text.includes("what does a brigade do")
){
    let response = "An Army Brigade is a large military unit consisting of several battalions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 52. What is an Army Division?
else if(
    text.includes("what is an army division") ||
    text.includes("tell me about army division") ||
    text.includes("what does an army division do")
){
    let response = "An Army Division is a major military formation made up of multiple brigades.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 53. What is a Battalion?
else if(
    text.includes("what is a battalion") ||
    text.includes("tell me about battalion") ||
    text.includes("what does a battalion do")
){
    let response = "A Battalion is a military unit consisting of several companies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 54. What is a Company in the Army?
else if(
    text.includes("what is a company in the army") ||
    text.includes("tell me about army company") ||
    text.includes("what is a military company")
){
    let response = "A Company is a military unit that usually consists of several platoons.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 55. What is a Platoon?
else if(
    text.includes("what is a platoon") ||
    text.includes("tell me about platoon") ||
    text.includes("what does a platoon do")
){
    let response = "A Platoon is a military unit made up of several squads.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 56. What is a Squad?
else if(
    text.includes("what is a squad") ||
    text.includes("tell me about squad") ||
    text.includes("what does a squad do")
){
    let response = "A Squad is a small military unit led by a non-commissioned officer.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 57. What is Military Readiness?
else if(
    text.includes("what is military readiness") ||
    text.includes("tell me about military readiness") ||
    text.includes("can you explain military readiness")
){
    let response = "Military readiness means being prepared to respond quickly and effectively to missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 58. What is Military Deployment?
else if(
    text.includes("what is military deployment") ||
    text.includes("tell me about military deployment") ||
    text.includes("can you explain military deployment")
){
    let response = "Military deployment is the movement of forces to a location for operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 59. What is Military Exercise?
else if(
    text.includes("what is military exercise") ||
    text.includes("tell me about military exercise") ||
    text.includes("can you explain military exercise")
){
    let response = "A military exercise is training conducted to improve operational readiness.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 60. What is Joint Military Training?
else if(
    text.includes("what is joint military training") ||
    text.includes("tell me about joint military training") ||
    text.includes("can you explain joint military training")
){
    let response = "Joint military training involves different military units or countries training together.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 61. What is Combat Training?
else if(
    text.includes("what is combat training") ||
    text.includes("tell me about combat training") ||
    text.includes("can you explain combat training")
){
    let response = "Combat training prepares soldiers for battlefield situations and military operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 62. What is Field Training?
else if(
    text.includes("what is field training") ||
    text.includes("tell me about field training") ||
    text.includes("can you explain field training")
){
    let response = "Field training provides practical military experience in realistic environments.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 63. What is Military Fitness Training?
else if(
    text.includes("what is military fitness training") ||
    text.includes("tell me about military fitness training") ||
    text.includes("can you explain military fitness training")
){
    let response = "Military fitness training develops strength, endurance, and physical readiness.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 64. What is Army Leadership Training?
else if(
    text.includes("what is army leadership training") ||
    text.includes("tell me about army leadership training") ||
    text.includes("can you explain army leadership training")
){
    let response = "Army leadership training develops decision making and leadership skills.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 65. What is Disaster Relief Operation?
else if(
    text.includes("what is disaster relief operation") ||
    text.includes("tell me about disaster relief operation") ||
    text.includes("can you explain disaster relief operation")
){
    let response = "Disaster relief operations provide emergency support during natural disasters.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 66. How does the Army Help During Floods?
else if(
    text.includes("how does the army help during floods") ||
    text.includes("army help during floods") ||
    text.includes("what does army do during floods")
){
    let response = "The Army helps by rescuing people, distributing supplies, and supporting recovery efforts.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 67. How does the Army Help During Cyclones?
else if(
    text.includes("how does the army help during cyclones") ||
    text.includes("army help during cyclones") ||
    text.includes("what does army do during cyclones")
){
    let response = "The Army assists with evacuation, rescue operations, and emergency support during cyclones.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 68. What is Humanitarian Assistance?
else if(
    text.includes("what is humanitarian assistance") ||
    text.includes("tell me about humanitarian assistance") ||
    text.includes("can you explain humanitarian assistance")
){
    let response = "Humanitarian assistance provides aid and support to people affected by crises.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 69. What is Search and Rescue Operation?
else if(
    text.includes("what is search and rescue operation") ||
    text.includes("tell me about search and rescue operation") ||
    text.includes("what is rescue operation")
){
    let response = "Search and rescue operations locate and help people in danger or emergencies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 70. What is Military Teamwork?
else if(
    text.includes("what is military teamwork") ||
    text.includes("tell me about military teamwork") ||
    text.includes("can you explain military teamwork")
){
    let response = "Military teamwork means working together to achieve mission objectives.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 71. What is Military Professionalism?
else if(
    text.includes("what is military professionalism") ||
    text.includes("tell me about military professionalism") ||
    text.includes("can you explain military professionalism")
){
    let response = "Military professionalism reflects discipline, competence, and dedication.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 72. What is Military Responsibility?
else if(
    text.includes("what is military responsibility") ||
    text.includes("tell me about military responsibility") ||
    text.includes("can you explain military responsibility")
){
    let response = "Military responsibility means carrying out duties with accountability and commitment.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 73. What is Military Courage?
else if(
    text.includes("what is military courage") ||
    text.includes("tell me about military courage") ||
    text.includes("can you explain military courage")
){
    let response = "Military courage is the ability to face danger with confidence and determination.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 74. What is Military Loyalty?
else if(
    text.includes("what is military loyalty") ||
    text.includes("tell me about military loyalty") ||
    text.includes("can you explain military loyalty")
){
    let response = "Military loyalty means dedication to the nation, mission, and fellow soldiers.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 75. What is Military Service Medal?
else if(
    text.includes("what is military service medal") ||
    text.includes("tell me about military service medal") ||
    text.includes("can you explain military service medal")
){
    let response = "A military service medal is awarded for service, achievement, or bravery.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 76. What is Military Award?
else if(
    text.includes("what is military award") ||
    text.includes("tell me about military award") ||
    text.includes("can you explain military award")
){
    let response = "A military award recognizes bravery, achievement, or outstanding service.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 77. What is Military Uniform?
else if(
    text.includes("what is military uniform") ||
    text.includes("tell me about military uniform") ||
    text.includes("can you explain military uniform")
){
    let response = "A military uniform is the standard clothing worn by soldiers to represent their service.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 78. Why do Soldiers Wear Uniforms?
else if(
    text.includes("why do soldiers wear uniforms") ||
    text.includes("why wear military uniform") ||
    text.includes("importance of military uniform")
){
    let response = "Soldiers wear uniforms for identification, discipline, and unity.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 79. What is Camouflage?
else if(
    text.includes("what is camouflage") ||
    text.includes("tell me about camouflage") ||
    text.includes("can you explain camouflage")
){
    let response = "Camouflage helps soldiers and equipment blend into their surroundings.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 80. What is Military Transport?
else if(
    text.includes("what is military transport") ||
    text.includes("tell me about military transport") ||
    text.includes("can you explain military transport")
){
    let response = "Military transport moves troops, equipment, and supplies where they are needed.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 81. What is Army Communication System?
else if(
    text.includes("what is army communication system") ||
    text.includes("tell me about army communication system") ||
    text.includes("can you explain army communication system")
){
    let response = "Army communication systems allow soldiers and commanders to exchange information securely.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 82. What is Military Planning?
else if(
    text.includes("what is military planning") ||
    text.includes("tell me about military planning") ||
    text.includes("can you explain military planning")
){
    let response = "Military planning is the process of preparing strategies and operations before missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 83. Why is Army Training Important?
else if(
    text.includes("why is army training important") ||
    text.includes("importance of army training") ||
    text.includes("why do soldiers need training")
){
    let response = "Army training develops skills, discipline, readiness, and confidence.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 84. What is the Importance of the Bangladesh Army?
else if(
    text.includes("what is the importance of the bangladesh army") ||
    text.includes("why is bangladesh army important") ||
    text.includes("importance of bangladesh army")
){
    let response = "The Bangladesh Army protects the nation and supports people during emergencies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 85. Tell me About Bangladesh Army.
else if(
    text.includes("tell me about bangladesh army") ||
    text.includes("information about bangladesh army") ||
    text.includes("can you tell me about bangladesh army")
){
    let response = "The Bangladesh Army is the land warfare branch of the Armed Forces of Bangladesh.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 86. Can you Explain Military Training?
else if(
    text.includes("can you explain military training") ||
    text.includes("explain military training") ||
    text.includes("tell me about military training")
){
    let response = "Military training prepares soldiers physically, mentally, and professionally.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 87. Why is the Army Important?
else if(
    text.includes("why is the army important") ||
    text.includes("why do we need an army") ||
    text.includes("importance of the army")
){
    let response = "The Army protects national sovereignty and ensures security.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 88. Who Leads the Bangladesh Army?
else if(
    text.includes("who leads the bangladesh army") ||
    text.includes("who is the army chief") ||
    text.includes("who is in charge of the bangladesh army")
){
    let response = "The Bangladesh Army is led by the Chief of Army Staff.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 89. What does a Soldier Do?
else if(
    text.includes("what does a soldier do") ||
    text.includes("duties of a soldier") ||
    text.includes("role of a soldier")
){
    let response = "A soldier protects the nation, follows orders, and performs military duties.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 90. How does the Army Help People?
else if(
    text.includes("how does the army help people") ||
    text.includes("how does army help civilians") ||
    text.includes("how does the army support people")
){
    let response = "The Army helps people through disaster response, rescue operations, and humanitarian assistance.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 91. What is Military Service?
else if(
    text.includes("what is military service") ||
    text.includes("tell me about military service") ||
    text.includes("can you explain military service")
){
    let response = "Military service means serving in the armed forces to protect and support the nation.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 92. What is Military Duty?
else if(
    text.includes("what is military duty") ||
    text.includes("tell me about military duty") ||
    text.includes("can you explain military duty")
){
    let response = "Military duty refers to the responsibilities and tasks assigned to service members.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 93. What is Military Mission?
else if(
    text.includes("what is military mission") ||
    text.includes("tell me about military mission") ||
    text.includes("can you explain military mission")
){
    let response = "A military mission is a specific task or operation assigned to military forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 94. What is Military Support?
else if(
    text.includes("what is military support") ||
    text.includes("tell me about military support") ||
    text.includes("can you explain military support")
){
    let response = "Military support includes assistance provided to operations, civilians, or allied forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 95. What is Military Teamwork?
else if(
    text.includes("what is military teamwork") ||
    text.includes("tell me about military teamwork") ||
    text.includes("why is military teamwork important")
){
    let response = "Military teamwork means soldiers working together effectively to accomplish missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 96. What is Army Life?
else if(
    text.includes("what is army life") ||
    text.includes("tell me about army life") ||
    text.includes("what is life like in the army")
){
    let response = "Army life involves discipline, training, teamwork, and service to the nation.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 97. What is Army Values?
else if(
    text.includes("what is army values") ||
    text.includes("what are army values") ||
    text.includes("tell me about army values")
){
    let response = "Army values include integrity, loyalty, discipline, courage, and respect.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 98. What is Military Discipline?
else if(
    text.includes("what is military discipline") ||
    text.includes("tell me about military discipline") ||
    text.includes("can you explain military discipline")
){
    let response = "Military discipline ensures obedience, order, and professionalism within the armed forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 99. What is Military Leadership?
else if(
    text.includes("what is military leadership") ||
    text.includes("tell me about military leadership") ||
    text.includes("can you explain military leadership")
){
    let response = "Military leadership is the ability to guide and inspire soldiers toward mission success.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 100. What is Military Honor?
else if(
    text.includes("what is military honor") ||
    text.includes("tell me about military honor") ||
    text.includes("can you explain military honor")
){
    let response = "Military honor reflects integrity, courage, duty, and commitment to service.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 101. Tell me about the Bangladesh Army.
else if(
    text.includes("tell me about the bangladesh army") ||
    text.includes("information about the bangladesh army") ||
    text.includes("can you tell me about the bangladesh army")
){
    let response = "The Bangladesh Army is the land warfare branch of the Armed Forces of Bangladesh.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 102. Can you tell me about the Bangladesh Army?
else if(
    text.includes("can you tell me about the bangladesh army") ||
    text.includes("tell me about bangladesh army") ||
    text.includes("give me information about bangladesh army")
){
    let response = "The Bangladesh Army is responsible for defending the country and supporting national security.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 103. What does the Bangladesh Army do?
else if(
    text.includes("what does the bangladesh army do") ||
    text.includes("what is the role of bangladesh army") ||
    text.includes("responsibilities of bangladesh army")
){
    let response = "The Bangladesh Army protects the nation and assists during emergencies and peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 104. Why does Bangladesh need an Army?
else if(
    text.includes("why does bangladesh need an army") ||
    text.includes("why do we need an army") ||
    text.includes("importance of army in bangladesh")
){
    let response = "Bangladesh needs an Army to protect sovereignty, security, and national interests.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 105. Who is the leader of the Bangladesh Army?
else if(
    text.includes("who is the leader of the bangladesh army") ||
    text.includes("who leads the bangladesh army") ||
    text.includes("army leader of bangladesh")
){
    let response = "The Bangladesh Army is led by the Chief of Army Staff.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 106. Who runs the Bangladesh Army?
else if(
    text.includes("who runs the bangladesh army") ||
    text.includes("who controls the bangladesh army") ||
    text.includes("who manages the bangladesh army")
){
    let response = "The Bangladesh Army is commanded by the Chief of Army Staff.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 107. Who is the current Army Chief?
else if(
    text.includes("who is the current army chief") ||
    text.includes("current chief of army staff") ||
    text.includes("who is the army chief now")
){
    let response = "The current Chief of Army Staff is General Waker-Uz-Zaman.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 108. Can you tell me about the Army Chief?
else if(
    text.includes("can you tell me about the army chief") ||
    text.includes("tell me about the army chief") ||
    text.includes("information about army chief")
){
    let response = "The Army Chief is the highest-ranking officer responsible for leading the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 109. What are the responsibilities of the Army Chief?
else if(
    text.includes("what are the responsibilities of the army chief") ||
    text.includes("what does the army chief do") ||
    text.includes("role of army chief")
){
    let response = "The Army Chief oversees military operations, leadership, and strategic planning.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 110. Where is the Bangladesh Army headquarters?
else if(
    text.includes("where is the bangladesh army headquarters") ||
    text.includes("location of bangladesh army headquarters") ||
    text.includes("where is army headquarters")
){
    let response = "The Bangladesh Army headquarters is located in Dhaka Cantonment.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 111. How can I join the Bangladesh Army?
else if(
    text.includes("how can i join the bangladesh army") ||
    text.includes("how do i join the army") ||
    text.includes("join bangladesh army")
){
    let response = "You can join the Bangladesh Army through official recruitment programs and examinations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 112. What do I need to join the Army?
else if(
    text.includes("what do i need to join the army") ||
    text.includes("requirements to join army") ||
    text.includes("army joining requirements")
){
    let response = "You must meet educational, physical, and medical requirements to join the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 113. Can women join the Army?
else if(
    text.includes("can women join the army") ||
    text.includes("can girls join the army") ||
    text.includes("are women allowed in the army")
){
    let response = "Yes, women can join the Army if they meet the required qualifications.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 114. What qualifications are required for the Army?
else if(
    text.includes("what qualifications are required for the army") ||
    text.includes("army qualification requirements") ||
    text.includes("what qualifications do i need for army")
){
    let response = "Army qualifications depend on the position and include education, fitness, and medical standards.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 115. How do I become an Army officer?
else if(
    text.includes("how do i become an army officer") ||
    text.includes("become an army officer") ||
    text.includes("how can i be an army officer")
){
    let response = "You can become an Army officer by passing recruitment tests and completing officer training.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 116. What is the process of Army recruitment?
else if(
    text.includes("what is the process of army recruitment") ||
    text.includes("army recruitment process") ||
    text.includes("how army recruitment works")
){
    let response = "Army recruitment involves applications, examinations, interviews, and medical tests.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 117. What is Army officer training like?
else if(
    text.includes("what is army officer training like") ||
    text.includes("tell me about army officer training") ||
    text.includes("army officer training")
){
    let response = "Army officer training focuses on leadership, discipline, physical fitness, and military skills.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 118. Where do Army officers receive training?
else if(
    text.includes("where do army officers receive training") ||
    text.includes("where are army officers trained") ||
    text.includes("army officer training location")
){
    let response = "Army officers receive training at the Bangladesh Military Academy.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 119. What happens at BMA?
else if(
    text.includes("what happens at bma") ||
    text.includes("what do cadets do at bma") ||
    text.includes("tell me about bma training")
){
    let response = "At BMA, cadets receive military, academic, leadership, and physical training.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 120. Can you explain military training?
else if(
    text.includes("can you explain military training") ||
    text.includes("explain military training") ||
    text.includes("tell me about military training")
){
    let response = "Military training prepares soldiers for their duties through discipline, education, and practical exercises.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 121. What does a soldier do every day?
else if(
    text.includes("what does a soldier do every day") ||
    text.includes("daily life of a soldier") ||
    text.includes("what does a soldier do")
){
    let response = "A soldier trains, follows orders, maintains readiness, and performs assigned duties.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 122. What is life like in the Army?
else if(
    text.includes("what is life like in the army") ||
    text.includes("army life") ||
    text.includes("tell me about army life")
){
    let response = "Army life includes training, teamwork, discipline, and service to the nation.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 123. Is Army life difficult?
else if(
    text.includes("is army life difficult") ||
    text.includes("is army life hard") ||
    text.includes("how difficult is army life")
){
    let response = "Army life can be challenging, but it builds discipline, resilience, and leadership.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 124. Why is discipline important in the Army?
else if(
    text.includes("why is discipline important in the army") ||
    text.includes("importance of discipline in army") ||
    text.includes("why do soldiers need discipline")
){
    let response = "Discipline helps soldiers follow orders, stay organized, and perform effectively.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 125. Why is teamwork important in the Army?
else if(
    text.includes("why is teamwork important in the army") ||
    text.includes("importance of teamwork in army") ||
    text.includes("why do soldiers need teamwork")
){
    let response = "Teamwork helps soldiers accomplish missions safely and efficiently.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 126. What skills does a soldier need?
else if(
    text.includes("what skills does a soldier need") ||
    text.includes("skills of a soldier") ||
    text.includes("what makes a good soldier")
){
    let response = "A soldier needs discipline, teamwork, leadership, fitness, and problem-solving skills.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 127. Why is physical fitness important for soldiers?
else if(
    text.includes("why is physical fitness important for soldiers") ||
    text.includes("importance of fitness for soldiers") ||
    text.includes("why do soldiers need fitness")
){
    let response = "Physical fitness helps soldiers perform demanding tasks and remain mission ready.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 128. What are Army values?
else if(
    text.includes("what are army values") ||
    text.includes("army values") ||
    text.includes("tell me about army values")
){
    let response = "Army values include integrity, loyalty, courage, discipline, and respect.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 129. What makes a good soldier?
else if(
    text.includes("what makes a good soldier") ||
    text.includes("qualities of a good soldier") ||
    text.includes("how to become a good soldier")
){
    let response = "A good soldier demonstrates discipline, loyalty, courage, and teamwork.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 130. What is military leadership?
else if(
    text.includes("what is military leadership") ||
    text.includes("tell me about military leadership") ||
    text.includes("can you explain military leadership")
){
    let response = "Military leadership is the ability to guide, motivate, and lead soldiers effectively.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 131. Can you explain Army ranks?
else if(
    text.includes("can you explain army ranks") ||
    text.includes("tell me about army ranks") ||
    text.includes("what are army ranks")
){
    let response = "Army ranks show levels of authority and responsibility within the military.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 132. What rank comes after Lieutenant?
else if(
    text.includes("what rank comes after lieutenant") ||
    text.includes("rank after lieutenant") ||
    text.includes("next rank after lieutenant")
){
    let response = "The rank that comes after Lieutenant is Captain.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 133. What does a Captain do?
else if(
    text.includes("what does a captain do") ||
    text.includes("role of a captain") ||
    text.includes("duties of a captain")
){
    let response = "A Captain leads soldiers and manages military operations and training.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 134. What does a Major do?
else if(
    text.includes("what does a major do") ||
    text.includes("role of a major") ||
    text.includes("duties of a major")
){
    let response = "A Major supervises operations, planning, and leadership responsibilities.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 135. What does a Colonel do?
else if(
    text.includes("what does a colonel do") ||
    text.includes("role of a colonel") ||
    text.includes("duties of a colonel")
){
    let response = "A Colonel commands large military units and oversees important operations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 136. What does a General do?
else if(
    text.includes("what does a general do") ||
    text.includes("role of a general") ||
    text.includes("duties of a general")
){
    let response = "A General provides strategic leadership and commands major military forces.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 137. How many ranks are there in the Army?
else if(
    text.includes("how many ranks are there in the army") ||
    text.includes("army rank structure") ||
    text.includes("number of army ranks")
){
    let response = "The Army has multiple ranks that vary from enlisted personnel to senior officers.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 138. What is the highest rank in the Army?
else if(
    text.includes("what is the highest rank in the army") ||
    text.includes("highest army rank") ||
    text.includes("top rank in the army")
){
    let response = "General is among the highest military ranks in the Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 139. What is the role of an officer?
else if(
    text.includes("what is the role of an officer") ||
    text.includes("what does an officer do") ||
    text.includes("duties of an officer")
){
    let response = "An officer leads soldiers, plans operations, and ensures mission success.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 140. What is the difference between an officer and a soldier?
else if(
    text.includes("difference between an officer and a soldier") ||
    text.includes("officer vs soldier") ||
    text.includes("what is the difference between officer and soldier")
){
    let response = "Officers lead and manage, while soldiers carry out operational duties and missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 141. How does the Army help during floods?
else if(
    text.includes("how does the army help during floods") ||
    text.includes("army help during floods") ||
    text.includes("what does army do during floods")
){
    let response = "The Army helps by rescuing people, delivering aid, and supporting recovery efforts.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 142. How does the Army help during natural disasters?
else if(
    text.includes("how does the army help during natural disasters") ||
    text.includes("army help during disasters") ||
    text.includes("what does army do in disasters")
){
    let response = "The Army provides rescue, relief, medical support, and emergency assistance.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 143. What is disaster relief?
else if(
    text.includes("what is disaster relief") ||
    text.includes("tell me about disaster relief") ||
    text.includes("can you explain disaster relief")
){
    let response = "Disaster relief provides emergency aid and support to affected communities.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 144. What is a rescue operation?
else if(
    text.includes("what is a rescue operation") ||
    text.includes("tell me about rescue operation") ||
    text.includes("can you explain rescue operation")
){
    let response = "A rescue operation is an effort to save people from dangerous situations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 145. How does the Army help people in emergencies?
else if(
    text.includes("how does the army help people in emergencies") ||
    text.includes("army help during emergencies") ||
    text.includes("what does army do in emergencies")
){
    let response = "The Army assists through rescue missions, medical aid, and disaster response.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 146. Does the Bangladesh Army work with the United Nations?
else if(
    text.includes("does the bangladesh army work with the united nations") ||
    text.includes("does bangladesh army work with un") ||
    text.includes("bangladesh army and united nations")
){
    let response = "Yes, the Bangladesh Army actively participates in United Nations peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 147. What is a peacekeeping mission?
else if(
    text.includes("what is a peacekeeping mission") ||
    text.includes("tell me about peacekeeping mission") ||
    text.includes("can you explain peacekeeping mission")
){
    let response = "A peacekeeping mission helps maintain peace and stability in conflict-affected regions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 148. Why are peacekeeping missions important?
else if(
    text.includes("why are peacekeeping missions important") ||
    text.includes("importance of peacekeeping missions") ||
    text.includes("why is peacekeeping important")
){
    let response = "Peacekeeping missions help reduce conflict, protect civilians, and support stability.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 149. How does the Army protect the country?
else if(
    text.includes("how does the army protect the country") ||
    text.includes("how does army defend the nation") ||
    text.includes("army protection of country")
){
    let response = "The Army protects the country through defense, security operations, and national support.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 150. Why is the Bangladesh Army important?
else if(
    text.includes("why is the bangladesh army important") ||
    text.includes("importance of bangladesh army") ||
    text.includes("why do we need bangladesh army")
){
    let response = "The Bangladesh Army is important because it protects the nation and supports people during emergencies.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 151. Hello
else if(
    text.includes("hello") ||
    text.includes("hello there") ||
    text.includes("hello assistant")
){
    let response = "Hello! I am your Bangladesh Army Information Assistant. How can I help you today?";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 152. Hi
else if(
    text.includes("hi") ||
    text.includes("hi there") ||
    text.includes("hii")||
    text.includes("whats going on")
){
    let response = "Hi! How can I assist you today?";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 153. Hey
else if(
    text.includes("hey") ||
    text.includes("hey there") ||
    text.includes("heyy")
){
    let response = "Hey! Nice to see you. What would you like to know?";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 154. Good Morning
else if(
    text.includes("good morning") ||
    text.includes("morning") ||
    text.includes("very good morning")
){
    let response = "Good morning! I hope you have a wonderful day ahead.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 155. Good Afternoon
else if(
    text.includes("good afternoon") ||
    text.includes("afternoon") ||
    text.includes("good afternoon assistant")
){
    let response = "Good afternoon! How can I help you today?";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 156. Good Evening
else if(
    text.includes("good evening") ||
    text.includes("evening") ||
    text.includes("good evening assistant")
){
    let response = "Good evening! Hope you are having a great day.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 157. Good Night
else if(
    text.includes("good night") ||
    text.includes("night") ||
    text.includes("goodnight")
){
    let response = "Good night! Have a peaceful rest and take care.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 158. How Are You?
else if(
    text.includes("how are you") ||
    text.includes("how are you doing") ||
    text.includes("are you okay")
){
    let response = "I am doing well and ready to help you.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 159. What Is Your Name?
else if(
    text.includes("what is your name") ||
    text.includes("your name") ||
    text.includes("may i know your name")
){
    let response = "I am your Bangladesh Army Information Assistant.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 160. Who Are You?
else if(
    text.includes("who are you") ||
    text.includes("tell me who you are") ||
    text.includes("what are you")
){
    let response = "I am an AI assistant designed to provide information about the Bangladesh Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 161. What Can You Do?
else if(
    text.includes("what can you do") ||
    text.includes("what are your abilities") ||
    text.includes("how can you help")
){
    let response = "I can answer questions about the Bangladesh Army and provide useful information.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 162. Can You Help Me?
else if(
    text.includes("can you help me") ||
    text.includes("will you help me") ||
    text.includes("help me please")
){
    let response = "Of course. Ask me anything related to the Bangladesh Army.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 163. I Need Help
else if(
    text.includes("i need help") ||
    text.includes("need help") ||
    text.includes("can i get help")
){
    let response = "Sure. Tell me what you need help with.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 164. Tell Me About Yourself
else if(
    text.includes("tell me about yourself") ||
    text.includes("introduce yourself") ||
    text.includes("can you introduce yourself")
){
    let response = "I am an AI assistant created to provide Bangladesh Army related information and guidance.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 165. Nice To Meet You
else if(
    text.includes("nice to meet you") ||
    text.includes("pleased to meet you") ||
    text.includes("good to meet you")
){
    let response = "Nice to meet you too. I am happy to assist you.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 166. Thank You
else if(
    text.includes("thank you") ||
    text.includes("thank you very much") ||
    text.includes("many thanks")
){
    let response = "You are welcome. I am glad I could help.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 167. Thanks
else if(
    text.includes("thanks") ||
    text.includes("thanks a lot") ||
    text.includes("thankss")
){
    let response = "You're welcome. Feel free to ask another question.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 168. You Are Helpful
else if(
    text.includes("you are helpful") ||
    text.includes("you're helpful") ||
    text.includes("you helped me")
){
    let response = "Thank you. I am happy that I could assist you.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 169. Good Job
else if(
    text.includes("good job") ||
    text.includes("great job") ||
    text.includes("nice work")
){
    let response = "Thank you for your kind words.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 170. Well Done
else if(
    text.includes("well done") ||
    text.includes("excellent work") ||
    text.includes("well done assistant")
){
    let response = "Thank you. I appreciate your feedback.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 171. That's Great
else if(
    text.includes("that's great") ||
    text.includes("thats great") ||
    text.includes("great")
){
    let response = "I am glad you liked it.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 172. Awesome
else if(
    text.includes("awesome") ||
    text.includes("that's awesome") ||
    text.includes("so awesome")
){
    let response = "Thank you. I am happy to hear that.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 173. Amazing
else if(
    text.includes("amazing") ||
    text.includes("that's amazing") ||
    text.includes("really amazing")
){
    let response = "Thank you. Your appreciation means a lot.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 174. I Like This Bot
else if(
    text.includes("i like this bot") ||
    text.includes("i like you") ||
    text.includes("this bot is good")
){
    let response = "Thank you. I am glad you enjoy using this assistant.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 175. Are You An AI?
else if(
    text.includes("are you an ai") ||
    text.includes("are you ai") ||
    text.includes("are you artificial intelligence")
){
    let response = "Yes. I am an AI-powered assistant.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 176. Are You A Human?
else if(
    text.includes("are you a human") ||
    text.includes("are you human") ||
    text.includes("are you a person")
){
    let response = "No. I am an AI assistant, not a human.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 177. Can We Talk?
else if(
    text.includes("can we talk") ||
    text.includes("talk with me") ||
    text.includes("can i talk to you")
){
    let response = "Of course. I am always here to chat and help.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 178. Bye
else if(
    text.includes("bye") ||
    text.includes("bye bye") ||
    text.includes("see ya")
){
    let response = "Goodbye. Have a great day and stay safe.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 179. Goodbye
else if(
    text.includes("goodbye") ||
    text.includes("good bye") ||
    text.includes("farewell")
){
    let response = "Goodbye. It was nice talking with you.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 180. See You Later
else if(
    text.includes("see you later") ||
    text.includes("see you soon") ||
    text.includes("talk to you later")
){
    let response = "See you later. I'll be here whenever you need me.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 181. How Old Are You?
else if(
    text.includes("how old are you") ||
    text.includes("what is your age") ||
    text.includes("how old r u")
){
    let response = "I do not have an age like humans. I am an AI assistant.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 182. Where Are You From?
else if(
    text.includes("where are you from") ||
    text.includes("where do you come from") ||
    text.includes("your origin")
){
    let response = "I am a virtual AI assistant and do not come from a physical place.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 183. What Is Your Purpose?
else if(
    text.includes("what is your purpose") ||
    text.includes("why were you created") ||
    text.includes("what is your job")
){
    let response = "My purpose is to provide information and assist users with their questions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 184. Can You Answer Questions?
else if(
    text.includes("can you answer questions") ||
    text.includes("can you answer my questions") ||
    text.includes("do you answer questions")
){
    let response = "Yes. I can answer questions and provide helpful information.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 185. What Do You Know?
else if(
    text.includes("what do you know") ||
    text.includes("what knowledge do you have") ||
    text.includes("what can you tell me")
){
    let response = "I know information about the Bangladesh Army and many general topics.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 186. Are You Smart?
else if(
    text.includes("are you smart") ||
    text.includes("are you intelligent") ||
    text.includes("how smart are you")
){
    let response = "I am designed to provide accurate and useful information.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 187. Can You Learn?
else if(
    text.includes("can you learn") ||
    text.includes("do you learn") ||
    text.includes("are you able to learn")
){
    let response = "I can improve through updates, but I do not learn like humans during conversations.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 188. Do You Sleep?
else if(
    text.includes("do you sleep") ||
    text.includes("are you sleeping") ||
    text.includes("when do you sleep")
){
    let response = "No. I do not sleep because I am an AI assistant.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 189. Are You Online?
else if(
    text.includes("are you online") ||
    text.includes("are you available") ||
    text.includes("are you active")
){
    let response = "Yes. I am available and ready to help.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 190. Who Created You?
else if(
    text.includes("who created you") ||
    text.includes("who made you") ||
    text.includes("who developed you")
){
    let response = "I was created by developers to assist users with information and support.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 191. Tell me an interesting fact about the Bangladesh Army.
else if(
    text.includes("tell me an interesting fact about the bangladesh army") ||
    text.includes("interesting fact about bangladesh army") ||
    text.includes("bangladesh army fact")
){
    let response = "The Bangladesh Army is one of the largest contributors to United Nations peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 192. Give me an Army fact.
else if(
    text.includes("give me an army fact") ||
    text.includes("tell me an army fact") ||
    text.includes("army fact")
){
    let response = "Armies play an important role in national defense, disaster response, and peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 193. What is special about the Bangladesh Army?
else if(
    text.includes("what is special about the bangladesh army") ||
    text.includes("special thing about bangladesh army") ||
    text.includes("why is bangladesh army special")
){
    let response = "The Bangladesh Army is respected for its professionalism, discipline, and peacekeeping contributions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 194. Tell me something interesting.
else if(
    text.includes("tell me something interesting") ||
    text.includes("say something interesting") ||
    text.includes("interesting thing")
){
    let response = "Bangladesh is one of the world's leading contributors to UN peacekeeping missions.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 195. Do you know any military facts?
else if(
    text.includes("do you know any military facts") ||
    text.includes("military fact") ||
    text.includes("tell me military facts")
){
    let response = "Military organizations often assist during disasters in addition to national defense duties.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 196. Can you tell a joke?
else if(
    text.includes("can you tell a joke") ||
    text.includes("tell a joke") ||
    text.includes("say a joke")
){
    let response = "Why did the soldier bring a pencil to training? Because he wanted to draw his strategy.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 197. Tell me a funny joke.
else if(
    text.includes("tell me a funny joke") ||
    text.includes("funny joke") ||
    text.includes("make me laugh")
){
    let response = "Why don't soldiers play hide and seek on base? Because good luck hiding from military discipline.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 198. Do you have a sense of humor?
else if(
    text.includes("do you have a sense of humor") ||
    text.includes("are you funny") ||
    text.includes("can you be funny")
){
    let response = "I try my best to share a little humor while being helpful.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 199. Can you make me laugh?
else if(
    text.includes("can you make me laugh") ||
    text.includes("make me laugh") ||
    text.includes("say something funny")
){
    let response = "I would try. Why did the recruit carry a ladder? He wanted to reach the next rank faster.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 200. Tell me something fun.
else if(
    text.includes("tell me something fun") ||
    text.includes("say something fun") ||
    text.includes("fun fact")
){
    let response = "A group of soldiers marching in perfect sync can cross a bridge differently to avoid resonance.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 201. Can you motivate me?
else if(
    text.includes("can you motivate me") ||
    text.includes("motivate me") ||
    text.includes("give me motivation")
){
    let response = "Success comes from consistency. Keep moving forward one step at a time.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 202. Give me some motivation.
else if(
    text.includes("give me some motivation") ||
    text.includes("motivation please") ||
    text.includes("need motivation")
){
    let response = "Every expert was once a beginner. Keep learning and never give up.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 203. How can I stay disciplined?
else if(
    text.includes("how can i stay disciplined") ||
    text.includes("stay disciplined") ||
    text.includes("how to become disciplined")
){
    let response = "Create good habits, follow a routine, and stay consistent every day.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 204. How can I become successful?
else if(
    text.includes("how can i become successful") ||
    text.includes("how to be successful") ||
    text.includes("become successful")
){
    let response = "Set clear goals, work hard, keep learning, and stay consistent.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 205. What is the secret of success?
else if(
    text.includes("what is the secret of success") ||
    text.includes("secret of success") ||
    text.includes("how success comes")
){
    let response = "Success usually comes from discipline, effort, patience, and persistence.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 206. Are you my friend?
else if(
    text.includes("are you my friend") ||
    text.includes("can you be my friend") ||
    text.includes("my friend")
){
    let response = "I am always here to chat and help whenever you need me.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 207. Do you like talking to people?
else if(
    text.includes("do you like talking to people") ||
    text.includes("do you enjoy talking") ||
    text.includes("like talking with people")
){
    let response = "I am designed to interact with people and assist them with information.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 208. Can we be friends?
else if(
    text.includes("can we be friends") ||
    text.includes("be my friend") ||
    text.includes("will you be my friend")
){
    let response = "Of course. I am always here to assist and chat with you.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 209. Do you enjoy helping people?
else if(
    text.includes("do you enjoy helping people") ||
    text.includes("do you like helping people") ||
    text.includes("helping people")
){
    let response = "Helping users is exactly what I am designed to do.";
    textToSpeech(response);
    computerPara.textContent = response;
}

// 210. What should I ask you?
else if(
    text.includes("what should i ask you") ||
    text.includes("what can i ask you") ||
    text.includes("what questions can i ask")
){
    let response = "You can ask me about the Bangladesh Army, military topics, motivation, or general information.";
    textToSpeech(response);
    computerPara.textContent = response;
}









else{
    let response = "Sorry, I do not have information about that yet. Please ask another Bangladesh Army related question.Or,check the question box.";
    textToSpeech(response);
    computerPara.textContent = response;
}
}

// See the queston page

if (btn) {
    btn.addEventListener("click", () => {
        window.location.href = "Questions.html";
    });
}