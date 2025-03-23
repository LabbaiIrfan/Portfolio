// Imports
import {
  mobile,
  backend,
  creator,
  tabrez,
  zakaullah,
  shadullah,
  web,
  app,
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
  problem,
  design,
  leadership,
  gdg,
  algorithm,
  codechef,
  aiktc,
  django,
  c,
  cpp,
  mysql,
  python,
  flutter,
  dart,
  lightroom,
  firebase,
  vercel,
  netlify,
  bootstrap,
  vscode,
  ascode,
  koftea,
  portfolio,
  bank,
  bonhomie,
  calculator,
} from "../assets";

// Navigation Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services
const services = [
  { title: "Software Developer", icon: creator },
  { title: "UI/UX Designer", icon: design },
  { title: "Leadership", icon: leadership },
  { title: "Problem Solver", icon: problem },
];

// Technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  // { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  // { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  // { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "C", icon: c },
  { name: "Cpp", icon: cpp },
  { name: "MySQL", icon: mysql },
  { name: "Django", icon: django },
  { name: "Python", icon: python },
  { name: "Flutter", icon: flutter },
  { name: "Dart", icon: dart },
  { name: "Lightroom", icon: lightroom },
  { name: "Firebase", icon: firebase },
  { name: "Vercel", icon: vercel },
  { name: "Netlify", icon: netlify },
  { name: "Bootstrap", icon: bootstrap },
  { name: "VS Code", icon: vscode },
  { name: "AS Code", icon: ascode },

];

// Experiences
const experiences = [
  {
    title: "Core Design Team Member",
    company_name: "Google Developer Group Club (GDGC), AIKTC",
    icon: gdg,
    iconBg: "#383E56",
    date: "September 2024 - April 2025",
    points: [
      "Led the core design team of the Google Developer Group Club (GDGC) at Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC), demonstrating strong leadership and creative skills.",
      "Conceptualized and designed visually appealing graphics, event posters, and social media content that significantly enhanced the club's digital presence.",
      "Managed and maintained the club's social media handles, ensuring consistent branding and professional presentation.",
      "Conducted a comprehensive workshop on React.js for college students, imparting hands-on experience and fostering practical understanding of web development."
    ],
  },
  {
    title: "Technical Secretary",
    company_name: "Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC)",
    icon: aiktc,
    iconBg: "#E6DEDD",
    date: "October 2024 - September 2025",
    points: [
      "Held the position of Technical Secretary at AIKTC, demonstrating strong leadership, communication, and marketing skills.",
      "Organized and coordinated various college events, managing technical and logistical aspects to ensure successful execution.",
      "Developed a website for college event registration, streamlining the process and enhancing user experience.",
      "Led cross-functional teams to promote events through digital marketing and on-campus campaigns, significantly increasing participation.",
      "Strengthened community engagement by effectively communicating with stakeholders and ensuring smooth coordination."
    ],
  },
  {
    title: "Core Member",
    company_name: "CodeChef Club, AIKTC",
    icon: codechef,
    iconBg: "#383E56",
    date: "October 2024 - April 2025",
    points: [
      "Served as a core member of the CodeChef Club at AIKTC, actively contributing to community growth and skill development.",
      "Organized and conducted multiple workshops, coding contests, and competitive programming events to enhance problem-solving skills among students.",
      "Collaborated with the Programmers Club to organize a 32-hour hackathon, fostering innovation and teamwork.",
      "Promoted a coding culture on campus by encouraging peer learning and collaboration through various events and activities."
    ],
  },
  {
    title: "Design and Technical Member",
    company_name: "Algorithm 9.0 Hackathon, AIKTC",
    icon: algorithm,
    iconBg: "#E6DEDD",
    date: "December 2024 - April 2025",
    points: [
      "Served as a design and technical member for Algorithm 9.0, a 32-hour hackathon held at AIKTC.",
      "Contributed to website development for smooth and efficient event registration.",
      "Designed various banners, posters, and certificates, ensuring a cohesive and professional visual identity for the event.",
      "Collaborated with the organizing team to streamline technical aspects and enhance participant experience."
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial: "I have had the pleasure of mentoring Irfan during his time at AIKTC, and I am consistently impressed by his dedication to software development and his eagerness to learn. His problem-solving abilities and innovative approach to projects set him apart from his peers. I am confident that his skills and passion will drive him to excel in the software industry.",
    name: "Zakaullah Ansari",
    designation: "Professor",
    company: "AIKTC",
    image: zakaullah,
  },
  {
    testimonial: "As the Technical Secretary of our college, Irfan has consistently demonstrated exceptional leadership and technical skills. He has successfully organized numerous technical events, showcasing his ability to manage tasks efficiently and lead with dedication. His passion for technology and commitment to excellence make him a valuable asset to any team.",
    name: "Tabrez Khan",
designation: "HOD, Department of Engineering",
company: "AIKTC",
    image: tabrez,
  },
  {
    testimonial: "Irfan has been an enthusiastic and dedicated student, actively participating in various events and activities. His passion for learning and commitment to personal growth are truly commendable. Irfan’s positive attitude and collaborative spirit make him a valuable asset to any team.",
    name: "Shadullah Shaikh",
    designation: "Student Coordinator and Club Lead",
    company: "AIKTC",
    image: shadullah,
  },
  
];

// Projects
const projects = [
  {
    name: "Bank Management System",
    description:
      "A comprehensive system to manage banking operations, including user account management, transaction handling, and balance tracking. This project demonstrates the ability to create efficient, secure, and user-friendly financial applications.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },

    ],
    image: bank,
    source_code_link: "https://github.com/LabbaiIrfan/Bank-Management",
  },
  {
    name: "KofTea",
    description:
      "A visually captivating landing page designed for a fictional coffee and tea brand. This project demonstrates creativity in design and proficiency in creating an engaging, user-friendly interface, showcasing the brand’s identity and products through a clean and modern layout.",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: koftea,
    source_code_link: "https://github.com/LabbaiIrfan/codsoft/tree/main/Landing%20page",
  },
  {
    name: "Calculator",
    description:
      "A fully responsive calculator with an adaptive design for various screen sizes. It features efficient logical operations and an intuitive user interface, demonstrating the ability to create functional and visually appealing web applications.",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: calculator,
    source_code_link: "https://github.com/LabbaiIrfan/codsoft/tree/main/Calculator",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio featuring a contact form that stores user-submitted data in a database. This project highlights the ability to integrate front-end design with back-end functionality, ensuring seamless data collection and user interaction.",
    tags: [
      { name: "Html & Css", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Django", color: "pink-text-gradient" },

    ],
    image: portfolio,
    source_code_link: "https://github.com/LabbaiIrfan/portfolio-django",
  },
  {
    name: "Bonhomie Event Website",
    description:
      "A dedicated event registration platform for a college event, enabling participants to register and store their details in a database. This project showcases the ability to develop a user-friendly interface with robust back-end functionality for efficient data management.",
    tags: [
      { name: "React Js", color: "blue-text-gradient" },
      { name: "Node JS", color: "green-text-gradient" },
      { name: "Mongo DB", color: "pink-text-gradient" },
    ],
    image: bonhomie,
    source_code_link: "https://github.com/LabbaiIrfan/bonhomie-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
