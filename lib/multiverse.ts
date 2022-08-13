// parallel

import { Universe } from './universe'

/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
export class Multiverse {
  private universe: Universe;
  private what: number; // answer to the meaning of life
  private when: Date; // date and time of historical record
  public circularReference: ComponentWithBackReference;

  constructor (universe: Universe) {
    this.universe = universe
  }

  public clone(): this {
    const clone = Object.create(this);

    clone.universe = this.universe
    clone.what = new Number(this.what);
    clone.when = Object.create(this.when);

    // Cloning an object that has a nested object with backreference
    // requires special treatment. After the cloning is completed, the
    // nested object should point to the cloned object, instead of the
    // original object. Spread operator can be handy for this case.
    clone.circularReference = {
      ...this.circularReference,
      multiverse: { ...this }, // prototype
    };

    return clone;
  }

  public purpose (): any {
    return {
      what: this.what,
      when: this.when
    }
  }

  public define (answer: number, historicalRecord: Date): void {
    this.what = answer
    this.when = historicalRecord
  }


  static spawn (universe: Universe, what: number, when: Date) {
    // returns init prototype
    let multiverse = new Multiverse(universe) 
    
    // change
    multiverse.define(what, when)
    multiverse.circularReference = new ComponentWithBackReference(multiverse);

    return multiverse
  }

  static respawn (multiverse: Multiverse, what, when) {
    // returns next prototype
    multiverse = multiverse.clone() 

    // change
    multiverse.define(what, when)

    return multiverse
  }
}

export class ComponentWithBackReference {
  public multiverse; // prototype

  constructor(multiverse: Multiverse) {
    this.multiverse = multiverse;
  }
}