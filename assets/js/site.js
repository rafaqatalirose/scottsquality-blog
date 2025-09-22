document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) {
    console.log("theme-toggle button not found");
    return; 
  }
  console.log("theme-toggle button found, adding listener");

  // Set initial theme from localStorage (or default)
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️"; 
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    console.log("Theme toggled:", isDark ? "dark" : "light");
  });
});
