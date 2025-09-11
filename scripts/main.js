import { speak } from '../modules/speech.js';
import { triggerExpression } from './expressions.js';
import { trackEyeMovement } from '../modules/eye.js';

document.addEventListener('DOMContentLoaded', () => {
  triggerExpression('welcome');
  trackEyeMovement();

  const mascot = document.getElementById('openbot-hero');
  mascot.addEventListener('mouseenter', () => triggerExpression('idle'));
  mascot.addEventListener('click', () => triggerExpression('error'));
});