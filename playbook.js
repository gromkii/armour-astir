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
      success: 'They take Advantage (help) or Disadvantage (hinder) to their roll.',
      partial: 'As above, but you become entangled in the consequences of their actions, and possibly cause them.'
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
  paradigm : [
    {
      fullName: 'Evangelize',
      moveSelected: true,
      details: 'You are in service of a deity or faith and are responsible for the spiritual well-being of your Carrier\'s crew. You gain an additional action during Downtime that can only be used to give formal service or privately consult with a crew-member, both using the talk it out move.
    },
    {
      fullName: 'Tenets',
      moveSelected: true,
      details: 'Instead of Ideals, write three tenets that represent your deity’s will. When you discuss your faith with someone or learn something about how they personally relate to faith and religion, advance a GRAVITY clock with them if you have one. If you ever sacrifice or break a tenet, it is lost forever; replace it with an Ideal instead of crossing it off and taking an advancement. Your CHANNEL Trait is also reduced by 1 until you make amends in whatever way is appropriate for your faith.\n\n'
      + 'Example tenets might be:\n\n'
      + '• Violence is a road taken when all others are closed.'
      + '• Share your faith freely, that it might spread.'
      + '• Scepticism is an affront to the divine.'
      + '• From each according to his ability, to each according to his needs.'
    },
    {
      fullName: 'Divine Guidance',
      moveSelected: false,
      roll: 'CHANNEL',
      success: 'Your Director will tell you something directly useful you know about the situation or subject at hand.',
      partial: 'The information is still direclty useful, but it is difficult to discern if your answer came from the intended deity.',
      details: 'When you consult your deity for information or guidance, you may ***dispel uncertainties*** with +CHANNEL.',
    },
    {
      fullName: 'Inspire Focus',
      moveSelected: false,
      details: 'Once per Sortie, you may take a visible position over the battlefield and inspire confidence and clarity in your allies that see you - they each clear a risk and take Advantage to their next roll.',
    },
    {
      fullName: 'Bless',
      moveSelected: false,
      details: 'When you enter battle with a group of allies, give up to four people (including yourself) Advantage when they next ***bite the dust***.',
    },
    {
      fullName: 'Safeguard',
      moveSelected: false,
      details: 'When you ***exchange blows*** and someone ***helps or hinders*** you, you can protect them from any harm they might suffer as a result. When you ***help or hinder*** someone who is ***exchanging blows***, you can suffer any harm taken in their place.',
    },
    {
      fullName: 'Turn Unearthly',
      moveSelected: false,
      details: 'When piloting an Astir you are attuned to, you may project an aura that causes otherworldly creatures to flee.',
      roll: 'CHANNEL',
      success: 'Any creature not native to this plane is sent back to their home plane instantly. If they are powerful enough to return themselves (or are summoned) during the same Sortie, they are in *peril* (turned) as your divine presence sickens them.',
      partial: 'They must flee from your sight, and are in *peril* (turned).',
    },
    {
      fullName: 'Firebrand',
      moveSelected: false,
      rolls = ['TALK', 'CHANNEL'],
      success: 'Choose 2',
      partial: 'Choose 1',
      miss: 'Your words are misinterpreted, co-opted, or misrepresented in a terrible way.',
      details: 'When you openly and loudly advocate for something related to one of your tenets, roll the highest of +TALK or +CHANNEL. Choices:\n\n'
      + '• Your words reach people far beyond where your voice is heard.'
      + '• Even those not of your faith connect to your message.'
      + '• You are not targeted immediately for what you preach.',
    },
    {
      fullName: 'Consecrate Ground',
      moveSelected: false,
      roll: 'CHANNEL'
      details: 'When you attempt to imbue an area or building with your divine power and presence, roll +CHANNEL. Choices:\n\n'
      + '• Creatures opposed by your deity cannot enter the consecrated area.'
      + '• Creatures within your consecrated area cannot take violent action against each other.'
      + '• Creatures within the consecrated area ***cool off*** with Advantage.'
      + '• Creatures within your consecrated area cannot knowingly lie.',
    },
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
  }
}
