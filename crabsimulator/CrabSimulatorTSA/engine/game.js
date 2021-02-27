import { BlackScreen } from "./entities/blackScreen.js"

class Game {

	constructor() {
		// puts canvas on the html doc
		this.canvas = make("canvas")
		document.body.appendChild(this.canvas)
		this.ctx = this.canvas.getContext("2d")
		this.entities = {}
		this.frameCount = 0
		this.fpsInterval = 1000 / 60
		this.fpsThen = 0
		this.frameAwaitResolve = () => {}
		this.frame1AwaitResolve = () => {}
		this.blackScreen = new BlackScreen()
		this.day = 0
		this.variables = {
			peopleConvinced: 1 // old man will always think you're cool :sunglasses:
		}
		this.sounds = {
			blip: new Audio("./assets/audio/blip.wav"),
			underwater: new Audio("./assets/audio/underwater.wav"),
			waves: new Audio("./assets/audio/waves.wav"),
			waterSplash: new Audio("./assets/audio/waterSplash.wav"),
			boatEngine: new Audio("./assets/audio/boatEngine.wav"),
			clack1: new Audio("./assets/audio/clack1.wav")
		}
		this.sounds.blip.volume = 0.4
		this.sounds.underwater.volume = 0.5
		this.setAudioLoop(this.sounds.waves)
		this.setAudioLoop(this.sounds.underwater)
		this.setAudioLoop(this.sounds.boatEngine)
		this.sounds.boatEngine.volume = .1
		this.sounds.clack1.volume = .3
	}

	loop(now) { // puts update and draw functions into one function
		let elapsed = now - this.fpsThen
		if(elapsed > this.fpsInterval) { // makes sure fps is locked at 60
			this.update()
			this.draw()
			this.frameAwaitResolve()
			this.frame1AwaitResolve()
			this.fpsThen = now - (elapsed % this.fpsInterval)
		}
		window.requestAnimationFrame(this.loop.bind(this)) // calls next frame + fancy stuff so "this" works
	}

	update() { // updates game logic
		for(let name of Object.keys(this.entities)) { // loop through every entity and update them
			this.entities[name].update()
		}
		this.frameCount++
	}

	async frame() {
		return new Promise((resolve, reject) => {
			this.frameAwaitResolve = resolve
		})
	}

	async frame1() {
		return new Promise((resolve, reject) => {
			this.frame1AwaitResolve = resolve
		})
	}

/*
    0,0             1920px
       -----------------------------
       |                           |
1080px |     16:9 aspect ratio     |
       |                           |
       |                           |
       -----------------------------

Game is automatically scaled from 1920x1080 to width and height of window.
Coordinates are in 1920x1080 but are scaled to fit whatever the current size is,
so (960, 540) is in the middle of the screen regardless of the actual size.

*/

	draw(timestep) { // draws to the screen
		// update canvas size
		this.canvas.height = window.innerHeight
		this.canvas.width = window.innerHeight * (16 / 9)
		this.ctx.scale(this.canvas.width / 1920, this.canvas.height / 1080)
		// clear screen
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

		/*
		// test rectangle fills half of screen to test scaling
		this.ctx.beginPath()
		this.ctx.rect(0, 0, 960, 1080)
		this.ctx.fillStyle = "#272838"
		this.ctx.fill()
		*/

		for(let name of Object.keys(this.entities)) { // loop through every entity and draw it to screen
			this.entities[name].draw()
		}

		this.blackScreen.draw()

	}

	debugText(text) {
		this.ctx.font = "16px Monaco"
		this.ctx.fillStyle = "#F9F8F8"
		this.ctx.fillText(text, 10, 26)
	}

	newEntity(name, entity) {
		entity.name = name
		this.entities[name] = entity
		return this.entities[name]
	}

	deleteEntity(name) {
		delete this.entities[name]
	}

	clearEntities() {
		this.entities = {}
	}

	async fadeOut() {
		await this.blackScreen.fadeOut()
		return
	}

	async fadeIn() {
		await this.blackScreen.fadeIn()
		return
	}

	async titleText(string, length) {
		for(let i = 0; i < 30; i++) {
			this.ctx.textAlign = "center"
			this.ctx.font = "72px Lucida Console"
			this.ctx.fillStyle = `rgba(255, 255, 255, ${i * 2 / 59})`
			this.ctx.fillText(string, 960, 540)
			await this.frame()
		}
		for(let i = 0; i < length * 60; i++) {
			this.ctx.textAlign = "center"
			this.ctx.font = "72px Lucida Console"
			this.ctx.fillStyle = "white"
			this.ctx.fillText(string, 960, 540)
			await this.frame()
		}
		for(let i = 0; i < 30; i++) {
			this.ctx.textAlign = "center"
			this.ctx.font = "72px Lucida Console"
			this.ctx.fillStyle = `rgba(255, 255, 255, ${1 - i * 2 / 59})`
			this.ctx.fillText(string, 960, 540)
			await this.frame()
		}
		this.ctx.textAlign = "left"
		return
	}

	playAudio(audio) {
		audio = game.sounds[audio]
    audio.pause()
    audio.currentTime = 0
    audio.play()
	}

	async playAudioFade(audio) {
		audio = game.sounds[audio]
		audio.pause()
		audio.currentTime = 0
		audio.play()
		for(let i = 0; i < 30; i++) {
			audio.volume = i * 2 / 59
			await this.frame()
		}
		return
	}

	stopAudio(audio) {
		audio = game.sounds[audio]
		audio.pause()
	}

	async stopAudioFade(audio) {
		audio = game.sounds[audio]
		for(let i = 0; i < 30; i++) {
			audio.volume = 1 - i * 2 / 59
			await game.frame1()
		}
		audio.pause()
		return
	}

	setAudioLoop(audio) {
		audio.addEventListener("timeupdate", () => {
			if(audio.currentTime > audio.duration - .44) {
				audio.currentTime = 0
				audio.play()
			}
		})
	}

}

export { Game }
