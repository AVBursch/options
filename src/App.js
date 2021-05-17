import './App.css';
import React from 'react';
import Environment from './components/environment';
import HDR from './components/hdr';
import Output from './components/output';
import Presets from './components/presets';
import { en, ja, tw } from './models/translations';
import { Button, Container, Nav, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*global sketchup*/
window["debug"] = false;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                geometry_caching: false,
                preset: "default.pps",
                rendering_mode: "fast",
                // output
                output_dimensions: "viewport",
                output_dimensions_width: 0,
                output_dimensions_height: 0,
                output_format: "png",
                output_mode: "model",
                output_directory: "",
                output_info: false,
                // environment
                environment_background: "default",
                environment_sun: false,
                environment_turbidity: 4,
                environment_exposure: 2.5,
                environment_clay: false,
                environment_caustic: false,
                environment_brightness: 50,
                environment_contrast: 50,
                environment_spherical_point_lights: false,
                environment_translucent_color: false,
                environment_automatic_materials: false,
                environment_show_render_all: false,
                // hdr
                hdr_texture: "Afternoon01.hdr",
                hdr_rotation: 0,
                hdr_exposure: 1.4
            },
            dimensions: [
                { value: "230,150", description: "230 x 150" },
                { value: "640,480", description: "640 x 480" },
                { value: "1024,768", description: "1024 x 768" },
                { value: "2048,1536", description: "2048 x 1536" },
                { value: "3076,2034", description: "3076 x 2034" },
                { value: "4076,3304", description: "4076 x 3304" },
                { value: "852,480", description: "852 x 480" },
                { value: "1600,900", description: "1600 x 900" },
                { value: "1920,1080", description: "1920 x 1080" }
            ],
            presets: ["default.pps"],
            hdrOptions: {
                dir: "",
                names: [
                    "Afternoon01.hdr",
                    "Afternoon02.hdr",
                    "Morning01.hdr",
                    "Sunset01.hdr",
                    "Sunset02.hdr"
                ]
            },
            language: "en",
            translations: {
                en: en,
                js: ja,
                tw: tw
            },
            loaded: false,
            displayTab: "output"
        };
        window["setOutputDirectory"] = this.setOutputDirectory;
        window["setOptions"] = this.setOptions;
        window["setPresets"] = this.setPresets;
        window["setHDROptions"] = this.setHDROptions;
        window["setLanguage"] = this.setLanguage;
    }

    componentDidMount() {
        // start chain of calls to sketchup for loading language, options, presets and hdroptions
        if (window["debug"]) {
            this.setState({
                loaded: true
            });
        } else {
            this.GetLanguage();
        }
    }

    render() {
        return this.state.loaded ? (
            <React.Fragment>
                <Container style={{
                    width: 540,
                    height: 515,
                    margin: 0,
                    padding: 0
                }}>
                    <Presets
                        translations={this.state.translations}
                        language={this.state.language}
                        presets={this.state.presets}
                        comparePresets={this.ComparePresets}
                        options={this.state.options}
                        updateOptions={this.updateOptions}
                    />
                    <Nav variant="tabs" defaultActiveKey="output">
                        <Nav.Item>
                            <Nav.Link
                                eventKey="output"
                                onClick={(e) => { this.setState({ displayTab: "output" }) }}
                            >
                                {this.state.translations[this.state.language].output}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                eventKey="environment"
                                onClick={(e) => { this.setState({ displayTab: "environment" }) }}
                            >
                                {this.state.translations[this.state.language].environment}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="hdr"
                                disabled={!this.canShowHDR()}
                                onClick={(e) => { this.setState({ displayTab: "hdr" }) }}
                            >
                                HDRI/IBL
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {
                        this.state.displayTab === "output" ?
                            <Output
                                language={this.state.language}
                                translations={this.state.translations}
                                dimensions={this.state.dimensions}
                                options={this.state.options}
                                updateOptions={this.updateOptions}
                                getOutputDirectory={this.GetOutputDirectory}
                            /> :
                            null
                    }
                    {
                        this.state.displayTab === "environment" ?
                            <Environment
                                language={this.state.language}
                                translations={this.state.translations}
                                options={this.state.options}
                                updateOptions={this.updateOptions}
                            /> :
                            null
                    }
                    {
                        this.state.displayTab === "hdr" ?
                            <HDR
                                language={this.state.language}
                                translations={this.state.translations}
                                hdrOptions={this.state.hdrOptions}
                                options={this.state.options}
                                updateOptions={this.updateOptions}
                            /> :
                            null
                    }
                    <div style={{ position: 'absolute', bottom: 5, right: 5 }}>
                        <div>
                            <Button
                                variant="light"
                                style={{ margin: 5 }}
                                onClick={this.cancel}>
                                {this.state.translations[this.state.language].cancel}
                            </Button>
                            <Button
                                variant="light"
                                style={{ margin: 5 }}
                                onClick={this.save}>
                                {this.state.translations[this.state.language].save}
                            </Button>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        ) : null
    }

    updateOptions = (options) => {
        this.setState({
            options: { ...options }
        }, () => {
            // console.log(this.state.options);
        });
    }

    canShowHDR() {
        if (
            this.state.options !== null &&
            this.state.options !== undefined &&
            this.state.options.environment_background === "hdr"
        ) {
            return true;
        }
        return false;
    }

    save = () => {
        this.Save(JSON.stringify(this.state.options));
    }

    reset = () => {
        this.setState({
            options: {
                geometry_caching: false,
                preset: "default.pps",
                rendering_mode: "fast",
                // output
                output_dimensions: "viewport",
                output_dimensions_width: 0,
                output_dimensions_height: 0,
                output_format: "png",
                output_mode: "model",
                output_directory: "",
                output_info: false,
                // environment
                environment_background: "default",
                environment_sun: false,
                environment_turbidity: 4,
                environment_exposure: 2.5,
                environment_clay: false,
                environment_caustic: false,
                environment_brightness: 50,
                environment_contrast: 50,
                environment_spherical_point_lights: false,
                environment_translucent_color: false,
                environment_automatic_materials: false,
                environment_show_render_all: false,
                // hdr
                hdr_texture: "Afternoon01.hdr",
                hdr_rotation: 0,
                hdr_exposure: 1.4
            }
        });
    }

    cancel = () => {
        this.Cancel();
    }

    // called from sketchup

    setOutputDirectory = (value) => {
        this.state.options.output_directory = value;
        this.setState({
            options: { ... this.state.options }
        });
    }

    setOptions = (options) => {
        this.setState({
            options: options
        }, () => {
            this.GetPresets();
        });
    }

    setPresets = (presets) => {
        this.setState({
            presets: presets
        }, () => {
            this.GetHDROptions();
        });
    }

    setHDROptions = (hdrOptions) => {
        this.setState({
            hdrOptions: hdrOptions
        }, () => {
            this.setState({
                loaded: true
            });
        });
    }

    setLanguage = (language) => {
        this.setState({
            language: language
        }, () => {
            this.GetOptions();
        });
    }

    // call to sketchup
    Save = (value) => {
        sketchup.save(value);
    }

    Switch = (value) => {
        sketchup.switch(value);
    }

    Cancel = () => {
        sketchup.cancel();
    }

    ComparePresets = () => {
        sketchup.compare_presets();
    }

    GetOutputDirectory = () => {
        sketchup.get_output_directory();
    }

    GetOptions = () => {
        sketchup.get_options();
    }

    GetPresets = () => {
        sketchup.get_presets();
    }

    GetHDROptions = () => {
        sketchup.get_hdr_options();
    }

    GetLanguage = () => {
        sketchup.get_language();
    }
}

export default App;
