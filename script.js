function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const cropData = {
  rice: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: May - June; Harvest: November - December",
    tips: "Rice needs flooded fields (paddies) and abundant water for optimal growth."
  },
  wheat: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "15-20°C",
    development_timetable: "Sowing: September - November; Harvest: June - August",
    tips: "Wheat grows best in well-drained soil with moderate rainfall."
  },
  maize: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: April - May; Harvest: August - October",
    tips: "Maize requires full sun and well-drained soil with regular watering."
  },
  barley: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "12-20°C",
    development_timetable: "Sowing: March - April; Harvest: July - August",
    tips: "Barley thrives in well-drained soil with moderate rainfall."
  },
  potatoes: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to early summer)",
    ideal_temperature: "15-20°C",
    development_timetable: "Sowing: March - April; Harvest: July - September",
    tips: "Potatoes prefer loose, well-drained soil and consistent moisture."
  },
  tomatoes: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: February - March; Harvest: June - September",
    tips: "Tomatoes need plenty of sunlight, well-drained soil, and support like stakes or cages."
  },
  carrots: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to fall)",
    ideal_temperature: "10-20°C",
    development_timetable: "Sowing: March - June; Harvest: June - November",
    tips: "Carrots grow best in loose, sandy soil without rocks to prevent deformities."
  },
  bananas: {
    lifespan: "Perennial",
    growing_season: "Tropical (year-round)",
    ideal_temperature: "26-30°C",
    development_timetable: "Planting: Year-round; Harvest: 9-12 months after planting",
    tips: "Bananas need warm temperatures, high humidity, and well-drained soil."
  },
  apples: {
    lifespan: "Perennial",
    growing_season: "Temperate (spring to fall)",
    ideal_temperature: "15-25°C",
    development_timetable: "Planting: Spring; Harvest: August - October",
    tips: "Apples require chilling hours, good air circulation, and well-drained soil."
  },
  grapes: {
    lifespan: "Perennial",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Planting: Spring; Harvest: August - September",
    tips: "Grapes thrive in full sun and well-drained soil with regular pruning."
  },
  oranges: {
    lifespan: "Perennial",
    growing_season: "Tropical/Subtropical (year-round)",
    ideal_temperature: "20-30°C",
    development_timetable: "Planting: Year-round; Harvest: November - June",
    tips: "Oranges need full sun, well-drained soil, and regular watering."
  },
  strawberries: {
    lifespan: "Perennial",
    growing_season: "Cool season (spring to early summer)",
    ideal_temperature: "15-25°C",
    development_timetable: "Planting: Early spring; Harvest: Late spring to early summer",
    tips: "Strawberries prefer well-drained, acidic soil and plenty of sunlight."
  },
  lentils: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "15-20°C",
    development_timetable: "Sowing: March - April; Harvest: July - August",
    tips: "Lentils thrive in well-drained soil and need minimal fertilization."
  },
  chickpeas: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: March - April; Harvest: July - August",
    tips: "Chickpeas prefer well-drained soil and are drought-tolerant."
  },
  peanuts: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "25-30°C",
    development_timetable: "Sowing: April - May; Harvest: September - October",
    tips: "Peanuts require sandy, well-drained soil and full sun."
  },
  flax: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "15-20°C",
    development_timetable: "Sowing: March - April; Harvest: July - August",
    tips: "Flax prefers well-drained soil and moderate watering."
  },
  cotton: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "25-35°C",
    development_timetable: "Sowing: April - May; Harvest: September - October",
    tips: "Cotton requires full sun and well-drained, fertile soil."
  },
  cocoa: {
    lifespan: "Perennial",
    growing_season: "Tropical (year-round)",
    ideal_temperature: "20-30°C",
    development_timetable: "Planting: Year-round; Harvest: 5 years after planting",
    tips: "Cocoa requires shaded, humid conditions with rich, well-drained soil."
  },
  coffee: {
    lifespan: "Perennial",
    growing_season: "Tropical (year-round)",
    ideal_temperature: "18-24°C",
    development_timetable: "Planting: Year-round; Harvest: 3-4 years after planting",
    tips: "Coffee plants need partial shade, well-drained soil, and moderate rainfall."
  },
  tea: {
    lifespan: "Perennial",
    growing_season: "Cool to warm season (year-round)",
    ideal_temperature: "20-30°C",
    development_timetable: "Planting: Year-round; Harvest: 3 years after planting",
    tips: "Tea plants prefer acidic soil, high humidity, and partial shade."
  },
  sugarcane: {
    lifespan: "Perennial",
    growing_season: "Tropical (year-round)",
    ideal_temperature: "20-30°C",
    development_timetable: "Planting: Year-round; Harvest: 12-18 months after planting",
    tips: "Sugarcane needs warm temperatures, abundant water, and rich soil."
  },
  sunflower: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: April - May; Harvest: August - September",
    tips: "Sunflowers require full sun and well-drained soil."
  },
  soybean: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: April - May; Harvest: August - October",
    tips: "Soybeans thrive in well-drained, fertile soil with moderate rainfall."
  },
  millet: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "20-30°C",
    development_timetable: "Sowing: April - May; Harvest: August - September",
    tips: "Millet requires minimal water and thrives in dry conditions."
  },
  sorghum: {
    lifespan: "Annual",
    growing_season: "Warm season (summer)",
    ideal_temperature: "25-35°C",
    development_timetable: "Sowing: May - June; Harvest: October - November",
    tips: "Sorghum is drought-tolerant and thrives in hot, dry climates."
  },
  oats: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "10-20°C",
    development_timetable: "Sowing: March - April; Harvest: August - September",
    tips: "Oats prefer cool climates and well-drained soil."
  },
  rye: {
    lifespan: "Annual",
    growing_season: "Cool season (spring to summer)",
    ideal_temperature: "10-20°C",
    development_timetable: "Sowing: September - November; Harvest: June - August",
    tips: "Rye is hardy and grows well in poor soil conditions."
  }
};

