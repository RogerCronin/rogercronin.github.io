import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

const failResponses = ["Oof. Nope.", "Oh I'm sorry. That's not correct.", "Nope! You dummy!", "You utter fool, that's wrong!", "Nah dude, not even close.", "Was that a guess? Not a good one.", "Bad answer!", "Dummy.", "Idiot.", "Fool.", "Really? That's the answer you went with?"]

export async function execute(queue) {
  let money = 0

  await fprint("You notice an unusually large envelope in your mailbox one breezy morning.\n", "dim", 1)
  await fprint("Hmm, I wonder what this could be?\n", "cyan", 1)
  await fprint("You pick up the envelope and open it. Inside there is a letter that reads the following:\n", "dim", 1)
  await fprint("Hello from the representatives of MSNBSea's entertainment branch. \n  Congratulations! You have been selected as one of five participants for MSNBSea's venture into online broadcasted game shows. In the game show \"Seafront Feud\", you answer trivia questions about the great blue and win money! Will you accept our offer?\n", "yellow", 1)

  let answer = await choice(["Yes", "Yes, but farther down on your screen"])

  await fprint("You follow the instructions printed on the letter by pricking your claw and soaking the paper in blood, chanting \"stultus locustam marinam\", and announcing your mother's maiden name out loud.\n", "dim", 2)
  await fprint("Hey you feeling okay..?\n", "green", 2)
  config.pause()
  await config.sleep(2)
  await fprint("Holy shit dude, I thought you died.\n", "green", 1)
  await fprint("You wake up in a foreign TV studio surrounded by crabs wearing business suits.\n", "dim")
  await fprint("2 minutes everybody!", "yellow", 0)
  await fprint("A crab in a stylish hat calls out, presumably the host.\n", "dim", 1)

  await fprint("The lights in the studio dim as you get in a chair next to the host.\n", "dim", 1)

  await fprint("Welcome to Seafront Feud!\n", "yellow")
  await fprint("A fake applause sound effect echos throughout the studio.\n", "dim", 1)

  await fprint("I'm here with my good friend who's about to win some money!\n", "yellow")
  await fprint("The same sound effect thunders through the otherwise silent room.\n", "dim", 1)

  let res = await gameShow_question("Now, for the first question: Which zodiac sign represents the crab?", ["Pisces", "Cancer", "Libra", "Gemini"], 2, money)
  money = res[1]
  res = await gameShow_question("Second question: How did you get into this studio?", ["Blood rite with The Devil", "Envelope laced with chloroform", "Fast travel", "Determination"], 2, money)
  money = res[1]
  if(!res[0]) {
    await fprint("Okay that was a stupid question.\n", "cyan")
    await fprint("Shh sh sh, you're not the host.\n", "yellow")
  } else {
    await fprint("Uh... Alright then.\n", "cyan")
  }
  res = await gameShow_question("Third question: What's my favorite color?", ["Red", "Light red", "Yellow", "Orange"], 4, money)
  money = res[1]
  if(!res[0]) {
    await fprint("Really? That was worth money?\n", "cyan")
  } else {
    await fprint("Are these real questions?\n", "cyan")
    await fprint("Yes, I can assure you that these are all real.\n", "yellow")
  }

  await fprint("Fourth question: What's my SECOND favorite col-\n", "yellow", 0)
  await fprint("Yeah no I'm not finishing this.\n", "cyan", 1)

  await fprint("Money + " + money, "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++

  return queue
}

async function gameShow_question(text, choices, answer, money) {
  await fprint(text + "\n", "yellow")
  let response = await choice(choices)
  if(response == answer) {
    await fprint("Correct! That's an extra 1 dollar towards your score!\n", "yellow")
    money++
    await fprint("You now have " + money + " " + gameShow_dollarPlural(money) + ".\n", "dim", 1)
    return [true, money]
  } else {
    await fprint(failResponses[Math.floor(Math.random() * failResponses.length)] + " The correct answer was number " + answer + ". You don't win anything this round.\n", "yellow")
    await fprint("You still have " + money + " " + gameShow_dollarPlural(money) + ".\n", "dim", 1)
    return [false, money]
  }
}

const gameShow_dollarPlural = money => money == 1 ? "dollar" : "dollars"
