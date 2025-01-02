// Example: Toggle visibility of a section on click
document.addEventListener('DOMContentLoaded', function() {
  const newsSection = document.querySelector('.news');
  newsSection.addEventListener('click', function() {
    newsSection.classList.toggle('open');
  });
});
