function changeDiceImage () {
    const diceOne = document.querySelector('#dice1');
    const firstRandomNumber = Math.floor(Math.random() * 6) + 1;

    diceOne.src = `/assets/images/dice-${firstRandomNumber}.svg`;

    const diceTwo = document.querySelector('#dice2');
    const secondRandomNumber = Math.floor(Math.random() * 6) + 1;

    diceTwo.src = `/assets/images/dice-${secondRandomNumber}.svg`;

    if (firstRandomNumber > secondRandomNumber) {
        document.querySelector('h1').textContent = 'Player 1 wins!';
    } else if (firstRandomNumber < secondRandomNumber) {
        document.querySelector('h1').textContent = 'Player 2 wins!';
    } else {
        document.querySelector('h1').textContent = 'It\'s a tie!';
    }
}

var btn = document.getElementById('roll-dice');


btn.addEventListener('click', function() {
    changeDiceImage();
});

