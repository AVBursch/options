import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Environment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.intensityRef = React.createRef();
        this.exposureRef = React.createRef();
        this.softOmniLightsRef = React.createRef();
        this.causticRef = React.createRef();
        this.clayRef = React.createRef();
        this.outputInfoRef = React.createRef();
        this.translucentColorRef = React.createRef();
        this.automaticMaterialsRef = React.createRef();
    }

    componentDidMount() {
        this.intensityRef.current.value = this.props.options.environment_brightness;
        this.exposureRef.current.value = this.props.options.environment_contrast;
        this.softOmniLightsRef.current.value = this.props.options.environment_spherical_point_lights;
        this.causticRef.current.value = this.props.options.environment_caustic;
        this.clayRef.current.value = this.props.options.environment_clay;
        this.outputInfoRef.current.value = this.props.options.output_info;
        this.translucentColorRef.current.value = this.props.options.environment_translucent_color;
        this.automaticMaterialsRef.current.value = this.props.options.environment_automatic_materials;
    }

    componentDidUpdate(prevProps) {
        if (this.props.options !== prevProps.options) {
            this.intensityRef.current.value = this.props.options.environment_brightness;
            this.exposureRef.current.value = this.props.options.environment_contrast;
            this.softOmniLightsRef.current.value = this.props.options.environment_spherical_point_lights;
            this.causticRef.current.value = this.props.options.environment_caustic;
            this.clayRef.current.value = this.props.options.environment_clay;
            this.outputInfoRef.current.value = this.props.options.output_info;
            this.translucentColorRef.current.value = this.props.options.environment_translucent_color;
            this.automaticMaterialsRef.current.value = this.props.options.environment_automatic_materials;
        }
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
                                    {this.props.translations[this.props.language].background}:
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <select class="form-select form-select-sm"
                                    size="sm"
                                    style={{ marginLeft: 10, width: 300 }}
                                    defaultValue={this.props.options.environment_background}
                                    onClick={(e) => {
                                        const value = e.target.value;
                                        this.props.options.environment_background = value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                >
                                    <option value="default">{this.props.translations[this.props.language].defaultSky}</option>
                                    <option value="sky">{this.props.translations[this.props.language].podiumPhysicalSky1}</option>
                                    <option value="sky2">{this.props.translations[this.props.language].podiumPhysicalSky2}</option>
                                    <option value="hdr">HDRI/IBL</option>
                                </select>
                            </Form.Group>
                            <Form.Group as={Row}
                                style={{
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    marginTop: 10
                                }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].sunSkyBrightness}:
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}
                                style={{
                                    marginLeft: 0,
                                    marginBottom: 0
                                }}>
                                <Form.Label class="col">
                                    {this.props.translations[this.props.language].intensity}
                                </Form.Label>
                                <Form.Control
                                    ref={this.intensityRef}
                                    type="range"
                                    min={0}
                                    max={100} 
                                    class="col"
                                    style={{ width: 150, marginLeft: 5, marginRight: 5 }}
                                    defaultValue={this.props.options.environment_brightness}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.environment_brightness = +value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                ></Form.Control>
                                <Form.Label style={{ marginLeft: 5 }} class="col">
                                    {this.props.options.environment_brightness}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}
                                style={{
                                    marginLeft: 0,
                                    marginBottom: 0
                                }}>
                                <Form.Label  class="col">
                                    {this.props.translations[this.props.language].exposure}
                                </Form.Label>
                                <Form.Control
                                    ref={this.exposureRef}
                                    type="range"
                                    min={0}
                                    max={100}
                                    class="col"
                                    style={{ width: 150, marginLeft: 5, marginRight: 5 }}
                                    defaultValue={this.props.options.environment_contrast}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.environment_contrast = +value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                ></Form.Control>
                                <Form.Label class="col">
                                    {this.props.options.environment_contrast}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}
                                style={{
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    marginRight: -30
                                }}>
                                <Col>
                                    <Button
                                        variant="light"
                                        style={{ float: 'right' }}
                                        onClick={(e) => {
                                            this.props.options.environment_brightness = 50;
                                            this.props.options.environment_contrast = 50;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    >
                                        {this.props.translations[this.props.language].reset}
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Row}
                                style={{
                                    marginTop: 5,
                                    marginLeft: 0,
                                    marginBottom: 0
                                }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].renderingMode}:
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <select
                                    size="sm"
                                    class="form-select form-select-sm"
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                    defaultValue={this.props.options.rendering_mode}
                                    onClick={(e) => {
                                        const value = e.target.value;
                                        this.props.options.rendering_mode = value;
                                        this.props.updateOptions(this.props.options);
                                    }}
                                >
                                    <option value="fast">{this.props.translations[this.props.language].fast}</option>
                                    <option value="slow">{this.props.translations[this.props.language].slow}</option>
                                </select>
                            </Form.Group>
                            <Form.Group as={Row}
                                style={{
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    marginTop: 10
                                }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].options}:
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col>
                                    <Form.Check
                                        ref={this.softOmniLightsRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].softOmniLights}
                                        checked={this.props.options.environment_spherical_point_lights}
                                        onChange={(e) => {
                                            this.props.options.environment_spherical_point_lights = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                    <Form.Check
                                        ref={this.causticRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].caustics}
                                        checked={this.props.options.environment_caustic}
                                        onChange={(e) => {
                                            this.props.options.environment_caustic = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                    <Form.Check
                                        ref={this.clayRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].clay}
                                        checked={this.props.options.environment_clay}
                                        onChange={(e) => {
                                            this.props.options.environment_clay = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                    <Form.Check
                                        ref={this.outputInfoRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].informationBar}
                                        checked={this.props.options.output_info}
                                        onChange={(e) => {
                                            this.props.options.output_info = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                    <Form.Check
                                        ref={this.translucentColorRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].translucentColor}
                                        checked={this.props.options.environment_translucent_color}
                                        onChange={(e) => {
                                            this.props.options.environment_translucent_color = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                    <Form.Check
                                        ref={this.automaticMaterialsRef}
                                        type="checkbox"
                                        label={this.props.translations[this.props.language].automaticMaterials}
                                        checked={this.props.options.environment_automatic_materials}
                                        onChange={(e) => {
                                            this.props.options.environment_automatic_materials = e.target.checked;
                                            this.props.updateOptions(this.props.options);
                                        }}
                                    ></Form.Check>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Environment;
