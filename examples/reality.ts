// past present future; now.
// space: [1, 2, 3]
// time: 4

import { Universe, Multiverse } from '../index'

// continuum
const life: number = 1
const death: number = 4

// singleton
let universe = Universe.getInstance() 

// prototypes
let multiverses: Array<Multiverse> = [] 

// clone prototypes using spawn and respawn
let firstMultiverse: Multiverse = Multiverse.spawn(universe, life, new Date())
multiverses.push(firstMultiverse)

// modulus
let daysPerYear = 365
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// live from prototype to prototype
let currentMultiverse: Multiverse = firstMultiverse
for (let age = life + 1; age <= death; age++) {
  currentMultiverse = Multiverse.respawn(
    currentMultiverse, 
    age, 
    addDays(new Date(), daysPerYear * age - daysPerYear)
  )
  multiverses.push(currentMultiverse)
}

// reports
console.log('universe:', universe)
console.log('multiverses:', multiverses)