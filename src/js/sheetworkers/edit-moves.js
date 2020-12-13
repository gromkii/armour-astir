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
        });
    });
});

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
        });
    });
});

on('change:repeating_moves:move_success', () => {
    getAttrs(['repeating_moves_move_success'], (v) => {
        setAttrs({
            repeating_moves_move_success: v.repeating_moves_move_success
        }, () => {
        // ! Set roll value.
        });
    });
});

on('change:repeating_moves:move_partial', () => {
    getAttrs(['repeating_moves_move_partial'], (v) => {
        setAttrs({
            repeating_moves_move_partial: v.repeating_moves_move_partial
        }, () => {
        // ! Set roll value.
        });
    });
});

on('change:repeating_moves:move_miss', () => {
    getAttrs(['repeating_moves_move_miss'], (v) => {
        setAttrs({
            repeating_moves_move_miss: v.repeating_moves_move_miss
        }, () => {
        // ! Set roll value.
        });
    });
});