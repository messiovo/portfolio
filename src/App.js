import { Home } from "./Page";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      
    });
    Aos.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-dark">
      <Home />
    </div>
  );
}

export default App;
