import React from 'react';
import Toolbar from './Toolbar.js';
import Board from './Board.js';
import Status from './Status.js';
import { newGame, playMove } from './logic.js';

export default class Application extends React.Component {
    constructor() {
        super();

        this.onNewGame = this.onNewGame.bind(this);
        this.onStarterChange = this.onStarterChange.bind(this);
        this.onMovePlay = this.onMovePlay.bind(this);

        const starter = 'x';
        this.state = {
            starter,
            game: newGame(starter),
        }
    }

    onNewGame() {
        this.setState({
            game: newGame(this.state.starter),
        });
    }

    onStarterChange(starter) {
        this.setState({
            starter,
            game: this.state.game.empty ? newGame(starter) : this.state.game,
        });
    }

    onMovePlay(position) {
        this.setState({
            game: playMove(this.state.game, position),
        });
    }

    render() {
        return (
            <div>
                <Toolbar
                    starter={this.state.starter}
                    onNewGame={this.onNewGame}
                    onStarterChange={this.onStarterChange}
                />
                <Board
                    game={this.state.game}
                    onMovePlay={this.onMovePlay}
                />
                <Status
                    game={this.state.game}
                />
            </div>
        );
    }
}
