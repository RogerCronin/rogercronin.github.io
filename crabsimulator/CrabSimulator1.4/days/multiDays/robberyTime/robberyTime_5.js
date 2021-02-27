import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

const gangList = ["red", "blue"]
var bad
var good = gangList[Math.floor(Math.random() * gangList.length)]
if(good == "red") {
  bad = "blue"
} else {
  bad = "red"
}

export async function execute(queue) {

  await fprint("Hey, kid. Come close. I gotta ask you something important.", good, 0)
  await fprint("Some " + good + " crab says to you during lunch.\n", "dim", 1)
  await fprint("What's up?\n", "cyan")
  await fprint("You new here?\n", good)

  let answer = await choice(["Yes", "No"])

  await fprint("Well, I-\n", "cyan", 0)
  await fprint("Shut up, I don't care. You see those dirty " + bad + " crabs over there? We're in a bit of a gang war right now. One little thing could throw off the-\n", good, 0)
  await fprint("HEY " + bad.toUpperCase() + " CRABS OVER THERE! THIS " + good.toUpperCase() + " CRAB THINKS YOU'RE DIRTY!", "cyan", 0)
  await fprint("You call out through the now silent cafeteria.\n", "dim", 2)
  await fprint("...", bad, 2)
  await fprint("Sorry. I've been going through a lot right now with my family and just don't have the motivation these days.\n", bad, 1)
  await fprint("Oh shit dude. I'm so sorry. I didn't know you were going through all of that.\n", good)
  await fprint("The " + good + " crab along with some of the " + bad + " crabs go to comfort the gang leader.\n", "dim", 1)
  await fprint("Do you want to talk-\n", good, 0)
  await fprint("STAB!\n", bad, 1.5)
  await fprint("FUCK!\n", good, 1)
  await fprint("The " + good + " crab staggers away from the " + bad + " crab, revealing a stab wound in his shell.\n", "dim")
  await fprint("Look, man. Nothing personal, yeah?", bad, 0)
  await fprint("The " + bad + " crab says to the dying " + good + ", twirling her prison shank between her pincers.\n", "dim", 1)
  await fprint("Murmurs erupt throughout the cafeteria.\n", "dim", 1.5)
  await fprint("STAB!", good, .4)
  await fprint("STAB!\n", good, .7)
  await fprint("Two " + bad + " crabs are taken down by a pair of " + good + " crabs.\n", "dim")
  await fprint("FUCK YOU! THIS IS WAR NOW!\n", bad)
  await fprint("The cafeteria erupts in chaos between the " + good + "s and " + bad + "s.\n", "dim", 1)
  await fprint("Dude, what the fuck did you just cause?\n", "green")
  await fprint("You curl up in a corner and cry until a warden with a gun motions you out of the bloodbath that the cafeteria now is.\n", "dim", 1)

  await fprint("Will to remain alive - 60", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++

  queue.unshift("./days/multiDays/robberyTime/robberyTime_6.js")
  return queue
}
