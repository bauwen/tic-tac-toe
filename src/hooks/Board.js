import React from 'react';
import Tile from './Tile.js';
import './Board.css';

export default function Board({ game, onMovePlay }) {
    const handleClick = (position) => {
        onMovePlay(position)
    };

    return (
        <div className="board">
            {game.grid.map((value, index) =>
                <Tile
                    key={index}
                    value={value}
                    position={index}
                    highlight={game.winner !== '' && game.tiles.indexOf(index) >= 0}
                    gameOver={game.winner !== '' || game.full}
                    next={game.current}
                    onClick={handleClick}
                />
            )}
        </div>
    );
}
