// Wait for animation then hide splash
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2500); // 2.5 sec splash
});
