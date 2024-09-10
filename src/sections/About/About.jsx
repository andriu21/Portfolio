import "../About/About.css";
import { useRef } from "react";
import Bootraps from "../../assets/image/bootraps.png";
import css from "../../assets/image/css.png";
import figma from "../../assets/image/figma.png";
import git from "../../assets/image/git.png";
import html from "../../assets/image/html.png";
import javascript from "../../assets/image/javascript.png";
import mongo from "../../assets/image/mongo.png";
import node from "../../assets/image/node.png";
import php from "../../assets/image/php.png";
import python from "../../assets/image/python.png";
import reacImage from "../../assets/image/react.png";
import sass from "../../assets/image/sass.png";
import sql from "../../assets/image/sql.png";
import tailwing from "../../assets/image/tailwing.png";
import wordpress from "../../assets/image/wordpress.png";
import aboutVideo from "../../assets/videos/about.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const playVideo = () => {
    const video = document.querySelector(".about_video");
    video.play();
  };
  const pausedVideo = () => {
    const video = document.querySelector(".about_video");
    video.pause();
  };
  useGSAP(() => {
    let tlDos = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "1000% 0",
        scrub: 1.5,
        pin: true,
      },
    });

    gsap.set(".rotate", {
      x: -1200,
    });

    gsap.set(".about_info-container", {
      x: 1200,
    });

    tlDos
      .to(".about_video", {
        rotate: 0,
        width: "100%",
        height: "100%",
        onComplete: () => {
          playVideo();
        },
        onReverseComplete: () => {
          pausedVideo();
        },
      })
      .to(".rotate", {
        x: -400,
      })
      .to(".about_info-container", {
        x: 0,
        duration: 1,
      })
      .to(".rotate-uno", {
        rotate: 360,
        duration: 2,
      })
      .to(".rotate-dos", {
        rotate: -360,
        duration: 2,
        delay: -2,
      })
      .to(".about_info-container", {
        y: "-315%",
        duration: 2,
        delay: -2,
      })
      .to(".background-about div", {
        width: "100vw",
      });
  });
  return (
    <>
      <section className="about" id="about">
        <div className="about_image-container">
          <ul className="rotate rotate-uno">
            <li style={{ "--i": 0 }}>
              <img src={javascript} alt="html" />
            </li>
            <li style={{ "--i": 1 }}>
              <img src={css} alt="html" />
            </li>
            <li style={{ "--i": 2 }}>
              <img src={html} alt="html" />
            </li>
            <li style={{ "--i": 3 }}>
              <img src={php} alt="html" />
            </li>
            <li style={{ "--i": 4 }}>
              <img src={python} alt="html" />
            </li>
            <li style={{ "--i": 5 }}>
              <img src={sql} alt="html" />
            </li>
          </ul>
          <ul className=" rotate rotate-dos">
            <li style={{ "--i": 0 }}>
              <img src={reacImage} alt="html" />
            </li>
            <li style={{ "--i": 1 }}>
              <img src={sass} alt="html" />
            </li>
            <li style={{ "--i": 2 }}>
              <img src={node} alt="html" />
            </li>
            <li style={{ "--i": 3 }}>
              <img src={mongo} alt="html" />
            </li>
            <li style={{ "--i": 4 }}>
              <img src={tailwing} alt="html" />
            </li>
            <li style={{ "--i": 5 }}>
              <img src={Bootraps} alt="html" />
            </li>
            <li style={{ "--i": 6 }}>
              <img src={figma} alt="html" />
            </li>
            <li style={{ "--i": 7 }}>
              <img src={git} alt="html" />
            </li>
            <li style={{ "--i": 8 }}>
              <img src={wordpress} alt="html" />
            </li>
          </ul>
        </div>
        <div className="about_info-container">
          <div className="about_info">
            <h2 className="about_title ">About Me</h2>
            <p>
              Hello everyone, my name is <span>Andriu Gudiño</span>. I'm excited to share
              with you my journey as a self-taught frontend and backend
              programmer. Over the years, I've immersed myself in the world of
              JavaScript and Python, developing numerous personal projects to
              expand my skills and knowledge.
            </p>
          </div>
          <div className="about_info">
            <p>
              <span>Challenges Overcome Learning Curve</span>: Navigating complex concepts
              without formal guidance required discipline and persistence.
              Problem-Solving: Tackled real-world problems through coding,
              enhancing my analytical and critical thinking abilities.
              Adaptability: Stayed updated with the latest industry trends and
              technologies to ensure my skills remain relevant.
            </p>
          </div>
          <div className="about_info">
            <p>
             <span> Enterprize Projects and Skill Acquisition Hands-On Learning</span>: I
              believe the best way to learn is by doing. I embarked on creating
              various enterprize and personal projects that allowed me to apply new concepts
              and techniques. <span>Frontend Projects</span>:Worpress,React,Tailwing,etcs  <span>Backend Projects</span>: Built robust server-side
              applications with Python ,Sql and Mongodb 
            </p>
          </div>
          <div className="about_info">
            <p>
              Conclusion My journey as a self-taught programmer has been both
              challenging and rewarding. Through dedication and a passion for
              technology, I've transformed my curiosity into a set of valuable
              skills. I look forward to what the future holds and the
              opportunities to make a meaningful impact in the tech industry.
            </p>
          </div>
        </div>
        <div className="about_container-video">
          <video src={aboutVideo} className="about_video" loop muted></video>
        </div>

        <div className="background-about">
          <div></div>
        </div>
      </section>
    </>
  );
};
