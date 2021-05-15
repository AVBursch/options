import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Container>
                    <Row>
                        <Col>
                            <Form.Group as={Row} 
                                style={{ 
                                    marginTop: 5, 
                                    marginLeft: 0, 
                                    marginBottom: 0
                                }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].imageSize}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check
                                    type="radio"
                                    value="viewport"
                                    name="imageSize"
                                    label={this.props.translations[this.props.language].viewport}
                                    checked={this.props.options.output_dimensions === "viewport" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "viewport";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                                <Form.Check
                                    type="radio"
                                    value="fixed"
                                    name="imageSize"
                                    label={this.props.translations[this.props.language].fixed}
                                    checked={this.props.options.output_dimensions === "fixed" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "fixed";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                                <Form.Check
                                    type="radio"
                                    value="panorama"
                                    name="imageSize"
                                    label={this.props.translations[this.props.language].panorama}
                                    checked={this.props.options.output_dimensions === "panorama" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_dimensions = "panorama";
                                            this.props.options.output_dimensions_height = this.props.options.output_dimensions_width > 0 ? this.props.options.output_dimensions_width / (2 / 1) : 0;
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column xs="3">
                                    {this.props.translations[this.props.language].size}
                                </Form.Label>
                                <Col xs="9">
                                    <Form.Control as="select"
                                        ref={this.dimensionsRef}
                                        size="sm"
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
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column xs="3">
                                    {this.props.translations[this.props.language].width}
                                </Form.Label>
                                <Col xs="9">
                                    <Form.Control
                                        ref={this.widthRef}
                                        type="number"
                                        size="sm"
                                        disabled={this.props.options.output_dimensions === "viewport"}
                                        defaultValue={this.props.output_dimensions_width}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.props.options.output_dimensions_width = +value;
                                            if (this.props.options.output_dimensions === "panorama") {
                                                this.props.options.output_dimensions_height = this.props.options.output_dimensions_width > 0 ? this.props.options.output_dimensions_width / (2 / 1) : 0;
                                            }
                                            this.props.updateOptions(this.props.options);
                                        }}></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column xs="3">
                                    {this.props.translations[this.props.language].height}
                                </Form.Label>
                                <Col xs="9">
                                    <Form.Control
                                        ref={this.heightRef}
                                        type="number"
                                        size="sm"
                                        disabled={this.props.options.output_dimensions !== "fixed"}
                                        defaultValue={this.props.output_dimensions_height}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            this.props.options.output_dimensions_height = +value;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row} style={{ marginTop: 10, marginBottom: 5 }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].imageFormat}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Check
                                    type="radio"
                                    name="imageFormat"
                                    value="png"
                                    label=".png"
                                    style={{ marginRight: 5 }}
                                    checked={this.props.options.output_format === "png" || this.props.options.output_format === "pnga" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = this.transparentRef.current.checked ? "pnga" : "png";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="imageFormat"
                                    value="jpg"
                                    label=".jpg"
                                    style={{ marginRight: 5 }}
                                    checked={this.props.options.output_format === "jpg" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = "jpg";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="imageFormat"
                                    value="hdr"
                                    label=".hdr"
                                    checked={this.props.options.output_format === "hdr" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_format = "hdr";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Check
                                    ref={this.transparentRef}
                                    type="checkbox"
                                    label={this.props.translations[this.props.language].transparent}
                                    checked={this.props.options.output_format === "pnga" ? true : false}
                                    onChange={(e) => {
                                        this.props.options.output_format = e.target.checked ? "pnga" : "png";
                                        this.props.updateOptions(this.props.options);
                                    }}
                                ></Form.Check>
                            </Form.Group>
                            <Form.Group as={Row} style={{ marginBottom: 5 }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].imageSaveLocation}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Check
                                    type="radio"
                                    name="imageSave"
                                    value="model"
                                    style={{ marginRight: 5 }}
                                    label={this.props.translations[this.props.language].model}
                                    checked={this.props.options.output_mode === "model" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_mode = "model";
                                            this.props.options.output_directory = "";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                                <Form.Check
                                    type="radio"
                                    name="imageSave"
                                    value="custom"
                                    label={this.props.translations[this.props.language].custom}
                                    checked={this.props.options.output_mode === "custom" ? true : false}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            this.props.options.output_mode = "custom";
                                            this.props.updateOptions(this.props.options);
                                        }
                                    }}
                                ></Form.Check>
                            </Form.Group>
                            <Form.Group as={Row} style={{ marginBottom: 5 }}>
                                <Form.Control
                                    ref={this.outputDirectoryRef}
                                    size="sm"
                                    style={{marginRight: 10}}
                                    disabled={this.props.options.output_mode === "model"}
                                    placeholder="Save location"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.output_directory = value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group as={Row} style={{marginRight: -20}}>
                                <Col>
                                    <Button
                                        variant="light"
                                        style={{ float: "right" }}
                                        disabled={this.props.options.output_mode === "model"}
                                        onClick={(e) => {
                                            this.props.getOutputDirectory();
                                        }}
                                    >
                                        {this.props.translations[this.props.language].browse}
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Output;
