import React from 'react';
import { Button } from 'reactstrap';

class ShuffleBars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div>
                <Button onClick={this.props.shuffle}>Shuffle</Button>
                <Button onClick={this.props.stop}>Stop</Button>
            </div>
            </>
        )
    }
}

export default ShuffleBars;