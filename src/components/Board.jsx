import { Square } from "./Square";

export const Board = ({ squares, onClick}) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square 
          key={new Date().toString() + Math.random()} 
          value={square} 
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );  
}
