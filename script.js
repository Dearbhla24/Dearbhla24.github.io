let answers = {
  " Fainted": "Check if they are breathing, if not begin CPR, if they are breathing then put them in the recovery position",
  " Position": "Kneel beside the casualty and remove any bulky items or glasses. Do not look for small items. Place the nearest arm to you at a right angle to them, with their palm facing upwards and their elbow bent. Bring their other arm across the chest with the back of their hand to their cheek. Make sure to hold it. With your free hand, bring the knee of their far leg up until their foot touches the ground. Holding their hand at the cheek, pull on the far leg to roll the casualty towards you. Adjust the top leg so that it is at a right angle. Tilt the casualty’s head back and lift the chin to open their airways. If needed adjust the hand under their cheek.",
  "CPR" : "To perform cpr. Kneel next to the casualty and place the heel of your hand at their breastbone in the centre of their chest. Place your other had on top and interlock your fingers. Press down 5-6cm at a rate of 100-120 compressions per minute. After 30 compressions deliver 2 rescue breaths. Do so by tilting the persons head backwards, and lifting their chin. Then pinch their nose, seal your mouth over theirs and blow into their mouth for 1 second. Check for rise of chest. Continue with these cycles until they recover or help arrives.",
  "burn": "If someone has a burn or scald. Carefully remove any tight clothing or jewellery. Cool the burn with cool running water for 20 minutes, or till pain is relieved. Call the emergency services or seek medical help if needed. Do not apply creams, lotions or sprays to the burn. Cover with a clean, sterile dressing.",
  "stroke": "If someone has a stroke, call the emergency services immediately. Note when you first see symptoms ( drooping face, inability to lift both arms, slurred speech). If they are unconscious when you find them, perform CPR. Do not let the person go to sleep or stop you from calling the emergency services immediately, Do not give them medication, food or drinks. Take action quickly.",
  "choking":" Child and adult. If they can cough, encourage coughing. If they can’t, deliver five back blows. Get to their level and place your arm around their chest, bending them over. Strike between their shoulder blades 5 times with the heel of your hand. if the blockage doesn’t clear, give 5 abdominal thrusts. Make a fist, Place your thumb at their navel and use an in and up movement. Call emergency services and continue this cycle until, the blockage is removed. With a baby use 2 fingers only for abdominal thrusts. If they go unconscious begin cpr. If you are choking call the emergency services and give yourself abdominal thrusts.",
"seizure": "If someone is having a seizure, only move them if they are in danger, eg: on a busy road. Cushion their head. Loosen any tight clothing on their neck. Time the seizure. Call the emergency services if it’s their first seizure, it is different than normal, or if it lasts over 5 minutes, if you are unsure, they person does not regain consciousness, they have several seizures in a row, or if they cannot breathe properly.",
  "sting":"Remove the stinger if it is still there. Was the affected area. Ask pharmacist for any medication if needed. At home use a cold compress on the bite. Raise the area if it swells. (For a jellyfish sting, type in jellyfish).",
  "jellyfish":"Get help right away. If you are in serious danger, call the emergency services or go to the ER. You can treat mild stings by washing the venom/ tentacles with sea ware. Using tweezers or gloved hands, remove visible tentacles. apply vinegar. (Do not apply vinegar to Portuguese man of war stings). You can use a hydrocortisone cream to help or an ice pack.",
"concussion" :"Seek medical attention immediately after a concussion if you or someone you know has these symptoms.If you or someone you know has concussion symptoms that last more than two weeks, consider seeing a doctor ",
  "broken":"if a bone is broken seek immediate medical attention. If you are out somewhere with no way of contacting help, try to create a temporary solution such as a sling or a splint using your first aid kit. If you cannot do this or are on your own , send out an emergency signal such as a flare or call for help.",
  "stab": "If someone is stabbed, seek immediate medical help (911). If the knife is still in there head, DO NOT remove it.Immediately apply pressure around the object in order to try and stop the bleeding and continue this until emergency services arrive.If you suspect someone is going into shock:continue to apply pressure to the wound to stop the blood coming out call 999 if you haven't already done solie them down and lift their feet higher than the rest of their body. This keeps their legs higher than their heart, which helps increase blood flow to their brain and heart reassure them and wrap them in coats or a blanket to keep them warm.",
  "splinter":"To remove a splinter: Wash your hands, then the area around the splinter with soap and warm water  Check out the splinter carefully. You might need a magnifying glass to see it if it's very small. Sterilize tweezers and a needle with rubbing alcohol. If you don’t have rubbing alcohol, you can put the ends of each in boiling water, then wipe them off with a clean cotton ball or pad. If the splinter is sticking through the skin, firmly grip the end with the tweezers. Pull slowly and gently at the same angle the splinter went in so it won't break. If the tip of the splinter isn't sticking out, gently use the needle to poke the end of the splinter. Then push the splinter out until you can grab the end with the tweezers. Sometimes you might need to gently scrape away the skin that’s over the splinter until you can grab the end.Check to be sure all pieces of the splinter came out. Then, wash the area with soap and warm water once more",
  "cut":" if someone has a shallow cut, clean the wound with a sterile wipe, and apply a sterile dressing. if someone has a deep cut, clean the wound. immediately apply pressure to the wound to stop the bleeding. call emergency services. apply a sterile dressing and tightly wrap the wound in bandages. treat for shock.",
"shock":"if someone is in shock, lie them on the ground and elevate their legs if possible. Apply warm blankets/ coats to warm them up. Continuously reassure them.",
"cardiac": "In the event of a cardiac arrest. If casualty is not breathing, begin compressions. Call for an ambulance and an AED. Make sure to continue CPR until help arrives.",
"Heart":"In the event of a heart attack. Call the emergency services. Move the patient to a position on the floor, with knees bent and head and shoulders supported. Monitor the casualty until help arrives. If at any point they should become unresponsive, begin cpr."
};
function askQuestion() {
  let question = document.getElementById("userQuestion").value; 

  let lowercaseAnswers = {};
  for (const key in answers) {
    lowercaseAnswers[key.toLowerCase()] = answers[key]; 
  }

  let foundAnswer = false;
  for (const keyword in lowercaseAnswers) {
    if (question.toLowerCase().includes(keyword)) {
      let answer = lowercaseAnswers[keyword];
      let answerList = answer.split("."); // Split the answer into sentences
      let answerUl = document.createElement("ul"); // Create an unordered list
      for (let i = 0; i < answerList.length - 1 ; i++) {
        let answerLi = document.createElement("li"); // Create a list item
        answerLi.textContent = answerList[i].trim(); // Set the list item text
        answerUl.appendChild(answerLi); // Append the list item to the list
      }
      document.getElementById("answer").innerHTML = ""; // Clear the answer div
      document.getElementById("answer").appendChild(answerUl); // Append the list to the answer div
      foundAnswer = true;
      break; // Stop searching after finding a match
    }
  }

  if (!foundAnswer) {
    document.getElementById("answer").innerHTML = "I don't know the answer to that.Please either get emergency help or try a different keyword"; 
     }
  { var num = document.getElementById("answer");
  num.style.fontSize = "20px";
   num.style.color="darkred";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Your other DOM-related logic here...

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
});
