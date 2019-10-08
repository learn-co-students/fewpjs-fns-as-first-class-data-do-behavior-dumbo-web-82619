/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(input){
  let text = document.querySelector('h1#greeting')
  text = input
  debugger
}

function greet(time){
  let time_string = time.split(":")
  let hour = parseInt(time_string[0])
  
  if(hour < 12){
    return "Good Morning"
  }
  else if(hour >= 12 && hour <= 17){
    return "Good Afternoon"
  } 
  else if(hour > 17){
    return "Good Evening"
  }
  else {
    return time
  }
}
