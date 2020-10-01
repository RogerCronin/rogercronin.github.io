import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("What the hell? Why do you need to be over 25 to purchase a Panera Bread giftcard?\n", "cyan")
  await fprint("You do? That's fucking wack, man.\n", "green")
  await fprint("I better do the only logical next step: get a fake ID!\n", "cyan", 1)
  await fprint("Uh, sure buddy.\n", "green", 1)

  await fprint("You meet up with your friend Carlos behind the Chili's near the post office.\n", "dim", 1)

  await fprint("Hey man, you got the \"goods\"?", "cyan")
  await fprint("You say really suspiciously.\n", "dim", 1)

  await fprint("Um. Yeah. Do you still want it?\n", "yellow")

  let answer = await choice(["Ye", "Nope"])

  if(answer == 1) {
    await fprint("Yea man, gimmie.\n", "cyan")
    await fprint("Alright bro, take care.\n", "yellow")
    await fprint("You exchange your goodbyes and start walking towards Panera Bread.\n", "dim", 1)
    await fprint("Do I reeeaally wanna do this?\n", "cyan")
    answer = await choice(["I demand bread", "Too dangerous"])
    if(answer == 1) {
      await fprint("Let's go then!", "cyan")
      await fprint("You say while walking into the restaurant.\n", "dim", 1)
      await fprint("I would like to purchase a giftcard at this fine establishment, please.\n", "cyan")
      await fprint("Can I see an ID?", "yellow")
      await fprint("The waiter says.\n", "dim")
      await fprint("You show your fake ID to the waiter.\n", "dim", 1)
      await fprint("What kind of fool do you take me as? I'm calling the cops you sick fuck.\n", "yellow")
      await fprint("Uh oh.\n", "green", 1)

      await fprint("Days spent in the slammer + 2", "rainbow", 1)
      await fprint("Badness + 1", "rainbow", 1)
      await fprint("Experience + 1\n", "rainbow", 2)

      window.personality--
      window.experience++
      window.days += 2 // jail time simulator
    } else {
      await fprint("Yeah on second thought maybe not.\n", "cyan")
      await fprint("Fuckin pussy smh.\n", "green", 1)
      await fprint("Goodness + 1", "rainbow", 1)
      await fprint("Experience + 1\n", "rainbow", 2)
      window.personality++
      window.experience++
    }
  } else {
    await fprint("Nah nevermind.\n", "cyan")
    await fprint("So you're not gonna pay me?\n", "yellow")
    await fprint("No thanks.\n", "cyan")
    await fprint("Oh. Ok.", "yellow")
    await fprint("He says as he walks away, glumly.\n", "dim")

    await fprint("Fake ID + 0", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.personality++
    window.experience++
  }
	return queue
}
