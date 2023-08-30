import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
//<BrowserRouter> is imported and renamed to <Router>
import { BrowserRouter as Router } from "react-router-dom";

/*index.jsx interfaces with index.html and serves as a container for the <App> container
In index.jsx we wrap the <App> component with any wrappers, which includes 
the <Router> component so <Router> features will be available to the entire app*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
