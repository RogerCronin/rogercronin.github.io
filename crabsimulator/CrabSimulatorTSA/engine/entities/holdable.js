import { Entity, Character } from "../entity.js"

class Holdable extends Entity {
	constructor(offsetX, offsetY, image, attached, attachedPart) {
		super(0, 0, image)
		this.offsetX = offsetX
		this.offsetY = offsetY
		this.attached = attached
		this.attachedPart = attachedPart
		this.locked = true
	}

	update() {
		super.update()
		if(this.locked) {
			this.x = game.entities[this.attached].x + game.entities[this.attached].images[this.attachedPart].x + this.curveOffset() + this.offsetX
			this.y = game.entities[this.attached].y + game.entities[this.attached].images[this.attachedPart].y + this.curveOffset() + this.offsetY
		}
	}

	curveOffset() {
		return Math.sin(game.frameCount / 40) * 10
	}

}

export { Holdable }
