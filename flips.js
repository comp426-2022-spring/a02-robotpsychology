// Import the coinFlips and countFlips function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs"
import minimist from "minimist"

// Call the coinFlips and countFlips functions and put the returns into STDOUT
const args = minimist(process.argv.slice(2))
let argNum = args.number

let manyFlips = coinFlips(argNum)
let flipCount = countFlips(manyFlips)

console.log(manyFlips)
console.log(flipCount)
