var output // output div
var input // input div
var sleep
var speed = 1

function generateQueue(flag) {
  if(flag !== false) return flag
  var queueListTest = false
  //queueListTest = ["./days/wrongSecretAgent.js"]
  var queueList = [
    "./days/oldMan.js",
    "./days/depression.js",
    "./days/wrongSecretAgent.js",
    "./days/multiDays/oldGuyDrugs/oldGuyDrugs_1.js",
    "./days/tasteTesting.js",
    "./days/multiDays/presidentialCampaign/presidentialCampaign_1.js",
    "./days/multiDays/robberyTime/robberyTime_1.js",
    "./days/randomHotCrab.js",
    "./days/multiDays/soccerPractice/soccerPractice_1.js",
    "./days/burnWitch.js",
    "./days/purchaseSomeGoods.js",
    "./days/cookingCompetition.js",
    "./days/crabExam.js",
    "./days/firstContact.js",
    "./days/fisherman.js",
    "./days/forwardScuttle.js",
    "./days/gameShow.js",
    "./days/paneraBreadGiftcard.js",
    "./days/peerPressure.js",
    "./days/pirates.js",
    "./days/prawnShop.js",
    "./days/prisonersDilemma.js"
  ]
  queueList = shuffleArray(queueList)
  return queueListTest || queueList
}

// converts string to an array + converts \n to <br>
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

// creates an HTML span element
function createSpan(color) {
  const span = document.createElement("span")
  span.classList.add(color)
  return span
}

/*
- Informational text is "dim"
- Narrator speech is "green"
- Character's speech is "cyan"
- Other character's speech are "yellow", "blue", and "purple" in that order
- Onomonopoeia and other sounds are "red"
- God and stat level ups are "rainbow"
- Use "rainbow" and "white" very sparingly

- Carlos (Carlos Sandchez) is a reoccurring friend character for the crab now

TIMINGS
wait is how long to wait before next instruction, default 0.5
text speed is how long normal letters take, default 0.04
slow text speed is recommended to be 0.06
fast text speed is recommended to be 0.02
*/

// fancy print
async function fprint(string, color = "white", wait = 0.5, textSpeed = 0.04) {
	if(color == "rainbow") return rainbowPrint(string, wait, textSpeed) // do rainbow print
	const span = createSpan(color)
	output.appendChild(span) // make and put an empty span of the specified color on the dom
	for(let c of tokenize(string)) { // loop through all characters
    span.innerHTML += c // add character
    scrollToBottom()
		if(textSpeed != 0 && !window.debug) {
			if([".", "!", "?", ";"].includes(c)) { // full stop sleep
				await sleep(0.5)
			} else if([",", ":"].includes(c)) { // soft stop sleep
				await sleep(0.25)
			} else { // default sleep for characters
				await sleep(textSpeed)
			}
		}
	}
	span.innerHTML += "<br>" // add line break at end
  scrollToBottom()
	if(!window.debug) { // end wait
		await sleep(wait / speed)
	}
}


// rainbow print
// pretty much the same as fprint but cycles between colors
async function rainbowPrint(string, wait, textSpeed) {
  const rainbowList = ["red", "yellow", "green", "blue", "purple"]
  let rainbowInt = Math.floor(Math.random() * 5)
  for(let c of tokenize(string)) {
    const span = createSpan(rainbowList[rainbowInt])
    span.innerHTML = c
    output.appendChild(span)
    scrollToBottom()
    rainbowInt += 1
		if(rainbowInt == 5) {
      rainbowInt = 0
    }
    if(textSpeed != 0 && !window.debug) {
			if([".", "!", "?", ";"].includes(c)) {
				await sleep(0.5)
			} else if([",", ":"].includes(c)) {
				await sleep(0.25)
			} else {
				await sleep(textSpeed)
			}
		}
  }
  fprint("", "cyan", 0, 0)
  if(!window.debug) {
    await sleep(wait / speed)
  }
}

