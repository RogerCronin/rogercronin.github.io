import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("Ok, so, oyster-piods, who even buys these?\n", "cyan")
  await fprint("The oyster-piods are sitting on your table, dripping with a quiet menace.", "dim", 1.5)
  await fprint("You take a small white pill out of the brown paper bag.\n", "dim")
  await fprint("Such a small little thing... what's the big fuss about?\n", "cyan")
  await fprint("Idk man, they seem pretty popular tho.\n", "green")

  let answer = await choice(["Pop some oyster-piods","Start making some snazzy posters for your new business", "Ignore the dying crab's wishes and do nothing"])

  if(answer == 1) {
    await fprint("Mmm tasty.\n", "cyan", 2)
    await fprint("But after 5 suspenseful minutes, nothing seems to happen.\n", "dim")
    await fprint("Bro these oyster-piods ain't shit.\n", "cyan")
    await fprint("You get up to throw the bag away, when suddenly...\n", "dim")
    await fprint("O h  s h i t\n", "rainbow")
    await fprint("bRoo w         t f \n", "rainbow", 0.7)
    await fprint("ḇ̸̢̛r̵̭͘ö̴̡̡͍͇̦́̄͠\n", "rainbow", 3)
    window.state = "Turns out the recommended dosage of oyster-piods for a first time user is only 200 milli-clams, better luck next time.03"
  } else if(answer == 2) {
    await fprint("Shucks, I'm getting ahead of myself, I better start advertising if I hope to sell this stuff.\n", "cyan")
    await fprint("---1 trip to Staples later---\n", "dim", 2, 0)
    await fprint("Okay, I think I have everything.\n", "cyan")
    await fprint("What to use?\n", "green")
    answer = await choice(["M'shark-er - +1 Brightness, +3 Huffability", "Cray-on - +1 Brightness, -2 Dignity"])
    if(answer == 1) {
      await fprint("M'shark-ers, good choice.\n", "green")
      await fprint("You uncap the suckers and start to go to town.\n", "dim")
      await fprint("Ah shit, what's happening??\n", "cyan", 0)
      await fprint("Is what you say as your apartment fills with noxious m'shark-er fumes.\n", "dim", 2)
      window.state = "Have comfort in knowing your last few moments were spent in the pure ecstasy derived from shitty m'shark-er gas.05"
    } else if(answer == 2) {
      await fprint("Cray-ons? What are you, five?\n", "green")
      await fprint("Fuck you it's an inside joke you wouldn't get it.\n", "cyan")
      await fprint("Ok, ok.\n", "green")
      await fprint("You spend the rest of the day on your floor with cray-ons and poster board.\n", "dim")
      await fprint("Oh boy, all the other drug dealers are gonna be sooo jealous of my posters!", "cyan", 0)
      await fprint("You think as you drift off to sleep.\n", "dim")
      queue.unshift("./days/multiDays/oldGuyDrugs/oldGuyDrugs_3.js")
    }
  } else if(answer == 3) {
    await fprint("No, no, I shouldn't do this.\n","cyan")
    await fprint("You grab the paper bag and flush the pills down the toilet.\n", "dim")
    await fprint("Ah, underwater plumbing, what an invention.\n", "cyan")
    await fprint("Oh, right, you're a crab, this is all underwater.\n", "green")
    await fprint("Yeah, so?\n", "cyan")
    await fprint("Fuck you, underwater toilets don't make any sense.\n", "green")
    await fprint("What?\n", "cyan")
    await fprint("Suddenly, the toilet starts to overflow.\n", "dim")
    await fprint("For fucks sake, where's the plunger?\n", "cyan")
    await fprint("The water level in your apartment has reached your knees.\n", "dim", 0.3)
    await fprint("Oh god, oh fuck...\n", "cyan", 0.1)
    await fprint("The mixture of oyster-piods and water have slowed your movements.\n", "dim")
    await fprint("God-clam-it.", "cyan", 0)
    await fprint("Is the last thing you muster out before your head is swept underwater.\n", "dim", 2)
    window.state = "It would seem that crabs would prefer to have their dying wishes carried out. Keep that in mind.07"
  }
  return queue
}
