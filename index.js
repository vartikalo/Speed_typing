window.addEventListener('load', init);

const levels = {
    easy =  5,
    medium = 3,
    hard =2
};

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highScoreDisplay = document.querySelector("#highScore");

const words = [
    'domestica', 'rat', 'butterfly', 'seat', 'joke', 'retard', 'chihuahua', 'sunflower', 'door', 'window', 'dictionary', 'diarrhoea',
    'cocktail', 'champagne', 'cold', 'summer', 'goggles', 'banana', 'vacuum'
];

function init(){
  //show number of seconds in the UI
  seconds.innerHTML = currentLevel;

  //Load word from array  
  showWord(words);

  //matching inpur and word
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50)
}

//start matching words
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel+1;
       showWord(words);
       wordInput.value = "";
       score++;

    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
    scoreDisplay.innerHTML = score;
}
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    }else{
        message.innerHTML = "";
        return false;
    }
}

function showWord(words){
    const randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randomIndex];
}

function countdown(){
    if(time>0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}