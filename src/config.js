const config = {
  name: 'Malachi Holland',
  portrait: '/malachi-portrait-square.png',
  email: 'malachivaillancourt@gmail.com',
  socials: [
    {
      name: 'GitHub',
      link: 'https://github.com/L3G5ND',
    },
    {
      name: 'Discord',
      link: 'https://discordapp.com/users/512795535552544806/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/L3G5ND_',
    },
  ],

  languages: ['Python', 'C++', 'C#', 'JavaScript', 'Lua', 'SQL'],
  skills: [
    'Python',
    'C++',
    'C#',
    'JavaScript',
    'Lua',
    'React',
    'Next.js',
    'MongoDB',
    'SQL',
    'Chrome Extensions',
  ],
  projects: [
    {
      id: 'PyNumReader',
      name: 'Python Number Reading AI',
      languages: ['Python'],
      stack: ['PyTorch', 'Tkinter'],
      description:
        'I wanted to see how a neural network learns to read handwritten digits. This Python and PyTorch project explores supervised learning, with the goal of turning changing weights and biases into a visual window into the training process.',
      wip: true,
    },
    {
      id: 'TamperScript',
      name: 'Tamper Script',
      languages: ['JavaScript'],
      stack: [
        'HTML',
        'CSS',
        'Chrome Extensions',
        'Webpack',
        'Babel',
        'Esprima',
        'Escodegen',
      ],
      description:
        'A Chrome extension that lets users make websites their own with custom scripts. Inspired by Violentmonkey, I built the script injector, storage system, and interface that bring those scripts into the browser.',
      github: 'https://github.com/L3G5ND/TamperScript',
    },
    {
      id: 'RoTrader',
      name: 'Roblox Limiteds Trader',
      languages: ['Python'],
      stack: [],
      description:
        'A Python trading bot built around my own rules for spotting opportunities in Roblox limited items. Controlled through terminal commands, it is designed to handle outgoing and incoming trades with the aim of growing inventory value automatically.',
      wip: true,
    },
    {
      id: 'SniperX',
      name: 'Roblox Limiteds Sniper',
      languages: ['JavaScript'],
      stack: ['Node.js', 'Axios', 'Chalk'],
      description:
        'A tool built to spot Roblox limited items listed at a bargain. It watches selected items against custom price limits or discounts from recent average prices, with automatic purchasing logic, purchase logs, and Discord notifications.',
      github: 'https://github.com/L3G5ND/SniperX',
    },
    {
      id: 'MoneyAnarchyAPI',
      name: 'Roblox Game Backend',
      languages: ['Python'],
      stack: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'MySQL'],
      description:
        'The backend behind the economy in my Roblox game, where players drive the market. It tracks item counts and sales across every server, using recent transactions between players to keep prices moving with the market.',
      github: 'https://github.com/L3G5ND/MoneySimulatorAPI',
    },
    {
      id: 'CSDeals',
      name: 'CSGO Deals Finder',
      languages: ['JavaScript'],
      stack: [
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Socket.IO',
        'EJS',
        'jQuery',
        'CSS',
      ],
      description:
        'A single place to find CS:GO skin deals across Skinport and Waxpeer. Live listings, price comparisons, and filters help users spot opportunities as they appear, backed by an account system with different access tiers.',
      github: 'https://github.com/L3G5ND/CS-Deals',
    },
    {
      id: 'CSDealsExtension',
      name: 'CSGO Deal Info Chrome Extension',
      languages: ['JavaScript'],
      stack: ['Chrome Extensions', 'Webpack', 'Babel'],
      description:
        'Price comparisons right where you shop. This Chrome extension adds Steam and BUFF prices, deal percentages highlighted with color, and Pricempire links to Skinport item cards, helping users spot good listings and filter out poor deals.',
      github: 'https://github.com/L3G5ND/CS-Deals-Extension',
    },
  ],

  roblox: {
    games: [
      {
        name: 'Money Anarchy',
        description:
          'Open world simulator. Explore and progress through new islands. Trade, sell, buy, or auction pets/items at the Trading Island. A live economy with values and item counts. Sell items at the merchant, upgrade items, buy boats.',
        video: '/MoneyAnarchy-Video.mp4',
        link: 'https://www.roblox.com/games/100772130331089/Money-Anarchy',
      },
      {
        name: 'Garden and Steal',
        description:
          'Roll plants or defense items. Open crates around the map for plants. Make a garden. Defend your garden from other players. Steal plants from other players. Upgrade your stats. Place special items to mutate plants, spawn events, and grow your garden faster.',
        video: '/GardenAndSteal-Video.mp4',
        link: 'https://www.roblox.com/games/101982549850771/Garden-and-Steal',
      },
    ],
    libraries: [
      {
        name: 'Vision',
        languages: ['Lua'],
        stack: ['Roblox', 'Rojo', 'Wally'],
        description: 'My own implementation of React on Roblox.',
        link: 'https://github.com/L3G5ND/Vision',
      },
      {
        name: 'Roblox-Profile',
        languages: ['Lua'],
        stack: ['Roblox', 'Rojo', 'Wally'],
        description: 'Easily save/manipulate data to Roblox servers.',
        link: 'https://github.com/L3G5ND/Roblox-Profile',
      },
      {
        name: 'Roblox-Replicator',
        languages: ['Lua'],
        stack: ['Roblox', 'Rojo', 'Wally'],
        description: 'Makes it easy to replicate data between the server and client.',
        link: 'https://github.com/L3G5ND/Roblox-Replicator',
      },
      {
        name: 'Roblox-Networker',
        languages: ['Lua'],
        stack: ['Roblox', 'Rojo', 'Wally'],
        description: 'An easy to use Networking library for Roblox Lua.',
        link: 'https://github.com/L3G5ND/Roblox-Networker',
      },
    ],
    projects: [
      {
        name: 'AI',
        image: '/ai-robot-thumbnail.png',
        description:
          'A robot taught to avoid walls with neuroevolution. I also experimented with back propagation using gradient descent.',
        video: 'https://www.youtube.com/embed/9J46vMStWZk',
      },
      {
        name: 'Mirror',
        image: '/mirror-project-thumbnail.png',
        description:
          "A mirror made with a viewport frame. Math was done differently than Egomoose's version though simular in some ways.",
        video: 'https://www.youtube.com/embed/vX7UdVdmTQs',
      },
      {
        name: 'Basketball',
        image: '/basketball-project-thumbnail.png',
        description: 'Basketball using Roblox physics.',
        video: 'https://www.youtube.com/embed/_bv9daQsqTM',
      },
      {
        name: 'Camera Effects',
        image: '/camera-effects-project-thumbnail.png',
        description: 'Camera manipulation effects. Nausea effect like Minecraft.',
        video: 'https://www.youtube.com/embed/0Hj9grPULHA',
      },
    ],
    skills: [
      {
        name: 'Rojo',
        link: 'https://rojo.space/',
      },
      {
        name: 'Wally',
        link: 'https://github.com/UpliftGames/wally',
      },
      {
        name: 'Roact',
        link: 'https://roblox.github.io/roact/',
      },
      {
        name: 'Rodux',
        link: 'https://roblox.github.io/rodux/',
      },
      {
        name: 'Knit',
        link: 'https://sleitnick.github.io/Knit/',
      },
      {
        name: 'Datastore2',
        link: 'https://kampfkarren.github.io/Roblox/',
      },
      {
        name: 'Promises',
        link: 'https://eryn.io/roblox-lua-promise/',
      },
      {
        name: 'Cmdr',
        link: 'https://eryn.io/Cmdr/',
      },
    ],
  },
};

export default config;
