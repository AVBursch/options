import React from 'react';

class HDR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.canvasRef = React.createRef();
        this.rotationRef = React.createRef();
        this.exposureRef = React.createRef();
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div style={{ backgroundColor: "white" }}>
                    <label><b>{this.props.translations[this.props.language].texture}:</b></label>
                    <br />
                    <select
                        defaultValue={this.props.options.hdr_texture}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.props.options.hdr_texture = value;
                            this.props.updateOptions(this.props.options);
                        }}
                    >
                        {
                            this.props.hdrOptions.names.map((name, index) => {
                                return (<option key={index} value={name}>{name}</option>)
                            })
                        }
                    </select>
                    <div ref={this.canvasRef}>
                        select a texture
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: 250 }}>
                                    <label>{this.props.translations[this.props.language].rotation}:</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="360"
                                        step="1"
                                        defaultValue={this.props.options.hdr_rotation}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.props.options.hdr_rotation = value;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    />
                                    <label>{this.props.options.hdr_rotation}</label>
                                </td>

                                <td style={{ width: 250 }}>
                                    <label>{this.props.translations[this.props.language].exposure}</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="3.0"
                                        step="0.1"
                                        defaultValue={this.props.options.hdr_exposure}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.props.options.hdr_exposure = value;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    />
                                    <label>{this.props.options.hdr_exposure}</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default HDR;
