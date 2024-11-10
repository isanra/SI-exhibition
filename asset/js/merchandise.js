function toggleCart() {
  const cartPopup = document.getElementById("cartPopup");
  const overlay = document.getElementById("overlay");

  if (cartPopup.style.display === "block") {
    cartPopup.style.display = "none";
    overlay.style.display = "none";
  } else {
    cartPopup.style.display = "block";
    overlay.style.display = "block";
  }
}
