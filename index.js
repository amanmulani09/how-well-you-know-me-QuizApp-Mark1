console.log("*************************************");
console.log("Let's Check How well you know about me ");
console.log("*************************************");

var readlineSync=require("readline-sync");

var score = 0;

var userName = readlineSync.question("\n Please Enter Your Name\n");

console.log(`Hey! ${userName} Welcome! Let's Play!`);

function play(question,answer){

var userAnswer = readlineSync.question(question);

if(userAnswer.toLowerCase()===answer.toLowerCase()){

  console.log("Yahh!! You're Correct!");
  score++
}
else{

  console.log("Oops! You just missed it Better Luck Next Time");
}

console.log(`Current Score is ${score}`);

console.log("*************************************************************");



}

var questions = [
{
  question:"Where is Live?",
  answer: "Latur",
},

{
  question:"Which Course I am Studying? ",
  answer:"bca"
},
{
question:"What is my Favorite Food? ",
answer:"Biryani"

},
{
  question:"What is my favorite sport?",
  answer: "Cricket"
},

{
  question:"What is my favorite Color ?",
  answer:"black"
}


];

for(var i =0; i<questions.length;i++){
  var currentQuestion = questions[i];

  play(currentQuestion.question,currentQuestion.answer);
}

console.log(`Yahh You Finished Test ${userName} and Your Score is ${score}`);