function getBotResponse(input) {
    let response;
  
    if (input.includes("burn")) {
      response = "Cool the burn under running water for at least 10 minutes. Don't apply creams or oils.";
    } else if (input.includes("bleeding")) {
      response = "Apply firm pressure to the wound with a clean cloth. Elevate the area if possible.";
    } else if (input.includes("choking")) {
      response = "If the person can't cough or speak, give 5 back blows followed by 5 abdominal thrusts.";
    } else if (input.includes("faint") || input.includes("unconscious")) {
      response = "Check for breathing. If unresponsive and not breathing, start CPR and call emergency services.";
    } else if (input.includes("sprain")) {
      response = "Use R.I.C.E: Rest, Ice, Compression, Elevation. Avoid putting weight on the injury.";
    } else if (input.includes("heart attack")) {
      response = "Call emergency services immediately. Help the person sit and stay calm. Give aspirin if available.";
    } else if (input.includes("stroke")) {
      response = "Use the FAST test: Face drooping, Arm weakness, Speech difficulty, Time to call emergency help.";
    } else if (input.includes("fracture") || input.includes("broken bone")) {
      response = "Immobilize the area. Avoid moving the bone. Apply a splint and seek medical attention.";
    } else if (input.includes("asthma")) {
      response = "Help the person sit upright and use their inhaler. If no improvement, call emergency services.";
    } else if (input.includes("allergic") || input.includes("anaphylaxis")) {
      response = "Use an epinephrine auto-injector if available. Call emergency services immediately.";
    } else if (input.includes("seizure")) {
      response = "Protect them from injury. Do not restrain them. Once the seizure stops, place them in recovery position.";
    } else if (input.includes("cpr")) {
      response = "Call for help. Push hard and fast in the center of the chest at 100 to 120 compressions per minute.";
    } else if (input.includes("nosebleed")) {
      response = "Pinch the nose and lean forward. Don’t tilt the head back. Hold for 10 to 15 minutes.";
    } else if (input.includes("poison")) {
      response = "Call Poison Control or emergency services. Don’t induce vomiting unless advised.";
    } else {
      response = "I'm not sure about that. Try asking about burns, bleeding, heart attacks, seizures, or other emergencies.";
    }
  
    appendMessage(response, "bot");
  
    // Text to Speech
    let utterance = new SpeechSynthesisUtterance(response);
    speechSynthesis.speak(utterance);
  }
  
  function appendMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userInput = inputField.value.trim();
  
    if (userInput) {
      appendMessage(userInput, "user");
      getBotResponse(userInput.toLowerCase());
      inputField.value = "";
    }
  }