import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div  onClick={handleClick} className="t">
      { theme.state.darkMode ?
      <img   src='/icons/sun.png' alt="" className="t-icon day" />:
      <img  src={'/icons/moon.png'} alt="" className="t-icon night " />
      }
    </div>
  );
};

export default Toggle;
