import { Routes, Route } from "react-router-dom/index";
import './App.css';
import { Home} from "./Page";

function App() {
  return (
   <>
   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
   </>
  );
}

export default App;
