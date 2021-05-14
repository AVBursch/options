import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row } from 'react-bootstrap';

class Presets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="3" style={{ fontWeight: 600 }}>
                            {this.props.translations[this.props.language].presetName}
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control as="select"
                                defaultValue={this.props.options.preset}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.props.options.preset = value;
                                    this.props.updateOptions(this.props.options);
                                }}
                            >
                                {
                                    this.props.presets.map((preset, index) => {
                                        return (
                                            <option value={preset}>{preset}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                            <Button
                                variant="link"
                                style={{ float: "right" }}
                                onClick={this.props.comparePresets}
                            >
                                {this.props.translations[this.props.language].comparePresets}
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </React.Fragment >
        )
    }
}

export default Presets;
