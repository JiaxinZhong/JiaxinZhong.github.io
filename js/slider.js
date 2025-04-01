
function initSlider(slider, index) {
  const imgs = slider.querySelectorAll('img');
  const progress = slider.querySelector('.progress-bar');
  const pauseBtn = document.createElement('button');
  pauseBtn.className = 'pause-button';
  pauseBtn.innerHTML = '⏸';
  slider.appendChild(pauseBtn);

  let currentIndex = 0;
  let playing = true;
  const animationName = `slide-progress-${index}`;

  // 为每个 slider 创建独立 @keyframes 动画
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes ${animationName} {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;
  document.head.appendChild(style);

  function showSlide(idx) {
    imgs.forEach((img, j) => img.classList.toggle('active', j === idx));
    if (progress) {
      progress.style.animation = 'none';
      progress.offsetHeight;
      progress.style.animation = playing ? `${animationName} 5s linear infinite` : 'none';
    }
  }

  const prevBtn = slider.querySelector('.arrow.left');
  const nextBtn = slider.querySelector('.arrow.right');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
      showSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imgs.length;
      showSlide(currentIndex);
    });
  }

  pauseBtn.addEventListener('click', () => {
    playing = !playing;
    pauseBtn.innerHTML = playing ? '⏸' : '▶';
    if (progress) {
      progress.style.animation = 'none';
      progress.offsetHeight;
      progress.style.animation = playing ? `${animationName} 5s linear infinite` : 'none';
    }
  });

  const timer = setInterval(() => {
    if (playing) {
      currentIndex = (currentIndex + 1) % imgs.length;
      showSlide(currentIndex);
    }
  }, 5000);

  showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.highlight-slider').forEach((slider, idx) => {
    initSlider(slider, idx);
  });
});
