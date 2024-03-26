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
  array,
  voice,
  mindstorm,
  chatgpt,
  littlelemon,
  movieseverywhere,
  threejs,
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
    title: "Front-end Enginner",
    icon: mobile,
  },
  {
    title: "Back-end Engineer",
    icon: backend,
  },
  {
    title: "Content Engineer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Co-Founder",
    company_name: "Array",
    icon: array,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Co-founder of Array, an IT services and consulting firm.",
      "Shape and drive the company's strategic vision.",
      "Collaborate with the team in developing innovative solutions.",
      "Engage with clients, foster relationships, and identify new business opportunities.",
    ],
  },
  {
    title: "Deputy Director",
    company_name: "Voice",
    icon: voice,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - March 2023",
    points: [
      "Deputy Director at Voice Fast Debating Society.",
      "Overseeing all operational functions.",
      "Developing strategies to streamline processes.",
      "Creating content for various events.",
    ],
  },
  {
    title: "Head Event Manager",
    company_name: "Mindstorm Studios Student Chapter",
    icon: mindstorm,
    iconBg: "#383E56",
    date: "Nov 2022 - March 2023",
    points: [
      "Led successful execution of multiple events organized by Mindstorm Studios.",
      "Developed effective event management strategies.",
      "Implemented these strategies to increase attendee engagement and satisfaction.",
    ],
  },
  {
    title: "Head Event Manager",
    company_name: "Voice",
    icon: voice,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Led successful execution of multiple events organized by Voice.",
      "Developed effective event management strategies.",
      "Implemented these strategies to increase attendee engagement and satisfaction.",
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
    name: "OpenAI API Integration",
    description:
      "A project focusing on: Connect to the OpenAI API; Construct a Prompt and Understand the Response; Add Interactions to the Chat Model; Customise the Zoo Assistant; Handle errors and Debugging",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/saadahmad-1/openai-s-chatgpt-api-integration-python",
  },
  {
    name: "LittleLemon",
    description:
      "LittleLemon's Basic Web application. Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: littlelemon,
    source_code_link: "https://github.com/saadahmad-1/LittleLemon-django-project",
  },
  {
    name: "Movies Everywhere",
    description:
      "Movies Everywhere is an innovative web application designed for movie enthusiasts, offering a seamless experience for exploring movies. It has a user-friendly interface linked to a vast database of movies.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: movieseverywhere,
    source_code_link: "https://github.com/saadahmad-1/movies-everywhere",
  },
];

export { services, technologies, experiences, testimonials, projects };
