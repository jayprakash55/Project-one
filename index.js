var readlineSync = require('readline-sync')

var score = 0;

var userName = readlineSync.question("Enter your name: ");
console.log("Welcome " + userName + " to DO YOU KNOW Jay ");

 function play(question,answer)
  {
    var userAns = readlineSync.question(question);

    if(userAns.toUpperCase() === answer.toUpperCase())
    {
      console.log("you are right");
      score = score+1;
    }
    else{
      console.log("you are wrong")
    }

    console.log("you current score is: " + score);
    console.log("-------------------------------------");
  }

var questions = [
  {
    question: "Where do I live ? ",
    answer: "Chennai"
  },
  {
    question:"What is my hobby ? ",
    answer: "Playing Cricket"
  },
  {
    question: "what is my favorite sports ? ",
    answer:"Cricket"
  },
  {
    question: "what is my favorite colour ? ",
    answer:"Blue"
  }
];

for(var i=0; i<questions.length; i++)
  {
    var currentquestion = questions[i];
    play(currentquestion.question,currentquestion.answer);
  }

 console.log("You scored:", score + " points")
