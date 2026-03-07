const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Web Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false }
];

function renderCourses(list) {
  const container = document.getElementById("course-cards");
  container.innerHTML = "";
  list.forEach(course => {
    const card = document.createElement("div");
    card.className = course.completed ? "course completed" : "course";
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>${course.credits} credits</p>`;
    container.appendChild(card);
  });

  const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById("credits").textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById("allBtn").addEventListener("click", () => renderCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("WDD"))));
document.getElementById("cseBtn").addEventListener("click", () => renderCourses(courses.filter(c => c.code.startsWith("CSE"))));

renderCourses(courses);