import React, {useState} from "react";
import {homeScore} from "./App.js"

const Buttons = (props) => { 
// function Buttons(props) {
    console.log(props.homeScore)
    // const [homeScore, setHomeScore] = useState(0)
    // const [awayScore, setAwayScore] = useState(0)

    return (
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => props.setHomeScore(props.homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => props.setHomeScore(props.homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => props.setAwayScore(props.awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => props.setAwayScore(props.awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    )
}

export default Buttons;