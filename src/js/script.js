const bookName = {
  0: 'arcanist',
  1: 'impostor',
  2: 'paradigm',
  3: 'witch',
  4: 'scout',
  5: 'captain',
  6: 'artificer',
  7: 'diplomat'
};

const playbookGear = {
  arcanist: {
      startingGear: [
          {
              name: 'Astir',
              tier: 'III',
              quantity: 1
          },
          {
              name: 'Touch Spells',
              tier: 'I',
              tags: ['melee', 'bane'],
          },
          {
              name: 'Arcanist Gear',
              quantity: 2
          },
          {
              name: 'Clothing appropriate for your look.'
          }
      ],
      classGear: [
          {
              name: 'Telescoping Staff',
              tier: 'I',
              tags: [
                  'ranged'
              ],
              checked: false
          },
          {
              name: 'Reagent Knife',
              tier: 'I',
              tags: [
                  'melee',
                  'mundane'
              ]
          },
          {
            name: 'Sidearm',
            tier: 'I',
            tags: [
              'ranged',
              'defensive',
            ],
          },
          {
            name: 'Shield Broach',
            tier: 'I',
            tags: [
              'ward'
            ]
          }
      ]
  },
  impostor: {
    startingGear: [
      {
        name: 'Astir',
        tier: 'III',
        quantity: 1
      },
      {
        name: 'Augments',
        tier: 1,
        tags: ['melee', 'bane'],
      },
      {
        name: 'Impostor Gear',
        quantity: 2
      },
      {
        name: 'Clothes that match your look',
      }
    ],
    classGear: [
      {
        name: 'Power Focus',
        tier: 'I',
        tags: ['ranged'],
      },
      {
        name: 'Shortsword',
        tier: 'I',
        tags: ['melee', 'mundane'],
      },
      {
        name: 'Sidearm',
        tier: 'I',
        tags: ['ranged', 'defensive'],
      },
      {
        name: 'Shield Broach',
        tier: 'I',
        tags: ['ward']
      }
    ]
  },
  paradigm: {
    startingGear: [
      {
        name: 'Astir',
        tier: 'III',
        quantity: 1,
      },
      {
        name: 'Divine Touch',
        tier: 'I',
        tags: ['melee', 'bane'],
      }, 
      {
        name: 'Paradigm Gear',
        quantity: 2,
      },
      {
        name: 'Clothes that match your look'
      }
    ],
    classGear: [
      {
        name: 'Holy Symbol',
        tier: 'I',
        tags: ['ranged'],
      },
      {
        name: 'Sacred Weapon',
        tier: 'I',
        tags: ['melee', 'mundane'],
      },
      {
        name: 'Sidearm',
        tier: 'I',
        tags: ['ranged', 'defensive']
      },
      {
        name: 'Shield Broach',
        tier: 'I',
        tags: ['ward']
      }
    ]
  },
  witch: {
    startingGear: [
      {
        name: 'Astir',
        tier: 'III',
        quantity: 1,
      },
      {
        name: 'Pact Weapon',
        tier: 'I',
        tags: ['melee', 'bane'],
      },
      {
        name: 'Witch Gear',
        quantity: 2
      },
      {
        name: 'Clothes that match your look'
      }
    ],
    classGear: [
      {
        name: 'Patron\'s Icon',
        tier: 'I',
        tags: ['ranged'],
      },
      {
        name: 'Ritual Dagger',
        tier: 'I',
        tags: ['melee', 'mundane']
      },
      {
        name: 'Sidearm',
        tier: 'I',
        tags: ['ranged', 'defensive']
      },
      {
        name: 'Shield Broach',
        tier: 'I',
        tags: ['ward'],
      }
    ]
  },
  scout: {
    startingGear: [
      {
        name: 'Scout Weapon',
        quantity: 1
      },
      {
        name: 'Scout Equipment',
        quantity: 2
      },
      {
        name: 'Any Tier I weapons that feel appropriate'
      },
      {
        name: 'Clothes that match your look'
      }
    ],
    classGear: [
      {
        name: 'Astircleaver',
        tier: 'II',
        tags: [
          'melee / bane',
          'area',
          '2H'
        ],
      }, {
        name: 'Crossbow+',
        tier: 'II',
        tags: [
          'ranged / infinite',
          'blitz',
          '2H'
        ]
      }, {
        name: 'Force Ballista',
        tier: 'II',
        tags: [
          'sniper / reloading',
          'ruin',
          '2H'
        ]
      }
    ]
  },
  captain: {
    startingGear: [
      {
        name: 'Ornate Gear',
        quantity: 2,
      },
      {
        name: 'Bonus Carrier Module',
        quantity: 1,
      },
      {
        name: 'Clothes that match your look'
      }
    ],
    classGear: [
      {
        name: 'Gilded Sidearm',
        tier: 'I',
        tags: [
          'ranged / blitz',
          'distinct'
        ]
      },
      {
        name: 'Ruinlock',
        tier: 'I',
        tags: [
          'ranged / profane',
          'reloading',
          'ruin'
        ]
      },
      {
        name: 'Duelist\'s Blade',
        tier: 'I',
        tags: [
          'melee / bane',
          'distinct',
        ]
      },
      {
        name: 'Arcane Mantle',
        tier: 'I',
        tags: ['melee / arcane']
      }
    ]
  },
  diplomat: {
    startingGear: [
      {
        name: 'Diplomacy \'Tool\'',
        quantity: 1
      },
      {
        name: '\'Diplomacy\' Tool',
        quantity: 3,
      },
      {
        name: 'Clothing that matches your look'
      }
    ],
    classGear: [
      {
        name: 'Frost Charms',
        tier: 'I',
        tags: [
          'ranged / restraining',
          'elemental'
        ]
      },
      {
        name: 'Fencing Blade',
        tier: 'I',
        tags: [
          'melee / decisive',
          'distinct'
        ]
      },
      {
        name: 'Arcane Dagger',
        tier: 'I',
        tags: [
          'melee / bane',
          'small',
          'arcane'
        ]
      }
    ],
  },
  artificer: {
    startingGear: [
      {
        name: 'Artificer Tools',
        quantity: 2,
      },
      {
        name: 'Transport or Service Ardent',
        quantity: 1,
        tier: 'II',
      },
      {
        name: 'Construct Manuals, (dispel uncertainty regarding Construct and Astir design with Advantage)'
      },
      {
        name: 'Clothing that matches your look'
      }
    ],
    classGear: [
      {
        name: 'Heavy Wrench',
        tier: 'I',
        tags: [
          'melee / bane'
        ]
      },
      {
        name: 'Beam Cutter',
        tier: 'I',
        tags: [
          'melee / reloading',
          'ruin',
          'decisive'
        ]
      },
      {
        name: 'Steelfuser',
        tier: 'I',
        tags: [
          'ranged / elemental'
        ]
      },
      {
        name: 'Alchemical Gel',
        tier: 'I',
        tags: [
          'Adv. for Cool Off repairs'
        ]
      }
    ]
  },
}

