"use client";
import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHover, fadeInUp, scaleIn } from "@/utils/animation";

export default function AboutPage() {
  return (
    <motion.div
      {...scaleIn}
      transition={{ delay: 0.2 }}
      className="container max-w-7xl mx-auto py-12"
    >
      <motion.h1
        {...fadeInUp}
        transition={{ delay: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About me
      </motion.h1>
      {/* bio section */}
      <section className="mb-12">
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-lg text-secondary max-w-3xl mx-auto text-center"
        >
          I&apos;m a passionate Full Stack Developer with expertise in building
          moern web application. With a strong foundation in both frontend and
          backend technologies, I create seamless user experience and robust
          server-side solutions
        </motion.p>
      </section>
      {/* skills section */}
      <section className="mb-12">
        <motion.h2
          {...scaleIn}
          transition={{ delay: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
            </ul>
          </motion.div>
          <motion.div
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          <motion.div
            {...cardHover}
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / Github</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* experiences */}
      <section className="mb-12">
        <h2 className="section-title">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">FUll Stack Developer</h3>
            <p className="text-primary mb-2 ">
              Dented Code Academy . 2024 - Present
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside ">
              <li>
                Developed full-stack apps using Next.js, React, TypeScript,
                Node.js, and Express
              </li>
              <li>
                Built secure APIs and authentication flows with JWT and
                role-based access.
              </li>
              <li>
                Designed responsive UIs with Tailwind CSS and reusable React
                components.
              </li>
              <li>
                Integrated MongoDB with Mongoose for scalable data modeling and
                queries
              </li>
              <li>
                Implemented data visualization and analytics with Chart.js for
                dashboards.
              </li>
              <li>
                Collaborated with Git/GitHub, ensuring clean code, version
                control, and teamwork.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Crown Institute of Higher Education
            </h3>
            <p className="text-primary mb-2 ">
              Bachelor in IT . Nov 2023 - Oct 2025
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside ">
              <li>
                Specialized in software development, full-stack web
                technologies, and cloud computing.
              </li>
              <li>
                Built academic projects including Library Management System,
                Real Estate platform with chatbot, and E-commerce site.
              </li>
              <li>
                Gained hands-on experience with Next.js, TypeScript, React,
                Node.js, Express, and MongoDB.
              </li>
              <li>
                Applied project management practices using Agile, Jira, and
                collaborative Git workflows.
              </li>
              <li>
                Currently preparing for Microsoft Azure (AZ-104) certification
                to strengthen cloud expertise.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
