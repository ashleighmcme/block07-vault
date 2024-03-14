//write the pseudo code for steps on solving the exercise
/* Create a string saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
Assign three variables using uniquw arithmetic operator 
Comment your code
Create a pop up dialog box displaying the vault code
upload to Git
Combination is 10-40-39
*/
/* adding my constant for Chosen One*/
const chosenOne = "You have received this message because you have been chosen to open an important vault.  Here is the secret combination:";
/* I used let for my variable because in my head I'm thinking that when I write a program, let will show me areas where I know variables can change.*/
let firstNum=(100/10); //first number using an arithmetic operator
let secondNum=(2*20); //second number using an arithmetic operator
let thirdNum=(30+9); //third number using an arithmetic operator

//function unlocked=(`${firstNum}` + ` ` + `${secondNum}` + ` ` + `${thirdNum}`)
//console.log (unlocked);
// alert(
//    console.log (unlocked)
// );
//above was code where I was trying to use a function to get my alert box but I know I am missing pieces

console.log(chosenOne);
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
//not sure if I need the console logs other than maybe it would be helpful during debugging


document.getElementById('chosenOne').innerHTML = chosenOne;
const congrats = "You have successfully unlocked the vault.";
function showAlert(congrats){
    var modal = document.getElementById("customAlert");
  var alertMessage = document.getElementById("alertMessage");
  alertMessage.innerHTML = message;
  modal.style.display = "block";
}
setTimeout(function() {alert(firstNum + "-" + secondNum + "-" + thirdNum);},1500);
//set timeout delays popup a few moments in order to read landing page.


