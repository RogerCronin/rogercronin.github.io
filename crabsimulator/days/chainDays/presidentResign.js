import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue) {
  await fprint("In the early hours of the next day, you resign as President. This inconveniences a lot of people.\n", "dim", 1)
  await fprint("Great, mission accomplished.\n", "cyan", 1)
  await fprint("Knowledge of how the government works - 1", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience += 1
  return queue
}
