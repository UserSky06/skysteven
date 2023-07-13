const score = JSON.parse(localStorage.getItem ('score')) || {
  wins:0,
  losses:0,
  tie:0
};

updateScoreElement();

/*  if ((!score) or score === null) {
score={
  wins:0,
  losses:0,
  tie:0
}
}
*/

function playGame (playerMove) {
const computerMove = pickComputerMove();


let result = ``;

if(playerMove === `Scissor`){

if(computerMove === `Scissor`) {

  result = `tie.`;

}else if (computerMove === `Rock` ){

  result = `you lose`;
}else if (computerMove === `Paper`){

  result = `you win`;
}

}
else if(playerMove === `Rock`){

if(computerMove === `Rock`) {

  result = `tie.`;

}else if (computerMove === `Paper` ){

  result = `you lose`;

}else if (computerMove === `Scissor`){

  result = `you win`;
}

} else if(playerMove === `Paper`){

if(computerMove === `Paper`) {

  result = `tie.`;

}else if (computerMove === `Scissor` ){

  result = `you lose`;
}else if (computerMove === `Rock`){

   result = `you win`;

}

}


if (result === 'you win') {
score.wins = score.wins + 1; // or score.wins += 1;
}else if (result === 'you lose') {
score.losses = score.losses + 1; // or score.losses += 1;
}else if (result === 'tie.') {
score.tie = score.tie + 1; // or score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));



updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You
<img src="image/${playerMove}-emoji.png"
class="move-icon">

<img src="image/${computerMove}-emoji.png"
class="move-icon">
Computer`;




}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML =  `Wins: ${score.wins}, Losses : ${score.losses},
Ties:${score.tie}`;
}





function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = ``;


if(randomNumber >= 0 && randomNumber < 1/3) {

computerMove =`Rock`;
}else if(randomNumber >= 1/3 && randomNumber < 2/3 ){
computerMove = `Paper`;

}else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove =`Scissor`;
}

return computerMove;
}