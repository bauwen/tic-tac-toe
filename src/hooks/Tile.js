import React, { useState } from 'react';
import './Tile.css';

export default function Tile({
    value,
    position,
    highlight,
    gameOver,
    next,
    onClick,
}) {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleClick = () => {
        if (!gameOver && value === '') {
            setHover(false);
            onClick(position);
        }
    };

    const preview = hover && !gameOver && value === '';

    return (
        <div className="tile"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ backgroundColor: highlight ? "yellow" : "white" }}
        >
            <span style={{ color: preview ? "rgba(0, 0, 0, 0.2)" : "black" }}>
                {preview ? next : value}
            </span>
        </div >
    );
}
