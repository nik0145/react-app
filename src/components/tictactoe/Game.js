import React from "react";
import Board from "./Board";
import "./Game.css";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
class Game extends React.Component {
    constructor(props){
    super(props);
    this.state={
    history:[{
    squares:Array(9).fill(null)
    }],
    xIsNext:true,
    stepNumber: 0,
    }
    }
    jumpTo(step){
    this.setState({
    stepNumber:step,
    xIsNext: (step % 2) === 0
    })
    }
    handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if(squares[i] || calculateWinner(squares)){
    return;
    }
    squares[i]=this.state.xIsNext ? 'X': 'O';
    
    this.setState({
    history:history.concat([{
    squares:squares,
    }]),
    stepNumber: history.length,
    xIsNext:!this.state.xIsNext
    })
    }
    render() {
      
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step,move)=>{
    const desc = move ?
    'Перейти к ходу #' + move :
    'К началу игры';
    return (
    <li key = {move}>
    <Fab variant="extended" color="primary"  onClick={()=>this.jumpTo(move)} aria-label="add" >
          <NavigationIcon  />
          {desc}
        </Fab>
    </li>
    )
    })
    let status;
    if (winner) {
    status = 'Выиграл ' + winner;
    } else {
    status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
    <div className="game">
    <div className="game-board">
    <Board squares={current.squares}
    onClick={(i) => {this.handleClick(i)} }/>
    </div>
    <div className="game-info">
    <div>{status}</div>
    <ol>{moves}</ol>
 
 
    </div>
    
    </div>
    
    );
    }
    }

    export  default Game;

    function calculateWinner(squares) {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
        }
        return null;
        }