/*
    Important note: this file isn't being used in the character sheet directly, but rather is an
    easier way to keep a consistent source of truth for the data as the sheet is being developed.

    If you would like to contribute, please feel free to do so following these formatting conventions.

    MOVES -----
    moveName: {               // ! Style note here, use camel case for these names.
        book:     string,     // Playbook for move.
        fullName: string,     // Full name for move.
        roll?:    string,     // If a move has a single trait, use this property.
        rolls?:   string[],   // If a move can call for different traits, use an array of applicable traits.
        success?:  string,     // 10+ roll message
        partial?:  string,     // 7-9 roll message
        miss?:     string,     // 6 or less roll message.
        details?:  string,     // Body for context. Formatting for text TBD, but for now try to use \n and • or &bull;
    }

    GEAR -----
    playbook: {                     // Name of playbook, lowercase. ie: arcanist
        startingGear: [             // Array of gear using the following schema.
            {                       // List of staring gear for playbook.
                quantity: string,   // Not required.
                name:     string,   // Required, name of equipment.
                tier:     string,   // Format note, please use roman numerals for consistency.
                tags:     string[]  // Array of strings, formatting TBD.
            }, ... { },
        ],
        classGear: [                // Using the same schema as above.
            {
                ...
            }
        ]
    }
*/

