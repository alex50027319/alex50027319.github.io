const posts = [
  {
    title: "COMA 학습 파이프라인 정리",
    summary: "main → mission factory → episode loop까지 실행 흐름과 핵심 객체 역할 정리.",
    date: "2026-04-23",
    tags: ["RL", "COMA", "Pipeline"],
    link: "#",
  },
  {
    title: "Windows에서 빠른 시뮬레이션 실행 팁",
    summary: "run_windows.ps1의 Quick/FastCompare 옵션을 이용한 반복 실험 가이드.",
    date: "2026-04-20",
    tags: ["Windows", "Simulation"],
    link: "#",
  },
  {
    title: "UAV 경로 계획 실험 로그 설계",
    summary: "TensorBoard, 로그 디렉터리 구조, 비교 실험 지표 관리 방법.",
    date: "2026-04-17",
    tags: ["Experiment", "Logging"],
    link: "#",
  },
];

const postGrid = document.getElementById("postGrid");
const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

function renderPosts() {
  if (!postGrid) return;
  postGrid.innerHTML = "";

  posts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "card";

    const tags = post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

    article.innerHTML = `
      <div class="meta">${post.date}</div>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div>${tags}</div>
      <a href="${post.link}">글 읽기 →</a>
    `;

    postGrid.appendChild(article);
  });
}

function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
}

function setupTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);

  themeToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

renderPosts();
setupTheme();
if (year) year.textContent = new Date().getFullYear().toString();
