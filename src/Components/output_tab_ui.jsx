import React from 'react';

export class Output_Tab_UI extends React.Component {
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

                            <td>
                                <form >
                                    <input type="radio" name="imagesize" value="viewport" />
                                    <label for="viewport">Viewport</label><br />
                                    <input type="radio" name="imagesize" value="fixed" />
                                    <label for="fixed">Fixed</label><br />
                                    <input type="radio" name="imagesize" value="panorama" />
                                    <label for="panorama">Panorama</label><br />
                                </form>

                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td><h4>Size:</h4></td>
                                            <td><select>
                                                <option>Custom</option>
                                                <option>230 x 150</option>
                                                <option>640 x 480</option>
                                                <option>1024 x 768</option>
                                                <option>2048 x 1536</option>
                                                <option>3076 x 2034</option>
                                                <option>4076 x 3304</option>
                                                <option>852 x 480</option>
                                                <option>1600 x 900</option>
                                                <option>1920 x 1080</option>
                                            </select></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <label>Size:</label>
                                <input type="text" name="size" value="0" /><br />
                                <label>Width:</label>
                                <input type="text" name="width" value="0" /><br />
                                <label>Height:</label>
                                <input type="text" name="height" value="0" /><br />
                            </td>

                            <td>

                                <h4>Image Format:</h4>
                                <form >
                                    <input type="radio" name="imageformat" value="png" />
                                    <label for="png">.png</label><br />
                                    <input type="radio" name="imageformat" value="jpg" />
                                    <label for="jpg">.jpg</label><br />
                                    <input type="radio" name="imageformat" value="png" />
                                    <label for="png">.hdr</label><br />
                                </form>

                                <input type="checkbox" name="imageformat" value="Transparent" />
                                <label for="transparent"> Transparent</label><br />

                                <h4>Image Save Location:</h4>
                                <form >
                                    <input type="radio" name="saveformat" value="model" />
                                    <label for="model">Model</label><br />
                                    <input type="radio" name="saveformat" value="custom" />
                                    <label for="custom">Custom</label><br />
                                </form>

                                <input type="text" name="savelocation" value="save location" /><br />
                                <button>Browse</button>

                            </td>

                        </tr>
                    </tbody>
                </table>

            </React.Fragment>
        )
    }
}
