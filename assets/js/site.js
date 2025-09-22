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

document.addEventListener("DOMContentLoaded", function () {
  const tocContainer = document.getElementById("toc");
  if (!tocContainer) return; // TOC placeholder nahi mila

  // Scan all headings inside article content (H2 and H3)
  const headings = document.querySelectorAll("article h2, article h3");

  headings.forEach((heading, index) => {
    // Add an id if heading me nahi hai
    if (!heading.id) {
      heading.id = "heading-" + index;
    }

    // Create TOC item
    const li = document.createElement("li");
    li.style.marginLeft = heading.tagName === "H3" ? "20px" : "0px";

    const a = document.createElement("a");
    a.href = "#" + heading.id;
    a.textContent = heading.textContent;
    a.style.textDecoration = "none";
    a.style.color = "#0073e6";

    li.appendChild(a);
    tocContainer.appendChild(li);
  });
});

document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault(); // prevent default link
    const dropdown = item.nextElementSibling;
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });
});
