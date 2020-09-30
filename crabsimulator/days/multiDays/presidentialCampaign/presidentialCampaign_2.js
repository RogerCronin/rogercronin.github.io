import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("You wake up to a bright, sunny day full of opportunities.\n", "dim", 1)
  await fprint("Right, now how will you start your campaigning?\n", "green")
  let answer = await choice(["Call up your parents and ask them to vote for you", "Go outside with a sign", "@everyone on your Discord server telling them to vote"])
  if(answer == 1) {
    await fprint("You whip out your phone and dial your parents' home phone.\n", "dim", 1)
    await fprint("Riiiing. Riiiiiiiiing. Riiiiiiiiiiiiiiiiiing.\n", "red")
    await fprint("Hello?\n", "yellow", 1)
    await fprint("Hi Mom, I'm running for president. Do you think you could vote for me?\n", "cyan")
    await fprint("Sure thing sweetie. I'm so proud of you!\n", "yellow")
    await fprint("Aww, doesn't that just put a smile on your face?\n", "green", 1)
    await fprint("Voters + 2\n", "rainbow", 2)
  } else if(answer == 2) {
    await fprint("You whip out your pen-seal.. sorry, was that pun too much of a stretch? Anyway, you whip out your pencil and craft up a pretty spicy sign design.\n", "dim", 1)
    await fprint("Ay, fellas, vote for me! I'm running for president!", "cyan", 0)
    await fprint("You call out to people passing by in your city.\n", "dim", 1)
    await fprint("Hey, what are your policies?", "yellow", 0)
    await fprint("Some fish asks you.\n", "dim", 1)
    answer = await choice(["Crab care reform", "Increased minimum wage", "Seizing the means of production"])
    if(answer == 1) {
      await fprint("I'm all about crab care reform.\n", "cyan", 1)
    } else if(answer == 2) {
      await fprint("I'm all about increasing minimum wage.\n", "cyan", 1)
    } else {
      await fprint("I'm all about seizing the means of production.\n", "cyan", 1)
    }
    await fprint("Oh, dope. You got my vote.\n", "yellow", 2)
    await fprint("You expain your policies to a couple more aquatic animals. A handful seem pretty interested in your platform.\n", "dim", 1)
    await fprint("Voters + 45\n", "rainbow", 2)
  } else {
    await fprint("You whip out your phone and type a real quick message to informing them of your decision to campaign.\n", "dim", 1 )
    await fprint("[CrabbyMan#8644] : @everyone, Im running for president so yall should vote for me thanks", "white", 5, 0)
    await fprint("[OldBayStan#5277] : ok buddy", "white", 2, 0)
    await fprint("[JohnnyFisher#2012] : aight\n", "white", 2, 0)
    await fprint("Looks like you convinced a few people to vote for you.\n", "dim", 1)
    await fprint("Voters + 14\n", "rainbow", 2)
  }
  window.days += 7 // time skip of 1 week
  queue.unshift("./days/multiDays/presidentialCampaign/presidentialCampaign_3.js")
  return queue
}
