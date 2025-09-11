// modules/eye.js
export function trackEyeMovement() {
  const robot = document.querySelector('.robot');

  document.addEventListener('mousemove', (e) => {
    const center = window.innerWidth / 2;
    const look = e.clientX < center ? 'left' : 'right';
    robot.setAttribute('data-look', look);
  });
}