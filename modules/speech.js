// modules/speech.js
export function speak(text, expression = 'neutral') {
  const statusText = document.getElementById('status-text');
  const mascot = document.getElementById('openbot-hero');

  // Update expression visually
  mascot.setAttribute('data-expression', expression);

  // Update visible speech
  statusText.textContent = text;

  // Trigger voice
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1.2;
  speechSynthesis.speak(utterance);
}