// Array of random text options
const textOptions = [
  "Quantum Entanglement",
  "Wave-Particle Duality",
  "Schrodinger's Cat",
  "Planck's Constant",
  "Superposition",
  "Quantum Tunneling",
  "Spooky Action At a Distance",
  "Particle or Wave?",
  "Heisenberg Principle",
  "Spin"
];

// Utility function to get a random value within a range
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to generate a random color
function getRandomColor() {
  return `hsl(${getRandomValue(0, 360)}, ${getRandomValue(50, 100)}%, ${getRandomValue(50, 80)}%)`;
}

// Function to randomize text and apply effects
function randomizeText() {
  const randomTextElement = document.getElementById("randomText");
  const bodyElement = document.body; // Get reference to the body for background changes

  // Set random text content
  randomTextElement.textContent =
    textOptions[Math.floor(Math.random() * textOptions.length)];

  // Set random text color
  const randomColor = getRandomColor();
  randomTextElement.style.color = randomColor;

  // Apply glitch effect
  randomTextElement.style.textShadow = `
    2px 2px #ff0000,
    -2px -2px #00ff00,
    1px -1px #0000ff
  `;

  // Apply random animation class
  const animations = ["bounce", "fade", "zoom", "spin", "shake", "pulse", "ripple"];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  // Remove existing animation classes to avoid stacking
  randomTextElement.classList.remove(...animations);

  // Add the new animation class
  randomTextElement.classList.add(randomAnimation);

  // Set a random background color for the flash effect
  const randomBackgroundColor = getRandomColor();

  // Flash the background color by changing it and then resetting it after a delay
  bodyElement.style.transition = "background-color 0.2s ease"; // Quick transition for flashing
  bodyElement.style.backgroundColor = randomBackgroundColor;

  // Reset the background color after 1 second (adjust time as needed)
  setTimeout(() => {
    bodyElement.style.backgroundColor = ''; // Reset to original background color
  }, 200); // Flash duration (1 second)

  // Optionally reset the glitch effect after a delay
  setTimeout(() => {
    randomTextElement.style.textShadow = "none";
  }, 200); // Adjust delay time in milliseconds as needed
}

// Add event listener to the button
document.getElementById("randomizeButton").addEventListener("click", randomizeText);
