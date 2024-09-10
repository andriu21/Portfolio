import "../Home/Home.css";
import { Header } from "../../components/Header/Header.jsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import VideoHome from "../../assets/videos/210424.mp4";
import { ScrollDown } from "../../components/ScrollDown/ScrollDown.jsx";

export const Home = () => {
  const tl = useRef();

  const container = useRef();

  useGSAP(() => {
    gsap.set(".text", {
      y: 450,
      rotate: 20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(".text-initial", {
        duration: 1,
        x: "0rem",
      })
      .to(".text-initial-uno", {
        duration: 0.5,
        x: "50rem",
      })
      .to(".text-initial-dos", {
        duration: 0.5,
        x: "-50rem",
        delay: -0.5,
      })
      .to(".text-initial", {
        opacity:0,
        duration:.5
      })
      .to(".efect-circle", {
        duration: 1.2,
        height: "0vh",
        display: "none",
        delay: 0.5,
      })
      .to(".text", {
        y: 0,
        rotate: 0,
        duration: 1.5,
        stagger: 0.3,
      });

    let tlDos = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "100% 0",
        scrub: 1,
      },
    });

    tlDos
      .to(".text-uno", {
        x: 190,
        delay: -0.5,
      })
      .to(".text-dos", {
        x: -190,
        delay: -0.5,
      })
      .to(".text-tres", {
        x: 190,
        delay: -0.5,
      })
      .to(".text-cuatro", {
        x: -190,
        delay: -0.5,
      });

    tl.current.play();
  });
  return (
    <>
      <Header />
      <section className="home" id="home" ref={container}>
        <div className="home_container-text">
          <div className="text_container">
            <p className="text text-uno">Andriu</p>
          </div>
          <div className="text_container">
            <p className="text text-dos">Gudiño</p>
          </div>
          <div className="text_container">
            <p className="text text-tres">web</p>
          </div>
          <div className="text_container">
            <p className="text text-cuatro">developer</p>
          </div>
        </div>
        <div className="circle-header">
          <div className="efect-circle">
            <div>
              <p className="text-initial text-initial-uno">Hello</p>
            </div>
            <div>
              <p className="text-initial text-initial-dos">World!</p>
            </div>
          </div>
        </div>
      </section>
      <ScrollDown/>
    </>
  );
};
