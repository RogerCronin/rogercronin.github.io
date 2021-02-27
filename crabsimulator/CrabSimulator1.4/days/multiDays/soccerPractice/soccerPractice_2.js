import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("You ended up sleeping on the ground.\n", "dim", 1)

  await fprint("I wonder when Mom will show up.", "cyan")
  await fprint("You think to yourself.\n", "dim", 2)

  await fprint("The weather sure is lovely...\n", "cyan", 2)

  await fprint("It starts to rain.\n", "dim", 2)

  await fprint("Oh, well at least it can't ge-\n", "cyan", 0)

  await fprint("It starts to rain really hard.\n", "dim", 2, 0.02)

  await fprint("Oh.\n", "cyan", 2)
  queue.unshift("./days/multiDays/soccerPractice/soccerPractice_3.js")
  return queue
}
