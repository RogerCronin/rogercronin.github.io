class BlackScreen {
	constructor(state) {
		this.x = 0
		this.y = 0
		this.alpha = 0
		this.image
	}

	async fadeOut() {
		for(let i = 0; i < 60; i++) {
			this.alpha = i / 59
			await game.frame()
		}
		return
	}

	async fadeIn() {
		for(let i = 0; i < 60; i++) {
			this.alpha = 1 - i / 59
			await game.frame()
		}
		return
	}

	draw() {
		game.ctx.fillStyle = `rgba(0, 0, 0, ${this.alpha})`
		game.ctx.fillRect(0, 0, 1920, 1080)
	}

	update() {
		
	}

}

export { BlackScreen }
