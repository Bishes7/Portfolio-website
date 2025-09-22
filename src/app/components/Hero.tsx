"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHoverSmall, fadeIn, fadeInUp, scaleIn } from "@/utils/animation";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            height={100}
            width={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 "
        >
          Hi, I&apos;m <span className="text-primary">Bishes Adhikari</span>
          <br />
          <motion.span
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="text-secondary my-4"
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "UX/UI Enthusiast",
                "Open Source Contrubutor",
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.span>
        </motion.h1>

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/Bishes7"
            target="_blank"
            className="text-2xl text-gray-600
           hover:text-primary dark:text-gray-300 transition-colors duration-300  "
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bishes-adhikari/"
            target="_blank"
            className="text-2xl text-gray-600
           hover:text-primary dark:text-gray-300 transition-colors duration-300  "
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-2xl text-gray-600
           hover:text-primary dark:text-gray-300 transition-colors duration-300  "
          >
            <FaFacebook />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 ">
          {" "}
          <motion.div {...cardHoverSmall}>
            <Link
              href="/projects"
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div {...cardHoverSmall}>
            <Link
              href="/contact"
              className="bg-yellow-400 inline-block w-full md:w-auto text-gray-800 px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
