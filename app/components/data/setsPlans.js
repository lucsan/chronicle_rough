const setsPlans = {
  // place {id name}: Description (with tokens)
  begining: {
    desc: 'A begining. Your character stands poised ready for a new adventure',
    proseScript: 'begining',
    exits: [{ to: 'clearing', desc: 'The Adventure begins ...'}]
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
        to: 'treeHouse'
      },
      {
        desc: 'a small mysterious wooden door in a tree',
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
  },
  treeHouse: {
    desc: 'an entire house, in a tree, albeit a one room house',
    proseScript: 'treeHouse',
    exits: [
      { to: 'clearing' }
    ]
  }
}
