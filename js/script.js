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
                printMessage('Gracz wygrał!');
                playerWins++;
            } else if (compMove === 'kamień' && playerInput === 'nożyce') {
                printMessage('Komputer wygrał!');
                computerWins++;
            } else if (compMove === 'papier' && playerInput === 'nożyce') {
                printMessage('Gracz wygrał!');
                playerWins++;
            } else if (compMove === 'papier' && playerInput === 'kamień') {
                printMessage('Komputer wygrał!');
                computerWins++;
            } else if (compMove === 'nożyce' && playerInput === 'kamień') {
                printMessage('Gracz wygrał!!');
                playerWins++;
            } else if (compMove === 'nożyce' && playerInput === 'papier') {
                printMessage('Komputer wygrał!');
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

        printMessage('Gracz: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Komputer: ' + playerMove);

        displayResult(computerMove, playerMove);

        printScore('Gracz: ' + playerWins, 'player');
        printScore('Komputer: ' + computerWins, 'comp');
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