import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue) {
  await fprint("A news anchor sits before the camera, ready to begin tonight's news coverage.\n", "dim", 1)
  await fprint("Just hours after the official granting of the title \"President\", our new president was stabbed 23 times in the back. No legal action will be taken, however, because everyone has universally agreed he was a really shitty president.\n", "yellow", 2)
  window.state = "You flew to close to the sun, my dear Icarus. You were blinded by your own hubris so much so that you forgot you don't have a clue how the government functions. Should've quit while you were ahead, bruv.10"
  return queue
}
