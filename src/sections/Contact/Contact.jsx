import "../Contact/Contact.css";
import contactVideo from "../../assets/videos/contact.mp4";
import contactImage from "../../assets/image/contact-img.webp";
import { GoPaperAirplane } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const tlBtn = useRef();
  useGSAP(() => {

    gsap.set('.btn',{
      background:'transparent',
      color:'#000'
    })
    tlBtn.current = gsap.timeline({ paused: true })
    .to('.btn',{
      x:1200,
      duration:1,
      ease:"bounce"
    })
    .to(".btn", {
      background:'transparent',
      duration:.5
    })
    .to('.btn',{
      x:0,
      duration:.5,
      ease:"bounce"
    }).to('.btn',{
      color:'#fff',
      background:'#000',
      duration:.5,
      ease:"bounce"
    });

    gsap.set(".container_contact_video", {
      clipPath: "inset(0 100% 0 0)",
    });
    gsap.set(".contact_img", {
      clipPath: "inset(0 0 0 100%)",
    });
    gsap.set(".title", {
      y: -1200,
    });
    gsap.set(".subtitle", {
      x: 1200,
    });

    gsap.set("label", {
      x: 200,
      opacity: 0,
    });

    gsap.set(".btn", {
      scale: 2,
      y: 1200,
    });

    gsap.set(".form_container_input-uno", {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(".form_container_input-dos", {
      clipPath: "inset(0 0 0 100%)",
    });

    gsap.set(".footer_false", {
      scale: 4,
      y: 200,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "top top",
        end: "400% 0",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".container_contact_video", {
      clipPath: "inset(0 0 0 0)",
      duration: 1,
    })
      .to(".contact_img", {
        clipPath: "inset(0 0 0 0)",
        duration: 1,
        delay: -0.2,
      })
      .to(".footer_false", {
        scale: 1,
        y: 0,
        duration: 1,
      })
      .to(".title", {
        y: 0,
        duration: 1,
      })
      .to(".subtitle", {
        x: 0,
        duration: 1,
        delay: -0.5,
      })
      .to(".form_container_input-uno", {
        clipPath: "inset(0 0 -30% 0)",
        duration: 1,
      })
      .to(".form_container_input-dos", {
        clipPath: "inset(0 0 -30% 0)",
        duration: 1,
      })
      .to("label", {
        x: 0,
        opacity: 1,
        duration: 1,
      })
      .to(".btn", {
        scale: 1,
        y: 0,
        duration: 1,
        delay: -1,
        onComplete: () => {
          document.querySelector(".scrollDown").style.display = "none";
        },
      });
  });

  const [result, setResult] = useState(false);

  useEffect(()=>{
    result ? tlBtn.current.play() : tlBtn.current.reverse();
    setTimeout(()=>{
      setResult(false)
    },10000)
  },[result])

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "516fde5a-d9f6-4994-a028-572781aa7162");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(false);
    }
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_container-img">
          <div className="container_contact_video">
            <video
              src={contactVideo}
              muted
              loop
              autoPlay={true}
              className="contact_video"
            ></video>
          </div>
          <img src={contactImage} alt="contact_image" className="contact_img" />
        </div>
        <div className="contact_container-form">
          <div className="form_title">
            <h2 className="title">CONTACTME</h2>
            <p className="subtitle">working together</p>
          </div>
          <form onSubmit={onSubmit} className="form" >
            <div className="form_container_input form_container_input-uno">
              <input
                type="email"
                name="email"
                id="email"
                className="form_input"
                required
                autoComplete={'off'}
              />
              <label htmlFor="email">email</label>
            </div>
            <div className="form_container_input form_container_input-dos">
              <textarea
                name="message"
                id="message"
                maxLength={70}
                className="form_input form-textarea"
                required
                autoComplete={'off'}
              ></textarea>
              <label htmlFor="message">message</label>
            </div>
            <button className="btn" type="submit">
              {!result ? `contact Me ` : `Thanks `}
              {!result ? <GoPaperAirplane /> : <IoCheckmarkDone />}
            </button>
          </form>

          <div className="footer_false">
            <p>&#169;Andriu Gudiño || all right reserved 2024</p>
          </div>
        </div>
      </section>
    </>
  );
};
