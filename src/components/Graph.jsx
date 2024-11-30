import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3';
import Point from './atoms/Point';
import { randomPosition } from '../utils/pointPosition';

const Graph = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());

    const radius = 10;
    const numPoints = 100; // Número de pontos a serem gerados
    const points = Array.from({ length: numPoints }, (_, id) => ({
        id,
        name: `Point ${id}`,
        position: randomPosition(radius),
    }));

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;
        const frustumSize = 10;

        const camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / -2,
            1,
            1000
        );
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0xffffff, 1); // Define a cor de fundo para branco
        mountRef.current.appendChild(renderer.domElement);

        const zoomSensitivity = 1.0; // Ajuste a sensibilidade do zoom conforme necessário
        const moveSensitivity = 0.1; // Ajuste a sensibilidade do movimento conforme necessário

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

        const handleResize = () => {
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

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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