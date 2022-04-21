import About from "./Component/about/About";
import Contact from "./Component/Contact/Contact";
import Intro from "./Component/intro/Intro";
import ProductL from "./Component/productList/ProductL";

const App = () => {
  return (
    <div> 
      <Intro/> 
      <About/>
      <ProductL/>
      <Contact/>
    </div>
  )
  
};

export default App;
