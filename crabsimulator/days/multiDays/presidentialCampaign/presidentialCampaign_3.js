import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("---1 Week of Campaigning Later---\n", "dim", 2, 0)
  await fprint("Look alive! Today is voting day, where all of the animals under the sea gather to vote on a new leader.\n", "dim", 2)
  await fprint("You managed to gather over 500 guys to vote for you. Not like it matters tho, cause you're running unopposed. Turns out the last guy got murdered by the Monarchy cause they don't like democratic institutions or something?\n", "green", 2)
  await fprint("I hereby grant you the title of President, my good sir!", "yellow", 0)
  await fprint("Some dude on a stage says to you.\n", "dim", 1)
  await fprint("As the crowd cheers, you start thinking about how you'll go through with your plan.\n", "dim", 1)
  await fprint("Hello? Is this The National Mint?", "cyan", 0)
  await fprint("You speak into your phone.\n", "dim", 1)
  await fprint("Yes, hello Mr. President. What would you like?\n", "yellow")
  await fprint("Could you route 250,000 pesos into my personal bank account for me?\n", "cyan", 1)
  await fprint("Isn't that ille-\n", "yellow", 0)
  await fprint("Did I stutter?\n", "cyan", 2)
  await fprint("Uh, sure thing Mr. President.\n", "yellow", 2)
  await fprint("This whole President thing has a lot of power... Do I really want to resign immediately after this?\n", "cyan")
  let answer = await choice(["Resign", "Stay"])
  if(answer == 1) {
    await fprint("But alas, I don't give two fucks about this job.\n", "cyan", 1)
    await fprint("Debt - 250000 pesos plus interest\n", "rainbow", 2)
    queue.unshift("./days/chainDays/presidentResign.js")
  } else {
    await fprint("Heh. Hahahah. HahahahHAHAhahaHAha.\n", "cyan", 1)
    await fprint("Power tripping + 56\n", "rainbow", 2)
    queue.unshift("./days/chainDays/presidentStay.js")
  }
  return queue
}
