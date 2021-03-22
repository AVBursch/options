import React from 'react';
import { Output_Tab_UI } from "../Components/output_tab_ui";
import { Environment_Tab_UI } from "../Components/environment_tab_ui";
import { HDRI_IBL_Tab_UI } from "../Components/hdri_ibl_tab_ui";

export class Rendering_Options_UI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

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
                            <td><select>
                                <option>1_exterior_default_2.0.pps</option>
                                <option>1_exterior_fine_AA_2.0.pps</option>
                                <option>1_exterior_high_2.0.pps</option>
                                <option>1_exterior_QMC_2.0.pps</option>
                                <option>2_interior_bright_default_2.1.pps</option>
                                <option>2_interior_bright_fine_AA_2.1.pps</option>
                                <option>2_interior_bright_high_2.1.pps</option>
                                <option>2_interior_bright_QMC_2.1.pps</option>
                                <option>3_interior_default_1.0.5.pps</option>
                                <option>3_interior_fine_AA_1.0.5.pps</option>
                                <option>3_interior_high_1.0.8.pps</option>
                                <option>3_interior_QMC_1.0.3.pps</option>
                                <option>default.pps</option>
                            </select></td>
                        </tr>
                    </tbody>
                </table>

                <button>Output</button>
                <button>Environment</button>
                <button>HDRI/IBL</button>

                <Output_Tab_UI />

                <Environment_Tab_UI />

                <HDRI_IBL_Tab_UI />


                <br />
                <button>Save</button>
                <button>Cancel</button>

            </React.Fragment>
        )
    }
}
