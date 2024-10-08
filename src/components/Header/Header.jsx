import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/image/logo.webp";
import "../Header/Header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Header = () => {
  const tltres = useRef();
  useGSAP(() => {
    gsap.set(".header", {
      y: -100,
    });

    gsap.set(".header_logo", {
      y: -200,
    });

    gsap.set(".header_title", {
      y: -200,
    });

    tltres.current = gsap
      .timeline({ paused: true })
      .to(".header", {
        y: 0,
        duration: 2,
      })
      .to(".header_logo", {
        y: 0,
        duration: 1,
        ease: "elastic",
      })
      .to(".header_title", {
        y: 0,
        duration: 1,
        ease: "bounce",
      });

    tltres.current.play();
  });

  return (
    <>
      <header className="header" id="header">
        <div className="header_logo-container">
          <img src={Logo} alt="andriu logo" className="header_logo" />
          <h1 className="header_title">Andriu Gudiño</h1>
        </div>
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/1S4VG1v3QjWMegzxEhppB6EmlSL1HTFvt/view?usp=drive_link"
            target="_black"
            className="continue-application"
          >
            <div>
              <div className="pencil"></div>
              <div className="folder">
                <div className="top">
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                  </svg>
                </div>
                <div className="paper"></div>
              </div>
            </div>
            View Cv
          </a>
        </div>
      </header>
    </>
  );
};
