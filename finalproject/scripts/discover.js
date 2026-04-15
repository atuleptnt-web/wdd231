import { items } from "../data/discover.mjs";

const container = document.getElementById("cards");

// Generate cards dynamically
items.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card", `card${index + 1}`); // assign named grid area
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;
  container.appendChild(card);
});

// LocalStorage visit tracking
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! This is your first visit.";
} else {
  const days = Math.floor((now - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// Hamburger menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("hidden");
});