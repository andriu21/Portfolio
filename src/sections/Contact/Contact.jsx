import "../Contact/Contact.css";
import contactVideo from "../../assets/videos/contact.mp4";
import contactImage from "../../assets/image/contact-img.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  useGSAP(() => {
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
        end: "800% 0",
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
        delay:-.2
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
        delay:-.5
      })
      .to(".form_container_input-uno", {
        clipPath: "inset(0 0 -30% 0)",
        duration:1
      })
      .to(".form_container_input-dos", {
        clipPath: "inset(0 0 -30% 0)",
        duration:1
      }).to("label", {
        x: 0,
        opacity: 1,
        duration:1
      }).to(".btn", {
        scale: 1,
        y: 0,
        duration:1,
        delay:-1
      });;
  });

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
          <form action="" className="form">
            <div className="form_container_input form_container_input-uno">
              <input
                type="email"
                name="email"
                id="email"
                className="form_input"
              />
              <label htmlFor="email">email</label>
            </div>
            <div className="form_container_input form_container_input-dos">
              <textarea
                name="message"
                id="message"
                maxLength={70}
                className="form_input form-textarea"
              ></textarea>
              <label htmlFor="message">message</label>
            </div>
            <button className="btn">contact Me</button>
          </form>

          <div className="footer_false">
            <p>&#169;Andriu Gudiño || all right reserved 2024</p>
          </div>
        </div>
      </section>
    </>
  );
};
