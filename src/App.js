import React from "react";
import "./App.css";
import Gameboard from "./components/game/Gameboard";
import Game from "./components/game/Game";
import NewPlayer from "./components/game/Player";

function App() {
/*   const gameboard = Gameboard();
  gameboard.createShip([[0,0],[0,1]])
  gameboard.createShip([[5,3],[5,4],[5,5]])
  gameboard.createShip([[9,1],[9,2],[9,3],[9,4],[9,5]])
  gameboard.receiveAttack([0,0])
  gameboard.receiveAttack([0,1])
  gameboard.receiveAttack([5,3])
  gameboard.receiveAttack([5,4])
  gameboard.receiveAttack([5,5])
  gameboard.receiveAttack([9,1])
  gameboard.receiveAttack([9,2])
  gameboard.receiveAttack([9,3])
  gameboard.receiveAttack([9,4])
  gameboard.receiveAttack([9,5])
  console.log(gameboard.returnGameboard().join('\n'));

  console.log(gameboard.isAllShipsSunk()) */

  const gameboards = [];
  const players = [];
  const gameboardP = Gameboard(); // player
  const gameboardAI = Gameboard(); // AI
  gameboards.push(gameboardP);
  gameboards.push(gameboardAI);
  const player = NewPlayer();
  const playerAI = NewPlayer();
  players.push(player);
  players.push(playerAI);
  //gameboards[0].createShip([[0,0],[0,1]]); // player
  //gameboards[1].createShip([[0,0],[0,1]]); // AI
  const game = Game()
  game.gameLoop(players,gameboards)
  return (
    <div className="game">
    <div>Player</div>
    <div className="grid-container">
      {gameboardP.returnGameboard().map((rows, indexR) => (
        <div className="rows" key={indexR}>
          {rows.map((squares, indexC) => (
            <div className="squares" key={indexC}>{squares}</div>
          ))}
        </div>
      ))}
    </div>
    <div>AI</div>
    <div className="grid-container">
      {gameboardAI.returnGameboard().map((rows, indexR) => (
        <div className="rows" key={indexR}>
          {rows.map((squares, indexC) => (
            <div className="squares" key={indexC}>{squares}</div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
export default App;
