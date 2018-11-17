const READLINE = require("readline-sync");

// **** Problem 1: printMessage() ****
// Write a function that prints any message you want.
function printMessage(){
	let message = READLINE.question("What is your message? ");
	console.log(message);
}



// **** Problem 2: printFiveMessages() ****
// Write a function that calls printMessage() five times.
function printFiveMessages(){
	printMessage();
	printMessage();
	printMessage();
	printMessage();
	printMessage();
}



// **** Problem 3: getUserInput() ****
// Write a function that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on
// what the user decides.
function getUserInput(){
	let get = READLINE.question("How many times would you like to print your message? (1 or 5) ")
	if(get == "5"){
		printFiveMessages();
	}
	else{
		printMessage();
	}
}





// **** Problem 4: printGreeting() ****
// Write a function that prints a greeting message to the user.
function printGreeting(){
	console.log("Greetings, user")
}



// **** Problem 5: printClosing() ****
// Write a function that prints a goodbye message to the user.
function printClosing(){
	console.log("Goodbye, user")
}



// **** Problem 6: run() ****
// Write a function that runs the whole program by calling functions in this
// order:
// 1) printGreeting()
// 2) getUserInput()
// 3) printClosing()
function run(){
	printGreeting();
	getUserInput();
	printClosing();
}



// When finished, call your run() function below to run the whole program!
run();