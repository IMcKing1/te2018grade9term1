const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log("No video games for the rest of the week. Go finish that homework.");

	}
	else{
		console.log("Since you did not talk back you get to keep your games. ")
	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go and take a shower.");
}
else {
	console.log("Good.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
}

let day = READLINE.question("How was your day? ")
if(day == "good"){
	console.log("Great! :D");
}
else{
	console.log("Hope you have a better one tomorrow")
}

let italian = READLINE.question("How do you like Italian? ")
if(italian == "It's good"){
	console.log("Oh, good.")
}
else{
	console.log("Well, it will be better next time.")
}

let biology = READLINE.question("How are you doing in biology? ")
if(biology == "good"){
	console.log("Great!");
}
else{
	console.log("You should go over the material.")
}

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);