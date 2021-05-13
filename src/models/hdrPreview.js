import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

export default class HDRPreview {
    width = 250;
    height = 125;
    exposure = 1.4;
    latitude = 0;
    longitude = 1;
    // for callbacks
    getMouseMovement = false;
    isUserInteracting = false;
    onMouseDownLat = 0;
    onMouseDownLon = 0;
    onMouseDownMouseX = 0;
    onMouseDownMouseY = 0;

    constructor(imageBase, imageSrc, thumbHeight, container, useCallbacks = false) {
        this.textureUrl = imageBase + imageSrc;
        this.height = thumbHeight;
        this.width = thumbHeight * 2;
        this.container = container;

        this.setupCamera();
        this.setupRenderer();
        this.setupScene();
        if (useCallbacks) {
            this.setupCallbacks();
        }
    }

    setupCamera() {
        const fov = 50;
        const aspect = this.width / this.height;
        const near = 0.1;
        const far = 1000;

        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.z = 0;
        this.camera.target = new THREE.Vector3(0, 0, 0);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.innerHTML = '';
        this.container.appendChild(this.renderer.domElement);
        this.renderer.toneMapping = THREE.LinearToneMapping;
        this.renderer.toneMappingExposure = this.exposure;
        this.renderer.gammaOutput = true;
    }

    setupScene() {
        this.scene = new THREE.Scene();
        const instance = this;
        new RGBELoader()
            .setDataType(THREE.UnsignedByteType)
            .load(this.textureUrl, (texture, textureDate) => {
                texture.encoding = THREE.RGBEEncoding;
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.flipY = true;

                const material = new THREE.MeshBasicMaterial({ map: texture });
                const radius = 20;
                const widthSegments = 100;
                const heightSegments = 100;
                const geometry = new THREE.SphereGeometry(
                    radius,
                    widthSegments,
                    heightSegments
                );
                geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1)); // Invert sphere to see inside
                const mesh = new THREE.Mesh(geometry, material);
                instance.scene.add(mesh);
                instance.render();
            });
    }

    setupCallbacks() {
        // trap reference to this for callbacks to avoid bubbling issues
        const instance = this;
        const container = this.container;

        container.onmouseenter = function () {
            instance.getMouseMovement = true;
        };
        container.onmouseleave = function () {
            instance.getMouseMovement = false;
            instance.isUserInteracting = false;
        };
        container.onmousedown = function (event) {
            event.preventDefault();
            if (instance.getMouseMovement) {
                instance.isUserInteracting = true;
                instance.onMouseDownMouseX = event.clientX;
                instance.onMouseDownMouseY = event.clientY;
                instance.onMouseDownLon = instance.longitude;
                instance.onMouseDownLat = instance.latitude;
            }
        };
        container.onmouseup = function () {
            instance.isUserInteracting = false;
        };
        container.onmousemove = function (event) {
            if (instance.getMouseMovement && instance.isUserInteracting) {
                instance.longitude = (instance.onMouseDownMouseX - event.clientX) * 0.25 + instance.onMouseDownLon;
                instance.latitude = (event.clientY - instance.onMouseDownMouseY) * 0.25 + instance.onMouseDownLat;
                instance.render();
            }
        };
    }

    render() {
        this.renderer.toneMappingExposure = this.exposure;

        this.latitude = Math.max(-85, Math.min(85, this.latitude));
        const phi = THREE.Math.degToRad(90 - this.latitude);
        const theta = THREE.Math.degToRad(this.longitude);

        this.camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
        this.camera.target.y = 500 * Math.cos(phi);
        this.camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

        this.camera.lookAt(this.camera.target);

        this.renderer.render(this.scene, this.camera);
    }

    update(params) {
        for (const p in params) {
            if (this.hasOwnProperty(p)) {
                this[p] = params[p];
            }
        }
        this.render();
    }
}
