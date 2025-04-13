document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    duration: 1000
  });

  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = 0;
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

document.getElementById('theme1').addEventListener('click', () => {
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add('blue-theme');
});

document.getElementById('theme2').addEventListener('click', () => {
  document.body.classList.remove('blue-theme', 'light-mode');
  document.body.classList.add('dark-mode');
});

document.getElementById('theme3').addEventListener('click', () => {
  document.body.classList.remove('blue-theme', 'dark-mode');
  document.body.classList.add('light-mode');
});
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById('scrollToTop');
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

