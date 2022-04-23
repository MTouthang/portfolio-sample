import About from "./Component/about/About";
import Contact from "./Component/Contact/Contact";
import Intro from "./Component/intro/Intro";
import ProductL from "./Component/productList/ProductL";
import Toggle from "./Component/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white",
    }}> 
        <Toggle/>
        <Intro/> 
        <About/>
        <ProductL/>
        <Contact/>
    </div>
  )
  
};

export default App;
