function play(){
// hide the home screen.
// show the playground

const homeSection = document.getElementById('home')
homeSection.classList.add('hidden');




const playgroundSection = document.getElementById('playground');

playgroundSection.classList.remove('hidden')

continueGame();
};



function continueGame(){

const alphabet = getARandomAlphabet();
console.log('your random alphabet', alphabet)

// set random alphabet to the screen

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText = alphabet;

// add bacground color
addBackgroundColorById(alphabet)

};


function getARandomAlphabet(){
    //  get or creat an alphabet arry
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
   const alphabets = alphabetString.split('');
//    console.log(alphabets);

//    get a random Index between 0-25;
const randomNumber = Math.random()*25;
const index =Math.round(randomNumber);


const alphabet = alphabets[index];
// console.log(alphabet)
return alphabet;

};


function addBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400')
};






function handleKeybordButtonPress(event){
    const playerPressed = event.key;
console.log('player pressed', playerPressed);

// get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');

const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

// chack matched or not
if(playerPressed === expectedAlphabet){
// update score
const currenScoreElement = document.getElementById('scor-num');

const currentScoreText = currenScoreElement.innerText;
const currentScore = parseInt(currentScoreText);

const newScore = currentScore + 1 ;
currenScoreElement.innerText = newScore;




    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame()
}
else{
    const currentLifeElement = document.getElementById('life-num');

    const currentLifeText = currentLifeElement.innerText;

    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;

    if(newLife === 0){
        gameOver();

    }
}
};



// capture keybord key press
document.addEventListener('keyup', handleKeybordButtonPress)




// remove background color by id
function removeBackgroundColorById(elementId){
const element = document.getElementById(elementId);
element.classList.remove('bg-orange-400')
};



function gameOver(){


    const playgroundSection = document.getElementById('playground')
    playgroundSection.classList.add('hidden');
    
    
    const finalSection = document.getElementById('final-score');
    
    finalSection.classList.remove('hidden')

    // update final score

   const lastScore = getTextElementValueById('scor-num');

   setTextElementValueById('last-score', lastScore);

//    clear last selected alphabet highlight
     const currentAlphabet = getElementTextById('current-alphabet');
     removeBackgroundColorById(currentAlphabet);



};



function getTextElementValueById(elementId){
const element = document.getElementById(elementId);
const elementValueText = element.innerText;
const value = parseInt(elementValueText)
return value;

}








function playAgain(){
    const scoreSection =document.getElementById('final-score');
scoreSection.classList.add('hidden')


const homeSection = document.getElementById('home')
homeSection.classList.add('hidden');




const playgroundSection = document.getElementById('playground');

playgroundSection.classList.remove('hidden')

continueGame();

setTextElementValueById('life-num', 5);
setTextElementValueById('scor-num', 0)
}






function setTextElementValueById(elementId, value){
const element = document.getElementById(elementId);
element.innerText = value;
 };



 function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
 }

//  stop the game if pressed Esc
if( playerPressed === 'Escaped'){
    gameOver()
}

 