import { Crab } from "../engine/characters/crab.js"
import { Entity, Character } from "../engine/entity.js"
import { Holdable } from "../engine/entities/holdable.js"
import { BlackScreen } from "../engine/entities/blackScreen.js"

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(-1920, 0, newImage("./assets/peerPressureDay/background_2.png")))
	background.color = "green"
	let buildingColor = game.newEntity("buildingColor", new Entity(624, 69, newImage("./assets/peerPressureDay/buildings_color.png")))
	let buildings = game.newEntity("buildings", new Entity(624, 69, newImage("./assets/peerPressureDay/buildings_outline.png")))
	let player = game.newEntity("player", new Crab(295, 426, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	let oldMan = game.newEntity("oldMan", new Crab(-75, 453, newImages({
		body: "./assets/oldManCrab/old_crab_body.png",
		arms: "./assets/oldManCrab/old_crab_arms.png",
		eyes: "./assets/oldManCrab/old_crab_eyes.png",
		legs: "./assets/oldManCrab/old_crab_legs.png",
		arms_1: "./assets/oldManCrab/old_crab_arms_1.png",
		legs_1: "./assets/oldManCrab/old_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "gray"))
	let blueCrab = game.newEntity("blueCrab", new Crab(1036, 437, newImages({
		body: "./assets/blue_crab/blue_crab_body.png",
		arms: "./assets/blue_crab/blue_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/blue_crab/blue_crab_legs.png",
		arms_1: "./assets/blue_crab/blue_crab_arms_1.png",
		legs_1: "./assets/blue_crab/blue_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "blue"))
	let tire = game.newEntity("tire", new Entity(957, 699, newImage("./assets/peerPressureDay/tire.png")))

	player.move(player.x + 200, player.y, 2)
	oldMan.move(oldMan.x + 220, oldMan.y, 2.3)
	await game.fadeIn()

	await sleep(2.5)
	await player.speak("Hey, remember me?")
	await sleep(.2)
	blueCrab.lookDirection(-1)
	await sleep(.5)
	await blueCrab.speak("Huh? Wanna tussle?")
	await player.speak("No, do you know what happened to Shellfish City five years ago?")
	let answer = await blueCrab.prompt("No? Why does that matter?", ["We can fix it\n", "It could save\n lives"], 0.5, 0.04, true)
	if(!answer) {
		await player.speak("If we know what caused it, we can prevent the deaths of countless.")
	} else {
		await player.speak("If we know what caused it, we can do our best and fix it.")
	}
	if(game.variables.sand) {
		await blueCrab.speak("Look buddy, you're hopeless if you think a guy who bought sand at five dollars can make a difference.")
	} else {
		game.variables.peopleConvinced++
		await blueCrab.speak("Ah, you're smart. Why not. I'll join you folks.", 1)
	}

	await game.fadeOut()
	if(game.variables.sand) blueCrab.delete()
	background.image = newImage("./assets/callToActionDay/background_1.png")
	background.x = 0
	background.y = 0
	player.x = 201
	player.y = 369
	oldMan.x = -133
	oldMan.y = 228
	blueCrab.x = -159
	blueCrab.y = 450
	buildingColor.delete()
	buildings.delete()
	tire.delete()
	blueCrab.lookDirection(0)
	let orangeCrab = game.newEntity("orangeCrab", new Crab(901, 303, newImages({
		body: "./assets/orangeCrab/orange_crab_body.png",
		arms: "./assets/orangeCrab/orange_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/orangeCrab/orange_crab_legs.png",
		arms_1: "./assets/orangeCrab/orange_crab_arms_1.png",
		legs_1: "./assets/orangeCrab/orange_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "orange"))
	let yellowCrab = game.newEntity("yellowCrab", new Crab(1046, 565, newImages({
		body: "./assets/yellowCrab/yellow_crab_body.png",
		arms: "./assets/yellowCrab/yellow_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/yellowCrab/yellow_crab_legs.png",
		arms_1: "./assets/yellowCrab/yellow_crab_arms_1.png",
		legs_1: "./assets/yellowCrab/yellow_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "yellow"))
	player.move(player.x + 200, player.y, 2)
	oldMan.move(oldMan.x + 220, oldMan.y, 2.2)
	blueCrab.move(blueCrab.x + 240, blueCrab.y, 2.4)

	await game.fadeIn()

	await sleep(2.6)
	await orangeCrab.speak("What's a group like you doing here?")
	await yellowCrab.speak("Thought we told you to scram.")
	await player.speak("Look, hear me out. Do you want to fix Shellfish City? If you join me, it's a possiblity.")
	answer = await yellowCrab.prompt("Why should we put in that kind of effort?", ["The future", "It affects you"])
	if(answer) {
		await player.speak("If things are bad now, what are you going to do about the future?")
		await oldMan.speak("You know if the Bay stays as it is, there might not be a future.", 0.5, 0.06)
		await yellowCrab.speak("I... if that's the case...")
		await orangeCrab.speak("Yeah. I think we'll both join you.")
		await yellowCrab.speak("You're right. Let's go.", 1)
	} else {
		await player.speak("Hasn't Shellfish City affected your life over these past years?", 1.5)
		await yellowCrab.speak("... Five years ago I had to quit my job because the shop couldn't make rent.")
		await orangeCrab.speak("I haven't been able to scrape together enough cash to see my son since it started...", 1)
		await yellowCrab.speak("I'm fed up. This has gone on for too long. Are you down?")
		await orangeCrab.speak("Yeah. We'll both join you.", 1)
	}
	game.variables.peopleConvinced += 2

	await game.fadeOut()
	background.image = newImage("./assets/strangeEncountersDay/background_2.png")
	blueCrab.x = -900
	blueCrab.y = -900
	yellowCrab.delete()
	orangeCrab.delete()
	player.x = 137
	player.y = 522
	oldMan.x = -180
	oldMan.y = 471
	let pirate = game.newEntity("pirateCrab", new Crab(801, 518, newImages({
		body: "./assets/pirateCrab/pirate_crab_body.png",
		arms: "./assets/pirateCrab/pirate_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		hat: "./assets/pirateCrab/pirate_crab_hat.png",
		legs: "./assets/pirateCrab/pirate_crab_legs.png",
		arms_1: "./assets/pirateCrab/pirate_crab_arms_1.png",
		legs_1: "./assets/pirateCrab/pirate_crab_legs_1.png"
	}), ["body", "arms", "hat", "eyes", "legs"], "darkBlue"))
	let employee = game.newEntity("employee", new Crab(1357, 500, newImages({
		body: "./assets/cyanCrab/cyan_crab_body.png",
		arms: "./assets/cyanCrab/cyan_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/cyanCrab/cyan_crab_legs.png",
		arms_1: "./assets/cyanCrab/cyan_crab_arms_1.png"
	}), ["body", "arms", "eyes", "legs"], "turquoise"))
	let counter = game.newEntity("counter", new Entity(1144, 594, newImage("./assets/strangeEncountersDay/counter.png")))
	player.move(player.x + 200, player.y, 2)
	oldMan.move(oldMan.x + 220, oldMan.y, 2.2)
	game.fadeIn()
	await sleep(2.5)
	await employee.speak("Sir, I don't know what else to tell you. We don't accept giftcards for other stores.")
	await player.speak("Ah excuse me, do you remember me?")
	pirate.lookDirection(-1)
	await sleep(.5)
	if(game.variables.pirateIntervene) {
		await pirate.speak("Why of course I remember ya, laddie!")
		await player.speak("Well now I need your help. Are you willing to save the Bay with me?")
		await pirate.speak("I'd do anything for a stellar scallywag like yourself. Weigh anchor and hoist the mizzen, we're going!", 1)
		game.variables.peopleConvinced++
	} else {
		await pirate.speak("Sure do, you son of a biscuit eater! You said NOTHING in the face of mutiny yesterday, argh.")
		await player.speak("This is important. I need you to-", 0)
		await pirate.speak("I should string ye from the yardarm for your cowardice! No way am I helping you.", 1)
		await player.speak("Ah.", 1)
	}

	let blackScreen = game.newEntity("blackScreen", new BlackScreen())
	await blackScreen.fadeOut()
	await sleep(1)
	await background.speak(`(${game.variables.peopleConvinced} have joined your cause)`)
	game.blackScreen.alpha = 1
	await sleep(0.5)

}
