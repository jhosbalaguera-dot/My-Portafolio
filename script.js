const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    const toggle = document.getElementById("darkModeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });