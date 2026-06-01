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

    


    const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear estrellas
const stars = Array.from({ length: 1000 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2 + 1,
  speedX: Math.random() * 2 - 1,
  speedY: Math.random() * 2 - 1,
  twinkle: Math.random() * 0.8 + 0.5 // brillo variable
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    // efecto de parpadeo
    s.twinkle += (Math.random() - 0.5) * 0.05;
    if (s.twinkle < 0.1) s.twinkle = 0.8;
    if (s.twinkle > 1) s.twinkle = 1;

    ctx.fillStyle = `rgba(255, 255, 255, ${s.twinkle})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();

    // movimiento
    s.x += s.speedX;
    s.y += s.speedY;
    if (s.x < 0 || s.x > canvas.width) s.speedX *= -4;
    if (s.y < 0 || s.y > canvas.height) s.speedY *= -5;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
