let story = {
  room1: {
    name: "Chest Room",
    entrance: "Hello welcome to room 1",
    options:
      "1 - Inspect the large chest <br>2 - Enter the door to the left <br>3 - Enter the door to your right",
    response: [
      "The room is dark, but the chest is being illuminated somehow",
      'Once you get to the door you see the door is labeled "The Butchers Room"',
      'Once you get to the door you see the door is labeled "The Hallway"',
    ],
    extraOptions: {
      extra1:
        "1 - Inspect the alter the chest is on <br>2 - Inspect the candles <br>3 - Attempt to open the chest",
      response1: [
        "You try to move the chest but it appears to be far too heavy to move. You should have worked out more.",
        "Have been lit recently as there is hot wax still dripping from them.",
        "It is locked with a strange lock without a normal keyhole.",
      ],
      extra2:
        "1 - Cut your hand and bleed into the strange key slot. <br> 2 - Place a vial of cows blood in the strange key slot.",
      response2: [
        "“...you are free..” The voice whispers. Your vision begins to fade... You awaken in your bed. The cut on your hand has been bleeding on your bedsheet but other than the wound you are free from that place.",
        "“...YOU HAVE WRONGED ME...” The voice booms. The floor begins to break out from underneath you and you fall into the void. As you fall faster and faster you feel your body disappear till there is nothing left. You wake up in an unfamiliar place... The door is locked and the windows are barred... The only exit to this room is a trap door beneath the carpet... This time it’s locked... ",
      ],
    },
  },
  room2: {
    name: "The Butchery",
    entrance: "Hello welcome to room 2",
    options:
      "1 - Inspect the refrigeration unit in the back of the room <br>2 - Check out the butchers table <br>3 - Inspect the blood covered floor <br>4 - Return to the alter room",
    response: [
      "Hmm... the refrigeration unit is empty, but it smells like something is rotting",
      "There is meat on the table. You are getting very hungry.",
      "The blood on the floor.",
    ],
    extraOptions: {
      extra2: "1 - Eat the meat <br> 2 - Leave the meat alone.",
      response2: [
        "The meat is raw and you end up throwing it up... Wonder what diseases you just contracted",
        "Good call",
      ],
      HP: ["-25", ""],
    },
  },
  room3: {
    name: "The Hallway",
    entrance: "Hello welcome to room 3",
    options:
      "1 - Enter the door to the left <br>2 - Enter the door to the right <br>3 - Enter the large steel door <br>4 - Return to the chest room",
    response: [
      "",
      "",
      "Upon further inspection the door appears to be welded on all edges.",
    ],
    extraOptions: {},
  },
  room4: {
    name: "The Office",
    entrance: "Hello welcome to room 4",
    options:
      "1 - Inspect the desk <br>2 - Inspect the cubicles <br>3 - Inspect the whiteboard <br>4 - Exit to the hall",
    response: [],
    extraOptions: {
      extra1:
        "1 - Inspect the desk lamp. <br>2 - Open the drawers of the desk. <br>3 - Step away from the desk.",
      response1: [
        "It appears this is the only room here with electricity.",
        "You have found an empty vial and put it in your pocket.",
        "",
      ],
      items: ["Empty Vial"],
    },
  },
  room5: {
    name: "The Bathroom",
    entrance: "Hello welcome to room 5",
    options:
      "1 - Investigate the mirror <br>2 - Investigate the toilet <br>3 - Investigate the shower <br>4 - Exit the bathroom",
    response: [
      "",
      "",
      "The only thing to see are several soap scum riddled bottles of shampoo and a body floating in the tub... How poetic.",
      "You enter the hall again.",
    ],
    extraOptions: {
      extra1:
        "1 - Open the mirror cabinets <br>2 - Look in the sink <br>3 - Search the drawers <br>4- Step away from the sink",
      response1: [
        "All you find is an empty prescription bottle.",
        "As you look into the sink you see a straight razor in the water. You grab it and put it in your pocket.",
        "Opening each drawer you only find dead bugs lining the bottom.",
        "",
      ],
      extra2: "1 - <br>2 - ",
      items: ["Straight Razor"],
    },
  },
};
