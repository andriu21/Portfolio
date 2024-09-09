import "../Projects/Projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FaArrowDown } from "react-icons/fa";

import React from "react";

export const Projects = () => {
  useGSAP(() => {
    let tlDos = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        end: "400% 0",
        scrub: 1,
        pin: true,
      },
    });

    tlDos
      .to(".project-text", {
        scale: 50,
        duration: 0.5,
      })
      .to(".mask", {
        scale: 50,
        duration: 0.5,
        delay: -0.5,
      })
      .to(".circle-header", {
        display: "none",
      });
  });

  return (
    <>
      <section className="projects" id="projects">
        <h2 className="project-text">
          Projects
         
        </h2>
        <div className="hidden-background">
          <div className="mask"> <span>
            scroll down <FaArrowDown />
          </span></div>
        </div>
      </section>
    </>
  );
};
