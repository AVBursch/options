import React from 'react';

export class HDRI_IBL_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ImageStringValue: this.props.ImageStringValue,
            ImageValue: this.props.ImageValue,
            ImageRotationValue: this.props.ImageRotationValue,
            ImageExposureValue: this.props.ImageExposureValue,

        }
    }

    render() {
        return (
            <React.Fragment>

                <div>
                    <h4>Texture:</h4>
                    <select>
                        <option>Afternoon01.hdr</option>
                        <option>Afternoon02.hdr</option>
                        <option>Interior01.hdr</option>
                        <option>Morning01.hdr</option>
                        <option>Sunset01.hdr</option>
                        <option>Sunset02.hdr</option>
                    </select>
                    <br></br>
                    <div> {/*image goes here*/}</div>
                    <label for="rotation">Rotation:</label>
                    <input type="range" name="rotation" min="0" max="360" />
                    <label for="exposure">Exposure:</label>
                    <input type="range" name="exposure" min="0" max="3.0" step="0.1" />
                    <br></br>
                </div>

            </React.Fragment>
        )
    }
}
