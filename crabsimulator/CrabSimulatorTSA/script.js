import { Game } from "./engine/game.js"
import { Entity, Character, Textbox } from "./engine/entity.js"
import { Crab } from "./engine/characters/crab.js"
import { TitleScreenWaves, TitleScreenController } from "./engine/characters/titleScreen.js"
import { BlackScreen } from "./engine/entities/blackScreen.js"

// debug makes it so you don't have to sit through 6 seconds of title text before starting, and it uses a different queue than normal
const debug = false

async function onload() {
	window.game = new Game()
	game.loop() // start the game loop
	await sleep(1)
	let speaker = game.newEntity("speaker", new Entity(-200, -200, newImage("./assets/strangeEncountersDay/sand_dollar.png")))
	speaker.color = "green"
	await speaker.speak("This game is best played in fullscreen on Google Chrome.")
	start()
}

async function start() {
	game.day = 0
	game.variables = {
		peopleConvinced: 1 // old man will always think you're cool :sunglasses:
	}
	await sleep(1)
	game.playAudioFade("waves")
	await sleep(0.5)
	game.fadeIn()
	let option = await menu()

	const actOneQueue = debug ? ["./days/debugDay.js"] : ["./days/oldMan.js", "./days/peerPressure.js", "./days/strangeEncounters.js", "./days/theHike.js"]
	let blackScreen = game.newEntity("blackScreen", new BlackScreen())
	await blackScreen.fadeOut()
	game.blackScreen.alpha = 1
	await sleep(1)
	game.clearEntities()

	if(!debug) await game.titleText("Act 1 - Ex Nihilo", 3)

	game.playAudio("waterSplash")
	game.stopAudioFade("waves")
	game.playAudioFade("underwater")

	await sleep(1)

	// act 1 days
	for(let day of actOneQueue) {
		game.day++
		if(!debug) await game.titleText(`Day ${game.day}`, 3)
		day = await import(day)
		// put await game.fadeIn() at the beginning of every day
		await day.execute()
		// put await game.fadeOut() at the end of every day
		game.clearEntities()
	}

	if(!debug) await game.titleText("Act 2 - Exigence", 3)
	game.day++
	await game.titleText("Day 5", 3)
	let day = await import("./days/meetup.js")
	await day.execute()
	game.clearEntities()
	game.day++
	await game.titleText("Day 6", 3)
	day = await import("./days/callToAction.js")
	await day.execute()
	game.clearEntities()
	game.day++
	await game.titleText("Day 7", 3)
	day = await import("./days/finale.js")
	await day.execute()
	game.clearEntities()

	// end game here

	await sleep(2.5)
	await game.playAudioFade("waves")
	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/end/background_1.png")))
	background.color = "green"
	let legislation = game.newEntity("legislation", new Entity(611, 0, newImage("./assets/end/legislation.png")))
	legislation.move(611, -900, 30)
	await game.fadeIn()
	await sleep(0.5)
	await background.speak("In the year 2028, Maryland lifted stringent Bay regulations in an effort to bring families back to water recreation.")
	await game.fadeOut()

	legislation.delete()
	background.image = newImage("./assets/end/background_2.png")
	await game.fadeIn()
	await sleep(0.5)
	await background.speak("While it succeeded in that regard, the quality of marine life and water suffered great losses.")
	await game.fadeOut()

	background.image = newImage("./assets/end/background_3.png")
	await game.fadeIn()
	await sleep(0.5)
	await background.speak("Thanks to a team of researchers, it was discovered that the heavy flow of sediment into the Bay was causing abnormal stimuli responses in crabs, prompting an investigation into the water quality.")
	await game.fadeOut()

	background.image = newImage("./assets/end/background_4.png")
	await game.fadeIn()
	await sleep(0.5)
	await background.speak("The Bay was brought from the brink of total ecological failure with new legislation in 2029.")
	let blackout = game.newEntity("blackout", new BlackScreen())
	await blackout.fadeOut()
	game.stopAudioFade("waves")
	await sleep(1)

	// water splashing sound
	game.playAudio("waterSplash")

	await sleep(3)
	let player = game.newEntity("player", new Entity(-200, -200, newImage("./assets/strangeEncountersDay/sand_dollar.png")))
	player.color = "cyan"
	await player.speak("That must be why I'm here... I did it... I did it...", 3)
	await background.speak("Thank you for playing Crab Simulator!", 3, 0.1)

	await sleep(1)
	game.blackScreen.alpha = 1
	game.clearEntities()
	game.fadeIn()
	start()
}


async function menu() {

	let background = game.newEntity("background", new Entity(0, 0, newImage("./assets/titleScreen/background.png")))

	let waves = game.newEntity("waves", new TitleScreenWaves(0, 0, newImages({
		"wave_1": "./assets/titleScreen/waves_1.png",
		"wave_2": "./assets/titleScreen/waves_2.png",
		"wave_3": "./assets/titleScreen/waves_3.png"
	}), ["wave_1", "wave_2", "wave_3",], "cyan"))

	let selector = game.newEntity("selector", new TitleScreenController())
	await selector.start()

};

window.addEventListener("load", onload)
