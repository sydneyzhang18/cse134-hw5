document.addEventListener("DOMContentLoaded", () => {
  const navList = document.getElementById("nav-list");

  const li = document.createElement("li");
  const themeButton = document.createElement("button");
  themeButton.id = "theme-toggle";
  themeButton.textContent = "Toggle Theme";
  li.appendChild(themeButton);

  navList.appendChild(li);

  // Load theme from localStorage
  const stored = localStorage.getItem("theme");
  if (stored === "light") {
    document.documentElement.classList.add("theme-light");
    themeButton.textContent = "Dark Mode";
  }
  if (stored === "dark") {
    document.documentElement.classList.add("theme-dark");
    themeButton.textContent = "Light Mode";
  }

  // Toggle theme
  themeButton.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.classList.contains("theme-dark")) {
      html.classList.remove("theme-dark");
      html.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else if (html.classList.contains("theme-light")) {
      html.classList.remove("theme-light");
      html.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        html.classList.add("theme-light");
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("theme-dark");
        localStorage.setItem("theme", "dark");
      }
    }
    if (html.classList.contains("theme-dark")) {
      themeButton.textContent = "Light Mode";
    } else {
      themeButton.textContent = "Dark Mode";
    }
  });
});
