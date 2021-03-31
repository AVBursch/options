import React from 'react';

export class Environment_Tab_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            BackgroundValue: this.props.BackgroundValue,
            IntensityValue: this.props.IntensityValue,
            ExposureValue: this.props.ExposureValue,
            RenderingModeValue: this.props.RenderingModeValue,
            SoftOmniLightsOptionValue: this.props.SoftOmniLightsOptionValue,
            CausticsOptionValue: this.props.CausticsOptionValue,
            ClayOptionValue: this.props.ClayOptionValue,
            InformationBarOptionValue: this.props.InformationBarOptionValue,
            TranslucentColorOptionValue: this.props.TranslucentColorOptionValue,
            AutomaticMaterialsOptionValue: this.props.AutomaticMaterialsOptionValue,

            defaultIntensityValue: 50,
            defaultExposureValue: 50,

        }

        this.IntensityValueNumber = React.createRef();
        this.ExposureValueNumber = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead></thead>
                    <tbody></tbody>
                    <tr>
                        <td>
                            <h4>Background:</h4>
                            <select>
                                <option>Default (Set in Sketchup)</option>
                                <option>Podium Physical Sky 1</option>
                                <option>Podium Physical Sky 2</option>
                                <option>HDRI/IBL</option>
                            </select>

                            <h4>Sun / Sky Brightness:</h4>
                            <label for="intensity">Intensity:</label>
                            <input type="range" name="intensity" min={0} max={100} step={1}
                                ref={this.IntensityValueNumber}
                                defaultValue={this.props.defaultIntensityValue}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        IntensityValue: +value
                                    }, () => {
                                        this.IntensityValueNumber.current.value = +this.state.IntensityValue;
                                        this.props.handleUpdateIntensityValue(+this.state.IntensityValue);
                                    })
                                }} />
                            <label>{this.state.IntensityValue}</label>
                            <br></br>
                            <label for="exposure">Exposure:</label>
                            <input type="range" name="exposure" min={0} max={100} step={1}
                                ref={this.ExposureValueNumber}
                                defaultValue={this.props.defaultExposureValue}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        ExposureValue: +value
                                    }, () => {
                                        this.ExposureValueNumber.current.value = +this.state.ExposureValue;
                                        this.props.handleUpdateExposureValue(+this.state.ExposureValue);
                                    })
                                }}
                            />
                            <label>{this.state.ExposureValue}</label>
                            <br></br>
                            <button onClick={() => { this.handleResetButtonClick() }}>Reset</button>
                        </td>
                        <td>
                            <h4>Rendering Mode:</h4>
                            <select>
                                <option>Slow</option>
                                <option>Fast</option>
                            </select>
                            <br></br>
                            <input type="checkbox" name="imageformat" value="softomnilights" />
                            <label for="transparent"> Soft Omni Lights (Slower)</label><br />
                            <input type="checkbox" name="imageformat" value="caustics" />
                            <label for="transparent"> Caustics</label><br />
                            <input type="checkbox" name="imageformat" value="clay" />
                            <label for="transparent"> Clay</label><br />
                            <input type="checkbox" name="imageformat" value="informationbar" />
                            <label for="transparent"> Information Bar</label><br />
                            <input type="checkbox" name="imageformat" value="Translucentcolor" />
                            <label for="transparent"> Translucent Color</label><br />
                            <input type="checkbox" name="imageformat" value="automaticmaterials" />
                            <label for="transparent"> Automatic Materials</label><br />
                        </td>
                    </tr>
                </table>

            </React.Fragment>
        )
    }

    handleResetButtonClick = () => {
        this.setState({ IntensityValue: this.state.defaultIntensityValue, ExposureValue: this.state.defaultExposureValue },
            () => {
                this.IntensityValueNumber.current.value = +this.state.defaultIntensityValue;
                this.ExposureValueNumber.current.value = +this.state.defaultExposureValue;
            });
    }
}
