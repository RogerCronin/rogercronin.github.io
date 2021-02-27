import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("You're walking through downtown looking for a bite to eat when an adolecent crab runs up to you.\n", "dim", 1)
  await fprint("Hey man, you look pretty cool. Wanna try some Benzoylmethylecgonine?\n", "yellow")
  await fprint("Well, do you? All the cool crabs are doing it.\n", "green", 1)

  let answer = await choice(["Sure dude", "Nope"])

  if(answer == 1) {
    await fprint("Well, I aaamm pretty cooool...\n", "cyan")
    await fprint("Ayy, aight, well here you go.\n", "yellow", 1)
    await fprint("He hands you a brown paper bag that you assume has Benzamyt-", "dim", 1)
    await fprint("Benzomythe-", "dim", 1)
    await fprint("Bensa-", "dim", 1)
    await fprint("Whatever it was.\n", "dim", 1)

    await fprint("Aight gotta run.", "yellow")
    await fprint("He says as he runs off.\n", "dim", 1)

    await fprint("You stand there a bit perplexed.\n", "dim", 1)
    await fprint("Where's the ham fisted anti-drug message?\n", "cyan", 1)
    await fprint("Suddenly...\n", "dim")
    await fprint("HOW DARE YOU!", "rainbow")
    await fprint("Says God.\n", "dim", 1)
    await fprint("DRUGS? NOT COOL DUDE.\n", "rainbow", 1)
    await fprint("Turns out God's a fucking nerd, amirite?\n", "green", 1)

    await fprint("Coolness (in the eyes of God) - 100000000000", "rainbow", 1)
    await fprint("Badness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.personality--
    window.experience++
  } else {
    await fprint("Nah dude, drugs AREN'T cool.\n", "cyan")
    await fprint("B-But I thought drugs were cool?\n", "yellow")
    await fprint("Nope!\n", "cyan", 1)
    await fprint("The adolecent crab throws his bag of Benzoylmethylecgonine on the ground and runs off in tears.\n", "dim", 1)
    await fprint("God you're an asshole.\n", "green", 1)
    await fprint("Uh, experience + 1 ig\n", "rainbow", 1)
    await fprint("Not cool.\n", "rainbow", 2)
    window.experience++
  }

	return queue
}
