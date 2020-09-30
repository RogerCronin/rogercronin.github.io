import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

const responseList = ["SHIVER ME TIMBERS LADDIE, YE DID IT!", "YO HO HO AND A BOTTLE OF RUM, YE DID IT!", "SINK ME, LADDIE, YE DID IT!", "SPLICE THE MAINBRACE, YE DID IT!"]

export async function execute(queue) {
  await fprint("You're in the check-out line at Walmart when you encounter a ... familiar looking crab.\n", "green")
  await fprint("ARRR, WHAT DO YE MEAN ME COUPON'S EXPIRED!?!?\n", "yellow")
  await fprint("I'm sorry sir, but this coupon is-\n", "blue", 0)
  await fprint("FUCK YE SELF, I NEED ME VITAMIN-SEA SUPPLEY-MENTS! (ARRG)\n", "yellow")
  await fprint("Whoa, looks like that pirate's gonna get scurvy if you don't do anything. What do you do?\n", "green")

  let answer = await choice(["Stand up for the pirate", "Let him get what he deserves"])

  if(answer == 1) {
    await fprint("You've decided to yell at the poor service worker who probably gets paid minimum wage.\n", "dim")
    await fprint("Hey man, this pirate's just trying to stay healthy. Just let him use the coupon.\n", "cyan")
    await fprint("ARrgh?\n", "yellow")
    await fprint("The pirate has never encountered compassion before today.\n", "dim")
    await fprint("You know what, fine, I don't care.", "blue")
    await fprint("Says the cashier.\n", "dim", 1)
    await fprint(responseList[Math.floor(Math.random() * responseList.length)], "yellow")
    await fprint("Forget what I said yesterday, matey. A crab like ye would be a fine addition te any respectable pirate crew.\n", "yellow")
    await fprint("Goodness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality++
  } else {
    await fprint("Sir, this \"coupon\" is actually a Panera bread gift card. We can't accept this.", "blue")
    await fprint("The cashier says.\n", "dim", 1)
    await fprint("The pirate is visibily distressed.\n", "dim", 1)
    await fprint("Aye, it seems the only beast this old pirate can't conquer is the monster of monopolistic corporate America. (arrg)\n", "yellow")
    await fprint("He instantly evaporates into a puff of citrus-scented smoke.\n", "dim", 1)
    await fprint("Emotional scarring associated with Walmart + 4", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality--
  }

  return queue
}