// END PLAYBOOKS

// Used for building rollValues.
const rollModifiers = [
  {
    key: 'None',
    roll: '2d6'
  },
  {
    key: 'Advantage (+1)',
    roll: '3d6kh2'
  },
  {
    key: 'Confidence (+2)',
    roll: '4d6kh2'
  },
  {
    key: 'Disadvantage (-1)',
    roll: '3d6kl2'
  },
  {
    key: 'Desperate (-2)',
    roll: '4d6kl2'
  },
];

// Set the currently displayed tab on the character sheet.
const buttonlist = ['character', 'astir', 'misc'];
buttonlist.forEach(button => {
    on(`clicked:${button}`, function() {
        setAttrs({
            sheet_tab: button
        });
    });
});

// Set the Astir page to either display Astir or Carrier information.
on('change:show_carrier_toggle', (event) => {
  setAttrs({
    show_carrier: event.newValue,
  });
});

// Show/Hide 'CHANNEL' Trait based on playbook.
on(`change:support`, (event) => {
  setAttrs({
    channel_hidden: event.newValue == 'on',
  });
})

// Set playbook information when the playbook value changes.
on(`change:playbook`, (event) => {
  if (event && event.newValue && event.netValue !== event.previousValue) {
    setPlaybook(event.newValue);
  }
});

//#region Gear.
on('change:repeating_gearcheck:gear_name_edit', () => {
  getAttrs(['repeating_gearcheck_gear_name_edit'], (values) => {
    setAttrs({ repeating_gearcheck_gear_name: values.repeating_gearcheck_gear_name_edit });
  });
});

