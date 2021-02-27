import { Crab } from "../engine/characters/crab.js"
import { Entity, Character } from "../engine/entity.js"
import { Kelp } from "../engine/characters/kelp.js"

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/oldManDay/background_1.png")))
	background.color = "green"
	let player = game.newEntity("player", new Crab(155, 460, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	player.scale = .5
	let can = await game.newEntity("can", new Entity(113, 420, newImage("./assets/oldManDay/can.png")))

	await game.fadeIn() // fade from black
	await sleep(2) // wait a little before jumping into action

	await player.speak("What's going on? Why am I here?", 1)
	await background.speak("Well, you're a crab! What do you think crabs do?", 2)
	await player.speak("Huh... A crab...", 1)
	await background.speak("There's a lot to do as a crab these days, so get going!", 1)

	await player.move(590, 460, 3)
	await sleep(2)
	await player.move(2000, 460, 8)

	// transition into part 2
	await game.fadeOut()

	let kelp3 = game.newEntity("kelp3", new Kelp(2100, 17, newImages({
		kelp_1: "./assets/kelp/kelp_1.png",
		kelp_2: "./assets/kelp/kelp_2.png",
		kelp_3: "./assets/kelp/kelp_3.png",
		kelp_blocker: "./assets/kelp/kelp_blocker.png"
	}), ["kelp_1", "kelp_2", "kelp_3"]))
	let oldMan = game.newEntity("oldMan", new Crab(2180, 469, newImages({
		body: "./assets/oldManCrab/old_crab_body.png",
		arms: "./assets/oldManCrab/old_crab_arms.png",
		eyes: "./assets/oldManCrab/old_crab_eyes.png",
		legs: "./assets/oldManCrab/old_crab_legs.png",
		arms_1: "./assets/oldManCrab/old_crab_arms_1.png",
		legs_1: "./assets/oldManCrab/old_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "gray"))
	let oldManBlocker = game.newEntity("oldManBlocker", new Entity(2090, 653, newImage("./assets/oldManDay/oldManBlocker.png")))
	let kelp1 = game.newEntity("kelp1", new Kelp(1406, 30, newImages({
		kelp_1: "./assets/kelp/kelp_1.png",
		kelp_2: "./assets/kelp/kelp_2.png",
		kelp_3: "./assets/kelp/kelp_3.png",
		kelp_blocker: "./assets/kelp/kelp_blocker.png"
	}), ["kelp_1", "kelp_2", "kelp_3"]))
	let kelp2 = game.newEntity("kelp2", new Kelp(1777, 715, newImages({
		kelp_1: "./assets/kelp/kelp_1.png",
		kelp_2: "./assets/kelp/kelp_2.png",
		kelp_3: "./assets/kelp/kelp_3.png",
		kelp_blocker: "./assets/kelp/kelp_blocker.png"
	}), ["kelp_1", "kelp_2", "kelp_3"]))
	let kelp4 = game.newEntity("kelp4", new Kelp(2482, 633, newImages({
		kelp_1: "./assets/kelp/kelp_1.png",
		kelp_2: "./assets/kelp/kelp_2.png",
		kelp_3: "./assets/kelp/kelp_3.png",
		kelp_blocker: "./assets/kelp/kelp_blocker.png"
	}), ["kelp_1", "kelp_2", "kelp_3"]))
	let kelp5 = game.newEntity("kelp5", new Kelp(2596, 870, newImages({
		kelp_1: "./assets/kelp/kelp_1.png",
		kelp_2: "./assets/kelp/kelp_2.png",
		kelp_3: "./assets/kelp/kelp_3.png",
		kelp_blocker: "./assets/kelp/kelp_blocker.png"
	}), ["kelp_1", "kelp_2", "kelp_3"]))
	let stick = game.newEntity("stick", new Entity(586, 550, newImage("./assets/oldManDay/stick.png")))

	background.image = newImage("./assets/oldManDay/background_2.png")
	player.scale = 1
	player.x = -100
	player.y = 462
	can.delete()

	background.move(-1080, 0, 10)
	stick.move(-494, 550, 10)
	oldMan.move(1100, 469, 10)
	oldManBlocker.move(1010, 653, 10)
	kelp1.move(376, 30, 10)
	kelp2.move(kelp2.x - 1080, kelp2.y, 10)
	kelp3.move(kelp3.x - 1080, kelp3.y, 10)
	kelp4.move(kelp4.x - 1080, kelp4.y, 10)
	kelp5.move(kelp5.x - 1080, kelp5.y, 10)

	player.move(764, 462, 7)
	game.fadeIn()
	await sleep(7)

	// jank move player without move animation
	await player.move(435, 462, 3, false)

	/*
	let constant = 324 / 180
	for(let i = 0; i < 3 * 60; i++) {
		player.x -= constant
		await game.frame()
	}
	*/

	await sleep(2)
	let answer = await oldMan.prompt("Ey, you, kid. You new here or somethin'?", ["Yes", "No"], 1, 0.06)
	if(answer) {
		game.variables.oldMan = true
		await player.speak("Uh yeah, actually. Could you show me around?")
		await oldMan.speak("Shellfish City is nearby. I could go for a walk.", 0.5, 0.06)
		await player.speak("Oh, thank you!", 1)
	} else {
		game.variables.oldMan = false
		await player.speak("Nah, I've been here a while now.")
		await oldMan.speak("Hmm, well I don't recall your face. I'm headed back to Shellfish City, if you'd care to join me.", 0.5, 0.06)
		await player.speak("Sure.", 1)
	}

	// oldman shores himself up
	await oldMan.move(1140, 418, .75)
	await oldMan.move(1112, 383, .6)
	await oldMan.move(1112, 337, .6)

	oldManBlocker.delete()
	await sleep(1)

	// walk to the right
	oldMan.move(2300, 337, 5)
	player.move(1960, 462, 5)
	await sleep(3)

	await game.fadeOut()

}
