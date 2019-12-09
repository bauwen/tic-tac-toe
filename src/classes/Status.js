import React from 'react';
import './Status.css';

export default class Status extends React.Component {
    render() {
        const game = this.props.game;

        return (
            <div>
                {
                    game.winner !== ''
                        ? `${game.winner} wins the game!`
                        : game.full
                            ? `Game over! It's a draw.`
                            : `It's ${game.current}'s turn.`
                }
            </div>
        );
    }
}