import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
