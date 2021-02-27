import { Game } from "../engine/game.js"
import { Entity, Character, Textbox } from "../engine/entity.js"
import { Crab } from "../engine/characters/crab.js"
import { BlackScreen } from "../engine/entities/blackScreen.js"
import { Boat } from "../engine/entities/boat.js"

var moving = true // kinda ugly code sorry

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/finaleDay/background_1.png")))
	background.color = "green"
	let player = game.newEntity("player", new Crab(1000, 492, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	if(game.variables.pirateIntervene) {
		var pirate = game.newEntity("pirateCrab", new Crab(81, 398, newImages({
			body: "./assets/pirateCrab/pirate_crab_body.png",
			arms: "./assets/pirateCrab/pirate_crab_arms.png",
			eyes: "./assets/crab/crab_eyes.png",
			hat: "./assets/pirateCrab/pirate_crab_hat.png",
			legs: "./assets/pirateCrab/pirate_crab_legs.png",
			arms_1: "./assets/pirateCrab/pirate_crab_arms_1.png",
			legs_1: "./assets/pirateCrab/pirate_crab_legs_1.png"
		}), ["body", "arms", "hat", "eyes", "legs"], "darkBlue"))
	}
	let orangeCrab = game.newEntity("orangeCrab", new Crab(459, 372, newImages({
		body: "./assets/orangeCrab/orange_crab_body.png",
		arms: "./assets/orangeCrab/orange_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/orangeCrab/orange_crab_legs.png",
		arms_1: "./assets/orangeCrab/orange_crab_arms_1.png",
		legs_1: "./assets/orangeCrab/orange_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "orange"))
	if(!game.variables.sand) {
		var blueCrab = game.newEntity("blueCrab", new Crab(277, 486, newImages({
			body: "./assets/blue_crab/blue_crab_body.png",
			arms: "./assets/blue_crab/blue_crab_arms.png",
			eyes: "./assets/crab/crab_eyes.png",
			legs: "./assets/blue_crab/blue_crab_legs.png",
			arms_1: "./assets/blue_crab/blue_crab_arms_1.png",
			legs_1: "./assets/blue_crab/blue_crab_legs_1.png"
		}), ["body", "arms", "eyes", "legs"], "blue"))
	}
	let oldMan = game.newEntity("oldMan", new Crab(525, 549, newImages({
		body: "./assets/oldManCrab/old_crab_body.png",
		arms: "./assets/oldManCrab/old_crab_arms.png",
		eyes: "./assets/oldManCrab/old_crab_eyes.png",
		legs: "./assets/oldManCrab/old_crab_legs.png",
		arms_1: "./assets/oldManCrab/old_crab_arms_1.png",
		legs_1: "./assets/oldManCrab/old_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "gray"))
	let yellowCrab = game.newEntity("yellowCrab", new Crab(135, 625, newImages({
		body: "./assets/yellowCrab/yellow_crab_body.png",
		arms: "./assets/yellowCrab/yellow_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/yellowCrab/yellow_crab_legs.png",
		arms_1: "./assets/yellowCrab/yellow_crab_arms_1.png",
		legs_1: "./assets/yellowCrab/yellow_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "yellow"))
	let boat = game.newEntity("boat", new Boat(-1150, -75, newImages({
		boat: "./assets/boat/boat.png",
		rudder0: "./assets/boat/rudder_0.png",
		rudder1: "./assets/boat/rudder_1.png",
		rudder2: "./assets/boat/rudder_2.png",
		rudder3: "./assets/boat/rudder_3.png"
	})))

	game.playAudio("boatEngine")
	await game.fadeIn() // fade from black
	await sleep(.5) // wait a little before jumping into action

	// part 1

	await player.speak("This is it, the highest point in the bay.")
	await oldMan.speak("And you're sure that's what the fish was talking about?", 0.5, 0.06)
	await player.speak("No doubt about it. A shadow, loud noise, it's all there.", 1)
	await oldMan.speak("We're all rootin' for you, kid.", 0.25, 0.06)
	if(!game.variables.sand) await blueCrab.speak("Ay, I know you can do it!", 0.25)
	await orangeCrab.speak("Dude, you got this.", 0.25)
	await yellowCrab.speak("Knock 'em outta the park!", 0.25)
	if(game.variables.pirateIntervene) await pirate.speak("Blow the man down!", 0.25)

	await sleep(0.5)
	await player.move(1272, 80, 3)
	await sleep(0.5)

	await player.speak("It's getting louder. I think this is it.")

	increaseEngineVolume()
	await boat.move(boat.x + 1000, boat.y, 6)

	game.blackScreen.alpha = 1
	game.stopAudio("boatEngine")
	game.stopAudio("underwater")

	// set up for next screen

	background.image = newImage("./assets/finaleDay/background_2.png")
	if(game.variables.pirateIntervene) pirate.delete()
	orangeCrab.delete()
	if(!game.variables.sand) blueCrab.delete()
	oldMan.delete()
	yellowCrab.delete()
	boat.delete()
	await sleep(2)
	player.x = 900
	player.y = 284
	let bc4 = game.newEntity("bc4", new Crab(450, 335, newImages({
		body: "./assets/brownCrab/brown_crab_body.png",
		arms: "./assets/brownCrab/brown_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/brownCrab/brown_crab_legs.png",
		arms_1: "./assets/brownCrab/brown_crab_arms_1.png"
	}), ["body", "arms", "eyes", "legs"], "brown"))
	let bc3 = game.newEntity("bc3", new Crab(1000, 418, newImages({
		body: "./assets/brownCrab/brown_crab_body.png",
		arms: "./assets/brownCrab/brown_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/brownCrab/brown_crab_legs.png",
		arms_1: "./assets/brownCrab/brown_crab_arms_1.png"
	}), ["body", "arms", "eyes", "legs"], "brown"))
	let bc1 = game.newEntity("bc1", new Crab(500, 509, newImages({
		body: "./assets/brownCrab/brown_crab_body.png",
		arms: "./assets/brownCrab/brown_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/brownCrab/brown_crab_legs.png",
		arms_1: "./assets/brownCrab/brown_crab_arms_1.png"
	}), ["body", "arms", "eyes", "legs"], "brown"))
	let bc2 = game.newEntity("bc2", new Crab(866, 571, newImages({
		body: "./assets/brownCrab/brown_crab_body.png",
		arms: "./assets/brownCrab/brown_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/brownCrab/brown_crab_legs.png",
		arms_1: "./assets/brownCrab/brown_crab_arms_1.png"
	}), ["body", "arms", "eyes", "legs"], "brown"))

	await game.titleText("Act 3 - Finalis", 3)

	game.playAudio("boatEngine")
	for(let i = 0; i < 30; i++) {
		game.sounds.boatEngine.volume = i * 2 / 59 / 2
		await game.frame1()
	}

	await game.fadeIn()

	// part 2

	for(let i = 0; i < 2; i++) {
		await sleep(0.5)
		player.move(player.x, player.y - 75, 2)
		await sleep(1)
		bc3.state.clacking = true
		await sleep(1)
		player.move(player.x, player.y + 75, 0.3)
		await sleep(0.25)
		bc3.state.clacking = false
		await sleep(0.75)
	}

	// crab trying to escape, bc1 pulling them down

	await player.speak("Hey you, quit pulling me down.")
	let answer1 = await bc3.prompt("If I can't get out, neither can you.", ["This is important", "Teach a lesson"])
	if(answer1) {
		await player.speak("I'm here on a mission to fix the Bay. Please help me get out of this bucket.", 1)
		await bc3.speak("Fixing the Bay? Ah well, I can't do much at this point anyway.", 1)
	} else {
		await player.speak("Ever hear about crab mentality? If everyone prevents others, nothing can be done. \b I need to get out of this bucket, so please help me.", 1)
		await bc3.speak("Hmm. Makes sense to me.", 1)
	}

	await game.fadeOut()


	//set up for final screen
	background.image = newImage("./assets/finaleDay/background_3.png")
	bc4.delete()
	bc3.delete()
	bc2.delete()
	bc1.delete()
	player.x = 286
	player.y = 429
	player.scale = 0.75
	let legs = game.newEntity("legs", new Entity(1618, 0, newImage("./assets/finaleDay/legs.png")))
	legs.color = "leg"
	player.move(player.x, player.y + 100, 0.3, false)
	await game.fadeIn()

	await sleep(0.5) // 639 221
	let answer2 = await background.prompt("(You successfully got out of the bucket)", ["Destroy six pack", "Snap claws loudly"])
	if(answer2) {
		await player.move(639, 221, 3)
		player.state.clacking = true
		await sleep(1.5)
		await legs.speak("Hey, one of the crabs got loose.")
	} else {
		await player.move(716, 466, 2)
		player.state.clacking = true
		await sleep(2)
		await legs.speak("Hey, what's that crab doing?")
	}
	let answer3 = await player.prompt("It's working!", ["Scuttle in circles\n", "Scuttle back and\n forth"], 1, 0.04, true)
	player.state.clacking = false
	if(answer2) {
		await player.move(716, 566, 2)
	} else {
		await player.move(716, 566, 1)
	}
	movement(!answer3, player)
	await sleep(3)
	answer3 = await legs.prompt("Look at what it's doing now. Should we be writing this down?", ["Snap at ankles", "Unlatch buckets"])
	moving = false
	await sleep(2.5)
	if(answer3) {
		await player.move(1656, 473, 3)
		player.state.clacking = true
	} else {
		await player.move(359, 367, 3)
		player.state.clacking = true
	}
	await sleep(1)
	await legs.speak("Hey, help me get this guy back in the study pool. They're acting strange.", 2)

	await game.fadeOut()
	game.stopAudioFade("boatEngine")
	await sleep(0.5)

}

async function movement(answer2, player) {
	if(answer2) {
		while(moving) {
			await player.move(player.x + 300, player.y, 1.3)
			await player.move(player.x - 300, player.y, 1.3)
		}
	} else {
		while(moving) {
			await player.move(player.x, player.y - 100, .4)
			await player.move(player.x + 80, player.y - 80, .4)
			await player.move(player.x + 80, player.y + 80, .4)
			await player.move(player.x, player.y + 100, .4)
			await player.move(player.x - 80, player.y + 80, .4)
			await player.move(player.x - 80, player.y - 80, .4)
		}
	}
}

async function increaseEngineVolume() {
	for(let i = 24; i < 240; i++) {
		game.sounds.boatEngine.volume = i / 239
		await game.frame1()
	}

}
