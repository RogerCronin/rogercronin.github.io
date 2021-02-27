import { Character } from "../entity.js"

class Fish extends Character {
	constructor(x, y, imageBank, images, color) {
		super(x, y, imageBank, images, color)
		this.animation = {
			altFin: false
		}
		this.life = 1
	}

	update() {
		super.update()
		if(!(game.frameCount % 15)) {
			if(this.state.speaking) {
				if(this.animation.altFin) {
					this.animation.altFin = false
					this.images["fin"].image = this.imageBank.fin_1
				} else {
					this.animation.altFin = true
					this.images["fin"].image = this.imageBank.fin
				}
			} else {
				this.animation.altFin = false
				this.images["fin"].image = this.imageBank.fin
			}
		}
	}

	async stopOffset() {
		for(let i = 0; i < 180; i++) {
			this.life -= 1 / 180
			await game.frame()
		}
		this.life = 0
		return
	}

	curveOffset(seed) {
		return Math.sin((game.frameCount - (seed * 12)) / 40) * 10 * this.scale * this.life
	}

}

export { Fish }
