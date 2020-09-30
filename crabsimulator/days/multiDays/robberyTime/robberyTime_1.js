import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {

  await fprint("You spot your favorite hot dog stand, The Wacky Dawg, just across the street.\n", "dim", 1)
  await fprint("Oh hey, I guess I could go for a bite to e-\n", "cyan", 0)
  await fprint("YO KID, OVER HERE.", "yellow")
  await fprint("A weasel calls from near the stand.\n", "dim", 2)
  await fprint("Huh? Me?\n", "cyan", 0)
  await fprint("AY, YEAH YOU, OVER HERE.\n", "yellow", 1)
  await fprint("You walk over to the weasel.\n", "dim", 1)
  await fprint("Yeah man?\n", "cyan")
  await fprint("You wanna rob that bank over there? I gotta have a \"partner in crime\" or I'll never make it in the criminal underworld of this beachside resort.\n", "yellow")

  let answer = await choice(["Yeah lets go", "Nah man, I ain't about that shit anymore"])

  if(answer == 1) {
    await fprint("You got it.\n", "cyan")
    await fprint("The two of you walk into the bank.\n", "dim", 1)
    await fprint("HANDS IN THE AIR!\n", "yellow")
    await fprint("Everyone's hands shoot up. The weasel walks over to the bank teller while you stand by the front door.\n", "dim", 2)
    await fprint("Weeee woooo. Weeee woooooooo. Weeeeeeeee wooo.\n", "red", 1)
    await fprint("Shit! The cops are here. Take this and scram.\n", "yellow")
    await fprint("The weasel hands you four bags with dollar bill signs on them.", "dim", 2)
    await fprint("You hightail it out of there with the money in hand until you end back up at your apartment.\n", "dim")
    await fprint("Whew. That was a close one, yeah?\n", "cyan", 1)
    await fprint("Money + 1600525", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality--
    window.message = "y"
  } else {
    await fprint("Nah, I'm not lookin to do some illegal stuff today.", "cyan")
    await fprint("Thanks tho.\n", "cyan", 1)
    await fprint("Oh well, that's a shame. I'll just list you as an accomplice tomorrow when I'm arrested.\n", "yellow")
    await fprint("Bullshit. I'd like to see you try.\n", "cyan")
    await fprint("Aight bro.", "yellow")
    await fprint("The weasel says entering the bank, AR-15 in hand.\n", "dim")
    await fprint("You walk home and reheat some curry from last night for dinner.\n", "dim", 1)
    await fprint("Sense of foreboding + 4", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality++
    window.message = "n"
  }
  queue.unshift("./days/multiDays/robberyTime/robberyTime_2.js")
  return queue
}
