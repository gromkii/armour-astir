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
    key: 'Advantage (+2)',
    roll: '4d6kh2'
  },
  {
    key: 'Disadvantage (-1)',
    roll: '3d6kl2'
  },
  {
    key: 'Disadvantage (-2)',
    roll: '4d6kl2'
  },
];
/*=include ./sheetworkers/edit-playbook.js */
/*=include ./sheetworkers/edit-gear.js */
/*=include ./sheetworkers/edit-moves.js */
/*=include ./sheetworkers/dangers.js */
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