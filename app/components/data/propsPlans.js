const propsPlans = {
  /* global actions: true */
  /*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
  default: {
    artist: '',
    desc: '',
    loc: '',
    locs: [],
    pickUp: false,
    hit: true, // can hit things with it
    strikes: false, // retaliates
  },
  stick: {
    desc: 'a nice stick',
    locs: ['clearing', 'creepyWoods'],
    artist: 'lucsan',
    pickUp: true,
    actions: {
      // TODO synonyms for pick up? remove, get, take.
      env: {
        //pickUp: () => actions().pickUp('stick'),
        kick: () => { actions().kick('stick') },
      },
      inv: {
        // combines
        // wear - put in bod
        //drop: () => {},
      //  hold: () => { console.log(`put in bod`); },
        destroy: () => {},
      },
      bod: {
        hit: () => {console.log('you hit');},
        poke: () => {console.log(`you poke`);},
        //bag: () => {console.log(`return to inventory`);}, // put in inv
      },
    },
    properties: {
      attack: 2,
      defense: 0,
      weight: 2,
      poking: true,
    },
  },

  gnome: {
    desc: "a nice gnome",
    locs: ['clearing'],
    actions: {
      env: {
        speak: () => {},
      },
    },
  },

  lint: {
    desc: "some grey and fluffy lint",
    locs: ['inv'],
    actions: {
      inv: {
        },
      bod: {
        inspect: () => { actions().msg(`its lint, like you get from your pocket.`) },
        sniff: () => { actions().msg(`You sniff your lint, it smells vaugly of dust, and pocket.`) },
        throw: () => { actions().drop('lint') },
      },
    },
  },

  stickyTape: {
    desc: 'a roll of stickytape. Its a tape, which is sticky',
    locs: ['inv'],
    properties: {
      sticking: true,
    },
  },

  lintStick: {
    desc: 'a mysterious lintstick, it has some pocket lint stuck to it. I wonder what this is for?',
    actions: {
      env: {
        pickUp: () => actions().pickUp('lintStick'),
      },
      inv: {
        give: () => console.log(`give to gnome`),
        tickling: () => console.log(`You tickle something with it`),
        poking: () => console.log(`you poke something with it`),
      },
    },
    properties: {
      attack: 2,
      defense: 0,
      health: 10,
    },
    combines: {
      needs: ['stick', 'lint', 'stickyTape'],
      destroys: ['stick', 'lint'],
      desc: 'you use a piece of sticky tape to adhere the lint to your stick. Yay, a lintstick, its more stick than lint and it has a sticky linty end',
    },
  },

  penny: {
    desc: 'A shinny penny.'
  },

  badge: {
    desc: "A little copper button badge, it says `Adventurer #1`.",
    locs: ['bod'],
    actions: {
      bod: {
        rub: () => {}
      }
    },
  },

  littleMonster: {
    desc: "Oooh how cute, a little monster",
    locs: ['creepyWoods'],
    actions: {
      env: {
        //hit: () => console.log(`monster is hit`)
      },
    },
    strikes: true, // can retaliate
    properties: {
      attack: 3,
      defense: 2,
      health: 4,
      drops: ['penny'],
    },
  },

  mingVase: {
    desc: 'a ming dynsaty delicate china vase',
    locs: ['creepyWoods'],
    actions: {
      env: {
        pickUp: () => actions().pickUp('stick'),
      },
    },
  },

  washingSoda: {
    desc: 'A tin of sodium carbonate.',
    locs: ['lab'],
  },
  citricAcid: {
    desc: 'a bag of citric acid.',
    locs: ['lab'],
  },
  testTube: {
    desc: 'a test tube of dubious cleanliness.',
    locs: ['lab'],
  },
  chiborg: {
    desc: 'a chicken with a mechanical heart.'
  },
  roboken: {
    desc: 'a robot with a chickens heart.'
  },
  vexedSheep: {
    desc: 'a slightly vexed sheep with fluffy white fleece.',
    locs: ['funkyHills']
  },
  oldMonk: {
    desc: 'a calm old monk called Ren-i quietly pushing his broom.'
  }

}