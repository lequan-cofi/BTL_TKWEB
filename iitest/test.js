// Tìm tất cả các mục cha có menu con
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  const subnav = item.querySelector('.subnav');

  // Hiện menu con khi hover vào mục cha
  item.addEventListener('mouseenter', () => {
    subnav.style.display = 'block';
    subnav.style.opacity = '0';
    setTimeout(() => {
      subnav.style.opacity = '1';
      subnav.style.transition = 'opacity 0.3s ease';
    }, 0);
  });

  // Ẩn menu con khi chuột rời khỏi mục cha
  item.addEventListener('mouseleave', () => {
    subnav.style.opacity = '0';
    setTimeout(() => {
      subnav.style.display = 'none';
    }, 300);
  });
});
