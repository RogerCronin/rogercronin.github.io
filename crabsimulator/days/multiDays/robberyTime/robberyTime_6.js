import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("Aight bro you're free to go.", "yellow", 0)
  await fprint("The crab behind the glass window says to you.\n", "dim", 1)
  await fprint("The chain-link gate opens as an alarm sounds in the background, but you don't care. All you want to do is breathe in the fresh air.\n", "dim")
  if(window.message == "y") {
    await fprint("Dude, no more prison time. Not cool.\n", "green")
  } else {
    await fprint("Let's hope that doesn't happen again.\n", "green")
  }
  await fprint("Will to remain alive + 59", "rainbow", 1)
  window.message == "y" ? await fprint("Experience + 1 (but only if you learned your lesson)\n", "rainbow", 2) : await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
  return queue
}
