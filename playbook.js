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
      succcess: 'They take Advantage (help) or Disadvantage (hinder) to their roll.',
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
      + '• A **clarity ritual** - When you **read the room&&, you may ask questions of a broader situation than here and now.\n\n'
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
    }
  ],
  imposter: [
    {
      fullName: 'Arcane Augments',
      detials: 'Impostors control their Astir using magical augmentations, like artifcial limbs or '
      + 'organs. These augmentations allow a non-magic user to power and control an Astir, '
      + 'but otherwise do not interfere with your life unless you (the player) decide so. Being '
      + 'bonded to magic in this way often leads to it affecting the body and vice versa, '
      + 'irreversibly tying their magic to their emotional and physical state.\n\n'
      + 'Your CHANNEL is increased by 1 for each danger you have (upto a max of +3). '
      + 'When someone you have GRAVITY with sees you be put in peril, advance it.',
      moveSelected: true,
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
imposter: {
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
      name: 'Imposter Gear',
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
      tags: ['melee', '***mundane***'],
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