on('change:repeating_gearcheck:gear_tier_edit', () => {
  getAttrs(['repeating_gearcheck_gear_tier_edit'], (values) => {
    setAttrs({ repeating_gearcheck_gear_tier: values.repeating_gearcheck_gear_tier_edit });
  });
});

on('change:repeating_gearcheck:gear_tags_edit', () => {
  getAttrs(['repeating_gearcheck_gear_tags_edit'], (values) => {
    const tags = values.repeating_gearcheck_gear_tags_edit;
    const parsedTags = tags ? `${tags}` : '';
    setAttrs({ repeating_gearcheck_gear_tags: parsedTags });
  });
});
//#endregion


// ----- MOVES EDIT ----- //
// TODO: Read article about improving performance. This is a lot of event listeners.
// TODO: It might be helpful to separate plaintext and sanitized/formatted text, ex: success -> success_text
// When moves are being populated on init, some fields are being filled properly.
  on('change:repeating_moves:move_name_base', () => {
    getAttrs(['repeating_moves_move_name_base'], (v) => {
      setAttrs({
        repeating_moves_move_name: v.repeating_moves_move_name_base
      });
    });
  });
  
  on('change:repeating_basicmoves:move_name_base', () => {
    getAttrs(['repeating_moves_move_name_base'], (v) => {
      setAttrs({
        repeating_basicmovesmoves_move_name: v.repeating_moves_move_name_base
      });
    });
  });

  on('change:repeating_moves:move_trait', (event) => {
    const prefix = event.sourceAttribute.split('trait')[0];
    getAttrs(['repeating_moves_move_trait'], (v) => {
      const traitString = v.repeating_moves_move_trait.toUpperCase();
      const traits = traitString.replace(' ', '').split(',');
      const doRoll = traits.length ? 1 : 0;
      const rollValue = setRollValue(traits, prefix);
      
      setAttrs({
        repeating_moves_move_rollvalue: rollValue,
        repeating_moves_move_doroll: doRoll,
      })
    })
  })

  on('change:repeating_basicmoves:move_trait', (event) => {
    const prefix = event.sourceAttribute.split('trait')[0];
    getAttrs(['repeating_basicmoves_move_trait'], (v) => {
      const traitString = v.repeating_basicmoves_move_trait.toUpperCase();
      const traits = traitString.replace(' ', '').split(',');
      const doRoll = traits.length ? 1 : 0;
      const rollValue = setRollValue(traits, prefix);
      
      setAttrs({
        repeating_basicmoves_move_rollvalue: rollValue,
        repeating_basicmoves_move_doroll: doRoll,
      })
    })
  })

  on('change:repeating_moves:move_success', () => {
    getAttrs(['repeating_moves_move_success'], (v) => {
      setAttrs({
        repeating_moves_move_success: v.repeating_moves_move_success
      }, () => {
        // ! Set roll value.
      })
    })
  })

  on('change:repeating_moves:move_partial', () => {
    getAttrs(['repeating_moves_move_partial'], (v) => {
      setAttrs({
        repeating_moves_move_partial: v.repeating_moves_move_partial
      }, () => {
        // ! Set roll value.
      })
    })
  })

  on('change:repeating_moves:move_miss', () => {
    getAttrs(['repeating_moves_move_miss'], (v) => {
      setAttrs({
        repeating_moves_move_miss: v.repeating_moves_move_miss
      }, () => {
        // ! Set roll value.
      })
    })
  })


// ----- HELPER FUNCTIONS ----- //
function setPlaybook(book) {
  const bookValue = getPlaybookValue(book);
  const playbook = bookName[bookValue];
  setPlaybookValue(bookValue);
  setMoves(playbook);
  setGear(playbook);
  setBasicMoves();
}

function getPlaybookValue(book) {
  const value = book.toLowerCase().replace('the ', '');
  switch(value) {
    case 'arcanist' : return 0;
    case 'impostor' : return 1;
    case 'paradigm' : return 2;
    case 'witch'    : return 3;
    case 'scout'    : return 4;
    case 'captain'  : return 5;
    case 'artificer': return 6;
    case 'diplomat' : return 7;
    default         : return 0; // ? Setup error handling case?
  }
}

function setPlaybookValue(book) {
  setAttrs({
    playbook_descriptors: `${book}`,
    channel_hidden: book > 3,
  });
}

function setBasicMoves() {
  clearBasicMoveList();

  playbookMoves.basic.forEach((move) => {
    addBasicMove(move, true);
  });
}

