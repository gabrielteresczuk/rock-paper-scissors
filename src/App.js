import {  useEffect, useState } from 'react';
import './App.css';
import Game from './Components/Game';
import Header from './Components/Header';
import Jugando from './Components/Jugando';
import Rules from './Components/Rules';

function App() {

  const [score, setScore] = useState(0);

  // 1- paper, 2-scissor, 3-rock
  const [player, setPlayer] = useState(undefined);
  const [computer, setComputer] = useState(undefined);
  //1-player,2-computer

  // 1- win, 2-lose, 3-draw
  const [resultado, setResultado] = useState(undefined);


  useEffect(() => {
    comprobar();
  }, [computer]);


  useEffect(() => {
    puntaje();
  }, [resultado])
  

  

  const selectPlayer = (id) =>{
    setPlayer(id);
    selectComputer();
  }

  const selectComputer = () =>{
    let computer = (Math.floor(Math.random() * 3))+1;
    setTimeout(() => {
      
      setComputer(computer);
    }, 1000);


  }

  const comprobar = () =>{

    console.log('comprobar');

    if(player === 1 ){
      if(computer === 1){
        setResultado(3);
      }else if(computer === 2){
        setResultado(2);
      }else if(computer === 3){
        setResultado(1);
      }
    }

    if(player === 2 ){
      if(computer === 1){
        setResultado(1);
      }else if(computer === 2){
        setResultado(3);
      }else if(computer === 3){
        setResultado(2);
      }
    }

    if(player === 3 ){
      if(computer === 1){
        setResultado(2);
      }else if(computer === 2){
        setResultado(1);
      }else if(computer === 3){
        setResultado(3);
      }
    }
  }




  const puntaje = () =>{
    if(resultado === 1){
      setScore(score+1);
    }else if(resultado === 2){
      setScore(score-1);
    }else if(resultado === 3){
      setScore(score);
    }
  }

  const playAgain = () =>{
    setPlayer(undefined);
    setComputer(undefined);
    setResultado(undefined);
  }


  return (
    <div className="App">
        <div className='App__container'>
          <Header score={score}/>
          {
            player ? 
            <Jugando player={player} computer={computer} resultado={resultado} playAgain={playAgain}/>
            :
            <Game selectPlayer={selectPlayer}/>
          }
          
          <Rules/>
        </div>
        
    </div>
  );
}

export default App;
