import * as THREE from 'three';
import * as d3 from 'd3';

export const createCamera = (width, height, frustumSize) => {
    const aspect = width / height;
    const camera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        1,
        1000
    );
    camera.position.z = 10;
    return camera;
};

export const createRenderer = (width, height) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x160e2f, 1); //background
    return renderer;
};

export const handleResize = (renderer, camera, frustumSize) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;
    renderer.setSize(width, height);
    camera.left = frustumSize * aspect / -2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();
};

export const setupZoom = (renderer, camera, zoomSensitivity, moveSensitivity) => {
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on('zoom', (event) => {
            const { k, x, y } = event.transform;
            const mouse = d3.pointer(event, renderer.domElement);
            const mouseX = (mouse[0] / renderer.domElement.clientWidth) * 2 - 1;
            const mouseY = -(mouse[1] / renderer.domElement.clientHeight) * 2 + 1;
            const vector = new THREE.Vector3(mouseX, mouseY, 1).unproject(camera);
            camera.zoom = k * zoomSensitivity;
            camera.position.set(vector.x * moveSensitivity, vector.y * moveSensitivity, 10);
            camera.updateProjectionMatrix();
        });

    const view = d3.select(renderer.domElement);
    view.call(zoom);
};