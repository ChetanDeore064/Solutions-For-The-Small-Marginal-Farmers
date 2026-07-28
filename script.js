function generateRecommendation() {
    var crop = document.getElementById('demoInput').value.trim().toLowerCase();
    var resultDiv = document.getElementById('demo-result');
  
    if (crop === "") {
      resultDiv.innerHTML = "<p>Please enter a valid crop type.</p>";
      return;
    }
  
    // Simulated AI recommendations
    const recommendations = {
      wheat: "Consider using crop rotation to improve soil health and reduce pests.",
      rice: "Implement efficient irrigation techniques like drip irrigation to save water.",
      maize: "Use organic fertilizers for better nutrient management and increased yield.",
      soybean: "Optimize nitrogen fixation with proper legume management practices."
    };
  
    // Default response if the crop is not in the list
    const recommendation = recommendations[crop] || "This crop is not in our database. Please try another crop.";
  
    resultDiv.innerHTML = `<p>For <strong>${crop}</strong>: ${recommendation}</p>`;
  }
  