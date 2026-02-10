// alert, prompt, confirm

// alert: shows message in modal Window and wait for user to press OK 
alert("Hello");

// prompt: accepts 2 arguments, shows a modal window with a text message, and input field
// and OK/Cancel
result = prompt(title, /*[default]*/);

// confirm: shows a modal window with a question and 2 buttons OK/Cancel
result = confirm(question);
let isBoss = confirm("Are you the boss?");
alert(isBoss); // shows true is OK is pressed, false if Cancel is pressed
