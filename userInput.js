function userInput()
{
  let a = "boot camp"
let text = []; 
let newLetter = [];
let newWord = [];


for (let i = 0; i < a.length; i++) {
  if (a[i] === ' '){
    newLetter += '_';
    newWord += newLetter;
  } else {
    newWord += a[i];
  }
}
console.log(newWord);}
