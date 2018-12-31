const setsPlans = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'nowhere, your character stands here before being moved to clearing',
    exits: [{ id: 'clearing'}]
  },
  clearing: {
    desc: 'a sun dappled clearing',
    proseScript: 'clearing',
    author: 'lucsan',
    exits: [
      {
        desc: 'a path leads to the Creepy Woods',
        to: 'creepyWoods',
      },
      {
        desc: 'a small wooden mysterious door in a tree',
        to: 'tree',
        actions: {
          'open': () => {},
          'unlock': () => {},
          'lock': () => {},
        },
      },
      {
        id: 'lab',
        desc: 'the laboratory entrance',
        to: 'lab',
      }
    ]
  },
  creepyWoods: {
    desc: 'some nice creepy woods',
    exits: [
      {
        desc: 'a Clearing can be seen through the trees',
        to: 'clearing',
      },
      {
        desc: 'sunshine covered meadows lie in the distance',
        to: 'funkyHills'
      }
    ]
  },
  lab: {
    desc: 'a low rent laboratory, with a cheep bench, an old bunsen burner and a test tube rack',
    proseScript: 'lab',
    exits: [
      {
        desc: 'the door to the Clearing',
        to: 'clearing',
      }
    ]
  },
  funkyHills: {
    desc: 'low grassy hills undulate across a shallow plain, sheep gamble in the pastures and meadows, a windmill gently turns in the distance',
    exits: [
      {
        desc: 'The creepy woods becon with twisted twig',
        to: 'creepyWoods'
      }
    ]
  }
}
