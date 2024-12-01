import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Point from './atoms/Point';
import Line from './atoms/Line';
import { createCamera, createRenderer, handleResize, setupZoom } from '../utils/threeHelpers';
import { getPointsAndConnections } from '../services/pointService';

const Graph = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const [points, setPoints] = useState([]);
    const [lines, setLines] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [connectedPoints, setConnectedPoints] = useState([]);

    useEffect(() => {
        const initializeGraph = async () => {
            const { points, lines } = await getPointsAndConnections();
            setPoints(points);
            setLines(lines);

            const width = window.innerWidth;
            const height = window.innerHeight;
            const initZoomScale = 20;

            const camera = createCamera(width, height, initZoomScale);
            sceneRef.current.userData.camera = camera; // Adicionar a câmera aos dados do usuário da cena
            const renderer = createRenderer(width, height);
            mountRef.current.appendChild(renderer.domElement);

            const zoomSensibility = 1.0; //sensibilidade do zoom
            const moveSensibility = 0.1; //sensibilidade do movimento
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

    const handlePointClick = (pointId) => {
        setSelectedPoint(pointId);

        // Identificar os pontos conectados ao ponto clicado
        const connected = lines.reduce((acc, line) => {
            if (line.idPointStart === pointId) {
                acc.push(line.idPointEnd);
            } else if (line.idPointEnd === pointId) {
                acc.push(line.idPointStart);
            }
            return acc;
        }, []);
        setConnectedPoints(connected);
        console.log(`Ponto clicado: ${pointId}`);
        console.log(`Ponto conectado: ${connected}`);
    };

    return (
        <div ref={mountRef}>
            {points.map(point => (
                <Point
                    key={point.id}
                    id={point.id}
                    position={point.position}
                    name={point.name}
                    scene={sceneRef.current}
                    onClick={handlePointClick}
                    opacity={selectedPoint === point.id || connectedPoints.includes(point.id) ? 1 : selectedPoint ? 0.1 : 1}
                />
            ))}
            {lines.map(line => (
                <Line
                    key={line.id}
                    start={line.start}
                    end={line.end}
                    scene={sceneRef.current}
                    opacity={selectedPoint ? 0.2 : 1}
                />
            ))}
        </div>
    );
};

export default Graph;