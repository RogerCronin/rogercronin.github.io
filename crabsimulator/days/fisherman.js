import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("You're walking in the park when you notice a strange open-air building with a bunch of crabs inside off to your right.\n", "dim", 1)
  await fprint("Hey what's this thing all about?", "cyan", 0)
  await fprint("You ask the crabs inside.\n", "dim", 1)
  await fprint("Idk man, it's some funky metal thingy. Come inside.\n", "yellow")
  await fprint("Neat.\n", "cyan", 1)
  await fprint("You walk inside the building and start talking with some of the other crabs there, when suddenly the entire place starts rising into the air!\n", "dim", 1)
  await fprint("You dumbass, that's a crab trap. You're gonna get fucking eaten by some addict Maryland fisherman.\n", "green")
  await fprint("Oh shit man.\n", "cyan", 2)
  await fprint("The cage surfaces, and a scruffy looking fisherman pulls it up. He dumps you into a large metal bucket.\n", "dim", 1)
  await fprint("Mmm old bay.. the- crab, crab meat, mm gotta.. gotta catch crab, crabs..\n", "blue", 1)
  await fprint("This fisherman's so far gone he isn't even speaking coherent English. A sad case that happens far too often along the banks of the Chesapeake.\n", "green", 1)
  await fprint("Well fuck, how am I gonna get outta here?\n", "cyan")

  let answer = await choice(["Climb up the sides", "Teach the crabs about metaphorical analogies"])

  if(answer == 1) {
    await fprint("You try climbing up the sides of the bucket to no avail; the other crabs just pull you right down.\n", "dim", 1)
    await fprint("You idiots, how are we gonna escape if you just keep pulling me down?\n", "cyan")
    await fprint("Fuck that, I'm escaping for myself.\n", "yellow")
    await fprint("The crab tries to escape, but you just pull him down.\n", "dim")
    await fprint("Hey fuck you buddy.\n", "yellow", 1)
    await fprint("Whenever a crab tries to escape, the other crabs prevent them from doing anything, guaranteeing the deaths of all involved. The fisherman drives his boat back to his house and cooks everyone up.\n", "dim", 2)
    window.state = "Didn't you ever learn about Crab Mentality in school? \"While any one crab [trapped in a bucket] could easily escape, its efforts will be undermined by by others, ensuring the group's collective demise.\" Thanks Wikipedia.11"
  } else {
    await fprint("Wait, haven't any of you heard about Crab Mentality?\n", "cyan", 1.5)
    await fprint("No, fuck off nerd.\n", "yellow")
    await fprint("When crabs are trapped in a bucket, one crab could easily escape, but as a group, we make it impossible. So basically stop being dicks so we can escape.\n", "cyan", 1.5)
    await fprint("Ok buddy.\n", "yellow", 1)
    await fprint("You and several other crabs escape and tip over the bucket, flooding the bottom of the boat with crabs.\n", "dim", 1)
    await fprint("FUCK! Crabs.. they, the- crabs? Crabs have, there's.. Oh no.\n", "blue", 1)
    await fprint("The poor sap jumped overboard in his confusion. You and the rest of the gang jump off and return home.\n", "dim", 1)
    await fprint("Philosophical concepts + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
  }
	return queue
}
