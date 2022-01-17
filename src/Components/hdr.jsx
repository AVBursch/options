import React from 'react';
import * as THREE from 'three';
import HDRPreview from '../models/hdrPreview'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*global sketchup*/

class HDR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.containerRef = React.createRef();
        this.rotationRef = React.createRef();
        this.exposureRef = React.createRef();

        this.hdrPreview = null;
        window["longitude"] = 0;
        window["longitude_offset"] = 180;
        window["latitude"] = 0;
        window["lookVector"] = { x: 0, y: 0, z: 0 };
        window["setCamera"] = this.setCamera;
    }

    componentDidMount() {
        if (this.props.options.hdr_texture !== "") {
            if (!window["debug"]) {
                this.GetCamera();
            }
        }
    }

    GetCamera = () => {
        sketchup.get_camera();
    }

    setCamera = (x, y, z) => {
        if (this.props.options.hdr_texture !== "") {
            window["lookVector"] = { x: x, y: y, z: z };
            this.updateCamera(x, y, z);
        }
    }

    setBackground = () => {
        if (this.containerRef.current) {
            this.hdrPreview = new HDRPreview(
                this.props.hdrOptions.dir + "/",
                this.props.options.hdr_texture,
                175,
                this.containerRef.current
            );
            this.hdrPreview.update({
                exposure: this.props.options.hdr_exposure,
                longitude: this.props.options.hdr_rotation
            });
        }
        setTimeout(() => {
            this.GetCamera();
        }, 1000 / 30);
    }

    updateCamera = (x, y, z) => {
        if (this.hdrPreview === null) {
            this.setBackground();
        } else {
            let vector3 = new THREE.Vector3(x, z, y); // switch y and z to convert coordinates systems
            let lng = -Math.atan2(-vector3.z, -vector3.x) - Math.PI / 2;
            if (lng < -Math.PI) {
                lng += Math.PI * 2;
            }
            const p = new THREE.Vector3(vector3.x, 0, vector3.z);
            p.normalize();

            let lat = Math.acos(p.dot(vector3));
            if (vector3.y < 0) {
                lat *= -1;
            }

            const longitude_offset = (window["longitude_offset"] = this.props.options.hdr_rotation);
            // add 180 to convert coordinate systems
            const longitude = (window["longitude"] = (lng * 180) / Math.PI + 180 + longitude_offset);
            const latitude = (window["latitude"] = (lat * 180) / Math.PI);

            this.hdrPreview.update({
                longitude: longitude,
                latitude: latitude
            });

            setTimeout(() => {
                this.GetCamera();
            }, 1000 / 30);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group as={Row}
                                style={{
                                    marginTop: 5,
                                    marginLeft: 0,
                                    marginBottom: 0
                                }}>
                                <Form.Label style={{ fontWeight: 600 }}>
                                    {this.props.translations[this.props.language].texture}:
                                </Form.Label>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <select
                                    size="sm"
                                    class="form-select form-select-sm"
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                    defaultValue={this.props.options.hdr_texture}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.props.options.hdr_texture = value;
                                        this.props.updateOptions(this.props.options);
                                        this.setBackground();
                                    }}
                                >
                                    {
                                        this.props.hdrOptions.names.map((name, index) => {
                                            return (<option key={index} value={name}>{name}</option>)
                                        })
                                    }
                                </select>
                            </Form.Group>
                            <Row style={{ marginTop: 10, marginBottom: 10 }}>
                                <Col align="center">
                                    <div
                                        style={{ backgroundColor: '#111', color: '#fff', width: 350, height: 175 }}
                                        ref={this.containerRef}
                                    >
                                        select a texture
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Label 
                                    column="md"
                                >
                                    {this.props.translations[this.props.language].rotation}:
                                </Form.Label>
                                <Form.Control
                                    column="md"
                                    style={{ width: 100, marginLeft: 10 }}
                                    type="range"
                                    min="0"
                                    max="360"
                                    step="1"
                                    defaultValue={this.props.options.hdr_rotation}
                                    onChange={(e) => {
                                        const value = +e.target.value;
                                        this.props.options.hdr_rotation = value;
                                        this.props.updateOptions(this.props.options);
                                        window["longitude_offset"] = value;
                                        const lookVector = window["lookVector"];
                                        this.updateCamera(lookVector.x, lookVector.y, lookVector.z);
                                    }}
                                ></Form.Control>
                                <Form.Label 
                                    column="md"
                                >
                                    {this.props.options.hdr_rotation}
                                </Form.Label>
                                <Form.Label 
                                    column="md"
                                >
                                    {this.props.translations[this.props.language].exposure}
                                </Form.Label>
                                <Form.Control
                                    column="md"
                                    style={{ width: 100, marginLeft: 10 }}
                                    type="range"
                                    min="0"
                                    max="3.0"
                                    step="0.1"
                                    defaultValue={this.props.options.hdr_exposure}
                                    onChange={(e) => {
                                        const value = +e.target.value;
                                        this.props.options.hdr_exposure = value;
                                        this.props.updateOptions(this.props.options);
                                        this.hdrPreview.update({
                                            exposure: value
                                        });
                                    }}
                                ></Form.Control>
                                <Form.Label
                                    column="md"
                                >
                                    {this.props.options.hdr_exposure}
                                </Form.Label>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default HDR;
