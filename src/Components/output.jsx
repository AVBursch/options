import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.dimensionsRef = React.createRef();
        this.widthRef = React.createRef();
        this.heightRef = React.createRef();
        this.transparentRef = React.createRef();
        this.imageSaveRef = React.createRef();
        this.outputDirectoryRef = React.createRef();
    }

    componentDidMount() {
        this.dimensionsRef.current.value = this.getImageSizeValue();
        this.widthRef.current.value = this.props.options.output_dimensions_width;
        this.heightRef.current.value = this.props.options.output_dimensions_height;
        this.transparentRef.current.checked = this.props.options.output_format === "pnga";
        this.outputDirectoryRef.current.value = this.props.options.output_directory;
    }

    componentDidUpdate(prevProps) {
        if (this.props.options !== prevProps.options) {
            this.dimensionsRef.current.value = this.getImageSizeValue();
            this.widthRef.current.value = this.props.options.output_dimensions_width;
            this.heightRef.current.value = this.props.options.output_dimensions_height;
            this.transparentRef.current.checked = this.props.options.output_format === "pnga";
            this.outputDirectoryRef.current.value = this.props.options.output_directory;
        }
    }

    getImageSizeValue = () => {
        const width = this.props.options.output_dimensions_width;
        const height = this.props.options.output_dimensions_height;
        const value = `${width},${height}`;

        const l = this.props.dimensions.length;
        for (let i = 0; i < l; i++) {
            const dimension = this.props.dimensions[i];
            if (dimension.value === value) {
                return value;
            }
        }
        return "custom";
    }

    render() {
        return (
            <React.Fragment>
                <table style={{ width: 500 }}>
                    <tbody>
                        <tr>
                            <td>
                                <label>{this.props.translations[this.props.language].imageSize}</label>
                                <br />
                                <input type="radio" name="imageSize" value="Viewport"
                                    checked={this.props.options.output_dimensions === "viewport" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "viewport";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> {this.props.translations[this.props.language].viewport}
                                <br />
                                <input type="radio" name="imageSize" value="fixed"
                                    checked={this.props.options.output_dimensions === "fixed" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "fixed";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> {this.props.translations[this.props.language].fixed}
                                <br />
                                <input type="radio" name="imageSize" value="panorama"
                                    checked={this.props.options.output_dimensions === "panorama" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "panorama";
                                            this.props.options.output_dimensions_height = this.props.options.output_dimensions_width > 0 ? this.props.options.output_dimensions_width / (2 / 1) : 0;
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> {this.props.translations[this.props.language].panorama}
                                <br />
                                <label>{this.props.translations[this.props.language].size}</label>
                                <select
                                    ref={this.dimensionsRef}
                                    disabled={this.props.options.output_dimensions !== "fixed"}
                                    defaultValue={this.getImageSizeValue()}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value !== "custom") {
                                            const dimensions = value.split(',');
                                            const width = parseInt(dimensions[0], 10);
                                            const height = parseInt(dimensions[1], 10);
                                            this.props.options.output_dimensions_width = width;
                                            this.props.options.output_dimensions_height = height;
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                >
                                    <option key="custom" value="custom">{this.props.translations[this.props.language].custom}</option>
                                    {
                                        this.props.dimensions.map((dimension, index) => {
                                            return (<option key={index} value={dimension.value}>{dimension.description}</option>)
                                        })
                                    }
                                </select>
                                <br />
                                <label>{this.props.translations[this.props.language].width}</label>
                                <input 
                                    ref={this.widthRef} 
                                    type="number"
                                    disabled={this.props.options.output_dimensions === "viewport"}
                                    defaultValue={this.props.output_dimensions_width}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.output_dimensions_width = +value;
                                        if(this.props.options.output_dimensions === "panorama") {
                                            this.props.options.output_dimensions_height = this.props.options.output_dimensions_width > 0 ? this.props.options.output_dimensions_width / (2 / 1) : 0;
                                        }
                                        this.props.updateOptions(this.props.options);
                                    }}
                                />
                                <br />
                                <label>{this.props.translations[this.props.language].height}</label>
                                <input 
                                    ref={this.heightRef} 
                                    type="number"
                                    disabled={this.props.options.output_dimensions !== "fixed"}
                                    defaultValue={this.props.output_dimensions_height}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.output_dimensions_height = +value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                />
                                <br />
                            </td>
                            <td>
                                <label>{this.props.translations[this.props.language].imageFormat}</label>
                                <br />
                                <input type="radio" name="imageFormat" value="png"
                                    checked={this.props.options.output_format === "png" || this.props.options.output_format === "pnga" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = this.transparentRef.current.checked ? "pnga" : "png";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> .png
                                <input type="radio" name="imageFormat" value="jpg"
                                    checked={this.props.options.output_format === "jpg" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = "jpg";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> .jpg
                                <input type="radio" name="imageFormat" value="hdr"
                                    checked={this.props.options.output_format === "hdr" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = "hdr";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> .hdr
                                <br />
                                <input ref={this.transparentRef} type="checkbox"
                                    checked={this.props.options.output_format === "pnga" ? true : false}
                                    onChange={(e) => {
                                        this.props.options.output_format = e.target.checked ? "pnga" : "png";
                                        this.props.updateOptions(this.props.options);
                                    }}
                                /> {this.props.translations[this.props.language].transparent}
                                <br />
                                <br />
                                <label>{this.props.translations[this.props.language].imageSaveLocation}</label>
                                <br />
                                <input type="radio" name="imageSave" value="model"
                                    checked={this.props.options.output_mode === "model" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_mode = "model";
                                            this.props.options.output_directory = "";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> {this.props.translations[this.props.language].model}
                                <input type="radio" name="imageSave" value="custom"
                                    checked={this.props.options.output_mode === "custom" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_mode = "custom";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                /> {this.props.translations[this.props.language].custom}
                                <br />
                                <br />
                                <input
                                    ref={this.outputDirectoryRef}
                                    disabled={this.props.options.output_mode === "model"}
                                    style={{ float: 'right' }}
                                    placeholder="Save location"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.output_directory = value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                />
                                <br />
                                <button
                                    disabled={this.props.options.output_mode === "model"}
                                    style={{ float: 'right' }}
                                    onClick={(e) => {
                                        this.props.getOutputDirectory();
                                    }}
                                >
                                    {this.props.translations[this.props.language].browse}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Output;
