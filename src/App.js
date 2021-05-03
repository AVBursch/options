import './App.css';
import React from 'react';
import Environment from './components/environment';
import HDR from './components/hdr';
import Output from './components/output';
import Presets from './components/presets';
import { en, ja, tw } from './models/translations';
/*global sketchup*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                preset: ""
            },
            presets: ["test1", "test2", "test3"],
            hdrOptions: null,
            saveAction: "save_to",
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
        window["setCamera"] = this.setCamera;
        window["setLanguage"] = this.setLanguage;
    }

    componentDidMount() {
        // start chain of calls to sketchup for loading language, options, presets and hdroptions
        this.setState({
            loaded: true
        }); //this.GetLanguage();
    }

    render() {
        return this.state.loaded ? (
            <React.Fragment>
                <div style={{ margin: 10, width: 400 }}>
                    <Presets 
                        translations={this.state.translations} 
                        language={this.state.language} 
                        presets={this.state.presets} 
                        updatePreset={(value) => { 
                            this.state.options.preset = value;
                            this.setState({options: {...this.state.options}}, ()=> {
                                console.log(this.state.options.preset);
                            });
                        }}
                    />
                    <div>
                        <ul>
                            <li>
                                <button
                                    style={this.state.displayTab === "output" ? { borderBottom: '1px solid black' } : { border: '0px' }}
                                    onClick={(e) => { this.setState({ displayTab: "output" }) }}
                                >
                                    {this.state.translations[this.state.language].output}
                                </button>
                            </li>
                            <li>
                                <button
                                    style={this.state.displayTab === "environment" ? { borderBottom: '1px solid black' } : { border: '0px' }}
                                    onClick={(e) => { this.setState({ displayTab: "environment" }) }}
                                >
                                    {this.state.translations[this.state.language].environment}
                                </button>
                            </li>
                            <li>
                                <button
                                    disabled={!this.canShowHDR()}
                                    style={this.state.displayTab === "hdr" ? { borderBottom: '1px solid black' } : { border: '0px' }}
                                    onClick={(e) => { this.setState({ displayTab: "hdr" }) }}
                                >
                                    HDRI/IBL
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {
                            this.state.displayTab === "output" ?
                                <Output
                                    options={this.state.options}
                                    language={this.state.language}
                                    translations={this.state.translations}
                                /> :
                                null
                        }
                        {
                            this.state.displayTab === "environment" ?
                                <Environment
                                    options={this.state.options}
                                    language={this.state.language}
                                    translations={this.state.translations}
                                /> :
                                null
                        }
                        {
                            this.state.displayTab === "hdr" ?
                                <HDR
                                    options={this.state.options}
                                    hdrOptions={this.state.hdrOptions}
                                    language={this.state.language}
                                    translations={this.state.translations}
                                /> :
                                null
                        }
                    </div>
                    <div style={{ float: 'right' }}>
                        <button onClick={this.cancel}>
                            {this.state.translations[this.state.language].cancel}
                        </button>
                        <button onClick={this.save}>
                            {this.state.translations[this.state.language].save}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        ) : null
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

    showHDR() {
        if (this.state.options.hdr_texture !== "" && this.canShowHDR()) {
            this.hdrComponent["setBackground"]();
        }
    }

    save() {
        if (this.saveAction === "reset") {
            this.reset();
            this.Save(JSON.stringify(this.options));
        } else if (this.saveAction === "switch_to") {
            this.Switch(JSON.stringify(this.options));
        } else {
            this.Save(JSON.stringify(this.options));
        }
    }

    reset() {
        this.setState({
            options: {
                preset: "default.pps",
                output_dimensions: "viewport",
                output_dimensions_width: 0,
                output_dimensions_height: 0,
                output_format: "png",
                output_mode: "model",
                output_directory: "",
                environment_background: "default",
                environment_clay: false,
                output_info: false,
                environment_caustic: false,
                environment_brightness: 50,
                environment_contrast: 50,
                environment_spherical_point_lights: false,
                environment_translucent_color: false,
                environment_automatic_materials: false,
                rendering_mode: "fast",
                hdr_texture: "Afternoon01.hdr",
                hdr_exposure: 1.4,
                hdr_rotation: 0,
                stereo_3d_num_eyes: 2,
                stereo_3d_eye_focal_length: 2.5,
                stereo_3d_eye_rig_plane: "left-right"
            }
        });
    }

    cancel() {
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

    setCamera = (x, y, z) => {
        this.zone.run(() => {
            if (this.options.hdr_texture !== "" && this.canShowHDR()) {
                this.hdrComponent["updateCamera"](x, y, z);
            }
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

    GetCamera = () => {
        sketchup.get_camera();
    }

    GetLanguage = () => {
        sketchup.get_language();
    }
}

export default App;
