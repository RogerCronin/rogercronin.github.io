import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
	await fprint("Fuck. Being a crab sucks. Everything is made out of sand, the only thing to eat is seafood, and everything smells like ocean water.", "cyan", 1)
  await fprint("If I got here by dying, then maybe that's how I can get out!\n", "cyan")

  await fprint("I mean, sure. Crab suicide?\n", "green")

  let answer = await choice(["Yeah", "Nah"])

  if(answer == 1) {
    await fprint("Let's do this thing.\n", "cyan", 2)
    window.state = "I mean, you died. You committed suicide after you couldn't deal with your new crab life. Good job?01"
  } else {
    await fprint("Actually nevermind. I don't feel like it.\n", "cyan")
    await fprint("Cool cool. Glad you didn't?\n", "green")
    await fprint("Depression - 5", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience += 1
    window.personality += 1
  }
  return queue
}
