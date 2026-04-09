async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const goldSilver = members.filter(m => 
    m.membership === "Gold" || m.membership === "Silver"
  );

  const random = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById("spotlight-container");
  random.forEach(member => {
    container.innerHTML += `
      <div class="member-card">
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership: ${member.membership}</p>
      </div>
    `;
  });
}
loadSpotlights();