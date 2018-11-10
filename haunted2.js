const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  health: 100,
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: undefined,
  item: "flashlight",
  catchphrase : undefined,
  pet : undefined,
};


console.log();
console.log("*** WELCOME TO THE HAUNTED ***");
console.log("Every decision you make impactacts your story")
player.name = READLINE.question("What is your name?: ");
player.pet = READLINE.question(" What companion would you want to help you:  ")
player.weapon = READLINE.question("What is your weapon : ")
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no):  ");
if(enterHouse == "y" || enterHouse == "yes" || enterHouse == "Y" || enterHouse == "Yes") {
  player.courage++;
  console.log(`${player.name} is walking in the house and finds a staircase `);
  let staircase = READLINE.question ("Do you decide to go up the staircase ?: ");
   if( staircase == "y" || staircase == "yes" || staircase == "Y" || staircase == "Yes"){
    player.health = -10;
    console.log("IT WAS A TRAP ");
    console.log("GAME OVER ")
  
   }else{
    console.log(`You decide not to go up the staircase, and you find a ${player.pet}`)
    let pet = READLINE.question (` Do you go to the ${player.pet}:  `)
      if (pet == "yes" || pet == "y" || pet == "Y" || pet == "Yes"){
        console.log(" You have tamed a baby dragon")
        console.log(" You have a new companion to help you in the house ")
      }else{
        console.log(`You decide to run away from the ${player.pet}  but it attacks you `)
        let takeoutWeapon = READLINE.question (" Do you decide to take out your weapon: ")
        if (takeoutWeapon == "yes" || takeoutWeapon == "y" || takeoutWeapon == "Y" || takeoutWeapon == "Yes"){
          console.log(`You take out your ${player.weapon}, and hit them with it` )

        }else{
          console.log(` You decided not to take out your weapon, and the ${player.pet} kills you`)
          console.log (" GAME OVER")
        }

      }

   }
       
 }else {
  player.courage++;
  console.log(`${player.name} walks away from the house, but a killer clown forces you into the house`);
  console.log("You are confronted with a staircase when you walk inside")
  let staircase = READLINE.question ("Do you decide to go up the staircase ?: ");
   if( staircase == "y" || staircase == "yes" || staircase == "Y" || staircase == "Yes"){
    player.health = -10;
    console.log("IT WAS A TRAP ");
    console.log("GAME OVER ")
  
   }else{
    console.log(`You decide not to go up the staircase, and you find a ${player.pet}`)
    let pet = READLINE.question (`Do you go to the ${player.pet} `)
      if (pet == "yes" || pet == "y" || pet  == "Yes" || pet == "Y"){
        console.log(` You have tamed a ${player.pet}`)
        console.log(" You have a new companion to help you in the house ")
      }else{
        console.log(`You decide to run away from the ${player.pet} but it attacks you: `)
        let takeoutWeapon = READLINE.question (" Do you decide to take out your weapon: ")
        if (takeoutWeapon == "yes" || takeoutWeapon == "y" || takeoutWeapon == "Yes" || takeoutWeapon == "Y"){
          player.strength++;
          player.courage++;
          console.log(`You take out your ${player.weapon}, and hit the ${player.pet} with it` )
          console.log(`You have killed the ${player.pet}`)
          console.log(`The mother of the ${player.pet} is really mad`)
          let fightMom = READLINE.question (`Do you fight the ${player.pet}'s mom`)
          if (fightMom = ){
              // Start from here whoever finishes 
          }else{

          }





        }else{
          console.log(` You decided not to take out your weapon, and the ${player.pet} kills you`)
          console.log (" GAME OVER")
        }

      }

   }

 


 }
