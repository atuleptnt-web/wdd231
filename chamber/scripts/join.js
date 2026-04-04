window.addEventListener("load", () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), i * 300);
  });
});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
