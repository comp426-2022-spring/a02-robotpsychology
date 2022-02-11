// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs"
import minimist from "minimist"
import path from "path"

// Call the coinFlip function and put the return into STDOUT
const args = minimist(process.argv.slice(2))
let call = args.call

let guessFlip = flipACoin(call)
let validInputs = ["heads", "tails"]

if (validInputs.includes(call.trim())) {
  console.log(guessFlip)
} else {
  console.log(`Error: no/invalid input.`)
  console.log(`Usage: node guess-flip --call=${call}`)
  console.log(`NOTE - Only valid inputs: 
  [${validInputs}]
  `)
}
