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
                            <select defaultValue={"Default (Set in Sketchup)"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        BackgroundValue: value
                                    }, () => {
                                        this.props.handleUpdateBackgroundValue(this.state.BackgroundValue);
                                    });
                                }}>
                                <option value={"Default (Set in Sketchup)"}>Default (Set in Sketchup)</option>
                                <option value={"Podium Physical Sky 1"}>Podium Physical Sky 1</option>
                                <option value={"Podium Physical Sky 2"}>Podium Physical Sky 2</option>
                                <option value={"HDRI/IBL"}>HDRI/IBL</option>
                            </select>

                            <h4>Sun / Sky Brightness:</h4>
                            <label for="intensity">Intensity:</label>
                            <input type="range" name="intensity" min={0} max={100} step={1}
                                ref={this.IntensityValueNumber}
                                defaultValue={this.state.defaultIntensityValue}
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
                                defaultValue={this.state.defaultExposureValue}
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
                            <select defaultValue={"Slow"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        RenderingModeValue: value
                                    }, () => {
                                        this.props.handleUpdateRenderingModeValue(this.state.RenderingModeValue);
                                    });
                                }}>
                                <option value={"Slow"}>Slow</option>
                                <option value={"Fast"}>Fast</option>
                            </select>
                            <br></br>

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        SoftOmniLightsOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateSoftOmniLightsOptionValue(this.state.SoftOmniLightsOptionValue);
                                    });
                                }} />
                            <label for="transparent"> Soft Omni Lights (Slower)</label><br />

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        CausticsOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateCausticsOptionValue(this.state.CausticsOptionValue);
                                    });
                                }} />
                            <label for="transparent"> Caustics</label><br />

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        ClayOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateClayOptionValue(this.state.ClayOptionValue);
                                    });
                                }} />
                            <label for="transparent"> Clay</label><br />

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        InformationBarOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateInformationBarOptionValue(this.state.InformationBarOptionValue);
                                    });
                                }} />
                            <label for="transparent"> Information Bar</label><br />

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        TranslucentColorOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateTranslucentColorOptionValue(this.state.TranslucentColorOptionValue);
                                    });
                                }} />
                            <label for="transparent"> Translucent Color</label><br />

                            <input type="checkbox"
                                defaultValue={false}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        AutomaticMaterialsOptionValue: value
                                    }, () => {
                                        this.props.handleUpdateAutomaticMaterialsOptionValue(this.state.AutomaticMaterialsOptionValue);
                                    });
                                }} />
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
