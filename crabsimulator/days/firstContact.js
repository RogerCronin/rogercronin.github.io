import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("BANG!\n", "red", 1.5)
  await fprint("The fuck was that?", "cyan", 0)
  await fprint("You say, waking up with a jolt.\n", "dim", 1)
  await fprint("You wanna go investigate?\n", "green", 1)

  let answer = await choice(["Nah, it's like 3 in the morning", "Those goddamn raccoons"])

  if(answer == 1) {
    await fprint("Bro it's way too early for this shit.\n", "cyan", 1)
    await fprint("smh\n", "green", 1)
    await fprint("Disappointment from the game devs + 1", "rainbow", 1)
    await fprint("Fuck you no experience\n", "rainbow", 2)
  } else {
    await fprint("Something tells me it's not a raccoon...\n", "green", 1)
    await fprint("You scuttle down the stairs to the front of your apartment complex to find yourself face-to-face with a UFO just chilling on the street.\n", "dim", 1)
    await fprint("Huh? Is this a joke?\n", "cyan", 1)
    await fprint("The door to the UFO slowly opens, revealing a silhouette of an unknown figure.\n", "dim")
    await fprint("Oh shit, do you man your ground or submit to your new overlords?\n", "green")
    answer = await choice(["Grow a pair", "Accept our new aquatic overlords"])
    if(answer == 1) {
      await fprint("Screw you, alien fuckers. You ain't messing with this crab right here.\n", "cyan", 1)
    } else {
      await fprint("You fall to your knees and loudly call out", "dim", 0)
      await fprint("Please don't hurt me! I beg for forgiveness!\n", "cyan", 1)
    }
    await fprint("The figure steps forwards, revealing a neon-green crab.\n", "dim", 1)
    await fprint("⎓𝙹ꖎꖎ𝙹∴ ᒲ|| ℸ ̣∴╎ℸ ̣ℸ ̣ᒷ∷\n", "yellow", 1)
    await fprint("The alien then lets out a long string of expletives and closes the door. With a puff of steam, the UFO takes flight and cruises past your sight.\n", "dim", 1.5)
    await fprint("Oh.\n", "cyan", 1)
    await fprint("Fear of aliens - 2", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
  }
	return queue
}
