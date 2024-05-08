import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 10,
            delay: 0.5
        }
    }

    handleBars = (event) => {
        const newSize = parseInt(event.target.value);
        this.setState({size: newSize})
        this.props.handleBars(newSize);
    }
    
    handleDelay = (event) => {
        const newDelay = parseFloat(event.target.value);
        this.setState({delay: newDelay})
        this.props.handleDelay(newDelay);
    }

    render() {
        return (
            <>
            <div className='slider'>
                <input type='range' min='5' max='50' value={this.state.size} onChange={this.handleBars}></input>
                <input type='number' min='5' max='50' value={this.state.size} onChange={this.handleBars}></input>
                <p>Current Size: {isNaN(this.state.size) ? 'Size is not a valid number...':  this.state.size}</p>
                <input type='range' min='.01' max='5' step={0.01} value={this.state.delay} onChange={this.handleDelay}></input>
                <input type='number' min='.01' max='5' step={0.01} value={this.state.delay} onChange={this.handleDelay}></input>
                <p>Current Delay: {isNaN(this.state.size) ? 'Delay is not a valid number...':  this.state.delay}</p>
            </div>
            </>
        )
    }
}

export default Slider;