import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Shivam Verma</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Js</div>
              <div className="i-title-item">Material UI</div>
              <div className="i-title-item">Bootstrap</div>
            </div>
          </div>
          <p className="i-desc">
          An Aspiring Developer with a passion for developing scalable web applications. I am adept in the front-end end and have an eye for attention to detail and accuracy.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
