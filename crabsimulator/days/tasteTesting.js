import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue){
    await fprint("Oh boy, I sure am hungry! I wonder what I have in the fridge.\n", "cyan", 1)
    await fprint("WAIT! I've set a curse on your refrigerator tur-\n", "green", 0)
    await fprint("What?\n", "cyan", 1.5)
    await fprint("A curse? You know?\n", "green", 1)
    await fprint("I know what a curse is. What I don't know is why you put one on my refrigerator.\n", "cyan")
    await fprint("Yeah I was getting to that, chill.", "green", 1)
    await fprint("Anyways, uh, I saw this cool thing in a Vsauce video. Basically there's gonna be three cans of soup in your fridge. Two of them are completely normal, but one of them was made with a crab stock. Choose carefully, or you may be consuming your own brethren!\n", "green", 1)
    await fprint("The narrator starts to maniacally laugh. You doubt his legitimacy as a good source of information.\n", "dim")

    // Fuck let
    // All my homies hate let
    var cursedCan = Math.floor(Math.random() * 3)
    var cans = ["Blue can", "Red can", "Green can"]
    var answer = await choice(cans) - 1
    var selectionCan = 0
    var switchAnswer = 0
    while (selectionCan == cursedCan || selectionCan == answer){
        selectionCan += 1
    }
    while (switchAnswer == answer || switchAnswer == selectionCan){
        switchAnswer += 1
    }
    await await fprint("I choose-\n", "cyan", 0)
    await await fprint("BUT WAIT! The " + cans[selectionCan].toLowerCase() + " DOESN'T contain any crab stock! Do you wish to switch your selected can?\n", "green")
    var newAnswer = await choice(["Keep it on the " + cans[answer].toLowerCase(), "Switch it to the " + cans[switchAnswer].toLowerCase()])
    if (newAnswer == 2) {
        answer = switchAnswer
        await fprint("You fool! Switching would increase your chances of getting the cursed can to 2/3! Now let's see what the cursed can really is...\n", "green")
    } else {
        await fprint("Smart move. Switching increases your chance of getting the cursed can to 2/3. Now let's see what the cursed can really is...\n", "green")
    }
    await fprint("You hear a muffled drumroll from inside the fridge.\n", "dim", 1)
    if (answer == cursedCan) {
        await fprint("You chose the " + cans[answer].toLowerCase() + ", which is also the cursed can! You imbecile!\n", "green", 1.5)
        await fprint("Your heart races as you open the refrigerator door. There lies the " + cans[answer].toLowerCase() + ", mocking you. Calling to you as if to say \"please, please eat me\". You shudder, knowing what you must do.", "dim", 1)
        await fprint("The microwave beeped deafeningly loud, with a piping hot can of soup inside. What have you become? Eating one of your own kind? Don't think that this isn't your fault. You deserve this.", "dim", 1)
        await fprint("Your spoon extends into the surface of the tantalizing crab stock soup. You bring it closer and closer to your mouth.", "dim", 1.5)
        await fprint("With a single gulp, you've committed the cardinal sin.", "dim", 2)
        await fprint("You collapse to the ground, longing for the days where you didn't have to suffer like this. Tears stream down your eyes as you feel your ancestors looking down upon you in shame. Crabs, crayfish, lobsters, ants, humans, cats, dogs. They peer with a look of disgust over what you have become.\n", "dim", 3)
        await fprint("Cannibalistic tendencies + 9", "rainbow", 1)
    } else {
        await fprint("You chose the " + cans[answer].toLowerCase() + ", but the cursed can was " + cans[cursedCan].toLowerCase() + ". You got off lucky THIS time...\n", "green")
        await fprint("You reheat the " + cans[answer].toLowerCase() + " in the microwave and enjoy a nice dinner while watching the news.\n", "dim", 1)
    }
    await fprint("Experience + 1\n", "rainbow", 2)
    window.experience += 1

    return queue
}
