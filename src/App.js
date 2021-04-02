//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Rendering_Options_UI } from './Components/material_options';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Output tab
      ViewportValue: true,
      FixedValue: false,
      PanoramaValue: false,
      SizeValue: "Custom",
      SizeWidthValue: 1,
      SizeHeightValue: 1,
      ImageFormatPngValue: true,
      ImageFormatJpgValue: false,
      ImageFormatHDRValue: false,
      ImageFormatTransparentValue: false,
      ImageSaveModelValue: true,
      ImageSaveModelCustomValue: false,
      ImageSaveLocationValue: "",

      // Environment tab
      BackgroundValue: "Default (Set in Sketchup)",
      IntensityValue: 50,
      ExposureValue: 50,
      RenderingModeValue: "Slow",
      SoftOmniLightsOptionValue: false,
      CausticsOptionValue: false,
      ClayOptionValue: false,
      InformationBarOptionValue: false,
      TranslucentColorOptionValue: false,
      AutomaticMaterialsOptionValue: false,

      // HDRI/IBL tab
      ImageStringValue: "Interior01.hdr",
      ImageValue: "",
      ImageRotationValue: 0,
      ImageExposureValue: 1.5

    }
  }

  render() {
    return (
      <React.Fragment>
        <Rendering_Options_UI
          ViewportValue={this.state.ViewportValue}
          FixedValue={this.state.FixedValue}
          PanoramaValue={this.state.PanoramaValue}
          SizeValue={this.state.SizeValue}
          SizeWidthValue={this.state.SizeWidthValue}
          SizeHeightValue={this.state.SizeHeightValue}
          ImageFormatPngValueValue={this.state.ImageFormatPngValue}
          ImageFormatJpgValue={this.state.ImageFormatJpgValue}
          ImageFormatTransparentValue={this.state.ImageFormatTransparentValue}
          ImageSaveModelValue={this.state.ImageSaveModelValue}
          ImageSaveModelCustomValue={this.state.ImageSaveModelCustomValue}
          ImageSaveLocationValue={this.state.ImageSaveLocationValue}

          BackgroundValue={this.state.BackgroundValue}
          IntensityValue={this.state.IntensityValue}
          ExposureValue={this.state.ExposureValue}
          RenderingModeValue={this.state.RenderingModeValue}
          SoftOmniLightsOptionValue={this.state.SoftOmniLightsOptionValue}
          CausticOptionValue={this.state.CausticsOptionValue}
          ClayOptionValue={this.state.ClayOptionValue}
          InformationBarOptionValue={this.state.InformationBarOptionValue}
          TranslucentColorOptionValue={this.state.TranslucentColorOptionValue}
          AutomaticMaterialsOptionValue={this.state.AutomaticMaterialsOptionValue}

          ImageStringValue={this.state.ImageStringValue}
          ImageValue={this.state.ImageValue}
          ImageRotationValue={this.state.ImageRotationValue}
          ImageExposureValue={this.state.ImageExposureValue}
        />
      </React.Fragment>
    )
  }
}



export default App;
