class Entity {
	constructor(x, y, image) {
		this.x = x
		this.y = y
		this.image = image
		this.color = "black"
		this.state = {
			speaking: false,
			moving: [0, 0, -1, false]
		}
		this.animation = {}
		this.scale = 1
	}

	draw() {
		game.ctx.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
	}

	// time in seconds assuming 60 fps
	async move(x, y, time, animate = true) {
		this.state.moving = [(x - this.x) / (60 * time), (y - this.y) / (60 * time), Math.floor(game.frameCount + (60 * time)), animate]
		await sleep(time)
		return
	}

	generateTextboxArray(string) {
		string = string.split(" ")
		let textboxArray = [[""]] // 2D array inf. x 3 containing lines within textboxes
		let t = 0
		let l = 0

		for(let word of string) {
			if(word == "\b") {
				l = 0
				t++
				textboxArray[t + 1] = [""]
				continue
			}
			if(textboxArray[t][l].length + word.length > 41) {
				l++
				if(l > 2) { // 2 because line index starts at 0
					l = 0
					t++
				}
				textboxArray[t + 1] = [""]
				textboxArray[t][l] = word + " "
			} else {
				textboxArray[t][l] += word + " "
			}
		}
		if(textboxArray[textboxArray.length - 1][0] == "") textboxArray.pop() // if the last textbox is empty, delete
		return textboxArray
	}

	async speak(string, wait = 1, textSpeed = 0.04, color = this.color || "black", fromPrompt = false) {
		this.state.speaking = true
		let playingSound = true
		let textbox = new Textbox(344, 800, newImage("./assets/textbox_background_test.png"), "", color)

		let textboxArray = this.generateTextboxArray(string)

		game.newEntity("textbox", textbox)

		for(let currentTextbox of textboxArray) {
			for(let line in currentTextbox) {
				for(let c of currentTextbox[line]) {
					textbox.text += c
					switch(c) {
						case ".":
						case "!":
						case "?":
						case ";":
							game.playAudio("blip")
							await sleep(.5) // full stop sleep
							break
						case ",":
						case ":":
							game.playAudio("blip")
							await sleep(.25) // half stop sleep
							break
						default:
							if(playingSound) {
								game.playAudio("blip")
								playingSound = false
							} else {
								playingSound = true
							}
						case " ":
							await sleep(textSpeed)
					}
				}
				textbox.text += "\n"
			}
			textbox.state.done = true // adds little continue button in corner of textbox
			this.state.speaking = false
			if(!fromPrompt) {
				if(wait != 0) await inputPromise()
				textbox.text = ""
			}
			this.state.speaking = true
			textbox.state.done = false
		}
		this.state.speaking = false
		if(fromPrompt) {
			await sleep(0.5)
			textbox.delete()
		} else {
			textbox.delete()
			await sleep(wait)
		}
	}

	async prompt(string, optionArray, wait = 1, textSpeed = 0.04, multiLine = false, color = this.color || "black") {
		// modified Entity.speak to remove this duplicate code
		const font = multiLine ? "36px Lucida Console" : "46px Lucida Console"
		const selectorY = multiLine ? 927 : 953
		const concater = multiLine ? "\n" : "\n\n"
		await this.speak(string, wait, textSpeed, color, true)
		let textboxArray = this.generateTextboxArray(string)
		string = ""
		for(let line of textboxArray[textboxArray.length - 1]) {
			string += line + "\n"
		}
		let promptBox = new Textbox(27, 800, newImage("./assets/textbox_background_test.png"), string, color)
		game.newEntity("promptBox", promptBox) // Remove old texbox and create new one slightly displaced
		let promptBackground = new Textbox(1285, 800, newImage("./assets/prompt_background_test.png"), "", "black", font, multiLine ? 2 : 1)
		game.newEntity("promptBackground", promptBackground) //Prepare choice box
		for (let c of optionArray) {
			promptBackground.text += ` ${c}${concater}` // it works like this just trust me
		}
		var selector = new Entity(1297, 837, newImage("./assets/crabClaw.png"))
		game.newEntity("clawSelector", selector) //Create selector

		var toggle = true; //Prep choice code

		// Choice code, wtf is .includes
		// mb, .includes returns true/false depending if the argument is present in the array, so it's just a 1 line solution to what you were doing before with branched programming
		while(true) {
			let input = await inputPromise()
			if(input == "Enter") {
				promptBox.delete()
				promptBackground.delete()
				selector.delete() // Delete everything

				await sleep(wait)
				return toggle // Return result
			}
			if(["w", "s", "ArrowUp", "ArrowDown"].includes(input)) {
				toggle = toggle ? false : true
				if(toggle) {
					selector.y = 837
				} else {
					selector.y = selectorY
				}
			}
		}
	}

