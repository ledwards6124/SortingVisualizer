import React from 'react';
import Bar from './Bar';

class SortBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: this.props.bars,
            method: this.props.method,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bars !== this.props.bars) {
            this.setState({ bars: this.props.bars });
        }    
    }

    getBarWidth() {
        const element = document.getElementsByClassName('sort-container')[0];
        const containerWidth = element.clientWidth;
        const numBars = this.state.bars.length;
        const totalMargin = 11 * numBars; // Total margin space for all bars
        const availableWidth = containerWidth - totalMargin;
        const barWidth = availableWidth / numBars;
        return barWidth;
    }
    

    render() {
        return (
            <>
            <div className='sort-container'>
                {this.state.bars.map(bar => {
                    return <Bar key={bar} height={bar} width={this.getBarWidth()}></Bar>
                })}
            </div>
            </>
        );
    }
}

export default SortBox;