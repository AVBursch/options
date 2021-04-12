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
            ImageFormatTransparentValue: this.props.ImageFormatTransparentValue,
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
                                <h4>Image Size:</h4>
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
                                                <td><select defaultValue={"Custom"}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        this.setState({
                                                            SizeValue: value
                                                        }, () => {
                                                            this.props.handleUpdateSizeValue(this.state.SizeValue);
                                                        });
                                                    }}>
                                                    <option value={"Custom"}>Custom</option>
                                                    <option value={"230 x 150"}>230 x 150</option>
                                                    <option value={"640 x 480"}>640 x 480</option>
                                                    <option value={"1024 x 768"}>1024 x 768</option>
                                                    <option value={"2048 x 1536"}>2048 x 1536</option>
                                                    <option value={"3076 x 2034"}>3076 x 2034</option>
                                                    <option value={"4076 x 3304"}>4076 x 3304</option>
                                                    <option value={"852 x 480"}>852 x 480</option>
                                                    <option value={"1600 x 900"}>1600 x 900</option>
                                                    <option value={"1920 x 1080"}>1920 x 1080</option>
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
                                                <td><select disabled={true} defaultValue={"Custom"}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        this.setState({
                                                            SizeValue: value
                                                        }, () => {
                                                            this.props.handleUpdateSizeValue(this.state.SizeValue);
                                                        });
                                                    }}>
                                                    <option value={"Custom"}>Custom</option>
                                                    <option value={"230 x 150"}>230 x 150</option>
                                                    <option value={"640 x 480"}>640 x 480</option>
                                                    <option value={"1024 x 768"}>1024 x 768</option>
                                                    <option value={"2048 x 1536"}>2048 x 1536</option>
                                                    <option value={"3076 x 2034"}>3076 x 2034</option>
                                                    <option value={"4076 x 3304"}>4076 x 3304</option>
                                                    <option value={"852 x 480"}>852 x 480</option>
                                                    <option value={"1600 x 900"}>1600 x 900</option>
                                                    <option value={"1920 x 1080"}>1920 x 1080</option>
                                                </select></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                }


                                <label>Width:</label>
                                {this.state.ImageSizeRadioValue === 'viewport'
                                    ? <input type="text" disabled={true} name="width" value="0" />
                                    : <input type="text"
                                        defaultValue={1}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.setState({
                                                SizeWidthValue: +value
                                            }, () => {
                                                this.props.handleUpdateSizeWidthValue(+this.state.SizeWidthValue);
                                            });
                                        }}
                                    />}
                                <br />
                                <label>Height:</label>
                                {this.state.ImageSizeRadioValue === 'viewport'
                                    ? <input type="text" disabled={true} name="height" value="0" />
                                    : <input type="height"
                                        defaultValue={1}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.setState({
                                                SizeHeightValue: +value
                                            }, () => {
                                                this.props.handleUpdateSizeHeightValue(+this.state.SizeHeightValue);
                                            });
                                        }}
                                    />}
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

                                <input type="checkbox"
                                    defaultValue={false}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.setState({
                                            ImageFormatTransparentValue: value
                                        }, () => {
                                            this.props.handleUpdateImageFormatTransparentValue(this.state.ImageFormatTransparentValue);
                                        });
                                    }} />
                                <label for="transparent"> Transparent</label><br />

                                <h4>Image Save Location:</h4>
                                <form >
                                    <input type="radio" value="model" checked={this.state.ImageSaveLocationRadioValue === "model"} onChange={this.handleImageSaveLocationChange} />
                                    <label for="model">Model</label><br />
                                    <input type="radio" value="custom" checked={this.state.ImageSaveLocationRadioValue === "custom"} onChange={this.handleImageSaveLocationChange} />
                                    <label for="custom">Custom</label><br />
                                </form>

                                {this.state.ImageSaveLocationRadioValue === "custom" ?
                                    <input type="text"
                                        defaultValue={""}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.setState({
                                                ImageSaveLocationValue: value
                                            }, () => {
                                                this.props.handleUpdateSaveLocationValue(this.state.ImageSaveLocationValue);
                                            });
                                        }} /> :
                                    <input type="text" name="savelocation" disabled={true} value="save location" />
                                }
                                {this.state.ImageSaveLocationRadioValue === "custom" ?
                                    <button onClick={() => { this.handleBrowseButtonClick() }}>Browse</button>
                                    :
                                    <button disabled={true} >Browse</button>
                                }

                            </td>

                        </tr>
                    </tbody>
                </table>

            </React.Fragment>
        )
    }

    handleBrowseButtonClick = () => {

    }

    handleUpdateSaveLocationTextBox = () => {

    }

    handleImageSizeChange(event) {
        this.setState({
            ImageSizeRadioValue: event.target.value
        });

        if (this.state.ImageSizeRadioValue === "viewport") {
            this.setState({ ViewportValue: true, FixedValue: false, PanoramaValue: false });
            this.props.handleUpdateViewportValue(this.state.ViewportValue);
            this.props.handleUpdateFixedValue(this.state.FixedValue);
            this.props.handleUpdatePanoramaValue(this.state.PanoramaValue);
        }
        else if (this.state.ImageSizeRadioValue === "fixed") {
            this.setState({ ViewportValue: false, FixedValue: true, PanoramaValue: false });
            this.props.handleUpdateFixedValue(this.state.FixedValue);
            this.props.handleUpdateViewportValue(this.state.ViewportValue);
            this.props.handleUpdatePanoramaValue(this.state.PanoramaValue);
        }
        else if (this.state.ImageSizeRadioValue === "panorama") {
            this.setState({ ViewportValue: false, FixedValue: false, PanoramaValue: true });
            this.props.handleUpdatePanoramaValue(this.state.PanoramaValue);
            this.props.handleUpdateViewportValue(this.state.ViewportValue);
            this.props.handleUpdateFixedValue(this.state.FixedValue);
        }
    }

    handleImageFormatChange(event) {
        this.setState({
            ImageFormatRadioValue: event.target.value
        });

        if (this.state.ImageFormatRadioValue === "png") {
            this.setState({ ImageFormatPngValue: true, ImageFormatJpgValue: false, ImageFormatHDRValue: false });
            this.props.handleUpdateImageFormatPngValue(this.state.ImageFormatPngValue);
            this.props.handleUpdateImageFormatJpgValue(this.state.ImageFormatJpgValue);
            this.props.handleUpdateImageFormatHDRValue(this.state.ImageFormatHDRValue);
        }
        else if (this.state.ImageFormatRadioValue === "jpg") {
            this.setState({ ImageFormatPngValue: false, ImageFormatJpgValue: true, ImageFormatHDRValue: false });
            this.props.handleUpdateImageFormatJpgValue(this.state.ImageFormatJpgValue);
            this.props.handleUpdateImageFormatPngValue(this.state.ImageFormatPngValue);
            this.props.handleUpdateImageFormatHDRValue(this.state.ImageFormatHDRValue);
        }
        else if (this.state.ImageFormatRadioValue === "hdr") {
            this.setState({ ImageFormatPngValue: false, ImageFormatJpgValue: false, ImageFormatHDRValue: true });
            this.props.handleUpdateImageFormatHDRValue(this.state.ImageFormatHDRValue);
            this.props.handleUpdateImageFormatPngValue(this.state.ImageFormatPngValue);
            this.props.handleUpdateImageFormatJpgValue(this.state.ImageFormatJpgValue);
        }
    }

    handleImageSaveLocationChange(event) {
        this.setState({
            ImageSaveLocationRadioValue: event.target.value
        });

        if (this.state.ImageSaveLocationRadioValue === "model") {
            this.setState({ ImageSaveModelValue: true, ImageSaveModelCustomValue: false });
            this.props.handleUpdateImageSaveModelValue(this.state.ImageSaveModelValue);
            this.props.handleUpdateSaveModelCustomValue(this.state.ImageSaveModelCustomValue);
        }
        else if (this.state.ImageSaveLocationRadioValue === "custom") {
            this.setState({ ImageSaveModelValue: false, ImageSaveModelCustomValue: true });
            this.props.handleUpdateSaveModelCustomValue(this.state.ImageSaveModelCustomValue);
            this.props.handleUpdateImageSaveModelValue(this.state.ImageSaveModelValue);
        }
    }
}
