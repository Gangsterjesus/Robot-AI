export function speak(text, expression = 'talking') {
  const statusText = document.getElementById('status-text');
  const mascot = document.getElementById('openbot-hero');

  mascot.setAttribute('data-expression', expression);
  statusText.textContent = text;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1.2;

  utterance.onend = () => {
    mascot.setAttribute('data-expression', 'neutral');
  };

  speechSynthesis.speak(utterance);
}