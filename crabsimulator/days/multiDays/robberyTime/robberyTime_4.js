import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("It's Friday movie night at the prison ward, and it's your turn to pick! What will you be watching?\n", "dim", 1)

  let answer = await choice(["The Shape of Water", "Shark Tale", "Ponyo"])
  if(answer == 1) {
    await fprint("The fuck is this shit?", "yellow", 0)
    await fprint("Several inmates call out when you announce your decision.\n", "dim", 1.5)

    await fprint("The group of crabs are thoroughly uncomfortable by the time the film ends.\n", "dim", 1)
    await fprint("Good job ig.\n", "green", 1)
    await fprint("Taste in movies ± 1 depending on if you actually like that movie", "rainbow", 1)
  } else if(answer == 2) {
    await fprint("Boooo!", "yellow", 0)
    await fprint("Some crab calls out when you announce your decision.\n", "dim", 1.5)
    await fprint("---1 movie later---\n", "dim", 2, 0)
    await fprint("I guess that wasn't bad...", "cyan", 0)
    await fprint("You try to convince yourself. It's not working very well.\n", "dim", 2)
    await fprint("Taste in movies - 1", "rainbow", 1)
  } else {
    await fprint("Really? A kids movie?", "yellow")
    await fprint("Someone calls out.\n", "dim", 1)
    await fprint("It seems some crabs are unhappy with your decision.\n", "dim", 1.5)
    await fprint("By the end of the movie, all of the crabs are sobbing.\n", "dim", 1)
    await fprint("Huh, that was kinda quirky.", "green")
    await fprint("The narrator says, trying to stay composed through the tears.\n", "dim", 1)
    await fprint("Taste in movies + 2", "rainbow", 1)
  }
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
  queue.unshift("./days/multiDays/robberyTime/robberyTime_5.js")
  return queue
}
