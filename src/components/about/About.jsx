import "./about.css";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://www.kindpng.com/picc/m/243-2430191_transparent-information-technology-clipart-graphic-design-institute-in.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        <div className="skills">
           <img src="/icons/html.png" alt="" />
           <img src="/icons/css.png" alt="" />
           <img src="/icons/javascript.png" alt="" />
           <img src="/icons/react.png" alt="" />
           <img src="/icons/redux.png" alt="" />
           <img src="/icons/sass.png" alt="" />
           <img src="/icons/heroku.png" alt="" />
           <img src="/icons/json.png" alt="" />
           <img src="/icons/bootstrap.png" alt="" />
           <img src="/icons/materialui.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
