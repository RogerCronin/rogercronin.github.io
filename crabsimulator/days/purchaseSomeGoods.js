import { fprint, choice, clear, pause } from "../waterWorks.js"
import * as config from "../waterWorks.js"

export async function execute(queue){
    async function purchaseSomeGoods_oldBay(){
    await fprint("Well, I should obviously pick up the most important thi-\n", "cyan", 0)
    await fprint("God, look at you.\n", "green", 2)
    await fprint("What?\n", "cyan", 1)
    await fprint("You're addicted. It's disgusting.\n", "green")
    await fprint("Fuck you, I can stop at any time. I'm serious.\n", "cyan")
    await fprint("Really? You can just stop using one of the most addictive drugs under the sea?\n", "green", 1)
    await fprint("You guiltily put four cans of Old Bay into your shopping cart and cross it off your list.\n", "dim", 1)
    await fprint("Right, now what's next?\n", "cyan")
  }
    async function purchaseSomeGoods_bread(){
    await fprint("Oh, I forgot to write down which kind of bread. What should I go for?\n", "cyan")
    let answer = await choice(["White bread", "Multigrain"])
    if (answer == 1) {
        await fprint("Really? White bread? I'm disappointed.\n", "green")
        await fprint("Oh come on! White bread tastes a million times better than multigrain bread could even hope to taste like.\n", "cyan", 1)
        await fprint("Alright, I guess I can't really fault you for that...\n", "green")
        await fprint("You place a bag of white bread in your shopping cart and cross it off your list.\n", "dim", 1)
    } else {
        await fprint("Might as well eat healthier now that I'm a crab.\n", "cyan")
        await fprint("Wow, only " + window.days + " " + config.dayPlural() + " old and already making good life choices? I'm proud.\n", "green", 1)
        await fprint("You proudly place a bag of multigrain bread in your shopping cart and cross it off your list.\n", "dim", 1)
      }
    await fprint("Right, what now?\n", "cyan")
}
    async function purchaseSomeGoods_milk(){
    await fprint("Oh wait, I'm lactose intolerant. I probably shouldn't drink that.\n", "cyan")
    await fprint("You glumly cross milk off your list.\n", "dim", 1)
    await fprint("Hmm, what's the next item I need?\n", "cyan")
}
    async function purchaseSomeGoods_chlorineGas(){
    await fprint("Chlorine gas? I don't remember writing that down...\n", "cyan")
    await fprint("Suddenly, out of the corner of your eye you spot him: Shia LeBarnacle.\n", "dim", 1)
    await fprint("Goddamn you Shia LeBarnacle and your poor attempts to murder me!\n", "cyan")
    await fprint("He scampers off on all fours into the night.\n", "dim")
    await fprint("Well, uh, what's next on the list?\n", "cyan")
}

    await fprint("I finally made it to Walmart! Let's see what I need to buy on my list...\n", "cyan", 1)
    await fprint(" - Old bay", "dim", 1.5, 0)
    await fprint(" - Bread", "dim", 1.5, 0)
    await fprint(" - Milk\n", "dim", 1.5, 0)
    await fprint("...\n", "cyan")
    await fprint(" - Chlorine gas?\n", "dim", 1.5, 0)
    await fprint("I wonder what I should get first?\n", "cyan")

    var shoppingItems = ["Old bay", "Bread", "Milk", "Chlorine gas"]

    while (true){
        let answer = await choice(shoppingItems)
        if (shoppingItems[answer - 1] == "Old bay") await purchaseSomeGoods_oldBay()
        else if (shoppingItems[answer - 1] == "Bread") await purchaseSomeGoods_bread()
        else if (shoppingItems[answer - 1] == "Milk") await purchaseSomeGoods_milk()
        else if (shoppingItems[answer - 1] == "Chlorine gas") await purchaseSomeGoods_chlorineGas()
        shoppingItems.splice(answer - 1, 1)
        if (shoppingItems.length == 0) break;
    }
    await fprint("You stare at your now empty shopping list.\n", "dim")
    await fprint("Oh, radical. I'm outta here.\n", "cyan")

    await fprint("Old Bay + 4", "rainbow", 1)
    await fprint("Bread + 1", "rainbow", 1)
    await fprint("Milk + 0", "rainbow", 1)
    await fprint("Chlorine gas + 1", "yellow", 1)
    await fprint("Wait, no, get out of the stats screen Shia LeBarnacle. Shoo.", "rainbow", 1)
    await fprint("Uhh, also experience + 1\n", "rainbow", 2)

    return queue
}
