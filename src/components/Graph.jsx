import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Point from './atoms/Point';
import { createCamera, createRenderer, handleResize, setupZoom } from '../utils/threeHelpers';
import { getPoints } from '../services/pointService';

const Graph = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const [points, setPoints] = useState([]);

    useEffect(() => {
        const initializeGraph = async () => {

            const data = await getPoints();
            setPoints(data);

            const width = window.innerWidth;
            const height = window.innerHeight;
            const initZoomScale = 20;

            const camera = createCamera(width, height, initZoomScale);
            const renderer = createRenderer(width, height);
            mountRef.current.appendChild(renderer.domElement);

            const zoomSensibility = 1.0; // Ajuste a sensibilidade do zoom conforme necessário
            const moveSensibility = 0.1; // Ajuste a sensibilidade do movimento conforme necessário
            setupZoom(renderer, camera, zoomSensibility, moveSensibility);

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(sceneRef.current, camera);
            };
            animate();

            const onResize = () => handleResize(renderer, camera, initZoomScale);
            window.addEventListener('resize', onResize);

            return () => {
                window.removeEventListener('resize', onResize);
                mountRef.current.removeChild(renderer.domElement);
            };
        };

        initializeGraph();
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