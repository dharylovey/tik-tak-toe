import { useState } from 'preact/hooks'
import './app.css'
import Square from './components/Square'


export function App() {
  const [nextMove, setNextMove] = useState(true)
  const [value, setValue] = useState(Array(9).fill(null));
    const clickHandle = (i) => {
        if(value[i] || computeWinner(value)){
          return;
        }
        const square = value.slice();
        if(nextMove){
          square[i] ='X';
        } else{
          square[i] = 'O'
        }
        setValue(square)
        setNextMove(!nextMove)
    }

  const winner = computeWinner(value)
  let status;
  if(winner){
    status = `Winner ${winner}`;
  } else {
    status = `Next Player ${nextMove ? 'X' : 'O'}`
  }

  return (
    <>
      <div>
        <Square value={value[0]} onClickHandle={() => clickHandle(0)}/>
        <Square value={value[1]} onClickHandle={() => clickHandle(1)}/>
        <Square value={value[2]} onClickHandle={() => clickHandle(2)}/>
      </div>
      <div>
        <Square value={value[3]} onClickHandle={() => clickHandle(3)}/>
        <Square value={value[4]} onClickHandle={() => clickHandle(4)}/>
        <Square value={value[5]} onClickHandle={()=>clickHandle(5)}/>
      </div>
      <div>
        <Square value={value[6]} onClickHandle={() => clickHandle(6)}/>
        <Square value={value[7]} onClickHandle={() => clickHandle(7)}/>
        <Square value={value[8]} onClickHandle={() => clickHandle(8)}/>
      </div>      
    </>
  )
}


const computeWinner = squares => {
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

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};
