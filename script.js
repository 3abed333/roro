const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const seal = document.getElementById('seal');
const song = document.getElementById('song');
const playAgainBtn = document.getElementById('playAgain');

let opened = false;

function openLetter() {
  if (opened) return;
  opened = true;

  envelope.classList.add('opened');

  song.currentTime = 34;
  song.play().catch(() => {
    // Autoplay was blocked; the "play again" button lets her retry with a tap.
  });

  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.add('visible');
  }, 900);
}

envelope.addEventListener('click', openLetter);
seal.addEventListener('click', openLetter);

playAgainBtn.addEventListener('click', () => {
  song.currentTime = 0;
  song.play();

});
