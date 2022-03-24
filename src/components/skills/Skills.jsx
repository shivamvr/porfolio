import './skills.css'
const About = () => {
  return (
    <div className="a">
        <h1 className="a-title">Skills</h1>
    <div className='container'>

      <div className="a-left" >
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
    <div className='skill'>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/html.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>HTMl</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/css.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>CSS</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/javascript.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>Js</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/react.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>react</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/redux.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>Redux</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/sass.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>Sass</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/bootstrap.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/materialui.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>materialui</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/styled.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>styled</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/heroku.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>Heroku</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/icons/json.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <p>json server</p>
            </div>
          </div>
        </div>

        </div>
      </div>

    </div>
    </div>
  )
}

export default About
