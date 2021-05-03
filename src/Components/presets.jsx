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
                <div style={{marginBottom: 20}}>
                    <label>{this.props.translations[this.props.language].presetName}</label>
                    <select 
                        style={{float: 'right'}}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.props.updatePreset(value);
                        }}
                    >
                        {
                            this.props.presets.map((preset, index) => {
                                return (
                                    <option key={index} value={preset}>{preset}</option>
                                )
                            })
                        }
                    </select>
                    <div>
                        <span
                            style={{ borderBottom: '1px solid black', cursor: 'pointer', float: 'right' }}
                            onClick={this.props.comparePresets}
                        >
                            {this.props.translations[this.props.language].comparePresets}
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Presets;
