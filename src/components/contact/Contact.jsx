import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_shivamvr",
        "template_a3q74qb",
        formRef.current,
        "XnSEVYAwNO1ssEBqb"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
            e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
        );
  };

  return (
    <div id="contact"  className="c">
      <div className="c-bg"></div>
      <div style={ {background: theme.state.darkMode && '#222'}} className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's have some conversation </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9149 326 816
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              shivamweb2@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Baghpat, Uttat Pardesh, India
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/shivamvr/" rel="noopener noreferrer" target="_blank"> <img src="/icons/linkedin.png" alt="" /></a>
              <a href="https://github.com/shivamvr" rel="noopener noreferrer" target="_blank"> <img src="/icons/github.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="c-right">
          {/* <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p> */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
