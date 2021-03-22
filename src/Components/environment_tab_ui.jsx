import React from 'react';

export class Environment_Tab_UI extends React.Component {
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
                    <tbody></tbody>
                    <tr>
                        <td>
                            <h4>Background:</h4>
                            <select>
                                <option>Default (Set in Sketchup)</option>
                                <option>Podium Physical Sky 1</option>
                                <option>Podium Physical Sky 2</option>
                                <option>HDRI/IBL</option>
                            </select>
                            <h4>Sun / Sky Brightness:</h4>
                            <label for="intensity">Intensity:</label>
                            <input type="range" name="intensity" min="0" max="100" />
                            <br></br>
                            <label for="exposure">Exposure:</label>
                            <input type="range" name="exposure" min="0" max="100" />
                            <br></br>
                            <button>Reset</button>


                        </td>
                        <td>

                            <h4>Rendering Mode:</h4>
                            <select>
                                <option>Slow</option>
                                <option>Fast</option>
                            </select>
                            <br></br>
                            <input type="checkbox" name="imageformat" value="softomnilights" />
                            <label for="transparent"> Soft Omni Lights (Slower)</label><br />
                            <input type="checkbox" name="imageformat" value="caustics" />
                            <label for="transparent"> Caustics</label><br />
                            <input type="checkbox" name="imageformat" value="clay" />
                            <label for="transparent"> Clay</label><br />
                            <input type="checkbox" name="imageformat" value="informationbar" />
                            <label for="transparent"> Information Bar</label><br />
                            <input type="checkbox" name="imageformat" value="Translucentcolor" />
                            <label for="transparent"> Translucent Color</label><br />
                            <input type="checkbox" name="imageformat" value="automaticmaterials" />
                            <label for="transparent"> Automatic Materials</label><br />


                        </td>
                    </tr>
                </table>

            </React.Fragment>
        )
    }
}
