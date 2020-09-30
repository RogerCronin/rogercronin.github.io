import { fprint, choice, clear, pause } from "../../waterWorks.js"
import * as config from "../../waterWorks.js"

export async function execute(queue) {
  await fprint("At 4 in the morning, you are awoken by loud knocking at your door.\n", "dim", 1)
  await fprint("Yeah, what is it?\n", "cyan", 1)
  await fprint("A crab with really cool sunglasses steps into your apartment, holds up a gun, and pulls the trigger.\n", "dim", 2)

  window.state = "You didn't renew your license at the A-Sea-Ts yesterday, so a government official was dispatched to ensure you didn't remain a crab any longer. Think longer about your education next time, alright?08"
	return queue
}
