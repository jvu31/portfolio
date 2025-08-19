import {
  FaPython,
  FaJs,
  FaJava,
  FaRobot,
  FaCode,
  FaReact,
  FaBrain,
  FaBook,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiD3Dotjs,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillItem {
  id: number;
  icon: IconType;
  name: string;
  years: number;
}

interface SkillGroup {
  skillId: string;
  skillName: string;
  skillIcon: IconType;
  items: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    skillId: "languages",
    skillName: "Programming Languages",
    skillIcon: FaCode,
    items: [
      { id: 1, icon: FaPython, name: "Python", years: 3 },
      { id: 2, icon: FaJs, name: "JavaScript", years: 2 },
      { id: 3, icon: SiTypescript, name: "Typescript", years: 2 },
      { id: 4, icon: FaJava, name: "Java", years: 3 },
      { id: 5, icon: FaRobot, name: "Verilog", years: 1 },
      { id: 6, icon: SiC, name: "C", years: 2 },
      { id: 7, icon: SiCplusplus, name: "C++", years: 1 },
    ],
  },
  {
    skillId: "frameworks",
    skillName: "Frameworks/Libraries",
    skillIcon: FaCode,
    items: [
      { id: 1, icon: FaReact, name: "React", years: 1 },
      { id: 2, icon: SiNextdotjs, name: "Next.js", years: 1 },
      { id: 3, icon: SiExpress, name: "Express.js", years: 1 },
      { id: 4, icon: SiNodedotjs, name: "Node.js", years: 1 },
      { id: 5, icon: SiTailwindcss, name: "Tailwind.css", years: 1 },
      { id: 6, icon: SiD3Dotjs, name: "D3.js", years: 1 },
      { id: 7, icon: FaPython, name: "PyQT", years: 1 },
      { id: 8, icon: SiUnity, name: "Unity", years: 1 },
    ],
  },
  {
    skillId: "ai",
    skillName: "Artificial Intelligence",
    skillIcon: FaBrain,
    items: [
      { id: 1, icon: SiScikitlearn, name: "Scikit-learn", years: 2 },
      { id: 2, icon: SiPytorch, name: "PyTorch", years: 2 },
      { id: 3, icon: SiTensorflow, name: "TensorFlow", years: 1 },
      { id: 4, icon: FaBook, name: "Natural Language Processing", years: 1 },
    ],
  },
];

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Sup Optics Optimization Program",
    description:
      "Designed a desktop application full-stack with engineered clustering algorithm to produce predictive model for antenna alignment positions",
    link: "none",
    image: "/sup_optics",
    tags: ["Fullstack", "Machine Learning"],
    tools: ["Python", "MongoDB", "PyQT", "Scikit-Learn", "Git"],
  },
  {
    id: 2,
    name: "Epoch Scoring System",
    description:
      "Designed a fullstack web app for managing Science Olympiad Tournaments",
    link: "none",
    image: "/sup_optics",
    tags: ["Fullstack"],
    tools: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind.css",
      "Node.js",
      "Express.js",
      "Github",
      "MySQL",
    ],
  },
  {
    id: 3,
    name: "AMP Customer Service Portal Demo",
    description:
      "Designed a frontend interface demo for an automotive customer service portal",
    link: "none",
    image: "/sup_optics",
    tags: ["Frontend"],
    tools: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind.css",
      "Express.js",
      "Github",
    ],
  },
  {
    id: 4,
    name: "TumorTrace",
    description:
      "Evaluation and engineering of various computer vision architectures for brain tumor detection",
    link: "none",
    image: "/sup_optics",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"],
    tools: ["Python", "Scikit-Learn", "PyTorch", "TensorFlow", "Git"],
  },
  {
    id: 5,
    name: "Fragments of Ruin",
    description: "Developed puzzle-platformer game with physic-based movement",
    link: "none",
    image: "/sup_optics",
    tags: ["Game Development"],
    tools: ["Unity", "C++", "Git"],
  },
];

interface About {
  id: number;
  name: string;
  description: string;
  icon: IconType;
}

export const about: About[] = [
  {
    id: 1,
    name: "Machine Learning",
    description:
      "Designing and implementing ML models for computer vision, NLP, and predictive analytics",
    icon: FaPython,
  },
  {
    id: 2,
    name: "Fullstack Development",
    description:
      "Building robust web applications with modern frameworks, RESTful APIs, and databases.",
    icon: FaPython,
  },
  {
    id: 3,
    name: "Game Development",
    description:
      "Building robust web applications with modern frameworks, RESTful APIs, and databases.",
    icon: FaPython,
  },
];

interface Education {
  id: number;
  level: string;
  school: string;
  degree: string;
  description: string;
  location: string;
  year: string;
  image: string;
}

export const education: Education[] = [
  {
    id: 0,
    level: "Graduate Student in Computer Science",
    school: "Georgia Institute of Technology",
    degree: "Graduate",
    description:
      "Focus in high-level machine learning principles and algorithms",
    location: "Atlanta, GA",
    year: "2025 - Present",
    image: "gt.png",
  },
  {
    id: 1,
    level: "Bachelor of Science in Computer Science",
    school: "Georgia Institute of Technology",
    degree: "Bachelor",
    description:
      "Focused in fundamental computer science principles and core machine learning technologies",
    location: "Atlanta, GA",
    year: "2023 - 2025",
    image: "gt.png",
  },
  {
    id: 2,
    level: "Undergraduate Student in Computer Science",
    school: "The University of Georgia",
    degree: "Bachelor",
    description: "Focused in fundamental computer science principles",
    location: "Athens, GA",
    year: "2021 - 2022",
    image: "uga.png",
  },
];
