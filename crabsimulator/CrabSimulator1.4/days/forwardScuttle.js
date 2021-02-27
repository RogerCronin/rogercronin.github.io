import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("Yo, you wanna learn how to walk?", "yellow", 0)
  await fprint("Some lobster calls out from across the street.\n", "dim", 1)
  await fprint("I'm walking right now. I don't know what you mean.\n", "cyan")
  await fprint("No, I mean like actually walking. You're just scuttling sideways.\n", "yellow")
  await fprint("This dude seems lowkey sketchy. You wanna do this?\n", "green")

  let answer = await choice(["Let's go", "Let's no"])

  if(answer == 1) {
    await fprint("Yeah, let's do this!\n", "cyan", 1.5)
    await fprint("---2 fruitless hours later---\n", "dim", 2, 0)
    await fprint("Dude, come on. We've been at this for a couple hours now. You haven't shown even a little improvement.\n", "yellow")
    await fprint("I'm a crab, I just can't do it. I've let you down.\n", "cyan")
    await fprint("You sure did, buddy.\n", "yellow", 1)
    await fprint("Disappointment distilled in that lobster + 7", "rainbow", 1)
  } else {
    await fprint("Nah, you seem kinda sketchy man.\n", "cyan")
    await fprint("Oh, is it because I'm a cape lobster? You racist fuck.\n", "yellow")
    await fprint("No! I didn't mean it at all like that! It's just-\n", "cyan", 0)
    await fprint("Just what, exactly? Am I scary? Are you afraid of lobsters?\n", "yellow", 1)
    await fprint("You don't know what to say.", "dim", 1)
    await fprint("The lobster walks off in a huff, all thanks to you. Good going.\n", "dim", 1)
    await fprint("Racism + 3", "rainbow", 1)
  }
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
	return queue
}
