import React from 'react';

export class HDRI_IBL_Tab_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ImageStringValue: this.props.ImageStringValue,
            ImageValue: this.props.ImageValue,
            ImageRotationValue: this.props.ImageRotationValue,
            ImageExposureValue: this.props.ImageExposureValue,

            defaultRotationValue: 0,
            defaultExposureValue: 1.5,

        }

        this.ImageRotationValueNumber = React.createRef();
        this.ImageExposureValueNumber = React.createRef();
    }

    render() {
        return (
            <React.Fragment>

                <div>
                    <h4>Texture:</h4>
                    <select defaultValue={"Afternoon01.hdr"}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                ImageStringValue: value
                            }, () => {
                                this.handleUpdateImageStringValue(this.state.ImageStringValue);
                            });
                        }}>
                        <option value={"Afternoon01.hdr"}>Afternoon01.hdr</option>
                        <option value={"Afternoon02.hdr"}>Afternoon02.hdr</option>
                        <option value={"Interior01.hdr"}>Interior01.hdr</option>
                        <option value={"Morning01.hdr"}>Morning01.hdr</option>
                        <option value={"Sunset01.hdr"}>Sunset01.hdr</option>
                        <option value={"Sunset02.hdr"}>Sunset02.hdr</option>
                    </select>
                    <br></br>
                    <div> {/*image goes here*/}</div>
                    <label for="rotation">Rotation:</label>
                    <input type="range" name="rotation" min={0} max={360} step={1}
                        ref={this.ImageRotationValueNumber}
                        defaultValue={this.state.defaultRotationValue}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                ImageRotationValue: +value
                            }, () => {
                                this.ImageRotationValueNumber.current.value = +this.state.ImageRotationValue;
                                this.props.handleUpdateImageRotationValue(+this.state.ImageRotationValue);
                            })
                        }}
                    />
                    <label>{this.state.ImageRotationValue}</label>
                    <label for="exposure">Exposure:</label>
                    <input type="range" name="exposure" min={0.0} max={3.0} step={0.1}
                        ref={this.ImageExposureValueNumber}
                        defaultValue={this.state.defaultExposureValue}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                ImageExposureValue: +value
                            }, () => {
                                this.ImageExposureValueNumber.current.value = +this.state.ImageExposureValue;
                                this.props.handleUpdateImageExposureValue(+this.state.ImageExposureValue);
                            })
                        }}
                    />
                    <label>{this.state.ImageExposureValue}</label>
                    <br></br>
                </div>

            </React.Fragment>
        )
    }
}
