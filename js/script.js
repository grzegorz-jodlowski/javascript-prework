{
    'use strict';

    function playGame(playerInput) {

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        const displayResult = (computerMove, playerMove) => {

            if (computerMove === 'kamień' && playerMove === 'papier') {
                playerWins++;
                return 'Ty wygrywasz! fart...';
            } else if (computerMove === 'kamień' && playerMove === 'nożyce') {
                computerWins++;
                return 'Wygrałem! Słaby człowiek!';
            } else if (computerMove === 'papier' && playerMove === 'nożyce') {
                playerWins++;
                return 'Wygrałeś, ostatni raz!';
            } else if (computerMove === 'papier' && playerMove === 'kamień') {
                computerWins++;
                return 'Taaaaak! wygrałem!';
            } else if (computerMove === 'nożyce' && playerMove === 'kamień') {
                playerWins++;
                return 'Oszukujesz? niemożliwe... wygrałeś!';
            } else if (computerMove === 'nożyce' && playerMove === 'papier') {
                computerWins++;
                return 'Ołłłł jeee, jestem lepszy! :)';
            } else if (computerMove === playerMove) {
                return 'Remis - jeszcze raz';
            } else {
                return 'ups... coś poszło nie tak :/';
            }
        };

        console.log(displayResult);
        printMessage(displayResult(computerMove, playerMove));

        printScore('Mój wynik: ' + computerWins + '<br>Twój wynik: ' + playerWins);

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