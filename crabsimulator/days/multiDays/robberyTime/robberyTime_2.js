import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("You wake up to a group of policecrabs shouting orders through a megaphone.\n", "dim", 1)
  await fprint("YOU'RE WANTED FOR THE BANK ROBBERY YESTERDAY! COMPLY AND WE WON'T USE FORCE!\n", "yellow", 1)
  if(window.message == "y") { // gakked
    await fprint("Goddamnit. They caught me.\n", "cyan")
    await fprint("Well what are you gonna do?\n", "green")
  } else { // innocent
    await fprint("That weasel fucker actually convinced the cops!", "cyan")
    await fprint("You think to yourself.\n", "dim", 1)
    await fprint("Shit. What do you do?\n", "green")
  }
  let answer = await choice(["Go outside with your claws up", "Peck shots through your window"])
  if(answer == 1) {
    await fprint("YO! I'm coming outside with both of my claws up, unarmed.", "cyan")
    await fprint("You call out through your window.\n", "dim")
    await fprint("Oh sweet bb. Thanks.\n", "yellow", 2)
  } else {
    window.message = "y"
    await fprint("Yeah, fuck those guys.\n", "cyan", 1)
    await fprint("You peek over the window with a slingshot, launching rocks at the policecrabs down below.\n", "dim", 1)
    await fprint("A slingshot?\n", "green")
    await fprint("It's the only thing I have on hand, shut up.\n", "cyan", 1)
    await fprint("POUND POUND POUND.", "red")
    await fprint("FBI OPEN UP!\n", "yellow")
    await fprint("Oh fuck.\n", "cyan")
    await fprint("A stream of at least 10 crabs race into your bedroom and arrest you.", "dim", 2)
  }
  await fprint("Later...\n", "dim")
  await fprint("Aight, you're definitely guilty. See ya later.", "blue")
  await fprint("The judge says as he dips out of the courtroom.\n", "dim")
  await fprint("Have fun in jail, kiddo!\n", "yellow", 2)
  if(window.message == "y") {
    await fprint("Regret + 7", "rainbow", 1)
  } else {
    await fprint("Belief in the legal system - 14", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    window.personality++
  }
  await fprint("Experience + 1\n", "rainbow", 1)
  window.experience++
  queue.unshift("./days/multiDays/robberyTime/robberyTime_3.js")
  return queue
}