const playbookMoves = { // basic moves
  basic: [
    {
      fullName: 'Weather The Storm',
      rolls: ['DEFY', 'KNOW'],
      success: 'You mange to make it to safety.',
      partial: 'You succeed, but at some cost - your Director will ask you to settle for less, take a *risk*, or make a difficult choice.',
    },
    {
      fullName: 'Read The Room',
      roll: 'SENSE',
      success: 'Hold 3',
      partial: 'Hold 1',
      miss: 'On a failure, you may ask one of the below questions, but the answer creates a problem or puts you in danger.',
      details: 'Spend your hold 1-for-1 to ask the following questions. Your hold lasts until you leave the current situation or it changes significantly. \n\n • Who has the upper hand here?\n • What is being overlooked here?\n • How does x really feel?\n • What are x\'s real intentions?\n • How is x at risk or in peril? \n\n Roll with Advantage when you act on the answers to what you\'ve asked',
    },
    {
      fullName: 'Dispel Uncertainties',
      roll: 'KNOW',
      success: 'The Director will tell you something directly useful you know about the situation or subject at hand.',
      partial: 'The Director will tell you something potentially useful, but it is up to you to discern how. The Director might ask you to explain how you know that information, or where you learned it.',
    },
    {
      fullName: 'Help or Hinder',
      details: 'Roll +GRAVITY. On a 10+, they take Advantage (help) or Disadvantage to their roll. On a 7-9, as 10+, but you become entangled. in the consequences of their actions.'
    },
    {
      fullName: 'Weave Magic',
      roll: 'CHANNEL',
      success: 'You manage to channel power the way you desired without ill effect.',
      partial: 'You succeed, but your invocation is twisted in an unexpected and dangerous way.'
    },
    {
      fullName: 'Cool Off',
      rolls: ['DEFY', 'SENSE', 'KNOW', 'CLASH', 'TALK'],
      success: 'You/they erase a *risk* or untick \'overheating\' from an Astir.',
      partial: 'As above, but your moment of safety is interrupted.'
    },
    {
      fullName: 'Exchange Blows',
      rolls: ['CLASH', 'TALK'],
      success: 'Either your opponent takes a *risk*, or you take a *risk* and put your opponent in *peril.*',
      partial: 'Both you and your target are forced to take a *risk*',
    },
    {
      fullName: 'Strike Decisively',
      rolls: ['CLASH', 'TALK'],
      success: 'You strike true. Director characters are killed, forced to retreat, or otherwise removed as a threat as per the fiction. Player characters should <b>bite the dust</b>.',
      partial: 'You succeed as above, but choose 1.',
      details: '• You overreach or underestimate - take a *risk*. \n •You waste ammo or words, losing use of a weapon until you can re-arm, or losing the weight of some bargaining chip or piece of leverage. \n • You strike carelessly, causing colateral damage beyond your expectations.'
    },
    {
      fullName: 'Bite the Dust',
      roll: 'DEFY',
      success: 'They miss, hesitate, or you\'re saved by sheer luck - you rally, and clear a *risk* if you have one.',
      partial: 'Retreat from the Sortie safely, or be put in *peril.*',
      miss: 'On a fail, that strike was sure decisive. Decide with your Director the consequences of what has happened to you - what was damaged? Have hat you lost? Who and what is changed by your defeat?',
      details: 'If you survive, you are changed by your defeat. As well as the above, choose one: \n\n • Increase one of your Traits by 1 and reduce another by 1 (no Trait may be higher lower than +/- 3)\n • Choose a new playbook. Keep what moves you and the Director agree are truly part of your character, and discard the others. Replace them with the starting moves for your new playbook. You do not gain its starting equipment.',
    }
  ],
  arcanist: [
    {
      fullName:'Prepare Rituals',
      details: 'You have a practiced set of **rituals** you use to enhance'
      + 'your piloting talents. Discuss what they are with your GM and where you perform them. When someone'
      + '**leads a sortie**, choose 2 **rituals** you had time to perform:\n\n'
      + '• A **realigning ritual** - Increase one of your Traits by 1 and reduce another by 1 (no Trait may be higher or lower than -/+3)\n\n'
      + '• A **contingency ritual** - Specify three specific situations: if you find yourself in one of them, increase your level of success on your next move and this ritual expires.\n\n'
      + '• An **adaptation ritual** - when you fail a roll, take Advantage on your next one.\n\n'
      + '• A **clarity ritual** - When you **read the room**, you may ask questions of a broader situation than here and now.\n\n'
      + 'All rituals expire after the Sortie, and you lose their effects when that happens.',
      moveSelected: true,
    },
    {
      fullName: 'Plans',
      details: 'Arcanists are educated in the art of war, and fght according to preordained tactics in ' 
      + 'order to perform at their best. Unexpected situations are the bane of a good arcanist. '
      + 'Whenever the party enters a dangerous situation, declare your plan to resolve it.\n\n'
      + 'If your plan is interfered with or prevented at any point, take the risk (perturbed, '
      + 'irritated, vexed, confounded).\n\n'
      + 'If your plan succeeds, even accidentally, advance a GRAVITY clock with someone '
      + 'who didn\'t think it would.',
      moveSelected: true,
    },
    {
      fullName: 'Expend Ritual',
      details: 'When you disperse the magical energy of a ***ritual*** to re-use that energy in a pinch, '
      + 'choose one of your prepared rituals - you no longer gain its beneft. You may then '
      + 'choose an option from the ***subsystems*** move without spending Mana.',
      moveSelected: false,
    },
    {
      fullName: 'Diverse Channeling',
      details: 'When you make a move while piloting an Astir, you can roll +CHANNEL instead of the usual '
      + 'Trait - if you do so, tick \'overheating\' on your Astir. If it\'s already fully ticked, it '
      + 'destroys one of your Astir\'s parts — you are in *peril* (burnout).',
      moveSelected: false,
    },
    {
      fullName: 'Consult Literature',
      details: 'You have a store of books and scrolls on various subjects that you can consult for '
      + 'information when given time. Choose 1 subject you have almost perfect records of, '
      + 'and 2 you have extensive information on:\n\n'
      + '• Construct models and design\n\n'
      + '• Magical beasts and monsters\n\n'
      + '• Enchantment and spell-craft\n\n'
      + '• Mundane craft and building\n\n'
      + '• Natural flora and fauna\n\n'
      + '• Military tactics\n\n'
      + '• A specific nation/faction\n\n'
      + '• General world history',
      moveSelected: false,
    },
    {
      fullName: 'Combat Spells',
      details: 'If you are outside your Astir and fighting on foot, you can ***exchange blows*** and '
      + '***strike decisively*** with +CHANNEL when attempting to cause physical harm, using '
      + 'the following profile:\n\n'
      + '• Hand-casting II (*ranged / area, bane*)',
      moveSelected: false,
    },
    {
      fullName: 'Tactical Illusions',
      details: 'When you distract your foes with magic, roll +CHANNEL.',
      roll: 'CHANNEL',
      success: 'Choose 2:\n\n'
      + '• The illusions last until you stop sustaining them (otherwise they last up to a minute)\n\n'
      + '• Your illusions affect anyone you intend to perceive them, rather than a signle person.\n\n'
      + '• You can create illusions that affect all the senses, rather than just sight.',
      partial: 'Choose 1, but your illusions also distract an unintended audience:\n\n'
      + '• The illusions last until you stop sustaining them (otherwise they last up to a minute)\n\n'
      + '• Your illusions affect anyone you intend to perceive them, rather than a signle person.\n\n'
      + '• You can create illusions that affect all the senses, rather than just sight.',
      moveSelected: false,
    },
    {
      fullName: 'Archivist [Requires: *Consult Literature*]',
      details: 'You aquire a new source of knowledge, and choose 2 more subjects you have extensive information '
      + 'of to your ***consult literature*** move. ',
      moveSelected: false,
    }
  ],
  impostor: [
    {
      fullName: 'Arcane Augments',
      details: 'Impostors control their Astir using magical augmentations, like artifcial limbs or '
      + 'organs. These augmentations allow a non-magic user to power and control an Astir, '
      + 'but otherwise do not interfere with your life unless you (the player) decide so. Being '
      + 'bonded to magic in this way often leads to it affecting the body and vice versa, '
      + 'irreversibly tying their magic to their emotional and physical state.\n\n'
      + 'Your CHANNEL is increased by 1 for each danger you have (upto a max of +3). '
      + 'When someone you have GRAVITY with sees you be put in peril, advance it.',
      moveSelected: true,
    },
    {
      fullName: 'Vent Wrath',
      details: 'If you are outside your Astir and fighting on foot, you can ***exchange blows*** and ***strike decisively*** with +CHANNEL when attempting to cause physical harm, using the following profile:\n\n• Hand-casting II (ranged / area, bane)',
      moveSelected: false,
    },
    {
      fullName: 'Scour Existence',
      details: 'You can ***exchange blows*** and strike decisively with +CHANNEL when attempting to cause physical harm with Astir-mounted weapons. If you do so, tick \'overheating\' on your Astir. If it\'s already ticked, it destroys one of your Astir’s parts—you are in peril (burnout).',
      moveSelected: false,
    },
    {
      fullName: 'Don\'t Follow Me',
      details: 'When you ***lead a Sortie*** with +DEFY, give everyone that follows Advantage to their next roll.',
      moveSelected: false,
    },
    {
      fullName: 'Resonance',
      details: 'When you would weave magic to form a clear empathic bond with another, sharing your true feelings and ideals, choose 2 instead of rolling;\n\n'
      + '• Your connection lasts a single, precious moment—time for little more than a short exchange.'
      + '• They or someone else view it as a breach of trust or some kind of trick, and will hold it against you.'
      + '• You miss something important while you\'re together.',
      moveSelected: false,
    },
    {
      fullName: 'Let Loose',
      moveSelected: false,
      details: 'Whenever you gain a *peril*, ***exchange blows*** and ***strike decisively*** with Advantage until the end of the Sortie.'
    },
    {
      fullName: 'Bullheaded',
      moveSelected: false,
      details: 'You may take a *risk* to take Advantage on your next roll.'
    },
    {
      fullName: 'Face to Face',
      roll: 'TALK',
      success: 'NPCs will leave their Astir to face you. PCs must weather the storm to refuse.',
      partial: 'NPCs will leave their Astir to face you, but choose one:\n\n'
      + '• Take the *risk* (entangled)\n\n'
      + '• You have Disadvantage to moves against the other Channeler.\n\n'
      + '• You are seperated from your Astirs temporarily.\n\n'
      + 'PCs may choose whether to leave their Astir or not – if they do, they pick one of the above for you.',
      moveSelected: false,
    },
    {
      fullName: 'Realignment',
      moveSelected: false,
      details: 'You undergo deeper alteration and enhancement to your body. Discuss what it is with your GM, and either choose a move from another playbook to represent its effects, or work with your GM to create a new one.'
    }
  ],
  paradigm: [
    { 
      fullName: 'Evangelise',
      details: 'You are in service of a deity or faith and are responsible for the spiritual well-being of'
      +'your Carrier’s crew. You gain an additional action during Downtime that can only be'
      +'used to give formal service or privately consult with a crew-member, both using the'
      +'talk it out move',
      moveSelected: true,
    },
    {
      fullName: 'Tenets',
      details: 'Instead of Ideals, write three tenets that represent your deity’s will. When you discuss'
      + 'your faith with someone or learn something about how they personally relate to faith'
      + 'and religion, advance a GRAVITY clock with them if you have one. If you ever'
      + 'sacrifce or break a tenet, it is lost forever; replace it with an Ideal instead of crossing'
      + 'it off and taking an advancement. Your CHANNEL Trait is also reduced by 1 until you'
      + 'make amends in whatever way is appropriate for your faith.\n\n'
      + 'Example tenets might be:\n'
      + '• Violence is a road taken when all others are closed.\n'
      + '• Share your faith freely, that it might spread.\n'
      + '• Scepticism is an affront to the divine.\n'
      + '• From each according to his ability, to each according to his needs.',
      moveSelected: true,
    },
    {
      fullName: 'Divine Guidance',
      details: 'When you consult your deity for information or guidance, you may ***dispel uncertainties***'
        + 'with +CHANNEL. If you do so, on a 7-9 the information is still directly'
        + 'useful, but it is diffcult to discern if your answer came from the intended deity.',
      moveSelected: false,
    },
    {
      fullName: 'Inspire Focus',
      details: '',
      moveSelected: false
    },
    {
      fullName: 'Bless',
      details: '',
      moveSelected: false
    },
    {
      fullName: 'Safeguard',
      details: '',
      moveSelected: false
    },
    {
      fullName: 'Turn Unearthly',
      success: 'Any creature not native to'
        + 'this plane of existence is sent back to their home plane instantly. If they are powerful'
        + 'enough to return themselves (or are summoned) during the same Sortie, they are in'
        + 'peril (turned) as your divine presence sickens them.',
      partial: 'They must flee from your sight and are in *peril* (turned).',
      details: 'When piloting an Astir you are attuned to, you may project an aura that causes otherwordly creatures to flee.',
      roll: 'CHANNEL',
      moveSelected: false,
    },
    {
      fullName: 'Firebrand',
      rolls: ['TALK', 'CHANNEL'],
      success: 'Choose 2',
      partial: 'Choose 1',
      miss: 'Your words are misinterpreted, co-opted, or misrepresented in a terrible way.',
      details: 'When you openly and loudly advocate for something related to one of your tenets, roll the highest of +TALK or +CHANNEL.\n\n'
        + '• Your words reach people far beyond where your voice is heard.\n'
        + '• Even those not of your faith connect to your message.\n'
        + '• You are not targeted immediately for what you preach.',
      moveSelected: 'false'
    },
    {
      fullName: 'Consecrate Ground',
      success: 'Choose 2',
      partial: 'Choose 1',
      roll: 'CHANNEL',
      details: 'When you attempt to imbue an area or building with your divine power and presence, roll +CHANNEL.\n\n'
        + '• Creatures opposed by your deity cannot enter the consecrated area.\n'
        + '• Creatures within your consecrated area cannot take violent action against each other.\n'
        + '• Creatures within the consecrated area cool off with Advantage.\n'
        + '• Creatures within your consecrated area cannot knowingly lie.',
      moveSelected: false,
    }
  ],
  witch: [
    {
      fullName: 'Patron',
      details: 'You receive your magic from an otherworldly patron or benefactor, whose motivations '
      + ' are typically not something you can discern. While they are often content to let you '
      + ' run free with their power, they will sometimes require things of you - and when they'
      + ' can, they will exert their Inﬂuence to make sure their bidding is done. You have a'
      + ' GRAVITY clock with your patron, representing the tenuous bond between you.'
      + ' Your patron may spend their Inﬂuence like hold in order to do the following:\n\n'
      + '• Help or hinder you, succeeding as if they had rolled a 10+.\n'
      + '• Attempt to force you to do something; you may weather the storm to resist.\n'
      + '• Re-roll your boons for the day.\n\n'
      + 'Whenever your Patron spends Inﬂuence, advance your GRAVITY clock with them. '
      + 'As long as you Patron has at least 1 Inﬂuence, your CHANNEL Trait is set to +3.',
      moveSelected: true,
    },
    {
      fullName: 'Receive Boons',
      details: 'At each dawn, you recieve ***boons*** from your patron. Roll on the list below two times to discern what powers you receive. They last until the next dawn. \n\n'
      + '***1 · Channelling Boon*** - You may give your patron 1 Influence to make a move with +CHANNEL instead '
      + 'of the usual trait—when you do so, tick \'overheating\' on your Astir. If it\'s already fully ticked, it destroys '
      + 'one of your Astir’s parts—you are in peril (burnout).\n'
      + '***2 · Hexxing Boon*** - You can curse an Astir, locking it out of some of its systems. When you do so, roll'
      + ' +CHANNEL. On a 10+, choose 2. On a 7-9, choose 1:\n'
      + '• A Player or Rival cannot spend Mana to activate ***subsystems***.\n'
      + '• A weapon, tool or function stalls, malfunctions, and stops working.\n'
      + '• The Channeler cannot prevent you from communicating with them.\n'
      + '***3 · Masking Boon*** - You can mask yourself or an Astir you are attuned to against detection. When you '
      + 'do so, roll +CHANNEL. On a 10+, you are disguised or cloaked in a fashion appropriate to your ***patron***. '
      + 'On a 7-9, the Director will tell you a flaw with your disguise.\n'
      + '***4 · Shielding Boon*** - You may give your ***patron*** 1 Influence to have Advantage when facing harm.\n'
      + '***5 · Vigorous Boon*** - You may give your ***patron*** 1 Influence to make the ***subsystems*** move for free.\n'
      + '***6 · Trickster’s Boon*** - When you use the ***subsystems*** to use an Artifact, instead of taking Advantage '
      + 'you may roll a d6 and replace either or both of your regular dice results with it.'
    },
    {
      fullName: 'Occult Lore',
      details: 'When you consult your patron for information, you may ***dispel uncertainties*** with '
        +' +CHANNEL. If you do so, on a 7-9 the information is still directly useful, but using it '
        + 'would cause some unforeseen complication entertaining or benefcial to your patron.',
      moveSelected: false,
      roll: 'CHANNEL'
    },
    {
      fullName: 'Whims',
      details: 'Your patron is unfathomable, and their interests obscure. Your GM should, once per '
        + 'Sortie, give you some minor goal or abstract requirement your patron demands of '
        + 'you - it should be doable within the session. If you complete it, at the next dawn you '
        + 'may choose your boons instead of rolling. If you don\'t, give your patron 1 Inﬂuence.',
      moveSelected: false,
    },
    {
      fullName: 'Embrace Chaos',
      details: 'Whenever you roll a 10+, you may opt to instead take a partial success as if you had '
      + 'rolled a 7-9. If you do so, hold 1, which you may spend at any point before the end of'
      + 'the Sortie to do one of the following:\n\n'
      + '• Swap two of your Traits.\n'
      + '• Increase the level of success on your next roll by one.\n',
      moveSelected: false,
    },
    {
      fullName: 'Re-weave Reality',
      details: 'When you use a piece of equipment to make a move, e.g using a weapon to ***strike decisively***,'
      + ' you can ignore one of its tags OR act as if it had an additional one of'
      + ' your choice. When you do so, give your patron 1 Inﬂuence',
      moveSelected: false,
    },
    {
      fullName: 'Relinquish',
      details: 'If a part of your Astir is damaged or destroyed and you take a peril as a result, you '
      + 'may relinquish your boons; losing them until you receive boons again but fixing '
      + 'that part and losing the peril. You cannot re-roll relinquished boons.',
      moveSelected: false,
    },
    {
      fullName: 'Share the Burden',
      details: 'When you cool off, you may choose to succeed as you had rolled a 1+. If you do so, give your patron 1 Influence',
      moveSelected: false,
    },
    {
      fullName: 'Borrowed Power',
      success: 'Hold 3',
      partial: 'Hold 1, or be in peril and hold 3',
      roll: 'CHANNEL',
      details: 'When you request help from your patron, roll +CHANNEL and give your patron 1 Influence. You may spend your hold at any point during '
      + 'the Sortie 1-for-1 to use any ***boon*** you don\'t currently have, or you may spend 2 hold to make any move from another playbook.',
      moveSelected: false,
    }
  ],
  scout: [
    {
      fullName: 'Field Scout',
      details: 'You\'re an expert at managing operations in the field and supporting your allies. You’re agile and strong, you tend to notice things those in Astirs don\'t, '
      + 'and your size allows you access to spaces too small for them \n\n.'
      + 'You can wield tier II weapons without much difficulty, can reload weapons easily while on the move or under fire, and don’t need to ***bite the dust*** when threatened by harm from a higher tier than you.\n\n'
      + 'When you hold your own against Astirs or show yourself completely above the rank- and-file, advance a GRAVITY clock with someone who sees you and is impressed.',
      moveSelected: true,
    }, {
      fullName: 'Team Player',
      details: 'When you ***read the room***, you may pass the information you gain along and allow an ally to act with Advantage instead of you. When you do so, you may advance a GRAVITY clock with them if you have one.',
      moveSelected: false,
    }, {
      fullName: 'Mobility',
      roll: 'DEFY',
      success: 'Hold 3',
      partial: 'Hold 1',
      details: 'When you\'re fighting somewhere with the room to be acrobatic and mobile, roll +DEFY.\n\n'
      + '• Escape from something that binds, traps or impedes you\n'
      + '• Acquire high ground or a defensible position\n'
      + '• Get to somewhere or something before others can\n'
      + '• Avoid an incoming source of physical harm',
      moveSelected: false,
    }, {
      fulName: 'Improvisation',
      details: 'At the beginning of a Sortie, hold 3. You may spend 1 hold to change your approach for a single move. Explain to your Director what you did or used to do this.',
      moveSelected: false,
    }, {
      fullName: 'Natural Leader',
      details: 'When participating in a group move, you can always make the roll in place of whoever has the lowest relevant trait.',
      moveSelected: false,
    }, {
      fullName: 'Strong As Hell',
      details: 'You can carry and wield tier III weapons by taking a risk.',
      moveSelected: false,
    }, {
      fullName: 'Patch Job',
      details: 'When you ***cool off*** to remove a risk or the ‘overheating’ tick from an Astir, you can do it in a few moments rather than minutes, even while the Astir is still moving. ' 
      + 'Instead of the usual result, on a 7-9 you attract unwanted attention.',
      moveSelected: false,
    }, {
      fullName: 'Guerilla',
      roll: 'KNOW',
      success: 'Choose 2',
      partial: 'Choose 1',
      details: 'When you attempt to evade detection or sneak past others, roll +KNOW. \n\n'
      + '• You avoid detection.\n'
      + '• You find something hidden or forgotten.\n'
      + '• You can set up for an ambush.\n'
      + '• You find a way to allow others to follow you without being detected.',
      moveSelected: false,
    }, {
      fullName: 'Pathfinding',
      details: 'When you\'re leading a group that is travelling a long distance, hold 3, and spend it 1- for-1 on the following options while you travel:\n\n'
      + '• You lead the group past an area of difficult terrain without issue.\n'
      + '• You find a comfortable, sheltered place to set up camp.\n'
      + '• You\'re familiar with the area: ***dispel uncertainties*** regarding it or the things in it with Advantage during the journey.\n'
      + '• You find a shortcut, reducing the length of your journey but adding complications.\n'
    }
  ],
  captain: [
    {
      fullName: 'Coordinator',
      details: 'When you roll a 10+ to ***help or hinder*** and choose to help, give increased success instead of Advantage.\n\n'
      + 'When you roll a 6 or below while rolling +CREW, advance a GRAVITY clock with someone who has put their trust in you.',
      moveSelected: true,
    },
    {
      fullName: 'In Command',
      details: 'You are the Carrier’s captain, and naturally have command of its crew. While at the helm of the Carrier, you may order the crew to:\n\n'
      + '• ***Exchange blows*** and ***strike decisively*** with +CREW, using the Carrier’s weaponry.\n'
      + '• ***Weather the storm*** with +CREW to perform evasive actions.\n'
      + '• ***Read the room*** with +CREW to assess the battlefield.\n\n'
      + 'Additionally, both Carrier and crew are part of your character as far as risks and perils are concerned, just like an Astir is an extension of its channeler. To reflect the many minds '
      + 'and hands at work for you, you are defenceless at 4 dangers while at the helm of your Carrier, rather than 3.',
      moveSelected: true,
    },
    {
      fullName: 'Tactical Genius',
      details: 'When you\'re supervising allies from afar during a Sortie, you can lever your tactical know-how into better positioning. Take 3 hold at the start of a Sortie, '
      + 'and spend it 1- for-1 to do the following: \n\n'
      + '• Remove one risk from an ally.\n'
      + '• Give an ally Advantage to their next move, describing how you advise or support them.\n'
      + '• Have an ally appear somehow in a place they are needed.\n',
      moveSelected: false,
    },
    {
      fullName: 'Force Multiplier',
      details: 'You acquire something - a tool, ship upgrade, a caged malevolent sentience, etc - that allows the Carrier and it’s staff to operate far better than usual, but it has a downside. '
      + 'Once per Sortie you may increase your level of success on a move, but choose 1\n\n'
      + '• It whispers in your ear - change one of your Ideals to represent its demands.\n'
      + '• It’s fragile and needs protecting. It grants no benefit while damaged or destroyed.\n'
      + '• It takes up a lot of resources - spend 1 SUPPLY on it when someone ***leads a Sortie***, or it stops working until you reawaken it by spending 3.',
      moveSelected: false,
    },
    {
      fullName: 'Surprise Requisition',
      details: 'When you dispatch supplies to another character or reveal something extra you had them deployed with all along, roll +CREW. On a 10+, choose 1 for free. On a 7-9, you had to '
      + 'requisition that gear personally - pay 1 SUPPLY, or drop 1 Stake from a Faction as they spread themselves thin to help you.\n\n'
      + '• A weapon rendered unusable by damage or lack of ammo is replaced/rearmed.\n'
      + '• A weapon gains the bane tag until the end of the scene.\n'
      + '• A weapon gains the ruin tag for one shot or strike.\n'
      + '• An Astir changes it’s approach until the end of the scene.',
      moveSelected: false,
    },
    {
      fullName: 'Fire Support',
      details: 'When you provide instruction and call shots for the Carrier’s crew, you may ***exchange harm*** and ***strike decisively*** using +KNOW and the Carrier’s weaponry.',
      moveSelected: false,
    },
    {
      fullName: 'Information Network',
      details: 'When you have your crew search for information, you may ***dispel uncertainties*** with +CREW.\n\n'
      + 'When you contact your superiors for relevant intel, you may ***dispel uncertainties*** with +TALK.',
      moveSelected: false,
    },
    {
      fullName: 'Resupply Priority',
      details: 'Your Carrier gains 1 SUPPLY whenever you start Downtime.',
      moveSelected: false,
    },
    {
      fullName: 'Human Resources',
      details: 'When you read the room, you may also choose from the following questions: \n\n'
      + '• What is the crew’s mood like?\n'
      + '• Who is responsible for a problem on-board the Carrier?\n'
      + '• What could be a problem for the crew in the immediate future?',
      moveSelected: false,
    }
  ],
  diplomat: [
    {
      fullName: 'Negotiator',
      details: 'You may ***read the room*** with +TALK when mediating or taking part in a conversation/discussion. When you successfully negotiate or advocate for something important '
      + 'to you, advance a GRAVITY clock with another party in the discussion.',
      moveSelected: true,
    },
    {
      fullName: 'Under The Table',
      details: 'When you set up a clandestine meeting, choose 2: \n\n'
      + '• There’s no risk of an ambush or interference.\n'
      + '• Third parties aren’t privy to the contents of the meeting.\n'
      + '• All parties are willing to discuss in good faith.\n'
    },
    {
      fullName: 'Sharp Tongue',
      details: 'When you ***exchange blows*** with +TALK, on a roll of 12+ your opponent is put in *peril*.',
      moveSelected: false,
    },
    {
      fullName: 'Sharper Knives',
      details: 'Daggers and other small weapons are your forte; you can always keep at least one'
      + ' concealed on your person, no matter how well checked, and you ***strike decisively***'
      + ' with Advantage while using one to cause harm. This might extend to improvised'
      +  'weapons, also. You probably struggle not to show off or toy around with knives in'
      + ' casual situations. It\'s unsettling',
      moveSelected: false,
    },
    {
      name: 'Stir The Crowd',
      roll: 'TALK',
      success: 'Choose 1',
      partial: 'Choose 2, or let your Director choose 1.',
      details: 'When you attempt to inspire dissent against the Authority, roll +TALK.\n\n'
      + '• It takes a tragedy to truly galvanise people.\n'
      + '• In doing so, you become known and targeted.\n'
      + '• You have no control or inﬂuence over any acts of protest.\n'
      + '• People feel better, but nothing really changes\n',
      moveSelected: false,
    },
    {
      fullName: 'Bureaucrat',
      details: 'When you would ***exchange blows*** with +TALK to slow someone down or distract'
      + ' them with regulations, bylaws, or whatever piece of red tape you can think of, you'
      + ' also choose one from the below even on a fail.
      + '• You\'re not lying - they’ll really be in trouble if they don’t listen to you.'
      + '• You can hold them up for more than a brief moment.'
      + '• They won\'t remember or recognise you.'
      + '• You don\'t need to take a *risk*.',
      moveSelected: false,
    }, 
    {
      fullName: 'Irrefutable',
      details: 'When you argue or advocate for something and back up your point of view with hard'
      + ' evidence or facts, hold 1. When you reach 3 hold, you may spend them to strike'
      + ' decisively with +TALK against someone who isn\'t defenceless.',
      moveSelected: false,
    },
    {
      fullName: 'Connected',
      roll: 'TALK',
      details: 'When you meet someone, roll +TALK.',
      success: 'You\'re familiar with them, and you may choose whether their view of you is positive or negative.',
      partial: 'You\'re familiar with them, but the director decides how they think of you.',
      moveSelected: false,
    },
    {
      fullName: 'Shree Klime',
      details: 'During Downtime, you may also prepare an alias or disguise. Most people will'
      + ' believe you are who you say you are, unless you\'re disguised as someone they\'re'
      + ' very familiar with, or they are given reason to thoroughly check your person or any'
      + ' identifcation. You may take shore leave to secure 2 of the following:\n\n'
      + '• You have ID that is either legitimate or so well faked it is impossible to tell the difference.\n'
      + '• There\'s a reason or expectation for someone ftting your disguise to show up.\n'
      + '• You\'ve had something useful planted ahead of time - select a weapon or piece of equipment (one you have access to) to be hidden just where you\'ll need it.',
      moveSelected: false,
    }
  ]

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
        name: 'Mana Focus',
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
        name: 'Transport or Service Golem',
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
