import { fprint, choice, clear, pause } from "./waterWorks.js"
import * as config from "./waterWorks.js"

window.debug = false
window.days = 0 // number of days
window.experience = 0 // exp level
window.personality = 0 // positive = good, negative = bad
window.state = 0 // 0 = alive, -1 = win, string = death message
window.message = 0 // used to communicate short term between days, typically used in multidays

/* LIST OF DEATHS
01 - depression.py Crab suicide
02 - burnWitch.py Burnt to a crisp
03 - oldGuyDrugs.2.py Oyster-piod overdose
04 - $chainDays.cringeNarrator.py Cringed to death
05 - oldGuyDrugs.2.py M'shark-er fume overdose
06 - robberyTime.3.py Buff crab beat up
07 - oldGuyDrugs.2.py Apartment flooding
08 - $chainDays.crabExamDeath.py Not licensed to crab
09 - cookingCompetition.py Automobile gakked you
10 - $chainDays.presidentStay.py Assassination
11 - fisherman.py Cooked and eaten
12 - unused
13 - prisonersDilemma.py Prison time
*/

async function game(flag) {
  var queue = config.generateQueue(flag)
  while(true) {
    await pause()
    window.days++
    clear()
    await fprint("DAY " + window.days + "\n", "white", 1, 0)
    var dayString = queue.shift()
    if(window.debug) fprint(dayString)
    //https://unpkg.com/crab-simulator@1.0.0/waterWorks.js
    //var day = await import("https://unpkg.com/crab-simulator@1.0.0" + dayString.slice(1))
    var day = await import(dayString)
    queue = await day.execute(queue)
    if(queue.length == 0 && window.state == 0) { // if queue is empty and not dead on the last day
      window.state = -1 // set state to win
    }
    if(window.state != 0) { // if state isn't default, break out of game loop (dead or win)
      await pause()
      break
    }
  }
  if(window.state == -1) {
    // win game
    clear()
    window.days++
    await fprint("DAY " + window.days + "\n", "white", 1, 0)
    await fprint("Damn, you actually made it.\n", "green", 2)
    await fprint("Huh? Where am I?\n", "cyan")
    await fprint("You're at the end of the game. You finished all of the trials I put you through.", "green")
    await fprint("You may rest now.\n", "green", 2)
    await fprint("...", "cyan", 1)
    await fprint("I don't want to. I still have so much to do as a crab.\n", "cyan", 1)
    await fprint("Really? I've never had this happen to me before... I'll tell you what, kid. You wanna become a narrator?\n", "green")
    let answer = await choice(["Yes", "No"])
    if(answer == 1) {
      await fprint("I accept.\n", "green")
      await fprint("Thank you. I can move on now. I shall see you again soon.\n", "white", 1)
      await fprint("Where are you going?", "green", 2)
      await fprint("...", "green", 3)
      await fprint("Oh, and thanks for playing through this whole thing as me. You saved me a whole lot back there.", "green", 2)
      await fprint("I guess I should be going as well. See ya.\n", "green", 4)
    } else {
      await fprint("Thanks for the offer, but I refuse.\n", "cyan")
      await fprint("I can't blame you.", "green", 1)
      await fprint("Goodbye for now. I shall see you again soon.\n", "green", 1)
      await fprint("Where are you going?", "cyan", 2)
      await fprint("...", "cyan", 3)
      await fprint("Oh, and thanks for playing through this whole thing as me. You saved me a whole lot back there.", "cyan", 2)
      await fprint("I guess I should be going as well. See ya.\n", "cyan", 4)
    }
    await pause()
    clear()
    config.sleep(2)
    await fprint("Thanks for playing Crab Simulator (2020)!\n", "yellow", 3)
    await fprint("STATS:", "white", 1)
    await fprint("Total days : " + window.days, "white", 1)
    await fprint("Experience : " + window.experience, "white", 1)
    await fprint("Overall Kindness : " + window.personality + "\n", "white", 1)
    if(window.personality > 0) {
      await fprint("Those were some pretty nice choices back there. Good job.\n", "rainbow", 3)
    } else {
      await fprint("Those weren't some pretty nice choices back there. Not cool, dude.\n", "rainbow", 3)
    }
    await fprint("Hope you liked our game. Gotta run now, bye.\n", "yellow", 1)
  } else {
    // lose game
    clear()

    await fprint("You died.\n", "red", 2, 0)
    await fprint("Ending " + window.state.slice(-2) + "\n", "green", 1, 0)
    await fprint(window.state.slice(0, -2) + "\n", "green", 1)
    await fprint("Congrats, you made it " + window.days + " " + config.dayPlural() + ".\n", "green", 2)
    await fprint("Restart day?\n", "dim")

    let answer = await choice(["Yes", "No"])

    if(answer == 1) {
      window.state = 0
      window.days--
      if(dayString == "./days/chainDays/presidentStay.js") {
        window.days--
        dayString = "./days/multiDays/presidentialCampaign/presidentialCampaign_3.js"
      } else if(dayString == "./days/chainDays/crabExamDeath.js") {
        window.days--
        dayString = "./days/crabExam.js"
      }
      queue.unshift(dayString)
      game(queue)
    } else {
      await pause()
      titleScreen()
    }
  }
}

