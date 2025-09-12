import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
}

export default App;
