var aaMoves = {
    weatherTheStormDefy: {
        book: 'basic',
        fullName: 'Weather The Storm (DEFY)',
        trigger: 'When you <b>weather the storm</b> to do something safely under pressure.',
        roll: 'DEFY',
        success: 'You mange to make it to safety.',
        partial: 'You succed, but at some cost - your Director will ask you to settle for less, take a <i>risk</i>, or make a difficult choice.',
    },
    weatherTheStormKnow: {
        book: 'basic',
        fullName: 'Weather The Storm (DEFY)',
        trigger: 'When you <b>weather the storm</b> to do something safely under pressure.',
        roll: 'KNOW',
        success: 'You mange to make it to safety.',
        partial: 'You succed, but at some cost - your Director will ask you to settle for less, take a <i>risk</i>, or make a difficult choice.',
    },
    readTheRoom: {
        book: 'basic',
        fullName: 'Read The Room',
        trigger: 'When you <b>read the room</b> to get insight on your situation.',
        roll: 'SENSE', // ! Single roll, automatically does it, or prompt for bonus?
        success: 'Hold 3',
        partial: 'Hold 1',
        failure: 'On a failure, you may ask one of the below questions, but the answer creates a problem or puts you in danger.',
        details: 'Spend your hold 1-for-1 to ask the following questions. Your hold lasts until you leave the current situation or it changes significantly. \n\n • Who has the upper hand here?\n • What is being overlooked here?\n • How does x really feel?\n • What are x\'s real intentions?\n • How is x at risk or in peril? \n\n Roll with Advantage when you act on the answers to what you\'ve asked',
    },
    dispelUncertainties: {
        book: 'basic',
        fullName: 'Dispel Uncertainties',
        trigger: 'When you <b>dispel uncertainties</b> by clarifying something unknown or answering a question.',
        roll: 'KNOW',
        success: 'The Director will tell you something directly useful you know about the situation or subject at hand.',
        partial: 'The Director will tell you something potentially useful, but it is up to you to discern how. The Director might ask you to explain how you know that information, or where you learned it.',
    },
    helpOrHinder: {
        book: 'basic',
        fullName: 'Help or Hinder',
        trigger: 'When you <b>help or hinder</b> someome to influence their attemps to do something.',
        roll: 'GRAVITY', // ! This one might be tricky to handle.
        succcess: 'They take Advantage (help) or Disadvantage (hinder) to their roll.',
        partial: 'As above, but you become entangled in the consequences of their actions, and possibly cause them.'
    },
    weaveMagic: {
        book: 'basic',
        fullName: 'Weave Magic',
        trigger: 'When you <b>weave magic</b> to do something taxing with your power.',
        roll: 'CHANNEL',
        success: 'You manage to channel power the way you desired without ill effect.',
        partial: 'You succeed, but your invocation is twisted in an unexpected and dangerous way.'
    },
    coolOff: {
        book: 'basic',
        trigger: 'When you take a moment in safety to <b>cool off</b> or help someone else do the same, you declare a <i>risk</i> you want to get rid of.',
        roll: 'SELECT', // ! Another tricky one. If we can pass in an array of values to a popup, might work. Trait -> Bonus -> Result
        success: 'You/they erase a <i>risk</i> or untick \'overheating\' from an Astir.',
        partial: 'As above, but your moment of safety is interrupted.'
    },
    exchangeBlowsClash: {
        book: 'basic',
        fullName: 'Exchange Blows (CLASH)',
        trigger: 'When you <b>exchange blows</b> with foes capable of defending themselves, and advance a GRAVITY clock if you have one.',
        success: 'Either your opponent takes a <i>risk</i>, or you take a <i>risk</i> and put your opponent in <i>peril.</i>',
        partial: 'Both you and your target are forced to take a <i>risk</i>',
    },
    exchangeBlowsTalk: {
        book: 'basic',
        fullName: 'Exchange Blows (TALK)',
        trigger: 'When you <b>exchange blows</b> with foes capable of defending themselves, and advance a GRAVITY clock if you have one.',
        success: 'Either your opponent takes a <i>risk</i>, or you take a <i>risk</i> and put your opponent in <i>peril.</i>',
        partial: 'Both you and your target are forced to take a <i>risk</i>',
    },
    strikeDecisivelyClash: {
        book: 'basic',
        fullName: 'Strike Decisively (CLASH)',
        trigger: 'When you <b>strike decisively</b> against someone wwho is defenseless.',
        success: 'You strike true. Director characters are killed, forced to retreat, or otherwise removed as a threat as per the fiction. Player characters should <b>bite the dust</b>.',
        partial: 'You succeed as above, but choose 1.',
        details: '• You overreach or underestimate - take a <i>risk</i>. \n •You waste ammo or words, losing use of a weapon until you can re-arm, or losing the weight of some bargaining chip or piece of leverage. \n • You strike carelessly, causing colateral damage beyond your expectations.'
    },
    strikeDecisivelyTalk: {
        book: 'basic',
        fullName: 'Strike Decisively (TALK)',
        trigger: 'When you <b>strike decisively</b> against someone wwho is defenseless.',
        success: 'You strike true. Director characters are killed, forced to retreat, or otherwise removed as a threat as per the fiction. Player characters should <b>bite the dust</b>.',
        partial: 'You succeed as above, but choose 1.',
        details: '• You overreach or underestimate - take a <i>risk</i>. \n •You waste ammo or words, losing use of a weapon until you can re-arm, or losing the weight of some bargaining chip or piece of leverage. \n • You strike carelessly, causing colateral damage beyond your expectations.'
    },
    biteTheDust: {
        book: 'basic',
        fullName: 'Bite the Dust',
        trigger: 'When you\'re defenseless or risk harm so sever you might <b>bite the dust</b>.',
        roll: 'DEFY',
        success: 'They miss, hesitate, or you\'re saved by sheer luck - you rally, and clear a <i>risk</i> if you have one.',
        partial: 'Retreat from the Sortie safely, or be put in <i>peril.</i>',
        miss: 'On a fail, that strike was sure decisive. Decide with your Director the consequences of what has happened to you - what was damaged? Have hat you lost? Who and what is changed by your defeat?',
        details: 'If you survive, you are changed by your defeat. As well as the above, choose one: \n\n • Increase one of your Traits by 1 and reduce another by 1 (no Trait may be higher lower than +/- 3)\n • Choose a new playbook. Keep what moves you and the Director agree are truly part of your character, and discard the others. Replace them with the starting moves for your new playbook. You do not gain its starting equipment.',
    }
}