import { Home } from "./Page";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
 

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Home />
     
    </>
  );
}

export default App;
