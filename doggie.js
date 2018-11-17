const READLINE = require("readline-sync")

let dog = {
	name: "Old Yeller",
	numLegs: 4,
	color: "Yeller",
	breed: "Golden Retriever",
	bark: function(){
		console.log("Bark!");
	},
	sayName: function(){
		console.log(`My name is ${this.name}`)
	},
	eat: function(food){
		if(food === "chicken"){
			console.log("tasty");
		}
		else{
			console.log(`Pass! ${this.name} doesn't eat ${food}s!`)
		}
	},
}

dog.sayName();