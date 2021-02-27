import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue) {
  await fprint("Yo, you cook, right?", "yellow", 0)
  await fprint("Your friend Carlos asks you while playing on his Nintendo SeaDS.\n", "dim", 1)
  await fprint("I mean I can make a mean Cup O' Noodle every now and then...\n", "cyan")
  await fprint("Well you gotta check this out man.\n", "yellow", 1)
  await fprint("He holds up a newspaper, pointing to the article titled \"$250,000 Cooking Competition\".\n", "dim")
  await fprint("Hmm, sure.\n", "cyan", 1.5)
  await fprint("After spending a radical 50 minutes practicing, you head out to the competition site.\n", "dim", 1)
  await fprint("I'm here to sign up for the cooking competition!", "cyan", 0)
  await fprint("You say to the person manning the ticket stand in front of the stadium.\n", "dim", 1)
  await fprint("Bud, imma need identification please.\n", "yellow")

  let answer = await choice(["Show him your passport", "Show him your Olive Garden Rewards Club card"])

  if(answer == 1) {
    await fprint("Here's my passport.\n", "cyan")
  } else {
    await fprint("Here's my Olive Garden Rewards Club card.\n", "cyan")
  }

  await fprint("Huh? No, I mean your National Cooking Association member card.\n", "yellow")
  await fprint("Oh shit, um, nevermind.\n", "cyan", 1)
  await fprint("Okay, you're definitely breaking into this thing. What should you try?\n", "green")

  answer = await choice(["Scale the building and climb in through the roof", "Pretend to be a plumber fixing a problem"])

  if(answer == 1) {
    await fprint("I'm sure this won't end horribly!\n", "cyan", 1)
    await fprint("As it turns out, it did not end horribly.", "dim", 1)
    await fprint("You reach the top and break off the cover for a vent duct. After crawling around for a while, you pop out inside the main competitor's hallway.\n", "dim", 1)
  } else {
    await fprint("You put on your trusty denim jumpsuit and stroll in through the front gate.\n", "dim", 1)
    await fprint("Ay, what do you think you're doing?", "blue", 0)
    await fprint("A security crab asks you.\n", "dim", 2)
    await fprint("I'm a plumber, I'm fixing the bathroom problems.\n", "cyan", 2)
    await fprint("This stadium doesn't have any bathrooms.\n", "blue", 2)
    await fprint("That's the problem I'm fixing.\n", "cyan", 2)
    await fprint("Oh, carry on then.\n", "blue")
    await fprint("Jeez that was a close one.\n", "green")
    await fprint("You continue walking until you reach the main competitor's hallway, where you then change back into normal clothes.\n", "dim", 1)
  }

  await fprint("Attention all competitors, to your cooking stations in the next 5 minutes!", "yellow", 0)
  await fprint("A crab calls out from over the intercom.\n", "dim")
  await fprint("Aight you should probably enter the main area now.\n", "green", 1)
  await fprint("You follow the crowd of aquatic animals through a large entryway, emerging onto the floor of the stadium. Around you animals of all shapes and sizes are cheering their favorite chefs on as they emerge, a deafening roar that drowns out any chit-chat from your competition. They all assume position at their designated tables, atop which a variety of cooking utensils and equipment lay. You decide to situate yourself next to a rather scary looking shrimp.\n", "dim", 1)
  await fprint("CHEFS! 5!\n", "yellow", 0)
  await fprint("SHIT\n", "cyan")
  await fprint("4!\n", "yellow", 0)
  await fprint("FUCK\n", "green")
  await fprint("3!\n", "yellow", 0)
  await fprint("WHATDOIDO\n", "cyan")
  await fprint("2!\n", "yellow", 0)
  await fprint("IDFKMAN\n", "green")
  await fprint("1!", "yellow")
  await fprint("Start!\n", "yellow", 1)

  answer = await choice(["Make your grandma's famous meatloaf", "Steal a recipe from your neighbor", "Crack out the Cup Noodles"])

  if(answer == 1) {
    await fprint("You whip open the minifrige underneath the table, determined to make some goddamn meatloaf. Pulling out a package of ground beef, some veggies, and a bottle of chili sauce, you go to town.\n", "dim", 1)
    await fprint("45 minutes left!\n", "yellow", 1)
    await fprint("Slapping the ingredients into a pan, you crank your oven up to 500 and throw that shit in there.\n", "dim", 1)
    await fprint("10 minutes left!\n", "yellow", 1)
    await fprint("You pull it out of the oven.\n", "dim", 1)
    await fprint("5 minutes left!\n", "yellow", 1)
    await fprint("You whip it onto a plate and garnish with a sprig of some kind of herb you found in the ingredients drawer.\n", "dim", 1)
    await fprint("1 minute left!\n", "yellow", 1)
    await fprint("FUCKIFORGOTTHESALT\n", "cyan", 0)
    await fprint("Time's up! Chefs, bring your creations up to the judging platform.\n", "yellow", 2)
    await fprint("After 20 long minutes, it's finally your turn to go.\n", "dim", 1)
    await fprint("Here's my, uh, meatloaf.\n", "cyan")
    await fprint("The judge nods, pulls out her fork and knife, and takes a large bite. The entire crowd goes silent. The tension in the air is palpable. Her eyes open. It's impossible to tell what she's thinking. What seemed like a hush falls over the already silent venue. Finally, the judge opens her mouth and says", "dim", 0)
    await fprint("Needs more salt.\n", "blue", 3)
  } else if(answer == 2) {
    await fprint("You sneak over to your opponent's table. He doesn't appear to notice you due to the loud roar of the crowd. Taking a paper off the table, you swiftly return to your own table, successfully completing the mission.\n", "dim", 1)
    await fprint("Hey, punk.", "blue", 0)
    await fprint("Says the shrimp, now right behind you.\n", "dim", 2)
    window.state = "The shrimp told the judges and you got kicked out of the stadium. And then you got hit by a car walking home. Pay more attention, yeah?09"
    return queue
  } else {
    await fprint("You open the ingredients drawer and pull out a styrofoam cup of ramen to heat up in the microwave. After a couple of minutes of preparation, your meal is done.\n", "dim", 1)
    await fprint("Uh, guess I gotta wait until time's up?\n", "cyan")
    await fprint("You decide to take a piss.\n", "dim", 1)
    await fprint("---One really long piss later---\n", "dim", 2)
    await fprint("Time's up! Chefs, bring your creations up to the judging platform.\n", "yellow", 2)
    await fprint("After 20 long minutes, it's finally your turn to go.\n", "dim", 1)
    await fprint("Here's my, uh, cup ramen.\n", "cyan", 2)
    await fprint("...", "blue", 2)
    await fprint("Get the fuck out of my face.\n", "blue", 3)
  }
  await fprint("Hey man, 25th out of... oh. Well, they were professional chefs, you didn't stand a chance.\n", "green")
  await fprint("Thanks, that's really nice of you to say, narrator.\n", "cyan", 1)
  await fprint("Resentment for restaurants + 1", "rainbow", 1)
  await fprint("Experience + 1\n", "rainbow", 2)
  window.experience++

	return queue
}
