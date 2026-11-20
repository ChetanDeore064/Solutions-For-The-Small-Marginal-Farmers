const replies = [
  {
    test: /hello|hi|hey|namaste/,
    answer: "Hello. Ask me about weather planning, crop care, irrigation, market prices, or a crop such as wheat, rice, or maize."
  },
  {
    test: /weather|rain|forecast/,
    answer: "Check a local forecast before sowing or spraying. Delay field work if heavy rain or strong wind is expected in the next 24 hours."
  },
  {
    test: /irrigat|water/,
    answer: "Water early in the morning or late in the evening. Drip irrigation and mulch help small plots keep moisture without wasting water."
  },
  {
    test: /price|market|mandi/,
    answer: "Compare nearby mandi prices before you harvest or store grain. Selling a portion early and holding the rest can reduce the risk of one bad market day."
  },
  {
    test: /disease|pest|insect|fungus/,
    answer: "Remove badly affected leaves, avoid watering the foliage, and identify the pest before spraying. Use the dose on the product label and keep records of what you applied."
  },
  {
    test: /wheat/,
    answer: "Wheat prefers 15-20°C, well-drained soil, and moderate rain. Sow between September and November and harvest between June and August in most temperate calendars."
  },
  {
    test: /rice|paddy/,
    answer: "Rice needs warm weather and standing water for much of its growth. Keep the field level so water spreads evenly and weed early."
  },
  {
    test: /maize|corn/,
    answer: "Maize wants full sun and regular moisture. Sow in rows with enough spacing so each plant gets light, and watch for stem borers."
  },
  {
    test: /yield|harvest/,
    answer: "Yield improves when sowing date, spacing, and soil moisture match the crop. Harvest at the recommended maturity so grain does not shatter or spoil in the field."
  }
];

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
}

function addMessage(label, text) {
  const chatbotMessages = document.getElementById("chatbotMessages");
  const line = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = label + ": ";
  line.appendChild(strong);
  line.appendChild(document.createTextNode(text));
  chatbotMessages.appendChild(line);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chatbotInput");
  const message = input.value.trim();
  if (!message) {
    return;
  }

  addMessage("You", message);
  const match = replies.find((item) => item.test.test(message.toLowerCase()));
  const answer = match
    ? match.answer
    : "I can help with weather planning, irrigation, crop care, pests, market prices, and crops such as wheat, rice, and maize.";
  addMessage("Assistant", answer);
  input.value = "";
}
