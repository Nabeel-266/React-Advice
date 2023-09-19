import "./App.css";
import { useState } from "react";

function App() {
  const routeIndicators = [1, 2, 3];
  const routeMessages = [
    "Step 1 : Learn React ⚛",
    "Step 2 : Keep Practicing 👨‍💻",
    "Step 3 : Build React Websites 🔥",
  ];
  const [counter, setCounter] = useState(1);

  const nextRoute = () => {
    if (counter < 3) {
      setCounter((prvCount) => prvCount + 1);
    }
  };

  const previousRoute = () => {
    if (counter > 1) {
      setCounter((prvCount) => prvCount - 1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="routeIndicators">
          {routeIndicators.map((indicator) => {
            return (
              <span
                style={
                  indicator <= counter
                    ? {
                        backgroundColor: "#350029b3",
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "#fff",
                        color: "#333",
                      }
                }>
                {indicator}
              </span>
            );
          })}
        </div>
        <div className="routeMessage">
          <p>{routeMessages[counter - 1]}</p>
        </div>
        <div className="routeButtons">
          <button onClick={previousRoute}>Previous</button>
          <button onClick={nextRoute}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
