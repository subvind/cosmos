// continuum
// space: [1, 2, 3]
// time: 0

import { Universe, Multiverse } from '../index'

// singleton
let universe = Universe.getInstance() 

// meaning
const life: number = 1
const death: number = 4

// prototypes
let multiverses: Array<Multiverse> = [] 

// generate multiverses using spawn and respawn
let firstMultiverse: Multiverse = Multiverse.spawn(universe, life, new Date())
multiverses.push(firstMultiverse)

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let currentMultiverse: Multiverse = firstMultiverse
for (let age = life + 1; age <= death; age++) {
  currentMultiverse = Multiverse.respawn(
    currentMultiverse, 
    age, 
    addDays(new Date(), 365 * age - 365)
  )
  multiverses.push(currentMultiverse)
}

// reports
console.log('universe:', universe)
console.log('multiverses:', multiverses)
