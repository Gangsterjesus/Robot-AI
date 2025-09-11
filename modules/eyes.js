export function trackEyeMovement() {
  const mascot = document.getElementById('openbot-hero');

  document.addEventListener('mousemove', (e) => {
    const center = window.innerWidth / 2;
    const look = e.clientX < center ? 'left' : 'right';
    mascot.setAttribute('data-look', look);
  });
}