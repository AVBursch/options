import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
                <Container>
                    <Row style={{marginTop: 5}}>
                        <Col xs="3">
                            <Form.Label style={{ fontWeight: 600 }}>
                                {this.props.translations[this.props.language].presetName}
                            </Form.Label>
                        </Col>
                        <Col xs="9">
                            <select
                                class="form-select form-select-sm"
                                defaultValue={this.props.options.preset}
                                size="sm"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    this.props.options.preset = value;
                                    this.props.updateOptions(this.props.options);
                                }}
                            >
                                {
                                    this.props.presets.map((preset, index) => {
                                        return (
                                            <option key={index} value={preset}>{preset}</option>
                                        )
                                    })
                                }
                            </select>
                        </Col>
                    </Row>
                    <Form.Group as={Row} style={{marginBottom: 0}}>
                        <Col>
                            <Button
                                variant="link"
                                style={{ float: "right" }}
                                onClick={this.props.comparePresets}
                            >
                                {this.props.translations[this.props.language].comparePresets}
                            </Button>
                        </Col>
                    </Form.Group>
                </Container>
            </React.Fragment >
        )
    }
}

export default Presets;
