import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3';
import Point from './atoms/Point';
import { randomPosition } from '../utils/pointPosition';
import { createCamera, createRenderer, handleResize } from '../utils/threeHelpers';

const Graph = () => {

    //mock dos points------
    const radius = 10;
    const numPoints = 100; // qtd points
    const points = Array.from({ length: numPoints }, (_, id) => ({
        id,
        name: `Point ${id}`,
        position: randomPosition(radius),
    }));
    //-------------------

    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const frustumSize = 10;

        const camera = createCamera(width, height, frustumSize);
        const renderer = createRenderer(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const zoomSensitivity = 1.0; // Ajuste da sensibilidade do zoom 
        const moveSensitivity = 0.1; // Ajuste da sensibilidade do movimento

        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on('zoom', (event) => {
                const { k, x, y } = event.transform;
                const mouse = d3.pointer(event, renderer.domElement);
                const mouseX = (mouse[0] / width) * 2 - 1;
                const mouseY = -(mouse[1] / height) * 2 + 1;
                const vector = new THREE.Vector3(mouseX, mouseY, 1).unproject(camera);
                camera.zoom = k * zoomSensitivity;
                camera.position.set(vector.x * moveSensitivity, vector.y * moveSensitivity, 10);
                camera.updateProjectionMatrix();
            });

        const view = d3.select(renderer.domElement);
        view.call(zoom);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(sceneRef.current, camera);
        };
        animate();

        const onResize = () => handleResize(renderer, camera, frustumSize);

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef}>
            {points.map(point => (
                <Point key={point.id} position={point.position} scene={sceneRef.current} />
            ))}
        </div>
    );
};

export default Graph;