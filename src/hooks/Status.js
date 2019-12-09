import React from 'react';
import './Status.css';

export default function Status(props) {
    return (
        <div className="status">
            {
                props.game.winner !== ''
                    ? `${props.game.winner} wins the game!`
                    : props.game.full
                        ? `Game over! It's a draw.`
                        : `It's ${props.game.current}'s turn.`
            }
        </div>
    );
}