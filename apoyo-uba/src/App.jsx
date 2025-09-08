import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Apoyo from "./uba/apoyo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Apoyo />
    </>
  );
}

export default App;
