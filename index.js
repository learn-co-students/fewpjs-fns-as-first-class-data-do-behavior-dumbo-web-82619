/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timeArgString = time.split(':')[0];
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


function displayMessage(message) {
  document.getElementById('greeting').innerText = message;

}