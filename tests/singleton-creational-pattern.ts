// universe
import { Universe } from '../lib/Universe'

function test() {
  const s1 = Universe.getInstance();
  const s2 = Universe.getInstance();

  if (s1 === s2) {
    console.log('1: universe as a singleton works, both variables contain the same instance.');
  } else {
    console.log('0: universe as a singleton failed, variables contain different instances.');
  }
}

test();