const clear = () => output.innerHTML = ""

async function pause() {
  fprint("Press ENTER", "dim", 0, 0)
  await awaitInput()
}

// okay I kind of don't want to comment the rest of this because it's ugly
const choice = array => new Promise(async (resolve, reject) => {
  input.classList.add("visible")
	for(let i in array) {
    fprint(`[${parseInt(i) + 1}] ${array[i]}`, "cyan", 0, 0)
	}
  fprint("", "cyan", 0, 0)
	while(true) {
		let answer = await awaitInput()
    fprint(answer, "cyan", 0, 0)
    answer = parseInt(answer.slice(3))
		if(answer >= 1 && answer <= array.length) {
      input.classList.remove("visible")
      fprint("", "cyan", 0, 0)
			resolve(answer)
      break
		} else {
			fprint("Invalid input...", "red", 0, 0)
			continue
		}
	}
})

const awaitInput = () => new Promise(async (resolve, reject) => {
  input.innerHTML = ">> "
  let text = ">> "
	document.addEventListener("keypress", e => {
    if(e.key == "Enter") {
      resolve(text)
    } else {
      text += e.key
      input.innerHTML = text
    }
	})
  document.addEventListener("keydown", e => {
    if(e.key == "Backspace") {
      if(text.length < 4) return
      text = text.slice(0, text.length - 1)
      input.innerHTML = text
    }
  })
})

const dayPlural = () => window.days == 1 ? "day" : "days"

// taken from https://stackoverflow.com/a/6274398
// why doesn't JavaScript have a built in array shuffle method?
function shuffleArray(array) {
  let counter = array.length
  while(counter > 0) {
    let index = Math.floor(Math.random() * counter)
    counter--
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

function randomGreeting() {
  const randomGreetList = [
    "Lets get into it, yeah?",
    "You ready?",
    "Check me out on Bandcamp!",
    "Now with extra days!",
    "*snip snap snip snap snip snap*",
    "My claws are clicking \"fuck you\" in morse code.",
    "Let's get Kraken!"
  ]
  return randomGreetList[Math.floor(Math.random() * randomGreetList.length)]
}

function randomAgree() {
  const randomAgreeList = [
    "Aight bro.",
    "Good choice.",
    "kk",
    "Alrighty.",
    "Okey dokey!!"
  ]
  return randomAgreeList[Math.floor(Math.random() * randomAgreeList.length)]
}

function randomDeath() {
  const randomDeathList = [
    "as a crab",
    "from carbon monoxide poisoning",
    "from really bad Chinese food",
    "from COVID-19",
    "from fall damage",
    "in the trenches",
    "in a compromising position",
    "trying to commit suicide",
    "through reading this message",
    "in an online game of Chess",
    "in your favorite battle royale videogame",
    "in a TLS handshake",
    "in an automobile accident",
    "as a Kurdish freedom fighter",
    "from a gluten overdose", // oof
    "in a candle factory fire",
    "trying to pursue the American Dream",
    "caught up in the grimy criminal underworld of urban Wyoming",
    "as an ant",
    "from an angry weasel",
    "in a \"suicide\"",
    "from good, clean, fun"
  ]
	return randomDeathList[Math.floor(Math.random() * randomDeathList.length)]
}

function scrollToBottom() {
  document.documentElement.scrollTop = document.body.scrollHeight
}

window.addEventListener("load", () => {
  window.debug ? sleep = () => true : sleep = s => new Promise(r => setTimeout(r, s * 1000 / speed))
	output = document.getElementById("output")
	input = document.getElementById("input")
  document.addEventListener("keydown", e => {
	   if(e.code == "ShiftLeft") speed = 2
   })
  document.addEventListener("keyup", e => {
	   if(e.code == "ShiftLeft") speed = 1
  })
})

export { output, input, clear, pause, sleep, createSpan, fprint, choice, dayPlural, generateQueue, shuffleArray, randomDeath, randomGreeting, randomAgree, scrollToBottom }
