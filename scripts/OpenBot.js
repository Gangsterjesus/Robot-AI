document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('openbot-hero');
  const chat = document.getElementById('openbot-chat');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('user-input');
  const log = document.getElementById('chat-log');
  const micBtn = document.getElementById('mic-button');
  const status = document.getElementById('status-text');

  const welcome = 'Welcome, I am OpenBot';
  speak(welcome);
  status.textContent = welcome;

  setTimeout(() => {
    hero.style.display = 'none';
    chat.hidden = false;
    append('OpenBot', '🤖 Ready for your questions.');
  }, 4000);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = input.value.trim();
    if (!msg) return;
    append('You', msg);
    duckDuckSearch(msg);
    input.value = '';
  });

  micBtn.addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-GB';
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      append('You (mic)', transcript);
      duckDuckSearch(transcript);
    };
    recognition.start();
  });

  function append(sender, text) {
    const div = document.createElement('div');
    div.className = sender.includes('OpenBot') ? 'bot-message' : 'chat-message';
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = 1.2;
    utter.rate = 1;
    speechSynthesis.speak(utter);
  }

  function duckDuckSearch(query) {
    fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`)
      .then(res => res.json())
      .then(data => {
        const answer = data.Abstract || data.Answer || "🤖 I couldn't find a direct answer, but it's worth exploring.";
        append('OpenBot', answer);
        speak(answer);
      })
      .catch(() => {
        append('OpenBot', '🤖 Search failed. Try again.');
        speak('Search failed. Try again.');
      });
  }
});