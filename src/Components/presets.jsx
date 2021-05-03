import React from 'react';

class Presets extends React.Component {
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
                <label>{this.props.translations[this.props.language].presetName}</label>
                <select>
                    {
                        this.props.presets.map((preset) => {
                            return (
                                <option value={preset}>{preset}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.props.comparePresets}>{this.props.translations[this.props.language].comparePresets}</button>
            </React.Fragment>
        )
    }
}

export default Presets;
