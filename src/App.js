// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import LandingPage from "./components/landing-page";
import GameBoardContainer from "./components/game-board-container";


function App() {
  
  const [newView, setNewView] = useState(true);
  // let round = 1;
  // let playerScore = 0;
  // roundTimer = 600; //Seconds, counting down

  
  
  const playGame = () => {
    console.log("new view pre:", newView)
    setNewView(false);
    console.log("new view post:", newView)
    };

  
  
  return (
    
    <div className="App">
      {newView? <LandingPage play={playGame} /> : <GameBoardContainer />}
      
    </div>
  );
}



export default App;
