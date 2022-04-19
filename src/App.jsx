import { useContext } from "react";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Navbar from "./components/navbar/Navbar";
import './mobile.css'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar/>
      <Toggle />
      <Intro />
      <Skills />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
