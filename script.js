const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', () => {
  envelope.querySelector('.top').style.transform = 'rotateX(180deg)';
  setTimeout(() => {
    letter.classList.remove('hidden');
    envelope.style.opacity = '0';
  }, 500);
});
