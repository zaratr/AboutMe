'use strict'

/*
    this code used:
prompt user 6 questions for yes or no. must excpet y/n or yes/no response.
use touppercase() or tolowercase.
added console.log() and alerts()
prompts for name as a welcome and final message
code uses strict
 */



function ask1(answer)//very basic check to return true
{
  let userAns = answer.toUpperCase();
  if(userAns === "YES" || userAns === "Y")
  {
    return true;
  }
  return false;
}


function ask(answer, toComp1, toComp2)//this uses an array to compare answers from user and preset from an array
{
  if(answer === null || answer === undefined)
    return false;

  let ans = answer.toUpperCase();

  if(ans === toComp1 || ans === toComp2)
  {
    return true;
  }
  //else -> we dont need else here. since its not null and not yes. then the only option is false
  return false;
}



function guessStringGame()//this is to find the string from possible strings that match with preset favorite color.
{
  let possibleAns= [
      "red",
      "green",
      "blue",
      "yellow",
      "indigo",
      "black",
      "pink"
  ];
  let correctName = "red"
  let numOfGuesses = 0;
  let maxGuess = 6;
  //let word = prompt("please guess a color").toUpperCase();
    alert(`Possible answers: ${possibleAns}`)
  do{
    let word = prompt("please guess a color").toUpperCase();
    if(word !== "RED")
    {
      alert(`You have ${maxGuess - 1 - numOfGuesses} left. good luck`)
    }
    else//color is correct
    {
      alert("you guessed my correct color: red!")
      break;
    }
    numOfGuesses++;
  }  while(numOfGuesses < maxGuess);
  return 1;
}



function guessNumberGame()//this function finds the preset number and compares it with user input
{
  let correctNum = 4;//use RandomGenerator
  let numOfGuesses = 1;
  let maxGuess = 4;
  let num = prompt("please guess a number!");
  let x = Number(num);
  let score = 0;

  while(numOfGuesses < maxGuess)
  {
    if(x > 0 && x < 10)//number 1 -10
    {
      if(num > correctNum)
      {
        alert("Darn - too high");
        num = prompt("please guess a number!");
         x = Number(num);
      }
      else if(num < correctNum)
      {
        alert("Darn - too low");
        num = prompt("please guess a number!");
         x = Number(num);
      }
      else//we the right number
      {
        alert("You got it right!");
        score++;
        break;
      }
    }
    else
    {
      alert("guess a number between 1 - 10. Please try again");
      return 0;
    }
    ++numOfGuesses;
  }

  alert(`the correct number is ${correctNum} and you guessed ${x}`);
  return score;
}



function main_()
{
  let finalScore = 0;
  let ans = false;
  let userNumber = 0;
  let qArray = [
    'Do I know how to play soccer?',
    'Do I know how to do a backflip?',
    'Did I live in Los Angeles?',
    'Do you think I am Carefree?',
    'Do you thin I am a Morning person?',
      "Guess my number!",
      "Guess my favorite color!"

  ];
  let size = qArray.length;
  let toComp =[
    "NO", "N",
    "NO", "N",
    "YES", "Y",
    "YES", "Y",
    "YES", "Y"
  ];
  let ansArr =
  [
    "and you are right I'm not a soccer player",
    "and you are right, I cant do a backflip",
    "and you are right, I did live in los angeles",
    "and you are right, I am carefree",
    "and you are right, I am a morning person... sometimes"
  ];

  let clientName = prompt("Welcome to this program where you will guess things about me. At the end we will guess numbers,  What is your name? ");


  alert(`your name is ${clientName}`);
  for(let i = 0; i < size; ++i )
  {
    ans = prompt(qArray[i]);
    if(ask1(ans))
    {
      alert("your response is Yes");
    }
    else
      alert("your response is No");

    //ask is yes or no, ans is string question,
    if(ask(ans, toComp[i], toComp[i+1]))//ask return true or false from prompt
    {
               //then the ans is yes!

      //console.log(`your answer is yes, you are ${ansArr[i]}`);
      finalScore += 1;
      alert(`your answer is right,  ${ansArr[i]}`);
    }
    else//I did not need an else statement here because if answer is not true then we can assume answer was false.
    {
      //console.log(`you are not wrong, but you are definetly not ${ansArr[i]}`);
      alert(`you are not wrong, but you are definetly not right`);
    }
    if(i === 4) break;//doesn't need to loop if we are at the 4th index.

  }
  alert("lets now try to guess my number!");
  finalScore += guessNumberGame();
  alert("lets guess my favorite color")
  finalScore += guessStringGame();

  alert(`Your final score is ${finalScore}`);
  alert(`thank you for visiting${clientName}! lets keep up the good spirit for our class!`);
}


main_();//for practicality i named the final function main
//guessStringGame();
//guessNumberGame();
