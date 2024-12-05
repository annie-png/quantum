// Array of random text options
const textOptions = [
    "Quantum Entanglement",
    "Wave-Particle Duality",
    "Schrodinger's Cat",
    "Planck's Constant",
    "Superposition",
    "Quantum Tunneling"
  ];
  
  
  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  
function randomizeText() {
    const randomTextElement = document.getElementById("randomText");
    
    
    randomTextElement.textContent =
      textOptions[Math.floor(Math.random() * textOptions.length)];
  
    
    const randomColor = `hsl(${getRandomValue(0, 360)}, ${getRandomValue(50, 100)}%, ${getRandomValue(50, 80)}%)`;
    randomTextElement.style.color = randomColor;
  
    
    randomTextElement.style.textShadow = 'none';  
  }
  
  // Add event listener to the button
  document.getElementById("randomizeButton").addEventListener("click", randomizeText);
  