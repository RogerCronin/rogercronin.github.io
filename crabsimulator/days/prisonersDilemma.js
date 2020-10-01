import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("Blinding lights. You're strapped to a metal chair.\n", "dim")
  await fprint("You've been imprisoned, but you have no memory of what you could've done.\n", "green")
  await fprint("Hello? HeeeEEeellooOOOOooOO?\n", "cyan")
  await fprint("Oh, hey, you're finally awake.", "yellow", 0)
  await fprint("Says a crab in a lab coat, passing by your cell door\n", "dim")
  await fprint("Don't worry, you're not in any trouble, (yet), we just brought you in for some experimenting.\n", "yellow")
  await fprint("What? What?! That can't be legal.\n", "cyan")
  await fprint("Idk, probably not but it'll be cool don't worry.\n", "yellow")
  await fprint("The crab fiddles around with a clipboard for a second, then resumes his spiel.\n", "dim", 1)
  await fprint("So basically there's another crab in the cell next to you. You guys can't hear each other or anything. I have enough evidence to convict both of you, but I'm gonna give you the choice to testify that the other guy did it.\n", "yellow")
  await fprint("Okay, yeah, I do that.\n", "cyan")
  await fprint("Whoa, hold your horses. If you both testify you'll each serve two years in prison. However, if the other guy testifies and you say nothing, then you're serving three and he's going free. The same goes if you testify and he stays silent.\n", "yellow")
  await fprint("So what happens if we both say nothing?\n", "cyan")
  await fprint("Then you each only get one year.\n", "yellow")
  await fprint("Ok, cool.\n", "cyan")
  await fprint("So, what are you gonna do?\n", "yellow")
  await fprint("This is quite the ... dilemma.\n", "green")

  let answer = await choice(["Testify","Say nothing"])
  let carlos = Math.floor(Math.random() * 2) + 1

  if(answer == 1 && carlos == 1) {
    // two years
    clear()
    await fprint("Ok, the other guy did it.\n", "cyan")
    await fprint("Whoa, cool, let me go see what the other guy's gonna say.\n", "yellow")
    await fprint("You wait a bit, tapping a sick 3:4 poly-rhythm on the metal chair.\n", "dim")
    await fprint("Ok, I'm back, he says you did it too, have fun in jail for two years.\n", "yellow")
    await fprint("What? No, you can't do this.\n", "cyan")
    await fprint("Uhh, I can. Wanna meet the other guy?\n", "yellow")
    await fprint("He leaves for a bit and escorts in another crab.\n", "dim")
    await fprint("Holy shit, is that you Carlos?\n", "cyan")
    await fprint("Aww man, what's up dude?\n", "blue")
    await fprint("Wait, you know each other?\n", "yellow")
    await fprint("Aw hell yeah dude, Carlos is the homie my guy.\n", "cyan")
    await fprint("Shit man, we both testified?\n", "blue")
    await fprint("Fuck yeaa\n", "cyan")
    await fprint("Ayyyyy\n", "blue")
    await fprint("Good god stop, okay, you're free, just please get out.\n","yellow")
    await fprint("Ayyyy\n", "cyan")
    await fprint("Ayyyy\n", "blue", 1)
    await fprint("Whew, you got pretty lucky there.\n", "green", 1)
  } else if(answer == 2 && carlos == 1) {
    // free
    clear()
    await fprint("Ok, the other guy did it.\n", "cyan")
    await fprint("Damn, let me see what he's gonna say.\n", "yellow")
    await fprint("While he's gone for a bit you hum a few lines from a Frank Ocean song.\n", "dim")
    await fprint("Alright, seems like the other guy doesn't want to talk. You're free, you can leave.\n", "yellow")
    await fprint("What? Really? That's great!\n", "cyan")
    await fprint("Yeah, yeah. Looks like you've put away a...", "yellow")
    await fprint("He checks with clipboard.", "dim", 1)
    await fprint("\"Carlos Sandchez\".\n", "yellow")
    await fprint("Oh, that's the same Carlos Sandchez that you've known since prawn school.\n", "green")
    await fprint("Uhh, cool. Don't know him. Never heard of him.\n", "cyan", 1)
    await fprint("...Right. Anyway, yeah, go home.\n", "yellow", 1)
  } else if(answer == 1 && carlos == 2) {
    // three years
    clear()
    await fprint("You just kind of sit there, silently.\n", "dim", 1)
    await fprint("...\n", "yellow", 1)
    await fprint("...\n", "cyan", 1)
    await fprint("Ohhh, you're staying silent.\n", "yellow")
    await fprint("(Yeah)\n", "cyan")
    await fprint("Cool cool. Let me see what the other guy said.\n", "yellow")
    await fprint("While he's gone you blink 7 times.\n", "dim", 1)
    await fprint("Ok, do you want the good news or the bad news?\n", "yellow")
    await fprint("[1] Good news", "cyan", 0,0)
    await fprint("[2] Bad news\n", "cyan",0,0)
    await fprint(">>\n", "cyan",0,0)
    await config.sleep(2)
    await fprint("Jk it's just bad, the other guy testified see you in prison.\n", "yellow", 1)
    await fprint("Ah fuck\n", "cyan", 2)
    window.state = "You don't aaaactually die, but go to jail for so many years it doesn't make a difference. Rip.13"
    return queue
  } else if(answer == 2 && carlos == 2) {
    // one year
    clear()
    await fprint("You just kind of sit there, silently.\n", "dim", 1)
    await fprint("...\n", "yellow", 1)
    await fprint("...\n", "cyan", 1)
    await fprint("Ohhh, you're staying silent.\n", "yellow")
    await fprint("(Yeah)\n", "cyan")
    await fprint("Oh nice, let me see what the other guy said.\n", "yellow")
    await fprint("While he's gone you do nothing.\n", "dim")
    await fprint("Huh, cool, that's never happened before.", "yellow", 0)
    await fprint("He says to himself.\n", "dim")
    await fprint("What?\n", "cyan")
    await fprint("Other guy also said nothing, that's pretty cool.\n", "yellow")
    await fprint("Fuck, that means prison for a year right?\n", "cyan")
    await fprint("No, no, you won the game. You can leave.\n", "yellow")
    await fprint("Oh, you're one of those social experiment guys, right?\n", "cyan")
    await fprint("Sure, sure. Just leave.\n", "yellow")
    await fprint("Cool.\n", "cyan", 1)
  }
  await fprint("Game theory + 2", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++
	return queue
}
