import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue){
  await fprint("Sigh, just another lonely walk down the street.", "cyan", 0)
  await fprint("You think, gloomily scuttling along.\n", "dim")
  await fprint("You look around.\n", "dim")
  await fprint("A crab sweeping the sidewalk here,\n some kids running around,\n a... crab in a trenchcoat close behind them,\n and...\n", "cyan")
  await fprint("Someone waving to me?\n", "cyan")
  await fprint("Damn, she's kinda hot tho.\n", "green")
  await fprint("Ikr?\n", "cyan")
  await fprint("Wave back?\n", "green")
  let answer = await choice(["Yeah","Nah"])

    if (answer == 1){
        await fprint("Ok, I'm gonna do it.\n", "cyan")
        await fprint("You slow down and quickly wave.\n", "dim")
        await fprint("Oh shit she's walking over.\n", "green")
        await fprint("You dust off your shell and get ready to talk to her.\n", "dim")
        await fprint("Hey, what's up?\n", "cyan")
        await fprint("What?\n", "yellow")
        await fprint("She seems confused. Quickly, you look behind yourself.\n","dim")
        await fprint("Oh god, it's her friend. She was definitely waving to her.\n", "green")
        await fprint("Oh, your friend...\n", "cyan", 0.7)
        await fprint("Uhh, yeah, cya.\n", "yellow", 2)
        await fprint("She and her friend walk off, giggling.\n", "dim")
        await fprint("Huh.\n", "cyan", 2)
        await fprint("Huh.\n", "green", 2)
        await fprint("Experience + 1\n", "rainbow", 2)
        await fprint("Huh.\n", "rainbow", 2)
        queue.unshift("./days/chainDays/hotCrabSecondMeeting.js")
        queue = config.shuffleArray(queue)
        window.experience++

    } else if (answer == 2){
        await fprint("No, nevermind, I can't do it.\n", "cyan")
        await fprint("Ok, whatever.\n", "green")
        await fprint("The girl walks across the street towards you anyway.\n", "dim")
        await fprint("Wait, what? What. What.\n", "cyan")
        await fprint("Bro just chill, calm down.\n", "green")
        await fprint("Ok, ok.\n", "cyan")
        await fprint("She walks directly past you to her friend, who was standing behind you.\n", "dim")
        await fprint("Holy shit that was close.\n", "green", 1)
        await fprint("Relief + 3", "rainbow", 1)
        await fprint("Experience + 1\n", "rainbow", 2)
        window.experience++
    }
  return queue
}
