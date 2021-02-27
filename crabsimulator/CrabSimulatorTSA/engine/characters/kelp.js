import { Character } from "../entity.js"

class Kelp extends Character {
	constructor(x, y, imageBank, images) {
		super(x, y, imageBank, images)
		this.kelpBlocker = imageBank.kelp_blocker
	}

	draw() {
		super.draw()
		game.ctx.drawImage(this.kelpBlocker, this.x, this.y, this.kelpBlocker.width * this.scale, this.kelpBlocker.height * this.scale)
	}
}

export { Kelp }
