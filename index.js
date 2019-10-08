/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeArg) {
  let timeArgString = timeArg.split(':')[0];
  let timeHour = parseInt(timeArgString);

  if (timeHour < 12) {
    return 'Good Morning';
  }
  if (timeHour >= 12 && timeHour < 17) {
    return 'Good Afternoon';
  } 
  if (timeHour > 17) {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(greet) {
  let greeting = document.querySelector('#greeting')
  greeting.innerText = greet
}
