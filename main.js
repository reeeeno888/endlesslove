
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE YOU HONEY').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('playMusic');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const nextButton = document.getElementById('nextPage');

  // Play/Pause music functionality
  playButton.addEventListener('click', function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      playButton.textContent = 'Pause Music';
    } else {
      backgroundMusic.pause();
      playButton.textContent = 'Play Music';
    }
  });

  // Redirect to another page when "Next" button is clicked
  nextButton.addEventListener('click', function () {
    window.location.href = 'index3.html'; // Replace with your target URL
  });
});
