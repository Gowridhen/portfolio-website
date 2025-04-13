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
