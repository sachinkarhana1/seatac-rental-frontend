function toggleFAQ(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('svg');

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      icon.classList.remove('rotate-180');
    }
  }
  const slider = document.getElementById('category-slider');
  const leftButton = document.getElementById('slider-left');
  const rightButton = document.getElementById('slider-right');

  leftButton.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightButton.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });