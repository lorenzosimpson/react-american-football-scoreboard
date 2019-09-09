import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
// set initial state values
const [down, setDown] = useState(0);
const [toGo, setToGo] = useState(4);
const [ballOn, setBallOn] = useState(0);
const [quarter, setQuarter] = useState(1);

  return (
    
    <div className="bottomRow">
      <div className="down">
        <button className="down__title" onClick={() => setDown(down + 1)}>Down</button>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <button className="toGo__title" onClick={() => {
          if (toGo > 1) {
            setToGo(toGo - 1)
          } else if (toGo === 1) {
            setToGo(4)
          }
        }}>To Go</button>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <button className="ballOn__title" onClick={() => setBallOn(ballOn + 1)}>Ball on</button>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <button className="quarter__title" onClick={() => {
          if (quarter < 4) {
            setQuarter(quarter + 1);
          } else if (quarter === 4) {
            setQuarter(1)
          }
        }}>Quarter</button>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
