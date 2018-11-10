const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  health: 100,
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  karma: 0,
  weapon: undefined,
  item: "flashlight",
  catchphrase : undefined,
  pet : undefined,
  memento : undefined
};


console.log();
console.log("*** WELCOME TO THE HAUNTED ***");
console.log("Every decision you make impacts your story")
player.name = READLINE.question("What is your name?: ");
player.pet = READLINE.question(" What companion would you want to help you:  ")
player.weapon = READLINE.question("What is your weapon : ")
player.memento = READLINE.question("What's your memento to bring you back to reality?")
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
    console.log("GAME OVER (ITSATRAP Ending)")
  
   }else{
    console.log(`You decide not to go up the staircase, and you find a ${player.pet}`)
    let pet = READLINE.question (` Do you go to the ${player.pet}:  `)
      if (pet == "yes" || pet == "y" || pet == "Y" || pet == "Yes"){
        console.log(` You have tamed a ${player.pet}`)
        console.log(" You have a new companion who instant transmissions you back home.")
        console.log(`Your ${player.pet} reveals himself to be Goku and flies away to save the world.`)
        console.log("You escaped! :D (Anime Ending)")
      }else{
        console.log(`You decide to run away from the ${player.pet}  but it attacks you `)
        let takeoutWeapon = READLINE.question (" Do you decide to take out your weapon: ")
        if (takeoutWeapon == "yes" || takeoutWeapon == "y" || takeoutWeapon == "Y" || takeoutWeapon == "Yes"){
          console.log(`You take out your ${player.weapon}, and hit them with it` )

        }else{
          console.log(` You decided not to take out your weapon, and the ${player.pet} kills you`)
          console.log (" GAME OVER (COWARD ending)")
        }

      }

   }
       
 }else {
  player.courage++;
  console.log(`${player.name} walks away from the house, but a killer clown forces you into the house`);
  console.log("You are confronted with a staircase when you walk inside")
  let staircase = READLINE.question ("Do you decide to go up the staircase ?: ");
   if(staircase == "y" || staircase == "yes" || staircase == "Y" || staircase == "Yes"){
    player.health - 10;
    console.log("IT WAS A TRAP ");
    console.log("GAME OVER (ITSATRAP Ending)")
  
   }else{
    console.log(`You decide not to go up the staircase, and you find a ${player.pet}`)
    let pet = READLINE.question (`Do you go to the ${player.pet} `)
      if (pet == "yes" || pet == "y" || pet  == "Yes" || pet == "Y"){
        console.log(` You have tamed a ${player.pet}`);
        console.log(" You have a new companion who instant transmissions you back home.");
        console.log(`Your ${player.pet} reveals himself to be Goku and flies away to save the world.`);
        console.log("You escaped! :D (Anime Ending)");
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
          if (fightMom == "yes" ){
            console.log("Not very smart");
            player.health - 10;
            console.log("You lost 10 health, but end up finishing the mother off");
            player.karma--;
            console.log("You find her large bone on the floor. You make a soup out of it and gain 10 health")
            player.health + 10;
            console.log("I'm tired of this place. Are you?")
            let usePower = READLINE.question("Use your new powers that you somehow got to teleport back home?: (yes or no)");
            if(usePower == "yes"){
              console.log("Don't ask me, you're home now.")
              console.log("You escaped! (Superhero Ending)")
            }
            else{
              console.log("I D O N T C A R E")
              console.log("You go unconscious and never wake up (wryyyy Ending)")
            }

              // Start from here whoever finishes 
          }else{
            console.log("She devours your frail frame whole")
            console.log("R I P (Wild Beast Ending)")

          }





        }else{
          console.log(` You decided not to take out your weapon, and the ${player.pet} kills you`)
          console.log (" GAME OVER (COWARD END^%#^&$%)")
          let dontGive = READLINE.question(`Interesting... use ${player.memento} get back up? (yes or no)`)
          if(dontGive == "yes"){
            console.log(`You appear back where you were before, but the ${player.pet} is gone`)
            let goOn = READLINE.question("You look around and see a dusty door in the ceiling enter? (yes or no)")
            if(goOn == "yes"){
              console.log("The moment you entered you were destined to fail.");
              console.log("You disappear into nothingness");
              console.log("(MIA Ending)");
            }
            else{
              console.log("The moment you entered you were destined to fail.");
              console.log("You disappear into nothingness");
              console.log("(MIA Ending)");
            }
          }
          else{
            console.log("Such a shame.... Don't show your face here again, coward.")
            console.log("You failed :( (Shameful Ending)")
          }
        }

      }

   }

 


 }
