'use strict'

/*
    this code used:
prompt user 5 questions for yes or no. must excpet y/n or yes/no response.
use touppercase() or tolowercase.
added console.log() and alerts()
prompts for name as a welcome and final message
code uses strict
 */



function ask(answer)
{
  if(answer === null || answer === undefined)
    return false;

  let ans = answer.toUpperCase();

  if(ans === 'Y' || ans === 'YES')
  {
    return true;
  }
  //else -> we dont need else here. since its not null and not yes. then the only option is false
  return false;
}

function questions()
{
  let ans = false;
  let qArray = [
    'Are you a interviewer?',
    'Do you Project manager?',
    'Do you consider yourself to be a tall person?',
    'Are you carefree?',
    'Are you a Morning person?'
  ];
  let ansArr =
  [
    "a interviewer",
    "a Project Manager",
    "a tall person",
    "carefree",
    "a morning person"
  ];

  let size = qArray.length;

  let clientName = prompt("What is your name?");
  alert(`your name is ${clientName}`);
  for(let i = 0; i < size; ++i )
  {
    ans = prompt(qArray[i]);
    if(ask(ans))
    {
      alert("your response is Yes");
    }
    else
      alert("your response is No");
    if(ask(ans))//ask return true or false from prompt
    {
      //then the ans is yes!
      console.log(`your answer is yes, you are ${ansArr[i]}`);
    }
    else//I did not need an else statement here because if answer is not true then we can assume answer was false.
    {
      console.log(`you are not wrong, but you are definetly not ${ansArr[i]}`);
    }

  }
  alert(`thank you ${clientName}`);
}


questions();
