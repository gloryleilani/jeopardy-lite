// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import LandingPage from "./components/landing-page";
import GameBoardContainer from "./components/game-board-container";
import questionList from "./questions.json";
import LargeSingleItemContainer from './components/Large-single-item-container';


function App() {
  
  const [newView, setNewView] = useState(true);
  const [round, setRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [questionsRemaining, setQuestionsRemaining] = useState(true);
  // roundTimer = 600; //Seconds, counting down
  
  const playGame = () => {
    //console.log("new view pre:", newView);
    setNewView(false);
    //console.log("new view post:", newView);
    };

    //Function to shuffle questions in categories and also answer choices per question
    const shuffle = (lst) => {
    
      for (let i= lst.length - 1; i>0; i --) {
        const j = Math.floor(Math.random() * i);
        const temp = lst[i];
        lst[i] = lst[j];
        lst[j] = temp;
      };
  };


  shuffle(questionList);

  useEffect(() => {
    //Add correct answer to list of answer choices
    const answerChoices = [];
    
    for (const item of questionList) {
    const answerChoices = item.incorrect_answers;
    answerChoices.push(item.correct_answer);
    //console.log("item:", item);
    //console.log("ans pre shuf:", answerChoices);
    shuffle(answerChoices);
    //console.log("ans post shuf:", answerChoices);
  }
    setQuestions(questionList);
  }, []);

  //console.log("questions state:", questions);
  console.log("round:", round);

  return (
    
    <div className="App">
      {newView? <LandingPage play={playGame} /> :
      [round===3? <LargeSingleItemContainer /> : <GameBoardContainer questions={questions}/> ]}
    </div>
  );
}


export default App;
