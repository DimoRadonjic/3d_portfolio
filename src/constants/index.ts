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
  acmeLogo,
  flekaLogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
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
    title: "React Developer",
    company_name: "ProfitApp",
    icon: profitappLogo,
    iconBg: "#383E56",
    date: "May 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Acme",
    icon: acmeLogo,
    iconBg: "#383E56",
    date: "September 2023 - September 2024",
    points: [
      "Developing a dynamic information system using React, Redux, Tailwind CSS, Axios, and Typescript.",
      "Implementing a responsive table that dynamically adapts to backend changes for optimal user experience.",
      "Enabling users to download data in Excel (XLSX), PDF, and DOCX formats for versatile document exports.",
      "Facilitating seamless image uploads to enhance the comprehensive storage of employee data.",
      "Incorporating user authentication",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Fleka",
    icon: flekaLogo,
    iconBg: "#383E56",
    date: "January 2025 - July 2025",
    points: [
      "Worked on both legacy and new Angular-based web applications.",
      "Improved application performance through codebase refactoring and optimization.",
      "Collaborated closely with design and backend teams to implement new features.",
      "Enhanced SEO and API efficiency across multiple projects.",
      "Applied advanced performance techniques: lazy loading, tree shaking, asset minification, responsive image optimization, and OnPush change detection.",
    ],
  },
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Waste Reduction E-commerce Platform (MVP)",
    description:
      "Developed a sustainability-focused e-commerce platform (MVP) connecting buyers,sellers, and logistics providers, featuring real-time inventory management and integrated payment systems. Utilized Next.js with React & TypeScript for server-side rendering and automatic SEO optimization, while Go microservices handled concurrent marketplace transactions and real-time data synchronization with superior memory efficiency. Delivered the production-ready MVP independently, architecting complex multi-vendor dashboards  , dynamic pricing systems, and seamless payment gateway integrations.  The platform's intuitive interface and robust performance exceeded client expectations.Additionally, created a comprehensive admin panel with advanced reporting capabilities and user management systems.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tanstack query",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "golang",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    site_link: "",
    source_code_link: "",
  },
  {
    name: "Custom Shirt Creation ThreeJS Project",
    description:
      "Website where users can easily design personalized shirts. Choose colors, upload logos or images, and even experiment with AI-generated images to create a shirt that reflects your unique style.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: customShirtSite,
    site_link: "https://custom-shirt-creation.netlify.app",
    source_code_link: "https://github.com/DimoRadonjic/threejs_ai_project",
  },
  {
    name: "AI Images Showcase",
    description:
      "Website where users can bring their ideas to life. Simply input your name and provide a prompt for the AI to work its magic. Watch as the AI generates stunning images tailored to your input. Share your creations with the community, allowing visitors to witness the art you've conjured and the prompts that inspired it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "netlify-serverless",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: imageGallery,
    site_link: "https://image-generation-gallery.netlify.app",
    source_code_link:
      "https://github.com/DimoRadonjic/project_ai_mern_image_generation",
  },
  {
    name: "Metaverse",
    description:
      "Discover METAVERUS: Your portal to an extraordinary metaverse experience. Immerse yourself in virtual realms that transcend reality, brought to life through VR technology. Select your desired destination, effortlessly enter, and unlock boundless exploration. Stay updated on new worlds, connect with friends, and gain insights into the metaverse's evolving impact. METAVERUS is your gateway to a captivating digital frontier where imagination knows no limits.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverseSite,
    site_link: "https://metaverse-next-ts.netlify.app",
    source_code_link: "https://github.com/DimoRadonjic/metaverse_next_ts",
  },

  // {
  //   name: 'Magic Match',
  //   description:
  //     'Welcome to our memory-testing platform! Put your memory to the test as you engage with our captivating game, matching pairs of cards and honing your recall abilities.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'javascript',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: memoryGame,
  //   site_link: 'https://memory-game-dr.netlify.app/',
  //   source_code_link: 'https://github.com/DimoRadonjic/Memory-app',
  // },
];

export { services, technologies, experiences, testimonials, projects };
