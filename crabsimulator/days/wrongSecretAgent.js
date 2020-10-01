import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue){
    await fprint("You're chilling at your house watching Cray's Anatomy on Netflix when your phone rings.\n", "dim", 1)
    await fprint("RIIIIING. RIIIIIIIng. riiNIIINGGGN.\n", "red", 1)
    await fprint("You pick up the phone.", "dim")
    await fprint("Hey man this is Crab, what d-\n", "cyan", 0)
    await fprint("Agent F5, your position has been compromised. Leave this building immediately and board the plane to Angola.\n", "yellow", 1)
    await fprint("...", "cyan", 1)
    await fprint("Who are you?\n", "cyan", 1)
    await fprint("Is this not Agent Caspian?\n", "yellow")
    await fprint("Nah.\n", "cyan", 1)
    await fprint("...", "yellow", 1)
    await fprint("Fuck.\n", "yellow", 1)
    await fprint("The other crab hangs up the phone.\n", "dim")
    await fprint("Wack.\n", "cyan", 1)

    await fprint("Stealth - 4", "rainbow", 1)
    await fprint("Experience + 1\n", "rainbow", 2)
    // no experience for this one :(
    window.experience++
    // dw I gotchu
    return queue
}
