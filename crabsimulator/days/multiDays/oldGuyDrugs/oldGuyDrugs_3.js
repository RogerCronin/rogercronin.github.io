import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("You wake up bright and early, excited to hang up your awesome posters.\n", "dim")
  await fprint("Your hang up your posters haphazardly along the way to the alley, where you set up shop.", "dim", 1)
  await fprint("A shady red crab shuffles in soon after.\n", "dim")
  await fprint("H-h-h-hey man I saw your posters, p-pretty cool.\n", "yellow")
  await fprint("Hey, that's awesome. Thanks dude.\n", "cyan")
  await fprint("N-n-no problem. So, you s-still selling for the price on the p-posters?\n", "yellow")
  await fprint("Yes sir, two pills a sheckle!\n", "cyan")
  await fprint("A-a-alright man I'll take all of 'em!\n", "yellow")
  await fprint("At this point a line of equally shady crabs have formed a sort of queue stretching out from the alley and onto the sidewalk.\n", "dim")
  await fprint("All of them? Sure thing! Man, that sure was easy.\n", "cyan")
  await fprint("As you walk out, you hear the ghost of the old crab trying to tell you the going rate for oyster-piods is 20 sheckles for 2 pills, but you're way too excited to notice.\n", "dim")
  await fprint("Oyster-piods - 9", "rainbow", 1)
  await fprint("Half a sheckle + 9", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience += 1
  window.personality += 1
  return queue
}
