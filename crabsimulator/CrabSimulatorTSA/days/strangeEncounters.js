import { Game } from "../engine/game.js"
import { Entity } from "../engine/entity.js"
import { Crab } from "../engine/characters/crab.js"
import { Holdable } from "../engine/entities/holdable.js"

export async function execute() {

	// initialize all characters, backgrounds, etc. here
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/strangeEncountersDay/background_1.png")))
	background.color = "green"
	let backCan1 = game.newEntity("backCan1", new Entity(1446, 190, newImage("./assets/strangeEncountersDay/backCan.png")))
	let orangeCrab = game.newEntity("orangeCrab", new Crab(1073, 81, newImages({
		body: "./assets/orangeCrab/orange_crab_body.png",
		arms: "./assets/orangeCrab/orange_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/orangeCrab/orange_crab_legs.png",
		arms_1: "./assets/orangeCrab/orange_crab_arms_1.png",
		legs_1: "./assets/orangeCrab/orange_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "orange"))
	let player = game.newEntity("player", new Crab(-100, 421, newImages({
		body: "./assets/crab/crab_body.png",
		arms: "./assets/crab/crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/crab/crab_legs.png",
		arms_1: "./assets/crab/crab_arms_1.png",
		legs_1: "./assets/crab/crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "cyan"))
	let yellowCrab = game.newEntity("yellowCrab", new Crab(1348, 370, newImages({
		body: "./assets/yellowCrab/yellow_crab_body.png",
		arms: "./assets/yellowCrab/yellow_crab_arms.png",
		eyes: "./assets/crab/crab_eyes.png",
		legs: "./assets/yellowCrab/yellow_crab_legs.png",
		arms_1: "./assets/yellowCrab/yellow_crab_arms_1.png",
		legs_1: "./assets/yellowCrab/yellow_crab_legs_1.png"
	}), ["body", "arms", "eyes", "legs"], "yellow"))
	let jar = game.newEntity("jar", new Entity(890, 59, newImage("./assets/strangeEncountersDay/jar.png")))
	let backCan2 = game.newEntity("backCan2", new Entity(1446, 190, newImage("./assets/strangeEncountersDay/backCan.png")))
	let frontCan = game.newEntity("frontCan", new Entity(1446, 361, newImage("./assets/strangeEncountersDay/frontCan.png")))

	player.move(505, 421, 6)
	await game.fadeIn()
	await sleep(.5)

	movements1(orangeCrab, yellowCrab)
	await player.speak("Clams, fish, algae. That's the list done, time for the grocery store.")
	await player.speak("Can I help you?")
	backCan2.delete()
	await orangeCrab.speak("Look what we have here...", .2)
	let answer = await yellowCrab.prompt("Fresh meat, heheh.", ["Step off\n", "That doesn't make\n sense"], 1, 0.04, true)
	if(answer) { // off step
		await player.speak("Hey, step off.")
		await orangeCrab.speak("Ok man.")
		await background.speak("(Even you are surprised by your sudden confidence)")
		await yellowCrab.speak("Shellfish City ain't the place it was five years ago. Watch yourself.")
	} else { // confusion
		await player.speak("Uh, that doesn't make sense. Bay crabs don't eat fresh meat, they're detrivores.", 1)
		await yellowCrab.speak("It's an expression, nerd.")
		await orangeCrab.speak("You know what? I'll let you off since I don't think you're from around these parts. \b Shellfish City ain't the place it was five years ago. Watch yourself.")
		await background.speak("(You decide to hurry into the store)")
	}

	player.move(1504, 399, 5)
	await sleep(4)

	await game.fadeOut()
	background.image = newImage("./assets/strangeEncountersDay/background_2.png")
	orangeCrab.delete()
	yellowCrab.delete()
	jar.delete()
	backCan1.delete()
	frontCan.delete()
	player.x = 337
	player.y = 522
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
	await game.fadeIn()
	await sleep(0.5)

	await pirate.speak("ARRR, WHAT DO YE MEAN ME COUPON'S EXPIRED!?")
	await employee.speak("I'm sorry sir, but this coupon is-", 0)
	answer = await pirate.prompt("I NEED ME VITAMIN SEA SUPPLEY-MENTS!", ["Help out", "Watch"])
	if(answer) { // intervene
		game.variables.pirateIntervene = true
		await player.speak("Is it really that big of a deal? Let it slide just this once.")
		await pirate.speak("ARrgh? You, you're standing up fer me?", 1)
		await employee.speak("I don't get paid enough for this. Sure.", 1)
		await pirate.speak("Shiver me timbers laddie, ye did it! Take this as a token o' me appreciation.")
		let sandDollar = game.newEntity("sandDollar", new Holdable(0, 0, newImage("./assets/strangeEncountersDay/sand_dollar.png"), "pirateCrab", "arms"))
		await sleep(.5)
		sandDollar.locked = false
		await sandDollar.move(sandDollar.x, sandDollar.y + 150, .2)
		await sleep(.2)
		if(game.variables.sand) {
			await player.speak("Wow, thanks! I was actually a bit strapped for cash.")
		} else {
			await player.speak("Wow, thanks!")
		}
		await pirate.speak("No problem, me matey.", 1)
	} else { // watch
		game.pirateIntervene = false
		await employee.speak("Sir, please exit the building.")
		await pirate.speak("It appears I've been bested. Arrg.", 1)
		pirate.lookDirection(-1)
		pirate.move(-400, pirate.y, 5)
		await sleep(1)
		await background.speak("(You wonder what would've happened if you had said something)", 1)
		await employee.speak("Next.", 1)
	}

	await game.fadeOut()
}

async function movements1(orangeCrab, yellowCrab) {
	await sleep(1.5)
	await orangeCrab.move(1291, 112, 1)
	yellowCrab.move(1186, 396, 1)
	await orangeCrab.move(1208, 287, 1)
	yellowCrab.move(1046, 565, 1)
	await orangeCrab.move(1015, 334, 1.25)
}
