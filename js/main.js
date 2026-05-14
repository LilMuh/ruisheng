document.querySelector('.btn-submit').addEventListener('click', function() {
  this.textContent = '已提交 ✓';
  this.style.background = '#b07d3a';
  setTimeout(() => {
    this.textContent = '提交预约';
    this.style.background = '';
  }, 3000);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
