import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Shivam Verma <span> 
          <a className="resume" href="https://www.canva.com/design/DAE0x2J8wnw/ryXBJQRsxKLUW1u3uUvBCw/view?utm_content=DAE0x2J8wnw&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" rel="noopener noreferrer" target="_blank"> <img src="https://img.icons8.com/dotty/344/resume.png" alt="" /></a>
          </span>
          </h1>
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
