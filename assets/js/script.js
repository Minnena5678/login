function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
  
    const loginButton = document.getElementById('login-button');
    const containerWidth = document.querySelector('.container').offsetWidth;
    const containerHeight = document.querySelector('.container').offsetHeight;
  
    const buttonWidth = loginButton.offsetWidth;
    const buttonHeight = loginButton.offsetHeight;
  
    const randomX = randomPosition(0, containerWidth - buttonWidth);
    const randomY = randomPosition(0, containerHeight - buttonHeight);
  
    loginButton.style.left = `${randomX}px`;
    loginButton.style.top = `${randomY}px`;
  });