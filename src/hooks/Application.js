import React, { useState } from 'react';
import Toolbar from './Toolbar.js';
import Board from './Board.js';
import Status from './Status.js';
import { newGame, playMove } from './logic.js';
import './Application.css';

export default function Application() {
    const [starter, setStarter] = useState('x');
    const [game, setGame] = useState(newGame(starter));

    const handleNewGame = () => {
        setGame(newGame(starter));
    };

    const handleStarterChange = (starter) => {
        setStarter(starter);
        if (game.empty) {
            setGame(newGame(starter));
        }
    };

    const handleMovePlay = (position) => {
        setGame(playMove(game, position));
    }

    return (
        <div className="container">
            <Toolbar
                starter={starter}
                onNewGame={handleNewGame}
                onStarterChange={handleStarterChange}
            />
            <Board
                game={game}
                onMovePlay={handleMovePlay}
            />
            <Status
                game={game}
            />
        </div>
    );
}

