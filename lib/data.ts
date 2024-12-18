import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Northern Michigan University",
    location: "Marquette, MI",
    description:
      "Bachelor's of Science in Business Computer Information Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2008-2012",
  },
  {
    title: "Computer Technician - Peninsula InfoMed",
    location: "Marquette, MI",
    description:
      "Internship transitioned to full-time Computer Technician role after graduation. Supported over 25 practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2010-2015",
  },
  {
    title: "Remote Client Technology Technician - Mt. Hood Community College",
    location: "Gresham, OR",
    description:
      "First point-of-contact for administration, staff, faculty, and students. Account access and security, software troubleshooting, hardware, and classroom support. ",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "IT Technician - Upper Peninsula Health Plan",
    location: "Marquette, MI",
    description:
      "Software and hardware technician for healthcare office supporting approximately 55,000 members",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2022",
  },
  {
    title: "IT Administrator - Return LLC.",
    location: "Remote",
    description:
      "Remote IT Administrator for Return LLC., a passionate team specializing in sustainable, regenerative soil products.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;
