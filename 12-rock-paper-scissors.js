let score= JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties:0
};


let isAutoPlaying= false;
let intervalId ;

/*const autoplay =() =>{

};*/
function autoplay(){
    if (!isAutoPlaying){
    intervalId =setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
    },1000);
    isAutoPlaying=true;
    document.querySelector('.js-auto-play-button').innerHTML=`Stop`;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying=false;
        document.querySelector('.js-auto-play-button').innerHTML=`Auto Play`;
    }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});


document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});


document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('Scissors');
});

document.body.addEventListener('keydown',(event) =>{
    if(event.key === 'r' ){
        playGame('rock');
    }else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('Scissors');
    }
})

function playGame(playerMove){
     
const computerMove=pickComputerMove();
if (playerMove === 'Scissors'){
if(computerMove === 'rock'){
result='You Lose';
}
else if(computerMove === 'paper'){
result='You Win';
}
else if(computerMove === 'Scissors'){
result='Tie';
}}
else
if(playerMove === 'paper'){
if(computerMove === 'rock'){
result='You Win';
}
else if(computerMove === 'paper'){
result='Tie';
}
else if(computerMove === 'Scissors'){
result='You Lose';
}
}
else
if(playerMove === 'rock'){
if(computerMove === 'rock'){
result='Tie';
}
else if(computerMove === 'paper'){
result='You Lose';
}
else if(computerMove === 'Scissors'){
result='You Win';
}
}

if(result === 'You Win'){
score.wins+= 1;
}else if( result === 'You Lose'){
score.loses+= 1;
}else if( result === 'Tie'){
score.ties+= 1;
} 
 localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = ` you
    <img class="move-icon" src="rock-paper-scissorss-images/${playerMove}-emoji.png">
    <img class="move-icon" src="rock-paper-scissorss-images/${computerMove}-emoji.png">
    computer`;

/* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins} ,Loses: ${score.loses} ,Ties: ${score.ties}`); */
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML =` Wins: ${score.wins} ,Loses: ${score.loses} ,Ties: ${score.ties}`;
}

function pickComputerMove(){
let computerMove='';
let result='';
 const randomnumber= Math.random();

if(randomnumber >=0 && randomnumber< 1/3){
     computerMove='rock';
}
else if(randomnumber >=1/3 && randomnumber< 2/3){
    computerMove='paper';
}
else if(randomnumber >=2/3 && randomnumber<= 1){
    computerMove='Scissors';
}

return computerMove;
}