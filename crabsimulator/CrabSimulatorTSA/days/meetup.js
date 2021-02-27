import { Crab } from "../engine/characters/crab.js"
import { Entity, Character } from "../engine/entity.js"

export async function execute() {

  let background = game.newEntity("background", new Entity(-1100, 0, newImage("./assets/meetup/background_1.png")))
	background.color = "green"
  let player = game.newEntity("player", new Crab(1930, 450, newImages({
    body: "./assets/crab/crab_body.png",
    arms: "./assets/crab/crab_arms.png",
    eyes: "./assets/crab/crab_eyes.png",
    legs: "./assets/crab/crab_legs.png",
    arms_1: "./assets/crab/crab_arms_1.png",
    legs_1: "./assets/crab/crab_legs_1.png"
  }), ["body", "arms", "eyes", "legs"], "cyan"))

  let oldMan = game.newEntity("oldMan", new Crab(-700, 450, newImages({
  	body: "./assets/oldManCrab/old_crab_body.png",
  	arms: "./assets/oldManCrab/old_crab_arms.png",
  	eyes: "./assets/oldManCrab/old_crab_eyes.png",
  	legs: "./assets/oldManCrab/old_crab_legs.png",
  	arms_1: "./assets/oldManCrab/old_crab_arms_1.png",
  	legs_1: "./assets/oldManCrab/old_crab_legs_1.png"
}), ["body", "arms", "eyes", "legs"], "gray"))

	await game.fadeIn() // fade from black
  await sleep(0.5)
  player.move(1500, 450, 6)
  await background.speak("Distraught, you wander aimlessly around Shellfish City, trying to find that old crab you met a few days back.", 1)
  player.move(1050, 450, 8)
  background.move(0, 0, 8)
  await oldMan.move(400, 420, 8, false)
  await player.speak("There! Hey! Hey, you met me a while ago!")
  let string = game.variables.oldMan ?  "I led you to this settlement out in the middle of the Bay." : "You're that strange fellow I didn't recognize a few days back."
  await oldMan.speak("Oh, me? Yes, I remember ya. " + string, 0.5, 0.06)
  await player.speak("Something terrible happened. A fish I met was caught in some kind of force, it was white but I could still see through it, and it was suffocating him, and I couldn't get it loose with my claws and he wasn't going to make it and-", .25)
  await oldMan.speak("Calm down, kid. There was nothin' you coulda done about it. That's the way it is in the Bay.", 2, 0.06)
  await sleep(1)
  await player.speak("But what was it?")
  await oldMan.speak("A handful of years ago debris started fallin' into these waters. At first we rejoiced, but this was no edible debris. Many perished. More continue to.", 0.5, 0.06)
  await player.speak("And nobody wants to do anything about it?")
  let choice = await oldMan.prompt("Well, what can we do?", ["Convince others", "Educate others"], 1, 0.06)
  if(choice) {
    await player.speak("Convince others that this needs solving.")
  } else {
    await player.speak("Make sure everyone knows about it. Someone's bound to do something then.")
  }

  await oldMan.speak("I 'spose that could work. Let's head back to the city.", 0.5, 0.06)
  await game.fadeOut()
  //the end

}
