import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue){
    await fprint("After a long day at the offish, you decide to let off some steam at the local pub.\n", "green")
    await fprint("One fish-key neat, thanks.\n", "cyan")
    await fprint("Coming right up. Hey, you look a little down, you good?\n", "yellow")
    await fprint("Yeah, I'm fine, just a little lonely lately.\n", "cyan")
    await fprint("Hey, I get it. Why don't you talk to her?\n", "yellow")
    await fprint("He points to a crab across the bar, her face concealed by a tall seaquila sunrise\n", "dim")

    await fprint("Sure, what do I have to lose?\n", "cyan")
    await fprint("The bartender goes over and gestures to you.\n", "dim")
    await fprint("You can't tell what he's saying from a distance, but you can tell the crab is the most beautiful you've ever seen.\n", "green")
    await fprint("The bartender walks over.\n", "dim", 0.1)
    await fprint("Hey, she's gonna come over. Get ready!\n", "cyan")
    await fprint("Oh god.\n", "cyan", 0)
    await fprint("Oh shit.\n", "cyan", 0)
    await fprint("Okay.\n", "cyan")
    await fprint("She walks over.\n", "dim")
    await fprint("Uhh, hey.\n", "cyan")
    await fprint("She looks at you, surprised.\n", "dim")
    await fprint("Oh, hi? Excuse me\n", "blue")
    await fprint("She walks past you to a younger, much more attractive crab behind you.\n", "dim")
    await fprint("What?\n", "cyan")
    await fprint("Oh, you thought I was talking to you?\n", "yellow")
    await fprint("Yeah, kind of??\n", "cyan")
    await fprint("Nahh.\n", "yellow")
    await fprint("Again? Wtf that makes no sense...\n", "cyan")
    await fprint("Idk dude, I think we need some better writers.\n", "yellow")
    await fprint("Honestly, this shit sucks.\n", "cyan")
    await fprint("Yeah bro for real.\n", "green")
    await fprint("Idk, I think it's kind of charming\n", "rainbow", 0)
    await fprint("FUCK you, go back to doing stats, stat boy.\n", "green")
    await fprint("*sniff* fine, experience + 1\n", "rainbow", 2)

    return queue
}
