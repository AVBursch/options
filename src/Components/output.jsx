import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.props.translations[this.props.language].imageSize}</label>
            </React.Fragment>
        )
    }
}

export default Output;
