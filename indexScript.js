// Hide preloader after page loads
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  preloader.style.display = "none";  // Hide preloader
  content.style.display = "block";   // Show homepage
});
