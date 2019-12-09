import React from 'react';
import './Toolbar.css';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.onStarterChange = this.onStarterChange.bind(this);
    }

    componentDidUpdate() {
        console.log("toolbar changed");
    }

    onStarterChange(event) {
        const v = event.target.value;
        this.props.onStarterChange(v);
    }

    render() {
        return (
            <div className="toolbar">
                <div
                    className="toolbar-item text-button"
                    onClick={this.props.onNewGame}
                >
                    New Game
                </div>

                <div className="toolbar-item">
                    First move:
                    x
                    <input
                        type="radio"
                        value="x"
                        onChange={this.onStarterChange}
                        checked={this.props.starter === 'x'}
                    />
                    <input
                        type="radio"
                        value="o"
                        onChange={this.onStarterChange}
                        checked={this.props.starter === 'o'}
                    />
                    o
                </div>
            </div>
        );
    }
}
