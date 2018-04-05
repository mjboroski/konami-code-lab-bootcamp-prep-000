const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  index.addEventListener('keydown', onKeyDownHandler {
    alert('I was clicked!')
  })
}
  // This is the function that would be invoked by the event listener.
function onKeyDownHandler() {
  const key = parseInt(e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
