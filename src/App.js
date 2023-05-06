import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import About from "./Pages/About";
import Policy from "./Pages/Policy";

function App() {
    return (
        <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/policy" element={<Policy/>}/>
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
