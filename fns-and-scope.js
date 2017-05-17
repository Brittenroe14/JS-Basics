//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if(name === 'Tyler'){
    return true;
  } else {
    return false;
  }
};
isTyler(name);
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
   var name = prompt("What is your name?");
  return name;
}
getName();

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome () {
function getName(){
  var person = prompt("Please enter your name", "Harry Potter");

  if (person != null) {
    alert("Hello " + person + "! How are you today?");
}
welcome();

function welcome() {
function getName() {
    var txt;
    var person = prompt("Please enter your name:");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
  }
    return txt;
  };
    getName();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

Parameters are the placeholder for agruments to pass through.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)

document.all will identify falsy objects




//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

var name = 'Britten';
function myName (name) {
    return name;
}
name;

//Now save the function definition of myName into a new variable called newMyName\
var newMyName = 'Britten';
function myName (newMyName){
    return newMyName;
}
newMyName;



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn () {
    var name = 'Britten';
    return function anonymous (name) {
      return name;
    }
  }
  name;

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = 'Britten';

//Now invoke innerFn.
innerFn;
