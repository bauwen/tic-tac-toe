import React, { useEffect } from 'react';
import './Toolbar.css';

export default function Toolbar({ starter, onNewGame, onStarterChange }) {
    useEffect(() => {
        console.log("toolbar changed");
    });

    const handleStarterChange = (event) => {
        const self = event.target.value;
        const other = self === 'x' ? 'o' : 'x';

        document.getElementById("radio-" + self).classList.add("active");
        document.getElementById("radio-" + other).classList.remove("active");

        onStarterChange(self);
    };

    return (
        <div className="toolbar">
            <div
                className="btn btn-primary toolbar-item text-button"
                onClick={onNewGame}
            >
                New Game
                </div>

            <div className="toolbar-item">
                First:&nbsp;&nbsp;
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="radio-x" className="btn btn-primary active">
                        <input
                            type="radio"
                            name="first"
                            autoComplete="off"
                            value="x"
                            onChange={handleStarterChange}
                            checked={starter === 'x'}
                        /> x
                    </label>
                    <label id="radio-o" className="btn btn-primary">
                        <input
                            type="radio"
                            name="first"
                            autoComplete="off"
                            value="o"
                            onChange={handleStarterChange}
                            checked={starter === 'o'}
                        />
                        o
                    </label>
                </div>
            </div>
        </div>
    );
}
