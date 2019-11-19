/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  //parse through string turns it into integer, saves value to variable const hr
const hour = parseInt(timeString, 10);

// 12:00 p.m. , if hour is less htan 12pm
if (hour < 12) {
 return "Good Morning"
}
//if hour is greater than 5 pm
if(hour > 17 ){
  return "Good Evening"
}
//default incase no match is met
return "Good Afternoon"

}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  /*Step 1) The displayMessage function should take one argument, a String.

  */
  document.getElementById('greeting').innerText = string;

  /* Step2)When the function runs it should update the text inside the 
     #greeting(no hash needed with the getElementbyID, its expecting an ID) 
      node with the content of the first argument.  */ 
}