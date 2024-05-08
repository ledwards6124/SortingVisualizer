import React from 'react';

class Bar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: this.props.height * 10,
            width: this.props.width
        }
    }

    render() {
        return (
            <>
            <div className='bar' style={{'height': this.state.height / 2, 
            'minHeight': this.state.height / 2,
            'maxHeight': this.state.height / 2, 
            'width': this.props.width, 
            'minWidth': this.props.width, 
            'background': 'white', 
            'color': 'white'}}></div>
            </>
        )
    }
}

export default Bar;