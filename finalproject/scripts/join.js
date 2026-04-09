document.addEventListener("DOMContentLoaded", () => {
  // Open modal
  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("data-target");
      document.getElementById(targetId).style.display = "block";
    });
  });

  // Close modal
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      document.getElementById(targetId).style.display = "none";
    });
  });

  // Optional: close modal on ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
      });
    }
  });
});