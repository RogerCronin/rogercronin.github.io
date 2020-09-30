import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("I can't believe it's already 2 pm in the afternoon and Mom still hasn't come back.", "cyan")
  await fprint("You think idly.\n", "dim", 1)

  await fprint("Wait a minute, I was reincarnated, like, " + window.days + " " + config.dayPlural() + " ago. I don't even have a Mom.\n", "cyan", 1)

  await fprint("You decide to walk back to your apartment.\n", "dim", 1)

  await fprint("Rookie mistake, kid. You gotta remember these things if you're gonna survive in the crab world.\n", "green", 2)

  await fprint("Loneliness + 4", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
  return queue
}
