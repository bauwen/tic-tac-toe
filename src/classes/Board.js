import React from 'react';
import Tile from './Tile.js';
import './Board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.onTileClick = this.onTileClick.bind(this);
    }

    onTileClick(position) {
        this.props.onMovePlay(position)
    }

    render() {
        const game = this.props.game;

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
                        onClick={this.onTileClick}
                    />
                )}
            </div>
        );
    }
}
