const READLINE = require("readline-sync");

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("");
let withAdult = READLINE.question("");

if (age >= 18 || withAdult == "yes"){

	console.log("Can see movie")

}
else{

	console.log("Cannot see movie")

	}


// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining?");
let thunderstorming = READLINE.question("Is it thunderstorming?");

if (raining == "yes" && thunderstorming == "yes"){
	console.log("Do not bring umbrella")
	   }
else{
	   	console.log("Bring umbrella")
   }
else{
	console.log("Don't bring umbrella")
}
// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = false;
let spankey = false;

if ((bubbles == false && spankey == false) || (bubbles == true && spankey == true)){
	
		console.log(" Neither or both are smiling. You're in trouble!")
	
	}
else{
		console.log("You're safe :D")
}



// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = 100;
let score2 = 100;
let score3 = 89;


if (score1 == score2 || score1 == score3 || score2 == score3){
	console.log("Scores: 100, 100, 89")
	console.log("Tie between two scores!")
	console.log("Top Score:")
	console.log(score1)
}else{

	console.log("PLAYER ONE IS THE WINNER")
	console.log(score1)

}


// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = 250;

if (money >= 30){
	console.log("You can only buy a prepaid phone :(")
}if(money >= 100){
	console.log("You can buy a bottom tier phone :/")

}if (money >= 300){
	console.log("You can buy a mid tier phone :3")

}if (money >= 600){
	console.log("YOU CAN BUY A TOP TIER PHOOOONE :DDDD")
}


// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 16;
let guess = READLINE.question("I'm thinking of a number. Guess it: ");

if (guess == myNum){
	console.log("Congrats! You got it right!")
}else if (guess < 16){
	console.log("Oops! You were this much off :(")
	console.log(16 - guess)
	if(guess < 16 && guess >=13){
		console.log("Aww, you got so warm!")
		if(guess < 13){
			console.log("You were a little cold there :/")
		}
	}
}else if(guess > 16){
	console.log("Oops! You were this much off :(")
	console.log(guess - 16)
	if(guess > 16 && guess <= 19){
		console.log("You were so warm!")
		if(guess > 19){
			console.log("You were a little cold there :/")
		}
	}
}



