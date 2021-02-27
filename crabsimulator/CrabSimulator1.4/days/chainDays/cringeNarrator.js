import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue) {
	await fprint("Hey, man. I know it's only been " + window.days + " " + config.dayPlural() + ", but I feel like we've gotten pretty close, you know?\n", "green")

  let answer = await choice(["Uh, what?", "Oh shit bro, totally, fuck I thought I was the only one"])

  if(answer == 1) {
    await fprint("Uh, what?\n", "cyan")
    await fprint("Oh lmao wrong number thought this was someone else so sorry.\n", "green")
    await fprint("Mm, ok.\n", "cyan")
    await fprint("No really my friend took my phone it was just a joke.\n", "green")
    await fprint("Oh, alright.\n", "cyan")
    await fprint("Wow, you thought I liked you? That's pretty funny... unless? Jk.\n", "green")
    await fprint("Cool.\n", "cyan", 2)
    window.state = "God, that was awkward. You died so hard on the inside that your body followed your mind.04"
  } else {
    await fprint("Dude, I thought I was the only one...\n", "cyan")
    await fprint("Oh wait really? No cap?\n", "green")
    await fprint("Yeah bro we really got a connection.\n", "cyan")
    await fprint("Oh dip that's pretty epic.\n", "green")
    await fprint("And then you woke up.\n", "dim", 1)

    await fprint("Predictability + 5", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience += 1
  }

	return queue
}
