// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';

//import LandingPage from "./components/landing-page";
import GameBoardContainer from "./components/game-board-container";
import questionList from "./questions.json";
import LargeSingleItemContainer from './components/large-single-item-container';
import GameBoardColumn from "./components/game-board-column";
import MainButton from "./components/main-button";


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
    <React.Fragment>
      <div className="App">
        {/* {newView? <LandingPage play={playGame} /> :
        [round===3? <LargeSingleItemContainer /> : <GameBoardContainer questions={questions}/> ]} */}
      </div>

      <Router>
        <Switch>
          <Route path="/question/:question">
            <LargeSingleItemContainer />
          </Route>
          {/* <Route path="/round" component={Round}></Route>*/}
          <Route path="/game-board"> 
            <GameBoardContainer questions={questions} />
          </Route>
          <Route path="/" component={LandingPage}></Route>  
        </Switch>
      </Router>

    </React.Fragment>
  );
}

  
const LandingPage = props => {

  const history = useHistory();
  console.log("history:", history)
    
  const play = () => {
    history.push(`/game-board`);
    console.log("history:", history)
  };

  return (
    <div> 
      <h1> Jeopardy Lite</h1>
      <p> Welcome! Would you like to play?</p> 
      <MainButton label="Play" play={play}/>
    </div>
  )
}; 

//export default LandingPage

export default App;

