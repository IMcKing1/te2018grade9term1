const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "very sharp key",
  item: "Low battery phone",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log("You walk down a dusty hallway and find another creepy door.");
  let door = READLINE.question("Will you open the door? (yes or no)");
if(door == "yes"){
  player.courage++
  console.log("For some reason, you walk through the trap and fall down a trapdoor. You land in a nursery room, littered with dolls and broken T-rex toys.")
  let clown = READLINE.question("There is a docile looking clown sitting in the corner of the room. Touch him?")
  if(clown == "yes"){
    console.log("The clown bites your nail clean off and it feels oddly soothing. He gives you a balloon and pushes you out of the door.")
    console.log("Balloon get!")
    let checkInventory = READLINE.question("Check your inventory?")
    if(checkInventory = "yes"){
      console.log(player.item)
      console.log(player.weapon)
    }
  } 
}
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
