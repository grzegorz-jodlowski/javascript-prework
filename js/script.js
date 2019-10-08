{
    'use strict';

function playGame(playerInput) {

    clearMessages();

    function getMoveName(moveId) {
        if (moveId === 1) {
            return 'kamień';
        } else if (moveId === 2) {
            return 'papier';
        } else if (moveId === 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + moveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(compMove, playerInput) {
        if (compMove === 'kamień' && playerInput === 'papier') {
            printMessage('Ty wygrywasz! fart...');
            playerWins++;
        } else if (compMove === 'kamień' && playerInput === 'nożyce') {
            printMessage('Wygrałem! Słaby człowiek!');
            computerWins++;
        } else if (compMove === 'papier' && playerInput === 'nożyce') {
            printMessage('Wygrałeś, ostatni raz!');
            playerWins++;
        } else if (compMove === 'papier' && playerInput === 'kamień') {
            printMessage('Taaaaak! wygrałem!');
            computerWins++;
        } else if (compMove === 'nożyce' && playerInput === 'kamień') {
            printMessage('Oszukujesz? niemożliwe... wygrałeś!');
            playerWins++;
        } else if (compMove === 'nożyce' && playerInput === 'papier') {
            printMessage('Ołłłł jeee, jestem lepszy! :)');
            computerWins++;
        } else if (compMove === playerInput) {
            printMessage('Remis - jeszcze raz');
        } else {
            printMessage('ups... coś poszło nie tak :/');
        }

    }


    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);

    printScore('Mój wynik: ' + computerWins + '<br>Twój wynik: ' + playerWins);
}

let playerWins = 0;
let computerWins = 0;

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});

}