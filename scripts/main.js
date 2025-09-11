import { speak } from '../modules/speech.js';
import { triggerExpression } from './expressions.js';
import { trackEyeMovement } from '../modules/eye.js';

document.addEventListener('DOMContentLoaded', () => {
  // Trigger welcome speech and expression
  triggerExpression('welcome');

  // Activate eye tracking
  trackEyeMovement();

  // Get mascot container by ID (not class)
  const mascot = document.getElementById('openbot-hero');

  // Add interaction listeners
  mascot.addEventListener('mouseenter', () => triggerExpression('idle'));
  mascot.addEventListener('click', () => triggerExpression('error'));
});