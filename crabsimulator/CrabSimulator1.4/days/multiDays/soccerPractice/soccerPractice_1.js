import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("It's 7 o'clock in the afternoon, and you've just finished soccer practice.\n", "dim", 1)

  await fprint("Wow, that sure was a fun practice!", "cyan")
  await fprint("You say to your teammates.\n", "dim", 1)

  await fprint("Yeah! I sure am glad we are crabs, which allows us to play these sports!", "yellow")
  await fprint("A friend says back.\n", "dim", 1)

  await fprint("Now I just gotta wait for Mom to come pick me up.", "cyan", 3)

  await fprint("...", "cyan", 3)

  await fprint("Mom?\n", "cyan", 2)
  queue.unshift("./days/multiDays/soccerPractice/soccerPractice_2.js")
  return queue
}
