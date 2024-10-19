// Function to handle the response
function respondLove(choice) {
  if (choice === 'yes' || choice === 'ofcourse') {
    window.location.href = 'loveletter.html';
  } else {
    alert("Oh no, you're not supposed to click 'No'! But I love you anyway, Bujjii!");
  }
}

// Floating hearts effect
const heartsContainer = document.getElementById('hearts-container');
for (let i = 0; i < 100; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heartsContainer.appendChild(heart);
}
