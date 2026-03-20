async function loadMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  const container = document.getElementById("members");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership}</p>
      <p>${member.info}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById("gridBtn").addEventListener("click", () => {
  document.getElementById("members").className = "grid";
});
document.getElementById("listBtn").addEventListener("click", () => {
  document.getElementById("members").className = "list";
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

loadMembers();
