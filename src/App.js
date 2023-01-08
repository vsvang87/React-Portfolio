import "./App.css";
import Navbar from "./components/Navbar.js";
import Section1 from "./components/Section1.js";
import Contact from "./components/Contact.js";
import Project from "./components/Project.js";
import Project2 from "./components/Project2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Section1 />
        <Project />
        <Project2 />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
