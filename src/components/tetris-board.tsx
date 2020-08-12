//Based on a tutorial found at https://blog.alexdevero.com/tetris-game-react-typescript/
import * as React from "react";

type TetrisBoardProperties = {
  field: any[];
  gameOver: boolean;
  score: number;
  level: number;
  rotate: number;
};

const TetrisBoard: React.FC<TetrisBoardProperties> = (props) => {
  let rows: any[] = [];

  props.field.forEach((row, index) => {
    const col = row.map((column: any, index: number) => (
      <div className={`col-${column}`} key={index} />
    ));

    rows.push(
      <div className="tetris-boardRow" key={index}>
        {col}
      </div>
    );
  });
  return (
    <div className="tetris-Container">
      <div className="tetris-boardInfo">
        <p className="tetris-boardText"> Level: {props.level}</p>
        <p className="tetris-boardText"> Score {props.score}</p>

        {props.gameOver && (
          <p className="boardText">
            <strong> Game Over </strong>
          </p>
        )}
      </div>
      <div className="tetris-board"> {rows}</div>
    </div>
  );
};
export default TetrisBoard;
