import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

const geezerResponses = ["scram why don'tcha.", "whadda lookin at, eh?", "you look a little red for this part of town."]

export async function execute(queue) {
	await fprint("It's a sunny afternoon, and you're walking through a shady part of town when you notice an old crab leaning against a wall.\n", "dim", 1)

  await fprint("Oi, kid, " + geezerResponses[Math.floor(Math.random() * geezerResponses.length)] + "\n", "yellow", 0.5, 0.06)

  await fprint("All of a sudden, the crab collapses onto the ground.\n", "dim")

  await fprint("Ow FUCK, a heart attack!\n", "yellow", 0.5, 0.06)

  await fprint("You run up to the crab and say", "dim", 0)
  await fprint("Oh shit, you good dude?\n", "cyan")

  await fprint("I'm dying, kid. Please, continue on my legacy of selling drugs.\n", "yellow", 0.4, 0.06)
  await fprint("Wha-\n", "cyan", 0.1)
  await fprint("My forefathers started selling ketamine in the early 1700s after arriving fresh off the boat from Ireland. My grandfather taught my own father how to produce his own meth. And hi-\n", "yellow", 1.5, 0.06)
  await fprint("Oof he died.\n", "dim", 1)
  await fprint("Well fuck, looks like you gotta do it now.\n", "green", 1)

  await fprint("After a bit of searching through the contents of his satchel, you find his stash of oyster-piods and decide to start your new fledgling business tomorrow.\n", "dim")

  await fprint("Look at you go, you little entrepreneur!\n", "green", 1)

  await fprint("Drugs + 9", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
  queue.unshift("./days/multiDays/oldGuyDrugs/oldGuyDrugs_2.js")
  return queue
}
