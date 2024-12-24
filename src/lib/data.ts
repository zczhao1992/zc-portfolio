import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import Avatar from "../../public/avatar.jpg";
import Manager from "../../public/manager.png";
import Dashboard from "../../public/dashboard.png";
import ImgEditor from "../../public/imgEditor.png";
import WorkFlow from "../../public/workFlow.png";

export const links = [
  {
    name: "Home",
    label: "首页",
    hash: "#home",
  },
  {
    name: "About",
    label: "关于我",
    hash: "#about",
  },
  {
    name: "Projects",
    label: "我的项目",
    hash: "#projects",
  },
  {
    name: "Skills",
    label: "我的技能",
    hash: "#skills",
  },
  {
    name: "Experience",
    label: "我的经历",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "家里蹲大学",
    location: "北京",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "前端工程师",
    location: "北京",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "前端工程师",
    location: "北京",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "React-Manager",
    description: "基于React的开源后台管理模版",
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "AntDesign",
      "DndKit",
      "Vite",
      "Mock",
    ],
    gitHubUrl: "https://github.com/zczhao1992/react-manager",
    demoUrl: "https://react-manager-zc.netlify.app",
    imageUrl: Manager,
  },
  {
    title: "Next-Dashboard",
    description: "基于Next的开源任务管理系统",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Hono", "Appwrite"],
    gitHubUrl: "https://github.com/zczhao1992/next-dashboard",
    demoUrl: "https://next-dashboard-zc.netlify.app",
    imageUrl: Dashboard,
  },
  {
    title: "Next-Image-Editor",
    description: "基于Next的开源图片编辑器",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Drizzle",
      "Hono",
      "Fabric",
    ],
    gitHubUrl: "https://github.com/zczhao1992/next-image-editor",
    demoUrl: "https://next-image-editor-zc.vercel.app",
    imageUrl: ImgEditor,
  },
  {
    title: "Next-Workflow",
    description: "基于Next的开源网页自动化工作流",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Supabase",
      "Clerk",
      "ReactFlow",
    ],
    gitHubUrl: "https://github.com/zczhao1992/next-workflow.git",
    demoUrl: "https://next-workflow-zc.netlify.app",
    imageUrl: WorkFlow,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Hono",
] as const;
