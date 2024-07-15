import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  portfolio,
  paisaposcket
} from "../assets";

const randomImage = "https://source.unsplash.com/random/400x300"; // URL for a random image from Unsplash
const invader="https://th.bing.com/th/id/OIP.ju2hWFm6cocKNBe84mWMqAHaEL?rs=1&pid=ImgDetMain"
const imagemanage="https://th.bing.com/th/id/OIP.6GPYPBN8KFIOuOSw88ViWQHaET?rs=1&pid=ImgDetMain"
const cabbooking="https://www.octalsoftware.co.uk/blog/wp-content/uploads/2018/01/taxi-booking.jpg"
const iete="https://www.mailprotector.com/wp-content/uploads/2021/11/website-hacked-mailprotector-wordpress-scaled.jpg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    href: "https://drive.google.com/file/d/1O2rU8sGnRSJcF_bQ1GPHW25WkYRbSqtK/view?usp=drive_link",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "GoLang",
    icon: web,
  },
  {
    title: "BlockChain",
    icon: mobile,
  },
  {
    title: "Flutter",
    icon: web,
  },
  {
    title: "Designer",
    icon: creator,
  },
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Personal Portfolio",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/bhatiatanish225/Personal-Portfolio",
  },
  {
    name: "Paisa Pocket",
    
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "BlockChain",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: paisaposcket,
    source_code_link: "https://github.com/bhatiatanish225/HackMol-5.0",
  },
  {
    name: "IETE Flagathon Website",
    description: "",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
    ],
    image: iete, // Use random image if not available
    source_code_link: "https://ietetiet.com/",
  },
  {
    name: "Employee Management Website",
    description: "",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
    ],
    image: imagemanage, // Use random image if not available
    source_code_link: "https://github.com/bhatiatanish225/Employee-Managment-App",
  },
  {
    name: "Decentralized Cab Booking System",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "BlockChain",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: cabbooking, // Use random image if not available
    source_code_link: "https://github.com/bhatiatanish225/Hacplise4.0",
  },
  {
    name: "Space Invader Game",
    description: "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: invader, // Use random image if not available
    source_code_link: "https://github.com/bhatiatanish225/Space-Invader-Game-Using-python",
  },
];

export { services, technologies, experiences, testimonials, projects };
