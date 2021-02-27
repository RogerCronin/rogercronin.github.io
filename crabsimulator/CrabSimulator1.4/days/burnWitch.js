import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("Unfortunately, it seems like the townspeople of your weird little crab society have accused you of being a witch.\n", "dim")
  await fprint("Wait, what the fuck? People still believe in witches?\n", "cyan")
  await fprint("Yeah ik, super weird. Anyways they'll be at your house in like 2 minutes, better make sure you're prepared.\n", "green")

  let answer = await choice(["Grab a broom", "Use your claws", "Get some oil", "Do nothing"])

  if(answer == 1) {
    await fprint("Aight, broom it is.", "cyan")
    await fprint("You say as you pick up your broom.\n", "dim")

    await fprint("Dude, what the fuck? They're gonna think that's your magic witchy getaway vehicle.\n", "green")

    await fprint("Suddenly, the broom starts to vibrate intensely, floating off the ground.\n", "dim")

    await fprint("See ya later!\n", "cyan", 1)
    await fprint("You fly out of your apartment complex on the broom, laughing at the mob formed outside of your house. And promptly get into a broom crash.\n", "dim")

    await fprint("Did you ever get your broom license? That's what I thought.\n", "green", 1)

    await fprint("Bodily injuries + 23", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++

    queue.push("./days/chainDays/broomHospital.js")
  } else if(answer == 2) {
    await fprint("Well fuckers, it's show time.\n", "cyan")

    await fprint("The door to your house is broken down and crabs storm in like that one FBI meme that was going around a while ago.\n", "dim", 1)

    await fprint("WHAM!", "red")
    await fprint("Says the big letters appearing whenever your hit someone.\n", "dim")

    await fprint("BAM!\n", "red")
    await fprint("How is that happening?\n", "green")

    await fprint("POW!\n", "red", 2)

    await fprint("You stare at the utter carnage surrounding you. You evil, evil crab. You killed a baby. What the fuck, dude?\n", "dim", 1)

    await fprint("Disrespect for the infantile + 8", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality--
  } else if(answer == 3) {
    await fprint("Time to make the 2010 Gulf of Mexico oil spill look like an accident!\n", "cyan")
    await fprint("You start pouring oil out of your apartment window like a madman. Holy shit, dude.\n", "dim")

    await fprint("Who's the witch now, fuckers?", "cyan")
    await fprint("You yell as you continue to slaughter innocent crabs.\n", "dim", 2)

    await fprint("Eventually the mob runs away, your entire street now covered in oil.\n", "dim")

    await fprint("Yeah, that was not cool dude.\n", "green", 1)

    await fprint("Oil stocks - 2", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
    window.personality--
  } else {
    await fprint("I can't really be bothered to do anything about this.\n", "cyan")
    await fprint("Dude come on...\n", "green", 2)
    window.state = "The mob dragged you from your computer and convicted you of being a witch. As much as you tried, your non-existent magical powers couldn't save you from burning at the stake.02"
  }

  return queue
}
