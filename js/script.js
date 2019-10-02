function playGame(argPlayerMove) {

    clearMessages();

    let playerInput = argPlayerMove;

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz! fart...');
            playerWins++;
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Wygrałem! Słaby człowiek!');
            computerWins++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrałeś, ostatni raz!');
            playerWins++;
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Taaaaak! wygrałem!');
            computerWins++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Oszukujesz? niemożliwe... wygrałeś!');
            playerWins++;
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ołłłł jeee, jestem lepszy! :)');
            computerWins++;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis - jeszcze raz');
        } else {
            printMessage('ups... coś poszło nie tak :/');
        }

    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

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

