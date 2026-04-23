const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  if (themeToggle) themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
}

function setupTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

setupTheme();
if (year) year.textContent = new Date().getFullYear().toString();
