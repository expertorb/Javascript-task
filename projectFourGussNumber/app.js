let randomNumber = parseInt((Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#gussesField');
const gussesSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrhi');
const startOver = document.querySelector('.resuptPara');

const p = document.createElement('p');
let prevGusses = [];
let numGuses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guses = parseInt(userInput.value);
         console.log(guses);
        validateGuess(guses);
        
    });
}
 
function validateGuess(guses) {
    if (isNaN(guses)) {
        alert(`Please enter a Valid Number`)
    } else if(guses > 100){
        alert(`Please enter a number less than 100`)
    }else if (guses < 1) {
        alert(`Please enter a number more than 1`)
    }else{
        prevGusses.push(guses)
        if (numGuses === 11) {
            displayGuess(guses)
            displayMassage(`Game Over Random number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guses)
            checkGuess(guses)
        }
    }
}
function checkGuess(guses) {
    if (guses === randomNumber) {
        displayMassage('You guested number right')
        endGame()
    }else if  (guses > randomNumber){
        displayMassage('You guested number TOO heigh')
    }else if  (guses < randomNumber){
        displayMassage('You guested number TOO Low')
    }
}

function displayGuess(guses) {
    userInput.value = ''
    gussesSlot.innerHTML += `${guses}, `
    numGuses++
    remaning.innerHTML = `${11 - numGuses}`
}

function displayMassage(massage) {
    lowOrHi.innerHTML = `<h2>${massage}</h2>`
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}   

function newGame() {
    const newGameBtn = document.querySelector(`#newGame`);
    newGameBtn.addEventListener('click', function(e){
       randomNumber= parseInt((Math.random() * 100 + 1));
       prevGusses = [];
       numGuses = 1;
       gussesSlot.innerHTML = '';
        remaning.innerHTML = `${11 - numGuses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
       playGame = true;

    })
}




