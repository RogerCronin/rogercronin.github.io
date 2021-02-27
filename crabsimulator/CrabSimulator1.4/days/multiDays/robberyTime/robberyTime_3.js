import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("Damn, is this really your cell? It's real shitty.\n", "green", 1)
  await fprint("You see two bunk beds, a table, and a sink atop a grimy floor. Two other crabs are in your cell. One appears to be playing a harmonica, but on closer inspection it's actually just a few plastic straws taped together.\n", "dim", 1)
  await fprint("Ay, you see that buff crab lifting weights by the table? It'd be real cool to assert your dominance and rough him up a bit.\n", "green")
  let answer = await choice(["Show him a bit of da pincers", "Let him be"])
  if(answer == 1) {
    await fprint("Hey, dude with the weights. You wanna tussle?", "cyan", 0)
    await fprint("You ask the buff crab.\n", "dim")
    await fprint("Sure, punk.\n", "yellow", 2)
    window.state = "He smashed you up real good. Like, reeeaaal good. Probably should've paid attention when I called him a \"buff crab lifting weights\".06"
  } else {
    await fprint("You called him a \"buff crab lifting weights\", so I think I'll pass.\n", "cyan")
    await fprint("Pshhh you're no fun.", "green", 1)
    await fprint("Alright, grow accustomed to your new prison life. You'll be here for a few days.\n", "green")
    await fprint("Will do chief.\n", "cyan", 1)
    await fprint("School smarts - 1", "rainbow", 1)
    await fprint("Street smarts + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    queue.unshift("./days/multiDays/robberyTime/robberyTime_4.js")
  }
  return queue
}
