import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue) {
  await fprint("You wound up in the hospital following your tragic magical getaway.\n", "dim")
  await fprint("I'm sorry, but I can't submit \"flying broom stick accident\" to insurance claims.", "yellow")
  await fprint("Says the doctor in your hospital room.\n", "dim", 1)
  await fprint("I'm afraid you'll have to pay the full amount of 15 dollars.\n", "yellow", 1)

  let answer = await choice(["Pay up", "Bribe the doctor"])

  if(answer == 1) {
    await fprint("Fine, but you're no fun.\n", "cyan")
    await fprint("Or so I've heard.\n", "yellow")
    await fprint("You're now 15 bucks short. I guess. That's cool.\n", "dim", 1)

    await fprint("15 bucks - 1", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    window.personality++
  } else {
    await fprint("Could my good friend Mr. Andrew Jackson here change your mind?", "cyan")
    await fprint("You say to the doctor.\n", "dim", 1)
    await fprint("Is that a 20 dollar bill?\n", "yellow")
    await fprint("Do you accept my bribe?\n", "cyan")
    await fprint("I... yes.", "yellow")
    await fprint("The doctor responds.\n", "dim", 1)

    await fprint("20 bucks - 1", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    window.personality--
  }
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++

	return queue
}
