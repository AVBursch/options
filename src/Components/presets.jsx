import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';

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
                <Row>
                    <Col>
                        {this.props.translations[this.props.language].presetName}
                    </Col>
                    <Col>
                        <DropdownButton 
                            variant="light"
                            style={{float: "right"}}
                            title={this.props.options.preset}
                        >
                        {
                                this.props.presets.map((preset, index) => {
                                    return (
                                            <Dropdown.Item onClick={(e) => {
                                                this.props.options.preset = preset;
                                                this.props.updateOptions(this.props.options);
                                            }}>
                                                {preset}
                                            </Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button
                            variant="link"
                            style={{float: "right"}}
                            onClick={this.props.comparePresets}
                        >
                            {this.props.translations[this.props.language].comparePresets}
                        </Button>
                    </Col>
                </Row>
            </React.Fragment >
        )
    }
}

export default Presets;
