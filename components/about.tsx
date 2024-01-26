"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Computer Information Systems</span>, I decided to pursue my
        passion for programming. My current focus is {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, and it's ever-changing complexities. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.
        </span> I am always looking to
        learn new technologies, and am currently looking for a{" "}
        <span className="font-medium">part-time</span> or <span className="font-medium">full-time</span> position as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I love rock-climbing, skateboarding, snowboarding, kayaking, and hiking. 
        I also love painting, watching movies, and playing video games (Factorio). I always enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
