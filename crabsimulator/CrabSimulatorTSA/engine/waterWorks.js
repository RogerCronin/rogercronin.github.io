function id(elementID) {
	return document.getElementById(elementID)
}

function make(element) {
	return document.createElement(element)
}

function newImage(file) {
	let image = document.createElement("img")
	image.src = file
	return image
}

function newImages(object) {
	for(let key of Object.keys(object)) {
		object[key] = newImage(object[key])
	}
	return object
}

async function inputPromise() {
	return new Promise((resolve, reject) => {
		document.addEventListener("keydown", e => {
			resolve(e.key)
		})
	})
}

const sleep = s => new Promise(r => setTimeout(r, s * 1000))
