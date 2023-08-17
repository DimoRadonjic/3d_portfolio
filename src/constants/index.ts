import {
  // mobile,
  // backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  profitappLogo,
  threejs,
  sass,
  customShirtSite,
  imageGallery,
  metaverseSite,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'React Developer',
    icon: web,
  },
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  // },
  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  // },
  // {
  //   title: 'Content Creator',
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'ProfitApp',
    icon: profitappLogo,
    iconBg: '#383E56',
    date: 'Sept 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Custom Shirt Creation ThreeJS Project',
    description:
      'Website where users can easily design personalized shirts. Choose colors, upload logos or images, and even experiment with AI-generated images to create a shirt that reflects your unique style.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: customShirtSite,
    site_link: 'https://custom-shirt-creation.netlify.app',
    source_code_link: 'https://github.com/DimoRadonjic/threejs_ai_project',
  },
  {
    name: 'AI Images Showcase',
    description:
      "Website where users can bring their ideas to life. Simply input your name and provide a prompt for the AI to work its magic. Watch as the AI generates stunning images tailored to your input. Share your creations with the community, allowing visitors to witness the art you've conjured and the prompts that inspired it.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'netlify-serverless',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: imageGallery,
    site_link: 'https://image-generation-gallery.netlify.app',
    source_code_link:
      'https://github.com/DimoRadonjic/project_ai_mern_image_generation',
  },
  {
    name: 'Metaverse',
    description:
      "Discover METAVERUS: Your portal to an extraordinary metaverse experience. Immerse yourself in virtual realms that transcend reality, brought to life through VR technology. Select your desired destination, effortlessly enter, and unlock boundless exploration. Stay updated on new worlds, connect with friends, and gain insights into the metaverse's evolving impact. METAVERUS is your gateway to a captivating digital frontier where imagination knows no limits.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverseSite,
    site_link: 'https://metaverse-next-ts.netlify.app',
    source_code_link: 'https://github.com/DimoRadonjic/metaverse_next_ts',
  },

  {
    name: 'Magic Match',
    description:
      'Welcome to our memory-testing platform! Put your memory to the test as you engage with our captivating game, matching pairs of cards and honing your recall abilities.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverseSite,
    site_link: 'https://memory-game-dr.netlify.app/',
    source_code_link: 'https://github.com/DimoRadonjic/Memory-app',
  },
];

export { services, technologies, experiences, testimonials, projects };