function setMoves(book) {
  if (!playbookMoves[book]) {
    console.log('Error, playbook not found.')
    return;
  }
  
  clearMoveList();

  const moves = playbookMoves[book];
  moves.forEach((move) => {
    addBasicMove(move, false);
  })
}

// Add Moves from SRD (defined in playbook.js, copy/pasted here. Doesn't actually pull them in.)
function addBasicMove(m, basicMove) {
  const newRowId = generateRowID();
  const moves =  basicMove ? 'basicmoves' : 'moves';
  const prefix = `repeating_${moves}_${newRowId}_move_`;
  const attrs = {};

  attrs[prefix + 'name'] = m.fullName;
  attrs[prefix + 'name_base'] = m.fullName;

  let replaceChar = ',';
  if (m.roll) { replaceChar = '&#44;' }
  if (m.rolls) { 
    replaceChar = '&amp;#44;' 
  }

  // Parsing nested drop-down roll queries are not great in roll20, so we use the code instead of commas.
  // This might be dependant on if there is a roll, rolls, or no roll. Rework based on m.roll || m.rolls
  if (m.success) attrs[prefix + 'success'] = m.success.replace(/,/g, replaceChar);
  if (m.partial) attrs[prefix + 'partial'] = m.partial.replace(/,/g, replaceChar);
  if (m.miss) attrs[prefix + 'miss'] = m.miss.replace(/,/g, replaceChar);
  if (m.details) attrs[prefix + 'details'] = m.details.replace(/,/g, replaceChar);

  // Check to see if the move has a roll component, makes the roll template play nicer.
  attrs[prefix + 'doroll'] = (m.roll || m.rolls) ? 1 : 0;

  setAttrs(attrs, () => {
    rollAttrs = {};
    if (m.rolls) {
      rollAttrs[prefix + 'rollvalue'] = buildRollValue(m.rolls, prefix);
    } else if (m.roll) {
      rollAttrs[prefix + 'rollvalue'] = buildSingleRollValue(m.roll, prefix);
    } else {
      rollAttrs[prefix + 'rollvalue'] = buildEmptyRollValue(prefix);
    }
    
    setAttrs(rollAttrs);
  });
}

// ----- Dangers ----- //
// TODO: Consolidate this into single listener.
on('change:danger_1_radio', (event) => {
  if (event && event.newValue && event.newValue === "2") {
    setAttrs({
      danger_1_radio: '4',
      danger_1_description: '',
    });
  }
})

on('change:danger_2_radio', (event) => {
  if (event && event.newValue && event.newValue === "2") {
    setAttrs({
      danger_2_radio: '4',
      danger_2_description: '',
    });
  }
})

on('change:danger_3_radio', (event) => {
  if (event && event.newValue && event.newValue === "2") {
    setAttrs({
      danger_3_radio: '4',
      danger_3_description: '',
    });
  }
})



// ---- Gear ----- //

function addGearList(gear, rowid) {
  const newRowId = rowid || generateRowID();

  const tags = gear.tags && gear.tags.length ? `${gear.tags.join(', ')}` : '';

  setAttrs({
    [`repeating_gearlist_${newRowId}_name`]: gear.name || '',
    [`repeating_gearlist_${newRowId}_quantity`]: gear.quantity || '',
    [`repeating_gearlist_${newRowId}_tier`]: gear.tier || '',
    [`repeating_gearlist_${newRowId}_tags`]: tags,
  });
}

function addGear(gear, rowid) {
  const newRowId = rowid || generateRowID();
  const tags = gear.tags && gear.tags.length ? `${gear.tags.join(', ')}` : '';

  setAttrs({
    [`repeating_gearcheck_${newRowId}_gear_name`]: gear.name || '',
    [`repeating_gearcheck_${newRowId}_gear_tier`]: gear.tier || '',
    [`repeating_gearcheck_${newRowId}_gear_tags`]: tags,
  })

}

function setGear(book) {
  clearGearList();

  if (!playbookGear[book]) {
    return;
  }

  const gearList = playbookGear[book].startingGear;
  const gear = playbookGear[book].classGear;

  for (let i = 0; i < gearList.length; i++) {
    addGearList(gearList[i]);
  }

  for (let i = 0; i < gear.length; i++) {
    addGear(gear[i]);
  }
}


// ----- Tear Down ----- //

