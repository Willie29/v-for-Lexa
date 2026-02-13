const statusText = document.getElementById("statusText");
const scanFrame = document.getElementById("scanFrame");
const scanLine = document.getElementById("scanLine");
const profileImg = document.getElementById("profileImg");
const continueBtn = document.getElementById("continueBtn");

let dots = 0;

// Animasi titik "Scanning..."
const scanningInterval = setInterval(() => {
  dots = (dots + 1) % 5;
  statusText.textContent = "Scanning Face" + ".".repeat(dots);
}, 500);

// Setelah 7 detik → face confirmed
setTimeout(() => {
  clearInterval(scanningInterval);

  statusText.innerHTML = "Face confirmed.<br>Welcome, Lexa ❤️";

  // Hentikan scan line
  scanLine.style.display = "none";

  // Ubah frame jadi profile mode
  scanFrame.classList.add("profile-mode");

  // Munculkan foto
  profileImg.classList.remove("hidden");
  profileImg.classList.add("show");

  // Munculkan tombol
  setTimeout(() => {
    continueBtn.classList.remove("hidden");
  }, 600);

}, 7000);

continueBtn.addEventListener("click", () => {
  // window.location.reload();
  // alert("Lanjut ke halaman berikutnya 💗");
  // window.location.href = "./second/page2.html";
});
