import { Crab } from "../engine/characters/crab.js"
import { Entity, Character } from "../engine/entity.js"
import { Holdable } from "../engine/entities/holdable.js"
import { BlackScreen } from "../engine/entities/blackScreen.js"

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/peerPressureDay/background_1.png")))
	background.color = "green"
	let player = game.newEntity("player", new Crab(230, 590, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	player.scale = .3
	let oldMan = game.newEntity("oldMan", new Crab(360, 570, newImages({
		body: "./assets/oldManCrab/old_crab_body.png",
		arms: "./assets/oldManCrab/old_crab_arms.png",
		eyes: "./assets/oldManCrab/old_crab_eyes.png",
		legs: "./assets/oldManCrab/old_crab_legs.png",
		arms_1: "./assets/oldManCrab/old_crab_arms_1.png",
		legs_1: "./assets/oldManCrab/old_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "gray"))
	oldMan.scale = .3

	player.move(350, 590, 2)
	oldMan.move(480, 570, 2)

	await game.fadeIn()
	await sleep(4)
	await game.fadeOut()

	background.image = newImage("./assets/peerPressureDay/background_2.png")
	player.delete()
	let oldManBlocker = game.newEntity("oldManBlocker", new Entity(1010, 653, newImage("./assets/oldManDay/oldManBlocker.png")))
	player = game.newEntity("player", new Crab(437, 486, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	oldMan.scale = 1
	oldMan.x = 932
	oldMan.y = 291
	let stick = game.newEntity("stick", new Entity(1389, 782, newImage("./assets/oldManDay/stick.png")))
	let buildingColor = game.newEntity("buildingColor", new Entity(2544, 69, newImage("./assets/peerPressureDay/buildings_color.png")))
	let fish = game.newEntity("fish", new Character(2935, 326, newImages({
		fin: "./assets/fish/fish_fin.png",
		body: "./assets/fish/fish_body.png",
		tail: "./assets/fish/fish_tail.png",
		fin_1: "./assets/fish/fish_fin_1.png"
	}), ["tail", "body", "fin"]))
	fish.scale = .4
	let buildings = game.newEntity("buildings", new Entity(2544, 69, newImage("./assets/peerPressureDay/buildings_outline.png")))
	let sandbag = game.newEntity("sandbag", new Holdable(0, -20, newImage("./assets/peerPressureDay/sandbag.png"), "blueCrab", "arms"))
	let blueCrab = game.newEntity("blueCrab", new Crab(2769, 718, newImages({
		body: "./assets/blue_crab/blue_crab_body.png",
		arms: "./assets/blue_crab/blue_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/blue_crab/blue_crab_legs.png",
		arms_1: "./assets/blue_crab/blue_crab_arms_1.png",
		legs_1: "./assets/blue_crab/blue_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "blue"))
	let tire = game.newEntity("tire", new Entity(2877, 699, newImage("./assets/peerPressureDay/tire.png")))

	await game.fadeIn()

	await sleep(1)
	await oldMan.speak("Ok kid, I'm gonna hole up here. You go on without me.", 0.5, 0.06)
	await player.speak("Thank you for guiding me, mister!", 1)

	// old man holes here
	await oldMan.move(1077, 368, 1)
	await oldMan.move(1077, 464, 1)

	await sleep(1)

	// walk around blocker
	await player.move(643, 694, 2)

	background.move(-1920, 0, 16)
	oldMan.move(oldMan.x - 1920, oldMan.y, 16)
	oldManBlocker.move(oldManBlocker.x - 1920, oldManBlocker.y, 16)
	stick.move(stick.x - 1920, stick.y, 16)
	buildingColor.move(buildingColor.x - 1920, buildingColor.y, 16)
	fish.move(fish.x - 1920, fish.y, 16)
	buildings.move(buildings.x - 1920, buildings.y, 16)
	blueCrab.move(blueCrab.x - 1920, blueCrab.y, 16, false)
	tire.move(tire.x - 1920, tire.y, 16)

	// crab walks into city
	player.move(833, 694, 4)
	await sleep(4)
	await player.move(796, 497, 3)
	await player.move(576, 497, 7)
	await player.move(336, 497, 2, false)

	oldMan.delete()
	oldManBlocker.delete()
	stick.delete()

	// blue crab walks into street
	await blueCrab.move(825, 505, 1.5)

	let answer = await blueCrab.prompt("Hey you! You want some of this sand? The best, truly the best sand lemme tell ya, white and gray colors available.", ["I'll take some", "Nope"], 1, 0.03)
	if(answer) { // yes
		game.variables.sand = true
 		await player.speak("Well that does sound like a good deal...")
		await blueCrab.speak("Ayy, aight, well here you go. That'll be five sand dollars.", 1)
		// drops off bag
		sandbag.locked = false
		await sandbag.move(sandbag.x, sandbag.y + 125, .2)
		await sleep(.2)
		await blueCrab.speak("Gotta bounce now, take care.", 0)
		blueCrab.move(2000, blueCrab.y, 3)
		// starts leaving
		await sleep(0.5)
		await player.speak("Hey wait, what does this do? What do I do now?", 1)
		await background.speak("(You think you may have been scammed)", 1)
	} else { // no
		game.variables.sand = false
		await player.speak("What makes it so special? What's the deal?")
		await blueCrab.speak("Trust me, everyone wants this sand. Best sand in the seven seas.")
		await player.speak("Sounds to me like you're trying to get some unlucky sap to take your useless junk.")
		await blueCrab.speak("Anything to get a quick buck, yeah? You're smart, I'll give you that.")
		await player.speak("...", 1)
	}

	let blackScreen = game.newEntity("blackScreen", new BlackScreen())
	await blackScreen.fadeOut()
	await sleep(1)
	if(game.variables.sand) {
		await background.speak("(With the money you have left, you rent a motel room and sleep off that trek yesterday)")
	} else {
		await background.speak("(You decide to rent a motel room and sleep off that trek yesterday)")
	}

	game.blackScreen.alpha = 1
	await sleep(0.5)

}
