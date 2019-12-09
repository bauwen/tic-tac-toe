import React from 'react';
import './Tile.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            hover: false,
        };
    }

    onMouseOver() {
        this.setState({ hover: true });
    }

    onMouseLeave() {
        this.setState({ hover: false });
    }

    onClick() {
        if (!this.props.gameOver && this.props.value === '') {
            this.setState({ hover: false });
            this.props.onClick(this.props.position);
        }
    }

    render() {
        const hover = this.state.hover && !this.props.gameOver && this.props.value === '';

        return (
            <div className="tile"
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}
                style={{ backgroundColor: this.props.highlight ? "yellow" : "white" }}
            >
                <span style={{ color: hover ? "rgba(0, 0, 0, 0.2)" : "black" }}>
                    {hover ? this.props.next : this.props.value}
                </span>
            </div >
        );
    }
}
