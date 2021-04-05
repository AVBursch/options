import React from 'react';
import { Output_Tab_UI } from "../Components/output_tab_ui";
import { Environment_Tab_UI } from "../Components/environment_tab_ui";
import { HDRI_IBL_Tab_UI } from "../Components/hdri_ibl_tab_ui";

export class Rendering_Options_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Output tab
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

            // Environment tab
            BackgroundValue: this.props.BackgroundValue,
            IntensityValue: this.props.IntensityValue,
            ExposureValue: this.props.ExposureValue,
            RenderingModeValue: this.props.RenderingModeValue,
            SoftOmniLightsOptionValue: this.props.SoftOmniLightsOptionValue,
            CausticsOptionValue: this.props.CausticsOptionValue,
            ClayOptionValue: this.props.ClayOptionValue,
            InformationBarOptionValue: this.props.InformationBarOptionValue,
            TranslucentColorOptionValue: this.props.TranslucentColorOptionValue,
            AutomaticMaterialsOptionValue: this.props.AutomaticMaterialsOptionValue,

            // HDRI/IBL tab
            ImageStringValue: this.props.ImageStringValue,
            ImageValue: this.props.ImageValue,
            ImageRotationValue: this.props.ImageRotationValue,
            ImageExposureValue: this.props.ImageExposureValue,

            // Other
            TabOptionSelected: 1,
            PresetNameValue: "default.pps"

        }
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><h4>Preset Name:</h4></td>
                            <td><select defaultValue={"default.pps"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState({
                                        PresetName: value
                                    }, () => {
                                        this.handleUpdatePresetValue(this.state.PresetNameValue);
                                    });
                                }}
                            >
                                <option value={"1_exterior_default_2.0.pps"}>1_exterior_default_2.0.pps</option>
                                <option value={"1_exterior_fine_AA_2.0.pps"}>1_exterior_fine_AA_2.0.pps</option>
                                <option value={"1_exterior_high_2.0.pps"}>1_exterior_high_2.0.pps</option>
                                <option value={"1_exterior_QMC_2.0.pps"}>1_exterior_QMC_2.0.pps</option>
                                <option value={"2_interior_bright_default_2.1.pps"}>2_interior_bright_default_2.1.pps</option>
                                <option value={"2_interior_bright_fine_AA_2.1.pps"}>2_interior_bright_fine_AA_2.1.pps</option>
                                <option value={"2_interior_bright_high_2.1.pps"}>2_interior_bright_high_2.1.pps</option>
                                <option value={"2_interior_bright_QMC_2.1.pps"}>2_interior_bright_QMC_2.1.pps</option>
                                <option value={"3_interior_default_1.0.5.pps"}>3_interior_default_1.0.5.pps</option>
                                <option value={"3_interior_fine_AA_1.0.5.pps"}>3_interior_fine_AA_1.0.5.pps</option>
                                <option value={"3_interior_high_1.0.8.pps"}>3_interior_high_1.0.8.pps</option>
                                <option value={"3_interior_QMC_1.0.3.pps"}>3_interior_QMC_1.0.3.pps</option>
                                <option value={"default.pps"}>default.pps</option>
                            </select></td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={() => { this.handleOutputTabButtonClick() }}>Output</button>
                <button onClick={() => { this.handleEnvironmentTabButtonClick() }}>Environment</button>
                {this.state.BackgroundValue === "HDRI/IBL" ?
                    <button onClick={() => { this.handleHDRIIBLTabButtonClick() }}>HDRI/IBL</button>
                    :
                    <button disabled={true} onClick={() => { this.handleHDRIIBLTabButtonClick() }}>HDRI/IBL</button>
                }


                {this.state.TabOptionSelected === 1 ?
                    <Output_Tab_UI
                        ViewportValue={this.state.ViewportValue}
                        FixedValue={this.state.FixedValue}
                        PanoramaValue={this.state.PanoramaValue}
                        SizeValue={this.state.SizeValue}
                        SizeWidthValue={this.state.SizeWidthValue}
                        SizeHeightValue={this.state.SizeHeightValue}
                        ImageFormatPngValue={this.state.ImageFormatPngValue}
                        ImageFormatJpgValue={this.state.ImageFormatJpgValue}
                        ImageFormatHDRValue={this.state.ImageFormatHDRValue}
                        ImageFormatTransparentValue={this.state.ImageFormatTransparentValue}
                        ImageSaveModelValue={this.state.ImageSaveModelValue}
                        ImageSaveModelCustomValue={this.state.ImageSaveModelCustomValue}
                        ImageSaveLocationValue={this.state.ImageSaveLocationValue}

                        handleUpdateViewportValue={this.handleUpdateViewportValue}
                        handleUpdateFixedValue={this.handleUpdateFixedValue}
                        handleUpdatePanoramaValue={this.handleUpdatePanoramaValue}
                        handleUpdateSizeValue={this.handleUpdateSizeValue}
                        handleUpdateSizeWidthValue={this.handleUpdateSizeWidthValue}
                        handleUpdateSizeHeightValue={this.handleUpdateSizeHeightValue}
                        handleUpdateImageFormatPngValue={this.handleUpdateImageFormatPngValue}
                        handleUpdateImageFormatJpgValue={this.handleUpdateImageFormatPngValue}
                        handleUpdateImageFormatHDRValue={this.handleUpdateImageFormatHDRValue}
                        handleUpdateImageFormatTransparentValue={this.handleUpdateImageFormatTransparentValue}
                        handleUpdateImageSaveModelValue={this.handleUpdateImageSaveModelValue}
                        handleUpdateSaveModelCustomValue={this.handleUpdateSaveModelCustomValue}
                        handleUpdateSaveLocationValue={this.handleUpdateSaveLocationValue}
                    />
                    : null}
                {this.state.TabOptionSelected === 2 ?
                    <Environment_Tab_UI
                        BackgroundValue={this.state.BackgroundValue}
                        IntensityValue={this.state.IntensityValue}
                        ExposureValue={this.state.ExposureValue}
                        RenderingModeValue={this.state.RenderingModeValue}
                        SoftOmniLightsOptionValue={this.state.SoftOmniLightsOptionValue}
                        CausticsOptionValue={this.state.CausticsOptionValue}
                        ClayOptionValue={this.state.ClayOptionValue}
                        InformationBarOptionValue={this.state.InformationBarOptionValue}
                        TranslucentColorOptionValue={this.state.TranslucentColorOptionValue}
                        AutomaticMaterialsOptionValue={this.state.AutomaticMaterialsOptionValue}

                        handleUpdateBackgroundValue={this.handleUpdateBackgroundValue}
                        handleUpdateIntensityValue={this.handleUpdateIntensityValue}
                        handleUpdateExposureValue={this.handleUpdateExposureValue}
                        handleUpdateRenderingModeValue={this.handleUpdateRenderingModeValue}
                        handleUpdateSoftOmniLightsOptionValue={this.handleUpdateSoftOmniLightsOptionValue}
                        handleUpdateCausticsOptionValue={this.handleUpdateCausticsOptionValue}
                        handleUpdateClayOptionValue={this.handleUpdateClayOptionValue}
                        handleUpdateInformationBarOptionValue={this.handleUpdateInformationBarOptionValue}
                        handleUpdateTranslucentColorOptionValue={this.handleUpdateTranslucentColorOptionValue}
                        handleUpdateAutomaticMaterialsOptionValue={this.handleUpdateAutomaticMaterialsOptionValue}
                    />
                    : null}
                {this.state.TabOptionSelected === 3 ?
                    <HDRI_IBL_Tab_UI
                        ImageStringValue={this.state.ImageStringValue}
                        ImageValue={this.state.ImageValue}
                        ImageRotationValue={this.state.ImageRotationValue}
                        ImageExposureValue={this.state.ImageExposureValue}

                        handleUpdateImageStringValue={this.handleUpdateImageStringValue}
                        handleUpdateImageValue={this.handleUpdateImageValue}
                        handleUpdateImageRotationValue={this.handleUpdateImageRotationValue}
                        handleUpdateImageExposureValue={this.handleUpdateImageExposureValue}
                    />
                    : null}

                <br />
                <button onClick={() => { this.handleSaveButtonClick() }}>Save</button>
                <button onClick={() => { this.handleCancelButtonClick() }}>Cancel</button>

            </React.Fragment>
        )
    }

    // called from ruby


    // class event functions
    handleUpdatePresetValue = (value) => {
        this.setState({ PresetNameValue: value });
    }

    handleSaveButtonClick = () => {

    }

    handleCancelButtonClick = () => {

    }

    // Tab event functions
    handleOutputTabButtonClick = () => {
        this.setState({ TabOptionSelected: 1 });
    }

    handleEnvironmentTabButtonClick = () => {
        this.setState({ TabOptionSelected: 2 });
    }

    handleHDRIIBLTabButtonClick = () => {
        this.setState({ TabOptionSelected: 3 });
    }

    // Output Tab
    handleUpdateViewportValue = (value) => {
        this.setState({
            ViewportValue: value
        });
    }

    handleUpdateFixedValue = (value) => {
        this.setState({
            FixedValue: value
        });
    }

    handleUpdatePanoramaValue = (value) => {
        this.setState({
            PanoramaValue: value
        });
    }

    handleUpdateSizeValue = (value) => {
        this.setState({
            SizeValue: value
        });
    }

    handleUpdateSizeWidthValue = (value) => {
        this.setState({
            SizeWidthValue: value
        });
    }

    handleUpdateSizeHeightValue = (value) => {
        this.setState({
            SizeHeightValue: value
        });
    }

    handleUpdateImageFormatPngValue = (value) => {
        this.setState({
            ImageFormatPngValue: value
        });
    }

    handleUpdateImageFormatJpgValue = (value) => {
        this.setState({
            ImageFormatJpgValue: value
        });
    }

    handleUpdateImageFormatHDRValue = (value) => {
        this.setState({
            ImageFormatHDRValue: value
        });
    }

    handleUpdateImageFormatTransparentValue = (value) => {
        this.setState({
            ImageFormatTransparentValue: value
        });
    }

    handleUpdateImageSaveModelValue = (value) => {
        this.setState({
            ImageSaveModelValue: value
        });
    }

    handleUpdateSaveModelCustomValue = (value) => {
        this.setState({
            ImageSaveModelCustomValue: value
        });
    }

    handleUpdateSaveLocationValue = (value) => {
        this.setState({
            ImageSaveLocationValue: value
        });
    }

    // Environment Tab
    handleUpdateBackgroundValue = (value) => {
        this.setState({
            BackgroundValue: value
        });
    }

    handleUpdateIntensityValue = (value) => {
        this.setState({
            IntensityValue: value
        });
    }

    handleUpdateExposureValue = (value) => {
        this.setState({
            ExposureValue: value
        });
    }

    handleUpdateRenderingModeValue = (value) => {
        this.setState({
            RenderingModeValue: value
        });
    }

    handleUpdateSoftOmniLightsOptionValue = (value) => {
        this.setState({
            SoftOmniLightsOptionValue: value
        });
    }

    handleUpdateCausticsOptionValue = (value) => {
        this.setState({
            CausticsOptionValue: value
        });
    }

    handleUpdateClayOptionValue = (value) => {
        this.setState({
            ClayOptionValue: value
        });
    }

    handleUpdateInformationBarOptionValue = (value) => {
        this.setState({
            InformationBarOptionValue: value
        });
    }

    handleUpdateTranslucentColorOptionValue = (value) => {
        this.setState({
            TranslucentColorOptionValue: value
        });
    }

    handleUpdateAutomaticMaterialsOptionValue = (value) => {
        this.setState({
            AutomaticMaterialsOptionValue: value
        });
    }

    // HDRI/IBL Tab
    handleUpdateImageStringValue = (value) => {
        this.setState({
            ImageStringValue: value
        });
    }

    handleUpdateImageValue = (value) => {
        this.setState({
            ImageValue: value
        });
    }

    handleUpdateImageRotationValue = (value) => {
        this.setState({
            ImageRotationValue: value
        });
    }

    handleUpdateImageExposureValue = (value) => {
        this.setState({
            ImageExposureValue: value
        });
    }




}
