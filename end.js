const highScore = localStorage.getItem('highScore');
const finalScore = document.getElementById('finalScore');

finalScore.innerHTML = highScore;