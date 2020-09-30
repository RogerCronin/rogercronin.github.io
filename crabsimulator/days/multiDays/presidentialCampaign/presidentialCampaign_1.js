import { fprint, choice, clear, pause } from "../../../waterWorks.js"
import * as config from "../../../waterWorks.js"

export async function execute(queue) {
  await fprint("No, I didn't ask for that, Carlos.\n", "cyan", 1)
  await fprint("You're driving down the highway talking to your buddy Carlos on your shellphone.\n", "dim", 1)
  await fprint("She did NOT!", "cyan", 1)
  await fprint("Oh my God, WHO?", "cyan", 1)
  await fprint("I can't believe that could- OH SHIT\n", "cyan", 0)
  await fprint("CRAAAAAAAAASSSSSHHHHhhhhh\n", "red", 3)
  await fprint("You were airlifted to a hospital where a team of highly skilled crabs performed a life saving operation on you.\n", "dim", 2)
  await fprint("Thanks, doc, for saving my life. I owe you one.\n", "cyan", 1)
  await fprint("No need as long as you pay your bill of 250,000 pesos, my friend.\n", "yellow", 1)
  await fprint("When you were reincarnated " + window.days + " " + config.dayPlural() + " ago, you forgot to buy health insurance.\n", "dim", 1)
  await fprint("Quick, what's the fastest way to get quick cash as a crab?\n", "green", 2)
  await fprint("...", "cyan")
  await fprint("I got it. I'll win the presidential race and use my new fangled powers to embezzle money from The National Mint and pay off my debt!\n", "cyan", 2)
  await fprint("You sign up for the elections on your way home and heat up some can soup for dinner.\n", "dim", 1)
  await fprint("Debt + 250000 plus interest", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
  queue.unshift("./days/multiDays/presidentialCampaign/presidentialCampaign_2.js")
  return queue
}
