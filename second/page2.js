const intro = document.getElementById("intro");
const questionSection = document.getElementById("questionSection");
const container = document.querySelector(".container");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

// Fade intro → tampilkan pertanyaan
setTimeout(() => {
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    questionSection.classList.remove("hidden");
  }, 1000);

}, 2000);

// Tombol No
let yesScale = 1;
let moveCount = 0;

noBtn.addEventListener("mouseenter", () => {

  const padding = 40;

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - padding;
  const maxY = window.innerHeight - buttonHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = `fixed`;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Perbesar tombol YES
  moveCount++;

  if (yesScale < 10) {
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
  }
});



// Klik YES
yesBtn.addEventListener("click", () => {
  questionSection.classList.add("hidden");
  result.classList.remove("hidden");
});
