document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');

    // Update button text
    if (document.body.classList.contains('night-mode')) {
      toggleBtn.textContent = '☀️ Day Mode';
    } else {
      toggleBtn.textContent = '🌙 Night Mode';
    }
  });
});
