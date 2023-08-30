//Import <Route>, <Routes>, other components and data
import { Route, Routes } from "react-router-dom";
import About from "./assets/pages/About";
import Dashboard from "./assets/pages/Dashboard";
import Home from "./assets/pages/Home";
import Stock from "./assets/pages/Stock";
import Nav from "./assets/components/Nav";
import stocks from "./data.jsx";

export default function App() {
  /*A <Routes> component is a container for <Route> components but displays only one <Route> UI.
  <Route> specifies the route path and serves as a UI component that is displayed on the condition
  that the URL matches the path specified by the <Route>*/
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard stocks={stocks} />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock/:symbol" element={<Stock stocks={stocks} />} />
      </Routes>
    </div>
  );
}
