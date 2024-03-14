//write the pseudo code for steps on solving the exercise
/* Create a string saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
Assign three variables using uniquw arithmetic operator 
Comment your code
Create a pop up dialog box displaying the vault code
upload to Git
Combination is 10-40-39
*/
const chosenOne = "You have received this message because you have been chosen to open an important vault.  Here is the secret combination:";
let firstNum=(100/10);
let secondNum=(2*20);
let thirdNum=(30+9);

//function unlocked=(`${firstNum}` + ` ` + `${secondNum}` + ` ` + `${thirdNum}`)
//console.log (unlocked);
// alert(
//    console.log (unlocked)
// );
console.log(chosenOne);
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);

document.getElementById('chosenOne').innerHTML = chosenOne;
setTimeout(function() {alert(firstNum + "-" + secondNum + "-" + thirdNum);},1500);


