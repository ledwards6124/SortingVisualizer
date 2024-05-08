import React from 'react';
import { Button } from 'reactstrap';

class Sort extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className='selections'>
                <Button onClick={this.props.bubble}>Bubble Sort</Button>
                <Button onClick={this.props.tim}>Tim Sort</Button>
                <Button onClick={this.props.selection}>Selection Sort</Button>
                <Button onClick={this.props.insertion}>Insertion Sort</Button>
            </div>
            </>
        )
    }
}

export default Sort;