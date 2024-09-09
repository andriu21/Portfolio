
import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/image/logo.png";
import "../Header/Header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export const Header = () => {
  const tltres = useRef();
  useGSAP(()=>{

    gsap.set('.header',{
      y:-100
    })

    gsap.set('.header_logo',{
      y:-200
    })

    gsap.set('.header_title',{
      y:-200
    })


     tltres.current = gsap
    .timeline({ paused: true })
    .to('.header',{
      y:0,
      duration: 2,
    }).to('.header_logo',{
      y:0,
      duration:1,
      ease:"elastic"
    })
    .to('.header_title',{
      y:0,
      duration:1,
      ease:'bounce'
    })
    


    
    tltres.current.play()
   
  })
 
  return (
    <> 
      <header className="header" id="header">
        
        <div className="header_logo-container">
          <img src={Logo} alt="andriu logo" className="header_logo" />
          <h1 className="header_title">Andriu Gudiño</h1>
        </div>
      </header>
    </>
  );
};
