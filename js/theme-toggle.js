document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("switch");
  const body = document.body;

  // Definición de variables CSS para tema claro
  const lightTheme = {
    "--primary": "#38b6ff",
    "--primary-dark": "#1a97e0",
    "--dark": "#f6f8fa",
    "--dark-light": "#e9eef5",
    "--text": "#222",
    "--text-secondary": "rgba(34, 34, 34, 0.7)",
  };

  // Definición de variables CSS para tema oscuro (por defecto)
  const darkTheme = {
    "--primary": "#38b6ff",
    "--primary-dark": "#1a97e0",
    "--dark": "rgb(2, 6, 23)",
    "--dark-light": "rgb(10, 15, 35)",
    "--text": "#ffffff",
    "--text-secondary": "rgba(255, 255, 255, 0.7)",
  };

  // Cambia las variables CSS del :root
  function setTheme(theme) {
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }

  // Guarda la preferencia en localStorage
  function saveTheme(themeName) {
    localStorage.setItem("theme", themeName);
  }

  // Carga la preferencia guardada
  function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      toggle.checked = true;
      setTheme(lightTheme);
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    } else {
      toggle.checked = false;
      setTheme(darkTheme);
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    }
  }

  // Evento para el toggle
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      setTheme(lightTheme);
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      saveTheme("light");
    } else {
      setTheme(darkTheme);
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      saveTheme("dark");
    }
  });

  // Inicializa el tema al cargar
  loadTheme();
});
