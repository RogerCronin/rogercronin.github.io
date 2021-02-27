import { Game } from "../engine/game.js"
import { Entity, Character, Textbox } from "../engine/entity.js"
import { Crab } from "../engine/characters/crab.js"
import { Fish } from "../engine/characters/fish.js"
import { Holdable } from "../engine/entities/holdable.js"
import { BlackScreen } from "../engine/entities/blackScreen.js"

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/theHikeDay/background.png")))
	background.color = "green"
	let fish = game.newEntity("fish", new Fish(2088, 441, newImages({
		fin: "./assets/fish/fish_fin.png",
		body: "./assets/fish/fish_body.png",
		tail: "./assets/fish/fish_tail.png",
		fin_1: "./assets/fish/fish_fin_1.png"
	}), ["tail", "body", "fin"], "gray"))
	let rings = game.newEntity("rings", new Holdable(-48, -5, newImage("./assets/theHikeDay/rings.png"), "fish", "body"))
	let player = game.newEntity("player", new Crab(172, 406, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))

	player.move(player.x + 700, player.y, 9)
	await game.fadeIn() // fade from black
	await sleep(.5) // wait a little before jumping into action
	await player.speak("Nothing like a fine walk in the morning.", 1)
	await background.speak("(You're a couple of nautical miles out from the city on a hike)", 1)
	await fish.speak("Help! Someone help me!", 1)

	background.move(-960, 0, 4)
	fish.move(1128, 441, 4, false)
	await player.move(599, 406, 4)
	await fish.speak("There's something in my gills. I can barely breathe.")
	await player.speak("Oh! I, uh, wait, what do I do?")
	let answer = await fish.prompt("Untangle me, or cut it or something! I don't even know what this is.", ["Snip", "Break apart"])
	if(answer) { // snip
		await player.move(888, 536, 1)
		await sleep(.2)
		player.state.clacking = true
		await sleep(3)
		await player.speak("I've never seen this before. It's not working! I can't snip it.")
	} else { // break apart
		await player.move(1013, 553, 1.3)
		await sleep(.2)
		player.state.clacking = true
		player.state.breaking = true
		await sleep(3)
		await player.speak("I've never seen this before. It's not working! I can't break it.")
	}
	await fish.speak("I'm getting lightheaded. Please keep trying.")
	await player.speak("I'm telling you I can't! What do I do?")
	await fish.speak("This white looking thing fell on me after a huge shadow passed overhead. It was so loud... I can't breathe anymore.")
	await player.speak("I'm trying! I'm trying! Someone help!")
	await fish.speak("Please. I still... I still have so much to do...", 2)

	// decrease floating offset until none
	await fish.stopOffset()
	await sleep(2)
	player.state.clacking = false
	player.state.breaking = false
	await sleep(2)
	await player.move(player.x - 300, player.y, 2)
	await sleep(1)
	// slowly fall to the ground
	await fish.move(fish.x, fish.y + 130, 4)
	await sleep(2)

	let blackScreen = game.newEntity("blackScreen", new BlackScreen())
	await blackScreen.fadeOut()
	await sleep(2.5)
	await background.speak("(You fled after the fish went unconcious)")
	game.blackScreen.alpha = 1
	await sleep(1)

}