	update() {
		//console.log(this.state, this.state.moving, this.state.moving[2])
		if(this.state.moving[2] >= game.frameCount) {
			this.x += this.state.moving[0]
			this.y += this.state.moving[1]
		} else {
			this.state.moving[2] = -1
			this.state.moving[3] = false
		}
	}

	delete() {
		game.deleteEntity(this.name)
	}
}

//Textbox coords : 344, 800
//Textbox dimensions : 253, 1230
class Textbox extends Entity {
	constructor(x, y, image, text, color, font = "46px Lucida Console", fromPrompt = false) {
		super(x, y)
		this.x = x
		this.y = y
		this.image = image
		this.text = text
		this.color = color
		this.state.done = false
		this.font = font
		if(fromPrompt == 2) {
			this.lineSize = 36 + 8
		} else {
			this.lineSize = 48 + 10
		}
		this.offsets = fromPrompt ? [50, 72] : [40, 80]
	}

	draw() {
		game.ctx.drawImage(this.image, this.x, this.y)
		game.ctx.fillStyle = colorBank[this.color]
		game.ctx.font = this.font
		let lines = this.text.split("\n")
		for(let line in lines) {
			game.ctx.fillText(lines[line], this.x+this.offsets[0], this.y+this.offsets[1] + (line * this.lineSize))
		}
		// if(this.state == 1) game.ctx.fillRect(this.x + 1230 - 20 - 20, this.y + 253 - 20 - 20, 20, 20)
		if(this.state.done) game.ctx.fillRect(this.x + 1190, this.y + 213, 20, 20)
	}

}

class Character extends Entity {
	constructor(x, y, imageBank, images, color) {
		super(x, y)
		this.color = color
		this.imageBank = imageBank
		this.images = {}
		for(let name of images) {
			this.images[name] = {}
			this.images[name].image = imageBank[name]
			this.images[name].x = 0
			this.images[name].y = 0
		}
	}

	draw() {
		let i = 0
		for(let image in this.images) {
			// game.ctx.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale)
			game.ctx.drawImage(this.images[image].image, this.x + this.images[image].x + this.curveOffset(i), this.y + this.images[image].y + this.curveOffset(i - 1), this.images[image].image.width * this.scale, this.images[image].image.height * this.scale)
			i++
		}
	}

	curveOffset(seed) {
		return Math.sin((game.frameCount - (seed * 12)) / 40) * 10 * this.scale
	}

}

function tokenize(string) {
	let array = []
	while(string.length != 0) {
		if(string.startsWith("\n")) {
			array.push("<br>")
			string = string.substring(2)
		} else {
			array.push(string[0])
			string = string.substring(1)
		}
	}
	return array
}

const colorBank = {
	red: "#FF0000",
	yellow: "#A88C00",
	green: "#008000",
	blue: "#1E90FF",
	purple: "#BA55D3",
	cyan: "#CC0000", // now red
	white: "#FFFFFF",
	black: "#000000",
	gray: "#303030",
	orange: "#FF8C00",
	darkBlue: "#001CA8",
	turquoise: "#40E0D0",
	brown: "#8B4513",
	leg: "#1C2840"
}

export { Entity, Character, Textbox }
