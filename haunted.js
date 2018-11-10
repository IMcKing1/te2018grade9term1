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
if(enterHouse == "y" || enterHouse == "yes") { //1
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log("You walk down a dusty hallway and find another creepy door.");
  let door = READLINE.question("Will you open the door? (yes or no)");
  if(door == "yes"){ //2
    player.courage++
    console.log("For some reason, you walk through the trap and fall down a trapdoor. You land in a nursery room, littered with dolls and broken T-rex toys.")
    let clown = READLINE.question("There is a docile looking clown sitting in the corner of the room. Touch him? (yes or no)")
    if(clown == "yes"){ //3
      console.log("The clown bites your nail clean off and it feels oddly soothing. He gives you a balloon and pushes you out of the door.")
      console.log("Balloon get!")
      console.log("Your phone died during all this commotion :(")
      player.item = "Balloon, Dead phone"
      let checkInventory = READLINE.question("Check your inventory? (yes or no)")
      if(checkInventory = "yes"){ //4
        console.log(player.item)
        console.log(player.weapon)
        console.log("You suck all the helium fom the balloon and float through a hole in the ceiling.")
        console.log("You escaped!!")
        console.log("(Carnival Ending)")
      }
    }
    else{
      console.log("You hear jack in the box music playing")
      console.log("It gets faster and faster until #$%&^@&$&!%")
      console.log("&^!&@(#!&#(*$)&@^!*(%&^!@*($&!(@*$(&@(!*%#^")
      console.log("REDACTED")
      console.log("tH3 En&")
    } 
  }
  else{
    console.log("'STOP TRYING TO AVOID YOUR FATE!!!'")
    console.log("You fold up like Flat Stanley out of existence (WHAAAA????? Ending)")
  }

}
else{ //5
   player.intellect++;
    console.log(`${player.name} decides not to open the door. However...`);
    // continue the story
    console.log("You never had a choice :)");
    console.log("You fall down a hole that opened in the floor and find yourself injured, but otherwise okay");
    let walk = READLINE.question("Keep walking? (yes or no)");
    if(walk =="yes"){ //6
      console.log("Now things are getting interesting");
      console.log("Something yellow on the ground catches your eye.");
      let pickup = READLINE.question("Pick it up? (yes or no)");
      if(pickup == "yes"){ //7
        console.log("It ended up being a flashlight. Still works :D");
        console.log("Flashlight get!");
        player.item = "Flashlight, Dead Phone"
        let checkInventory = READLINE.question("Check your inventory? (yes or no)")
        if(checkInventory == "yes"){ //8
          console.log(player.item);
          console.log(player.weapon);
           //Start of Grim Reaper Arc
          console.log("You search for an exit and eventually come upon what looks like the grim reaper")
          let conversation = READLINE.question("Ask him how to get out of here? (yes or no)")
          if(conversation == "yes"){ //9
            console.log("Grim Reaper: Huh, I don't get visitors much. Tell you what, in exchange for your soul when your time comes, I'll get you out of here.")
            let soulReap = READLINE.question("Be indebted to the Reaper? (yes or no)")
            if(soulReap == "yes"){ //10
              console.log("The Grim Reaper manifests a portal in the hallway and gestures for you to step inside.")
              console.log("Upon entering, you find that you are somehow back home. And with a bag full of candy, no less.")
              console.log("You'll pay for this in 80 years or so, but who cares? You escaped! (Happy? Ending")
            }
            else{ //no to line 69
              console.log("Grim Reaper: Didn't you hear? YOU NEVER HAD A CHOICE")
              console.log("The Reaper reaps your soul 80 years early. What a shame. (Unfortunate Ending)")
            }
              
          }
          else {  //no to line 66
              console.log("Grim Reaper: Shouldn't have been such a scaredy cat")
              console.log("The Reaper reaps your soul 80 years early. What a shame. (Unfortunate Ending)")
          } 
        }
      }
      else{
        console.log("Your choices don't matter. I control this world.")
        console.log("Restart and try something different if you value your life. (Divine Intervention Ending)")
      }
    }
    else{
      console.log("You decide to sit and wait for help that will never come.")
      console.log("You sit there until you eventually pass away, never to be seen again.")
      console.log("You're no fun D: (Cautious Ending)")
    }
  }
  

console.log("Thanks for playing!");
