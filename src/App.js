//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Scoreboard from "./Scoreboard.js";
import Buttons from "./Buttons.js";
// import Scoreboard, {homeScore, setHomeScore, awayScore, setAwayScore} from "./Scoreboard.js";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  return (
    <div className="container">
      <Scoreboard />
      <Buttons />
    </div>
  );
}

export default App;
// export {homeScore, setHomeScore, awayScore, setAwayScore};