import {
  FaDiscord,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Saksham Kanojia",
  info: "Full-stack developer | Data analyst ",
};

export const ABOUT = {
  text1:
    "I develop scalable, efficient, and visually compelling web applications using modern technologies.",
  text2:
    "Hello! I'm Saksham Kanojia, a full-stack developer and tech enthusiast specializing in the MERN stack. I have a passion for crafting innovative web solutions that blend creativity and functionality. My skills extend to blockchain development, where I've built decentralized applications, and QA testing, ensuring robust and reliable systems. Whether it's designing sleek user interfaces, managing seamless backends, or diving into automation testing, I approach every challenge with dedication and attention to detail. Outside of coding, I enjoy exploring emerging technologies and pushing the boundaries of what's possible. I am committed to delivering excellence in every line of code I write.",
};

export const PROJECTS = [
  {
    title: "SK-Home Real Estate site",
    subtitle:
      "A full-stack real estate platform enabling users to explore, book, and schedule property visits, featuring an integrated map built using React, Node.js, and MongoDB, Prisma, Leaflet, Material UI, Mantine UI ",
    image: image1,
  },
  {
    title: "Portfolio Site",
    subtitle:
      "A Prtfolio Site showcasing my hands-on experience in web development, built using React, Framer, Tailwind, Vite",
    image: image2,
  },
  {
    title: "Decentralized Crypto Currency Exchange",
    subtitle: "A Decentrlized Crypto Currency Exchange , where people can exchange their crypto and tokens without sending private keys , Built using : Ethereum Blockchain, React, Node, Express, MOralis API, 1inch Aggrigator, Ant Design",
    image: image3,
  },

  {
    title: "Weather Web Application",
    subtitle:
      "A weather application, where people can see weather by giving place name built with React and Express.js, Weather API",
    image: image5,
  },
  {
    title: "Project Management tool using node and MongoDB",
    subtitle:
      "A Project Management site using MongoDB and Node.js , Express,js.",
    image: image6,
  },
  // {
  //   title: "Fitness Tracker",
  //   subtitle: "A fitness tracking app created using Flutter and Firebase.",
  //   image: image7,
  // },
  // {
  //   title: "Recipe Finder",
  //   subtitle: "A recipe finder application developed with Angular and Node.js.",
  //   image: image8,
  // },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },

  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCE = [
  {
    company: "Oasis Infobyte",
    title: "Web Development Intern",
    description: "Developed full stack Applications using MERN stack and employ Automation testing using Jest and Selenium.",
    } ,
     {
     company:"IBM Skill Build",
      title: "Student Intern Data Science & Data Analysis",
      description: "Developed data visualization using R and Rstudio and also apply data analysis",
    },
    {
      company: "IBM Skill Build",
      title: "Student Intern Generative AI",
      description: "Explored Generative AI also Crafting effective Prompts for LLM’s",
    },
    {
      company: "Rinex ai",
      title: "CyberSecurity Intern",
      description: "Learn Cybersecurity apply Pen Testing on target applications , mitigate attack and more",
    }
];

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
