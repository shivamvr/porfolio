import "./intro.css";

const Intro = () => {
  return (
    <div id='about' className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>

          <h1 className='i-name'>Shivam Verma</h1>

          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Quick Learner</div>
              <div className='i-title-item'>Adaptive</div>
              <div className='i-title-item'>Creative</div>
            </div>
          </div>

          <p className='i-desc'>
            A successful Developer with a passion for developing scalable web
            applications. I am adept in the front-end and have an eye for
            attention to detail and accuracy.
            <a
              className='resume'
              href='
              https://drive.google.com/file/d/1FNRk0CxJU2_3TI82kJleYQNnvJveNutb/view?usp=sharing
          '
              rel='noopener noreferrer'
              target='_blank'
            >
              Resume
            </a>
          </p>
        </div>
      </div>

      <div className='i-right'>
        <div className='home-img'>
          <svg
            className='shape'
            viewBox='0 0 479 467'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <mask id='mask0' mask-type='alpha'>
              <path d='M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z' />
            </mask>
            <g mask='url(#mask0)'>
              <path d='M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z' />
              <image className='i-img' x='-5' y='0' href='/icons/me.png' />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Intro;
