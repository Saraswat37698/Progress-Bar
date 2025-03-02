import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  let g=0;
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBar) => (prevBar < 100 ? prevBar + 5 : 100));
    }, 150);

    

    return () => clearInterval(interval);
  }, []);
   
   
  return (
    
    <>
      <h3>Progress Bar</h3>
      <div className="Container">
        <div className="ProgressBar" style={{width: `${bar}%`, height: "100%", transition: "transform 0.15s linear",}}>
          <p>{bar}%</p>
        </div>
      </div>
      {bar==100 && <h4>Complete!</h4>}
    </>
  );
}

export default App;
