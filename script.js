const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const firstImg = document.querySelector('.first-player-img');
const secondImg = document.querySelector('.second-player-img');

let userChoice
let result
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    document.querySelector(".sec").style.display = 'flex'
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    switch (userChoice) {
        case "scissors":
            secondImg.setAttribute('src', 'https://www.wikihow.com/images/thumb/b/b2/Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg/v4-460px-Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg.webp')
            break;
        case "rock":
            secondImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2HuD_RD_fQnKCP43G2cNB4J2P1fUkAT8Qg&usqp=CAU')
            break;
        default:
            secondImg.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/mhJ2yWNwMtNcmijZqVEDDW.jpg')
            break;
    }
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor((Math.random() * possibleChoices.length) + 1);
    switch (randomNumber) {
        case 1:
            computerChoice = "paper"
            computerChoiceDisplay.innerHTML = computerChoice;
            firstImg.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/mhJ2yWNwMtNcmijZqVEDDW.jpg')
            break;
        case 2:
            computerChoice = "rock"
            computerChoiceDisplay.innerHTML = computerChoice;
            firstImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2HuD_RD_fQnKCP43G2cNB4J2P1fUkAT8Qg&usqp=CAU')
            break;
        default:
            computerChoice = "scissors"
            computerChoiceDisplay.innerHTML = computerChoice;
            firstImg.setAttribute('src', 'https://www.wikihow.com/images/thumb/b/b2/Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg/v4-460px-Play-Rock%2C-Paper%2C-Scissors-Step-8-Version-4.jpg.webp')
            break;


    }


}

function getResult() {
    if (computerChoice === userChoice)
        result = "it's a draw"

    if (computerChoice === "rock" && userChoice === "paper")
        result = "you win!"

    if (computerChoice === "rock" && userChoice === "scissors")
        result = "you lost!"

    if (computerChoice === "paper" && userChoice === "scissors")
        result = "you win!"

    if (computerChoice === "paper" && userChoice === "rock")
        result = "you lost!"

    if (computerChoice === "scissors" && userChoice === "rock")
        result = "you win!"

    if (computerChoice === "scissors" && userChoice === "paper")
        result = "you lost!"

    resultDisplay.innerHTML = result;
}