async function intro() {
  clear()
  await fprint("Welcome!\n", "green", 1)
  await fprint("You've died tragically " + config.randomDeath() + ".\n", "red", 1.5)
  if(Math.floor(Math.random() * 4) == 0) {
    await fprint("LucKRILLy...", "green", 1)
		await fprint("haha did you get it", "dim", 0, 0.02)
  } else {
    await fprint("Luckily...", "green", 1)
  }
  await fprint("You've been reincarnated as a crab!", "green", 1)
  await fprint("There's a lot to do as a crab these days, so strap in and enjoy the ride!\n", "green", 2)
  window.days = 0
  window.experience = 0
  window.personality = 0
  window.state = 0
  game(false)
}

async function credits() {
  clear()
  await fprint("Made by Jacob Johnson and Roger Cronin\n", "green", 1)
	await fprint("Shoutout to RomeroShwarz and their 1300s Peasant Simulator for insipration\n", "green", 1)
  const span = config.createSpan("green")
  config.output.appendChild(span)
  for(let c of "Shoutout ") {
    span.innerHTML += c
    await config.sleep(0.04)
  }
  const a = document.createElement("a")
  a.href = "https://en.wikipedia.org/wiki/Crab"
  a.target = "_blank"
  span.appendChild(a)
  for(let c of "https://en.wikipedia.org/wiki/Crab") {
    a.innerHTML += c
    await config.sleep(0.04)
  }
  await fprint("\n", "green", 1, 0)
	await fprint("Crab art by tre\n", "green", 1)
  await fprint("Ib and Alex for feedback and ideas\n", "green", 1)
	await fprint("A bunch of people who tested and probably don't want their names on this\n", "green", 1)
	await fprint("And you, gamer.", "green", 2)
  const emoji = document.createElement("img")
  emoji.draggable = false
  emoji.classList.add("emoji")
  emoji.alt = "😘"
  emoji.src = "https://twemoji.maxcdn.com/v/13.0.1/72x72/1f618.png"
  config.output.appendChild(emoji)
  await config.sleep(3)
	titleScreen()
}

// https://twemoji.maxcdn.com/v/13.0.1/72x72/1f618.png

async function titleScreen() {
  clear()
  const pre = document.createElement("pre")
  pre.classList.add("red")
  pre.innerHTML = `
    /\\
   ( /   @ @    ()
    \\  __| |__  /
     -/   "   \\-
    /-|       |-\\
   / /-\\     /-\\ \\
    / /-\`---'-\\ \\
     /         \\

`
  config.output.appendChild(pre)
  await config.sleep(2)
  await fprint("Welcome to Crab Simulator (2020)!\n", "yellow", 1.5)

  await fprint(config.randomGreeting(), "green")
  await fprint("Select an option pleeeaase\n", "green")

  let answer = await choice(["New Game", "Credits"])

  await fprint(config.randomAgree() + "\n", "green", 2)

  if(answer == 1) {
    intro()
  } else {
    credits()
  }
}

window.addEventListener("load", () => {
  if(window.debug) {
    game(false)
  } else {
    titleScreen()
    //game(false)
  }
})
