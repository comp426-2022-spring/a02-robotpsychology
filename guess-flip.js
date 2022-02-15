// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs"
import minimist from "minimist"
import path from "path"

// Call the coinFlip function and put the return into STDOUT
const args = minimist(process.argv.slice(2))
let call = args.call

let guessFlip = flipACoin(call)
let validInputs = ["heads", "tails"]

if (!validInputs.includes(call.trim())) {
  let randomFlip = coinFlip()
  console.log("Error: no/invalid input")
  console.log(`If you would have guessed ${randomFlip}, you would have won!`)
} else if (validInputs.includes(call.trim())) {
  console.log(guessFlip)
} else {
  console.log(
    new Error(
      `Error: no/invalid input.
Usage: node guess-flip --call=${call}
NOTE - Only valid inputs: 
[${validInputs}]
`
    )
  )
  process.exit(1)
}
