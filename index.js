function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
  
    // Show the selected content section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active'); 

    const yOffset = -700; // Adjust this value as needed
  const yPosition = activeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // Scroll to the calculated position with smooth behavior
  window.scrollTo({ top: yPosition, behavior: "smooth" });


} 


const imageSources = [
  "posters/contrejour_affiche_finale.png", 
  "posters/contrejour2.png", 
  "posters/contrejour3.png", 
  "posters/contrejour4.png"  
];

let currentImageIndex = 0; // Track the current image index
const cyclingImage = document.getElementById('cyclingImage');

cyclingImage.addEventListener('click', () => {
  // Update the image index to the next one (loop back to 0 if at the end)
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;

  // Set the new image source
  cyclingImage.src = imageSources[currentImageIndex];
});



function updateText() {
  const userInput = document.getElementById("userInput").value || "The quick brown fox jumps over the lazy dog.";
  document.getElementById("textKKKatalog").textContent = userInput;
  document.getElementById("textDinopartouze").textContent = userInput;
  document.getElementById("textDinopartouzes").textContent = userInput;
  document.getElementById("textDinopartouzeoverlay").textContent = userInput;
  document.getElementById("textDinopartouzeoverlay2").textContent = userInput;
  document.getElementById("textAgaves").textContent = userInput;
}