function clearGearList() {
  getSectionIDs('repeating_gearlist', (idArray) => {
    _.forEach(idArray, (id) => {
      removeRepeatingRow(`repeating_gearlist_${id}`);
    });
  })

  getSectionIDs('repeating_gearcheck', (idArray) => {
    _.forEach(idArray, (id) => removeRepeatingRow(`repeating_gearcheck_${id}`));
  })
}

function clearBasicMoveList() {
  getSectionIDs('repeating_basicmoves', (idArray) => {
    _.forEach(idArray, (id) => {
      removeRepeatingRow(`repeating_basicmoves_${id}`);
    });
  })
}

function clearMoveList() {
  getSectionIDs('repeating_moves', (idArray) => {
    _.forEach(idArray, (id) => {
      removeRepeatingRow(`repeating_moves_${id}`);
    });
  })
}

function setRollValue(traits, prefix) {

  if (traits && traits.length === 1) {
    return buildSingleRollValue(traits[0], prefix);
  } else if (traits && traits.length > 1) {
    return buildRollValue(traits, prefix);
  }

  return '';
  
}




// Build the rollValue for a move that contains no trait.
function buildEmptyRollValue(prefix) {
  return '&{template:move} '
        +'{{charname=@{character_name}}}'
        +'{{movename=@{' + prefix + 'name}}} '
        +'{{success=@{' + prefix + 'success}}} '
        +'{{partial=@{'+ prefix + 'partial}}} '
        +'{{miss=@{'+ prefix + 'miss}}} '
        +'{{doroll=@{' + prefix + 'doroll}}} '
        +'{{details=@{' + prefix + 'details}}}';
}

// Build the rollValue for a move with a single trait.
function buildSingleRollValue(roll, prefix) {
  
  let rollValue = '';
  rollValue += '?{Modifiers|'
  _.forEach(rollModifiers, (mod, index) => {
    const last = index === rollModifiers.length - 1;
    const lastChar = last ? '}' : '|';

    rollValue += mod.key
    + ',&{template:move&#125 '
    +'{{charname=@{character_name}&#125&#125'
    +'{{movename=@{' + prefix + 'name}&#125&#125 '
    +'{{details=@{' + prefix + 'details}&#125&#125'
    +'{{trait='+ roll +'&#125&#125 '
    +'{{result=[[ '+ mod.roll +' + @{' + roll.toLowerCase() + '}]]&#125&#125 '
    +'{{success=@{' + prefix + 'success}&#125&#125 '
    +'{{partial=@{'+ prefix + 'partial}&#125&#125 '
    +'{{miss=@{'+ prefix + 'miss}&#125&#125 '
    +'{{doroll=@{' + prefix + 'doroll}&#125 '
    + lastChar;
  });

  return rollValue;
  
}

// Build the rollValue for a move that has multiple traits to choose from.
function buildRollValue(rolls, prefix) {

  if (!rolls.length) {
    return '';
  }

  let rollValue = '?{Choose a Trait|';

  _.forEach(rolls, (roll, index) => {
    const last = index === rolls.length - 1;
    const lastChar = last ? '}' : '|';      
    
    rollValue += '+' + roll + ', ?{Modifiers&#124'
    
    _.forEach(rollModifiers, (mod, modIndex) => {
      const modLast = modIndex === rollModifiers.length - 1;
      const modLastChar = modLast ? '&#125' : '&#124';
      
      rollValue += mod.key
      +'&#44; &{template:move&amp;#125 '
      +'{{details=@{' + prefix + 'details}&amp;#125&amp;#125'
      +'{{charname=@{character_name}&amp;#125&amp;#125 '
      +'{{miss=@{'+ prefix + 'miss}&amp;#125&amp;#125 '
      +'{{movename=@{' + prefix + 'name}&amp;#125&amp;#125 '
      +'{{trait='+ roll +'&amp;#125&amp;#125'
      +'{{result=[[' + mod.roll  + ' + @{' + roll.toLowerCase() + '}]]&amp;#125&amp;#125 '
      +'{{partial=@{'+ prefix + 'partial}&amp;#125&amp;#125 '
      +'{{success=@{' + prefix + 'success}&amp;#125&amp;#125 '
      +'{{doroll=@{' + prefix + 'doroll}&amp;#125 '
      + modLastChar;
    });

    rollValue += lastChar;
  });

  return rollValue;
}