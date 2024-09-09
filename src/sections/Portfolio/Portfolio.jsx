import "../Portfolio/Portfolio.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../assets/image/page-1.png";
import Image2 from "../../assets/image/page-2.png";
import Image3 from "../../assets/image/page-3.png";
import Image4 from "../../assets/image/page-4.png";
import Image5 from "../../assets/image/page-5.png";
import { useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa6";

export const Portfolio = () => {
  useGSAP(() => {
    gsap.set(".slide", {
      clipPath: "inset(0 50% 0 50%)",
      display: "none",
    });

    gsap.set(".slide-img-1 img", {
      clipPath: " inset(50% 0 50% 0)",
    });
    gsap.set(".slide-img-2 img", {
      clipPath: " inset(50% 0 50% 0)",
    });

    gsap.set(".slider", {
      clipPath: "inset(0 50% 0 50%)",
    });

    gsap.set(".slide-content", {
      clipPath: "inset(0 0 0 100%)",
    });

    let tlDos = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
        start: "top top",
        end: "1000% 0",
        scrub: 1,
        pin: true,
      },
    });

    tlDos.to(".slider", {
      display: "block",
      clipPath: "inset(0 0 0 0 )",
      duration: 1,
    });

    const slide = document.querySelectorAll(".slide");
    const slideArray = Array.from(slide).reverse();
    const slideImage = document.querySelectorAll(".slide-img-1 img");
    const slideArrayImage = Array.from(slideImage).reverse();
    const slideImageDos = document.querySelectorAll(".slide-img-2 img");
    const slideArrayImageDos = Array.from(slideImageDos).reverse();

    const slideContent = document.querySelectorAll(".slide-content");
    const slideArrayContent = Array.from(slideContent).reverse();

    slideArray.map((item, index) => {
      tlDos.to(item, {
        display: "block",
        clipPath: "inset(0 0 0 0 )",
        duration: 2,
      });

      slideArrayContent.map((ite, inde) => {
        if (inde == index) {
          tlDos
            .to(ite, {
              clipPath: "inset(0 0 0 50%)",
              duration: 1,
              delay: -0.2,
            })
            .to(ite, {
              clipPath: "inset(0 50% 0 0)",
              duration: 1,
              delay: -0.4,
            })
            .to(ite, {
              clipPath: "inset(0 50% 0 50%)",
              duration: 1,
              delay: -0.6,
            })
            .to(ite, {
              clipPath: "inset(0 50% 0 0)",
              duration: 1,
              delay: -0.8,
            })
            .to(ite, {
              clipPath: "inset(0 0 0 0)",
              duration: 1,
              delay: -1,
            });
          return;
        }
      });

      slideArrayImage.map((ite, inde) => {
        if (inde == index) {
          tlDos.to(ite, {
            clipPath: "inset(0 0 0 0)",
            duration: 1,
            delay: -0.78,
          });
          return;
        }
      });

      slideArrayImageDos.map((ite, inde) => {
        if (inde == index) {
          tlDos.to(ite, {
            clipPath: "inset(0 0 0 0)",
            duration: 1,
            delay: -0.78,
          });
          return;
        }
      });
    });
  });

  useEffect(() => {
   if (window.screen.availWidth > 720){
    const mouse = document.querySelectorAll(".link");
    const slider = document.querySelector(".slider");
    slider.addEventListener("mousemove", (e) => {
      const x = e.clientX - 55;
      const y = e.clientY - 55;
      mouse.forEach((item) => {
        item.style.setProperty("--x", x + "px");
        item.style.setProperty("--y", y + "px");
      });
    });
   }
    
  }, []);

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="slider ">
          <div className="slide light " style={{ "--i": 5 }}>
            <div className="slide-img slide-img-1 slide-1">
              <img src={Image1} alt="" />
            </div>
            <div className="slide-content">
              <h1>Education</h1>
            </div>
            <div className="slide-img  slide-img-2 slide-1">
              <img src={Image1} alt="" />
            </div>

            <a href="https://github.com/andriu21" className="links">
              <div className="link">
                <FaGithubAlt />
                <span> click me </span>
              </div>
            </a>
          </div>

          <div className="slide dark" style={{ "--i": 4 }}>
            <div className="slide-img slide-img-1 slide-2">
              <img src={Image2} alt="" />
            </div>
            <div className="slide-content">
              <h1>reservation</h1>
            </div>
            <div className="slide-img slide-img-2 slide-2">
              <img src={Image2} alt="" />
            </div>
            <a href="https://github.com/andriu21" className="links">
              <div className="link">
                <FaGithubAlt />
                <span> click me </span>
              </div>
            </a>
          </div>

          <div className="slide light" style={{ "--i": 3 }}>
            <div className="slide-img slide-img-1 slide-3">
              <img src={Image3} alt="" />
            </div>
            <div className="slide-content">
              <h1>bakery</h1>
            </div>
            <div className="slide-img slide-img-2 slide-3">
              <img src={Image3} alt="" />
            </div>
            <a href="https://github.com/andriu21" className="links">
              <div className="link">
                <FaGithubAlt />
                <span> click me </span>
              </div>
            </a>
          </div>

          <div className="slide dark " style={{ "--i": 2 }}>
            <div className="slide-img slide-img-1 slide-4">
              <img src={Image4} alt="" />
            </div>
            <div className="slide-content">
              <h1>Travel</h1>
            </div>
            <div className="slide-img slide-img-2 slide-4">
              <img src={Image4} alt="" />
            </div>
            <a href="https://github.com/andriu21" className="links">
              <div className="link">
                <FaGithubAlt />
                <span> click me </span>
              </div>
            </a>
          </div>

          <div className="slide light " style={{ "--i": 1 }}>
            <div className="slide-img slide-img-1 slide-5">
              <img src={Image5} alt="" />
            </div>
            <div className="slide-content">
              <h1>sushi</h1>
            </div>
            <div className="slide-img slide-img-2 slide-5">
              <img src={Image5} alt="" />
            </div>
            <a href="https://github.com/andriu21" className="links">
              <div className="link">
                <FaGithubAlt />
                <span> click me </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
