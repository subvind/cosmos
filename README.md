cosmos
========
design pattern source code:
- builder creational: https://github.com/trabur/full-stack
- prototype & singleton creational: https://github.com/trabur/cosmos
- factory method creational: https://github.com/trabur/member-markings
- abstract factory creational: https://github.com/trabur/family-markings

tests:
```bash
1: universe as a singleton works, both variables contain the same instance.
1: universe values have been carried over to a clone.
1: multiverse what number has been cloned.
1: multiverse when date time has been cloned.
1: multiverse circular reference has been cloned.
1: multiverse circular reference multiverse linked to the clone.
```

examples:
```bash
# npm run examples:reality
universe: Universe { what: 42 }
multiverses: [
  <ref *1> Multiverse {
    universe: Universe { what: 42 },
    what: 1,
    when: 2022-08-13T01:02:54.111Z,
    circularReference: ComponentWithBackReference { multiverse: [Circular *1] }
  },
  Multiverse {
    universe: Universe { what: 42 },
    what: 2,
    when: 2023-08-13T01:02:54.111Z,
    circularReference: { multiverse: [Object] }
  },
  Multiverse {
    universe: Universe { what: 42 },
    what: 3,
    when: 2024-08-12T01:02:54.112Z,
    circularReference: { multiverse: [Object] }
  },
  Multiverse {
    universe: Universe { what: 42 },
    what: 4,
    when: 2025-08-12T01:02:54.112Z,
    circularReference: { multiverse: [Object] }
  }
]
```