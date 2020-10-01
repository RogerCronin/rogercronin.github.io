import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("Ah fuck. Today's the day I take my A-Sea-T exam, right?\n", "cyan", 1)
  await fprint("For those who aren't in the know-how under the sea, the A-Sea-T is an exam all crabs must take every 6 years to keep their crab license.\n", "dim", 1)
  await fprint("Well, I guess I should take off to the testing location.\n", "cyan")
  await fprint("You walk towards the office building, trying to scheme your way into cheating through the exam.\n", "dim")
  await fprint("Think! What can I do?\n", "cyan")

  let answer = await choice(["Memorize some study material right now", "Pay off the crab next to you for the answers", "Do nothing and hope for the best", "Just skip the exam"])

  if(answer == 1) {
    await fprint("You furiously whip out your handy index cards and memorize everything you can about crabs for a couple of minutes.\n", "dim")
    await fprint("Great! Looks like I'm all prepared.\n", "cyan")
    await fprint("You walk into the building with a false sense of confidence.\n", "dim", 2)
    await fprint("---One Exam Later---\n", "dim", 2, 0)
    await fprint("94%, not bad!\n", "cyan")
    await fprint("...That was really fucking lucky and you know it.\n", "green", 1)
    await fprint("Knowledge on crabs + 381", "rainbow", 1)
    await fprint("Goodness + 1", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
  } else if(answer == 2) {
    await fprint("This'll be a piece of cake.", "cyan", 0)
    await fprint("You say while walking into the building.\n", "dim", 1)
    await fprint("During the test, your peer over and ask the crab sitting next to you","dim", 0)
    await fprint("Hey buddy, I got a fiver for you if you gimmie the answers.\n", "cyan")
    await fprint("Yeah man, sure.\n", "yellow")
    await fprint("You hand him the bill.\n", "dim")
    await fprint("Right, so number 1 is A, number 2 is C, ...\n", "yellow", 2)
    await fprint("---One Exam Later---\n", "dim", 2, 0)
    await fprint("78%, could've been better.\n", "cyan")
    await fprint("Cheating is NEVER the answer smh.\n", "green", 1)
    await fprint("Integrity - 3", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience++
  } else if(answer == 3) {
    await fprint("Ah well, what can I do.\n", "cyan", 1)
    await fprint("---One Exam Later---\n", "dim", 2, 0)
    await fprint("Yikes, 1 percent point away from failing.\n", "cyan")
    await fprint("If ONLY there was some way to have prevented that...\n", "green", 1)
    await fprint("Anxiety + 9", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 1)
    window.experience++
  } else {
    await fprint("Can't be bothered. I'm outta heeeerrreee.\n", "cyan")
    await fprint("Oh boy.\n", "green", 1)
    await fprint("Learning your lesson + 0", "rainbow", 1)
    await fprint("No experience for you\n", "rainbow", 2)
    queue.unshift("./days/chainDays/crabExamDeath.js")
  }

	return queue
}