function generateRecommendation() {
  const crop = document.getElementById("demoInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("demo-result");

  if (crop === "") {
    resultDiv.textContent = "Please enter a valid crop type.";
    return;
  }

  const cropInfo = cropData[crop];
  if (!cropInfo) {
    resultDiv.innerHTML = `<p>Sorry, we don't have information on <strong>${escapeHtml(crop)}</strong> yet. Try wheat, rice, or maize.</p>`;
    return;
  }

  resultDiv.innerHTML = `
    <h3>${escapeHtml(crop.toUpperCase())} Information</h3>
    <ul>
      <li><strong>Lifespan:</strong> ${escapeHtml(cropInfo.lifespan)}</li>
      <li><strong>Growing Season:</strong> ${escapeHtml(cropInfo.growing_season)}</li>
      <li><strong>Ideal Temperature:</strong> ${escapeHtml(cropInfo.ideal_temperature)}</li>
      <li><strong>Development Timetable:</strong> ${escapeHtml(cropInfo.development_timetable)}</li>
      <li><strong>Tips:</strong> ${escapeHtml(cropInfo.tips)}</li>
    </ul>
  `;
}

function analyzeImage() {
  const input = document.getElementById("imageInput");
  const resultLabel = document.getElementById("resultLabel");
  const preview = document.getElementById("plantPreview");

  if (!input.files.length) {
    resultLabel.textContent = "Please upload an image.";
    preview.hidden = true;
    return;
  }

  const file = input.files[0];
  if (!file.type.startsWith("image/")) {
    resultLabel.textContent = "Please choose an image file.";
    preview.hidden = true;
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    preview.src = event.target.result;
    preview.hidden = false;
    resultLabel.textContent =
      "Image received (" +
      file.name +
      "). This demo previews the photo on your device. Live plant identification is off so no API key is stored in the repository.";
  };
  reader.readAsDataURL(file);
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const status = document.getElementById("formStatus");
  status.textContent = "Thanks For YOur Interest" + (name ? ", " + name : "");
  event.target.reset();
}
