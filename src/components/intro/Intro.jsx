import "./intro.css";

const Intro = () => {
  return (
    <div className="i">

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          
          <h1 className="i-name">Shivam Verma</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Quick Learner</div>
              <div className="i-title-item">Adaptive</div>
              <div className="i-title-item">Creative</div>
            </div>
          </div>

          <p className="i-desc">
           An Aspiring Developer with a passion for developing scalable web applications. I am adept in the front-end and have an eye for attention to detail and accuracy.
          <a className="resume" href="https://www.canva.com/design/DAE0x2J8wnw/ryXBJQRsxKLUW1u3uUvBCw/view?utm_content=DAE0x2J8wnw&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" rel="noopener noreferrer" target="_blank">Resume</a>
          </p>
        </div>

      </div>

      <div className="i-right">
        <div class="home-img">
                    <svg class="shape" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image class="i-img" x="-5" y="5" href="/icons/me.png"/>
                        </g>
                    </svg>
                </div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
      
    </div> 
  );
};

export default Intro;
