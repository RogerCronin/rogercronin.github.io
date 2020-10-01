import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("You're chilling by the beachside when all of a sudden...\n", "dim")

  await fprint("AVAST, YE LADDIES! LAND HO!\n", "yellow")

  await fprint("Crab pirates? That's a new one.\n", "green")

  await fprint("The crabtain of the ship scuttles up to you.", "dim")
  await fprint("Ahoy! Would ye like te join me ship? (arrg)\n", "yellow")

  let answer = await choice(["Hell yeah", "Hell no"])

  if(answer == 1) {
    await fprint("Yeah sure dude.\n", "cyan")
    await fprint("What? T'was a chortle, me laddie. Nobody wants your crab headass on thou ship.\n", "yellow")
    await fprint("Oof. That's gotta hurt.\n", "green", 1)
    queue.unshift("./days/chainDays/supermarketPirate.js")
  } else {
    await fprint("Nah, not today man.\n", "cyan")
    await fprint("B-but I thought you'd w-want to join?", "yellow")
    await fprint("The crab says, fighting back tears.\n", "dim", 1)
    await fprint("He hops back onto his galleon ship, crying all the way back. You prick.\n", "dim", 1)
  }
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience += 1
	return queue
}
