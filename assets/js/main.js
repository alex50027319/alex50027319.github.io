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

function setupListPagination() {
  const containers = document.querySelectorAll("[data-paginate]");
  if (!containers.length) return;

  const params = new URLSearchParams(window.location.search);
  const requestedPage = Number(params.get("page") || "1");

  containers.forEach((container, index) => {
    const items = Array.from(container.querySelectorAll(".js-page-item"));
    if (items.length === 0) return;

    const perPage = Number(container.getAttribute("data-per-page") || "10");
    const totalPages = Math.ceil(items.length / perPage);
    const safePage = Math.min(Math.max(requestedPage, 1), totalPages);

    items.forEach((item, itemIndex) => {
      const itemPage = Math.floor(itemIndex / perPage) + 1;
      item.style.display = itemPage === safePage ? "" : "none";
    });

    if (totalPages <= 1) return;

    const controls = document.createElement("div");
    controls.className = "pagination";

    const pageText = document.createElement("span");
    pageText.className = "pagination-info";
    pageText.textContent = `${safePage} / ${totalPages}`;

    const createLink = (label, page) => {
      const link = document.createElement("a");
      link.className = "pagination-link";
      const nextParams = new URLSearchParams(window.location.search);
      nextParams.set("page", String(page));
      link.href = `${window.location.pathname}?${nextParams.toString()}`;
      link.textContent = label;
      return link;
    };

    if (safePage > 1) controls.appendChild(createLink("이전", safePage - 1));
    controls.appendChild(pageText);
    if (safePage < totalPages) controls.appendChild(createLink("다음", safePage + 1));

    container.insertAdjacentElement("afterend", controls);

    if (index === 0 && requestedPage !== safePage) {
      const nextParams = new URLSearchParams(window.location.search);
      nextParams.set("page", String(safePage));
      window.history.replaceState({}, "", `${window.location.pathname}?${nextParams.toString()}`);
    }
  });
}

setupListPagination();
