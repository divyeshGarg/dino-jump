import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let key = useRef(null);
  let toggle = useRef(false);
  const [toggleState, setToggleState] = useState(false);

  const moveDino = useCallback((e) => {
    toggle.current = !toggle.current;
    setToggleState(!toggle.current);
    key.current = e.keyCode;
    if (e.keyCode === 32) {
      document.getElementById("dino").className = "jump";
      setTimeout(() => {
        document.getElementById("dino").className = "";
      }, 701);
    }
  }, []);

  useEffect(() => {
    // Will execute only the first time when App is rendered
    window.addEventListener("keydown", moveDino, false);
  }, []);

  return (
    <div className="App">
      <img
        id="dino"
        style={{
          position: "absolute",
          top: "327px",
          left: "50px",
          maxHeight: "200px",
          maxWidth: "100px",
          transform: "scaleX(-1) rotate(10deg)",
        }}
        src={require("./dino.png")}
      />
      <hr style={{ position: "relative", top: "400px" }} />
    </div>
  );
}

export default App;
