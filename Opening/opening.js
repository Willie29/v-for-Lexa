const statusText = document.getElementById("statusText");
const scanFrame = document.getElementById("scanFrame");
const scanLine = document.getElementById("scanLine");
const profileImg = document.getElementById("profileImg");
const continueBtn = document.getElementById("continueBtn");

let dots = 0;

// Animasi titik "Scanning..."
const scanningInterval = setInterval(() => {
  dots = (dots + 1) % 4;
  statusText.textContent = "Scanning" + ".".repeat(dots);
}, 500);

// Setelah 3 detik → face confirmed
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

// Tombol lanjut (sementara)
continueBtn.addEventListener("click", () => {
  alert("Lanjut ke halaman berikutnya 💗");
  // nanti: window.location.href = "page2.html";
});
