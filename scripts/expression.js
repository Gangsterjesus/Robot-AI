import { speak } from '../modules/speech.js';

export const expressions = {
  welcome: {
    text: "Welcome aboard, contributor!",
    mood: "talking"
  },
  error: {
    text: "Oops... something went wrong.",
    mood: "talking"
  },
  idle: {
    text: "I'm here if you need me.",
    mood: "neutral"
  }
};

export function triggerExpression(key) {
  const { text, mood } = expressions[key] || expressions.idle;
  speak(text, mood);
}