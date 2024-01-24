const startButton = document.querySelector('.start-button');

startButton.addEventListener('click', () => {
    const nextLink = 'stage.html?index=' + 1;
    
    location.href = nextLink;
})