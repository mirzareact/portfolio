import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nedim,
  sanin,
  figma,
  solidity,
  highschool,
  skola,
  weather,
  webstore,
  faris,
  threejs,
  contacts,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain developer",
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
    name: "solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Myself",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2022 - Now",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating other web applications using various web utilities and libraries.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: 'Gimnazija "Mushin Rizvić" Kakanj',
    icon: highschool,
    iconBg: "#383E56",
    date: "November 2023 - February 2024",
    points: [
      "Developing and maintaining web application using React.js and Node.js.",
      "Collaborating with other developer in building news based web application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and maintaining repository activity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our page.",
    name: "Faris Mušija",
    designation: "Friend",
    company: "Mirza",
    image: faris,
  },
  {
    testimonial:
      "I've never met friend who truly cares about their clients' success like my friend does.",
    name: "Nedim Neimarlija",
    designation: "Friend",
    company: "Mirza",
    image: nedim,
  },
  {
    testimonial:
      "After my friend optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Sanin Kambur",
    designation: "Friend",
    company: "Mirza",
    image: sanin,
  },
];

const projects = [
  {
    name: "High School Web App",
    description:
      "Web-based platform that allows users to get information about varuious events and news about my high school.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skola,
    main_link: "https://gimnazijakakanj.edu.ba",
    source_code_link:
      "https://github.com/gimnazijakakanjwebstranica/webStranicaSkole",
  },
  {
    name: "Weather App",
    description:
      "Web application that enables users to search for current weather of a entered city. It uses Geolocating and Weather API's for displaying current weather.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    main_link: "https://mirza-weather-app-react.netlify.app/",
    source_code_link: "https://github.com/mirzareact/weather-app",
  },
  {
    name: "Web Store",
    description:
      "A comprehensive web store app that allows users to buy different products. Made using Stirpe for checkout.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webstore,
    main_link: "https://mirzawebstore.netlify.app/",
    source_code_link: "https://github.com/mirzareact/webStore",
  },
  {
    name: "Contacts manager app",
    description:
      "A comprehensive web app that user to manage contacts very easily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "localStorage",
        color: "pink-text-gradient",
      },
    ],
    image: contacts,
    main_link: "https://mirza-contact-manager-react.netlify.app/",
    source_code_link: "https://github.com/mirzareact/contacts-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
