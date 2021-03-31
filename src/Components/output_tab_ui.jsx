import React from 'react';

export class Output_Tab_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ViewportValue: this.props.ViewportValue,
            FixedValue: this.props.FixedValue,
            PanoramaValue: this.props.PanoramaValue,
            SizeValue: this.props.SizeValue,
            SizeWidthValue: this.props.SizeWidthValue,
            SizeHeightValue: this.props.SizeHeightValue,
            ImageFormatPngValue: this.props.ImageFormatPngValue,
            ImageFormatJpgValue: this.props.ImageFormatJpgValue,
            ImageFormatHDRValue: this.props.ImageFormatHDRValue,
            ImageSaveModelValue: this.props.ImageSaveModelValue,
            ImageSaveModelCustomValue: this.props.ImageSaveModelCustomValue,
            ImageSaveLocationValue: this.props.ImageSaveLocationValue,


            ImageSizeRadioValue: "viewport",
            ImageFormatRadioValue: "png",
            ImageSaveLocationRadioValue: "model",
        }

        this.handleImageSizeChange = this.handleImageSizeChange.bind(this);
        this.handleImageFormatChange = this.handleImageFormatChange.bind(this);
        this.handleImageSaveLocationChange = this.handleImageSaveLocationChange.bind(this);
    }

    render() {
        return (
            <React.Fragment>

                <table>
                    <thead></thead>
                    <tbody>
                        <tr>

                            <td>
                                <form >
                                    <input type="radio" value="viewport" checked={this.state.ImageSizeRadioValue === "viewport"} onChange={this.handleImageSizeChange} />
                                    <label for="viewport">Viewport</label><br />
                                    <input type="radio" value="fixed" checked={this.state.ImageSizeRadioValue === "fixed"} onChange={this.handleImageSizeChange} />
                                    <label for="fixed">Fixed</label><br />
                                    <input type="radio" value="panorama" checked={this.state.ImageSizeRadioValue === "panorama"} onChange={this.handleImageSizeChange} />
                                    <label for="panorama">Panorama</label><br />
                                </form>

                                {this.state.ImageSizeRadioValue === 'fixed' ?
                                    <table>
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td><label>Size:</label></td>
                                                <td><select>
                                                    <option>Custom</option>
                                                    <option>230 x 150</option>
                                                    <option>640 x 480</option>
                                                    <option>1024 x 768</option>
                                                    <option>2048 x 1536</option>
                                                    <option>3076 x 2034</option>
                                                    <option>4076 x 3304</option>
                                                    <option>852 x 480</option>
                                                    <option>1600 x 900</option>
                                                    <option>1920 x 1080</option>
                                                </select></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    :
                                    <table>
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td><label>Size:</label></td>
                                                <td><select disabled={true}>
                                                    <option>Custom</option>
                                                    <option>230 x 150</option>
                                                    <option>640 x 480</option>
                                                    <option>1024 x 768</option>
                                                    <option>2048 x 1536</option>
                                                    <option>3076 x 2034</option>
                                                    <option>4076 x 3304</option>
                                                    <option>852 x 480</option>
                                                    <option>1600 x 900</option>
                                                    <option>1920 x 1080</option>
                                                </select></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                }


                                <label>Width:</label>
                                {this.state.ImageSizeRadioValue === 'viewport' ? <input type="text" disabled={true} name="width" value="0" /> : <input type="text" name="width" value="0" />}
                                <br />
                                <label>Height:</label>
                                {this.state.ImageSizeRadioValue === 'viewport' ? <input type="text" disabled={true} name="height" value="0" /> : <input type="height" name="width" value="0" />}
                            </td>

                            <td>

                                <h4>Image Format:</h4>
                                <form >
                                    <input type="radio" value="png" checked={this.state.ImageFormatRadioValue === "png"} onChange={this.handleImageFormatChange} />
                                    <label for="png">.png</label><br />
                                    <input type="radio" value="jpg" checked={this.state.ImageFormatRadioValue === "jpg"} onChange={this.handleImageFormatChange} />
                                    <label for="jpg">.jpg</label><br />
                                    <input type="radio" value="hdr" checked={this.state.ImageFormatRadioValue === "hdr"} onChange={this.handleImageFormatChange} />
                                    <label for="hdr">.hdr</label><br />
                                </form>

                                <input type="checkbox" name="imageformat" value="Transparent" />
                                <label for="transparent"> Transparent</label><br />

                                <h4>Image Save Location:</h4>
                                <form >
                                    <input type="radio" value="model" checked={this.state.ImageSaveLocationRadioValue === "model"} onChange={this.handleImageSaveLocationChange} />
                                    <label for="model">Model</label><br />
                                    <input type="radio" value="custom" checked={this.state.ImageSaveLocationRadioValue === "custom"} onChange={this.handleImageSaveLocationChange} />
                                    <label for="custom">Custom</label><br />
                                </form>

                                {this.state.ImageSaveLocationRadioValue === "custom" ?
                                    <input type="text" name="savelocation" value="save location" /> :
                                    <input type="text" name="savelocation" disabled={true} value="save location" />
                                }
                                {this.state.ImageSaveLocationRadioValue === "custom" ?
                                    <button>Browse</button>
                                    :
                                    <button disabled={true}>Browse</button>
                                }

                            </td>

                        </tr>
                    </tbody>
                </table>

            </React.Fragment>
        )
    }

    handleImageSizeChange(event) {
        this.setState({
            ImageSizeRadioValue: event.target.value
        });
    }

    handleImageFormatChange(event) {
        this.setState({
            ImageFormatRadioValue: event.target.value
        });
    }

    handleImageSaveLocationChange(event) {
        this.setState({
            ImageSaveLocationRadioValue: event.target.value
        });
    }
}
