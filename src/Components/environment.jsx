import React from 'react';

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
                <div style={{ backgroundColor: "white" }}>
                    <table style={{ width: 500 }}>
                        <tbody>
                            <tr>
                                <td>
                                    <div style={{ height: 250, width: 250 }}>
                                        <label><b>{this.props.translations[this.props.language].background}:</b></label>
                                        <br />
                                        <select
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
                                        <br />
                                        <label><b>{this.props.translations[this.props.language].sunSkyBrightness}:</b></label>
                                        <br />
                                        <label>{this.props.translations[this.props.language].intensity}</label>
                                        <input
                                            ref={this.intensityRef}
                                            type="range"
                                            min={0}
                                            max={100}
                                            defaultValue={this.props.options.environment_brightness}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                this.props.options.environment_brightness = value;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        />
                                        <label>{this.props.options.environment_brightness}</label>
                                        <br />
                                        <label>{this.props.translations[this.props.language].exposure}</label>
                                        <input
                                            ref={this.exposureRef}
                                            type="range"
                                            min={0}
                                            max={100}
                                            defaultValue={this.props.options.environment_contrast}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                this.props.options.environment_contrast = value;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        />
                                        <label>{this.props.options.environment_contrast}</label>
                                        <br />
                                        <button
                                            style={{ float: 'right' }}
                                            onClick={(e) => {
                                                this.props.options.environment_brightness = 50;
                                                this.props.options.environment_contrast = 50;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        >
                                            {this.props.translations[this.props.language].reset}
                                        </button>
                                    </div>
                                </td>


                                <td>
                                    <div style={{ height: 250, width: 250 }}>
                                        <label><b>{this.props.translations[this.props.language].renderingMode}:</b></label>
                                        <br />
                                        <select
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
                                        <br />
                                        <label><b>{this.props.translations[this.props.language].options}:</b></label>
                                        <br />
                                        <input ref={this.softOmniLightsRef} type="checkbox"
                                            checked={this.props.options.environment_spherical_point_lights}
                                            onChange={(e) => {
                                                this.props.options.environment_spherical_point_lights = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].softOmniLights}
                                        <br />
                                        <input ref={this.causticRef} type="checkbox"
                                            checked={this.props.options.environment_caustic}
                                            onChange={(e) => {
                                                this.props.options.environment_caustic = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].caustics}
                                        <br />
                                        <input ref={this.clayRef} type="checkbox"
                                            checked={this.props.options.environment_clay}
                                            onChange={(e) => {
                                                this.props.options.environment_clay = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].clay}
                                        <br />
                                        <input ref={this.outputInfoRef} type="checkbox"
                                            checked={this.props.options.output_info}
                                            onChange={(e) => {
                                                this.props.options.output_info = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].informationBar}
                                        <br />
                                        <input ref={this.translucentColorRef} type="checkbox"
                                            checked={this.props.options.environment_translucent_color}
                                            onChange={(e) => {
                                                this.props.options.environment_translucent_color = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].translucentColor}
                                        <br />
                                        <input ref={this.automaticMaterialsRef} type="checkbox"
                                            checked={this.props.options.environment_automatic_materials}
                                            onChange={(e) => {
                                                this.props.options.environment_automatic_materials = e.target.checked;
                                                this.props.updateOptions(this.props.options);
                                            }}
                                        /> {this.props.translations[this.props.language].automaticMaterials}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Environment;
