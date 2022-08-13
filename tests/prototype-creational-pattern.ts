// multiverse
import { Universe } from '../lib/universe'
import { Multiverse, ComponentWithBackReference } from '../lib/multiverse'

function test() {
  const universe = Universe.getInstance()
  const mv1 = new Multiverse(universe);
  mv1.define(42, new Date()) // what and when
  mv1.circularReference = new ComponentWithBackReference(mv1);

  const mv2 = mv1.clone();

  if (mv1.purpose().universe === mv2.purpose().universe) {
    console.log('1: universe values have been carried over to a clone.');
  } else {
    console.log('0: universe values have not been copied.');
  }

  if (mv1.purpose().what === mv2.purpose().what) {
    console.log('0: multiverse what number has not been cloned.');
  } else {
    console.log('1: multiverse what number has been cloned.');
  }

  if (mv1.purpose().when === mv2.purpose().when) {
    console.log('0: multiverse when date time has not been cloned.');
  } else {
    console.log('1: multiverse when date time has been cloned.');
  }

  if (mv1.circularReference === mv2.circularReference) {
    console.log('0: multiverse circular reference has not been cloned.');
  } else {
    console.log('1: multiverse circular reference has been cloned.');
  }

  if (mv1.circularReference.multiverse === mv2.circularReference.multiverse) {
    console.log('0: multiverse circular reference multiverse is linked to original object.');
  } else {
    console.log('1: multiverse circular reference multiverse linked to the clone.');
  }
}

test();