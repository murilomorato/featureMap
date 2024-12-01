import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Point from '../components/atoms/Point';
import Line from '../components/atoms/Line';
import { initializeScene } from '../services/sceneService';
import { handlePointClick } from '../services/clickService';
import { getPointsAndConnections } from '../services/pointService';

const Graph = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene());
    const [points, setPoints] = useState([]);
    const [lines, setLines] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [connectedPoints, setConnectedPoints] = useState([]);

    useEffect(() => {
        const cleanup = initializeScene(mountRef, sceneRef, setPoints, setLines, getPointsAndConnections);
        return cleanup;
    }, []);

    const onPointClick = (pointId) => {
        handlePointClick(pointId, lines, setSelectedPoint, setConnectedPoints);
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
                    onClick={onPointClick}
                    opacity={selectedPoint === point.id || connectedPoints.includes(point.id) ? 1 : selectedPoint ? 0.1 : 1}
                />
            ))}
            {lines.map(line => (
                <Line
                    key={line.id}
                    start={line.start}
                    end={line.end}
                    scene={sceneRef.current}
                    opacity={
                        selectedPoint === line.idPointStart || selectedPoint === line.idPointEnd ? 1 : selectedPoint ? 0.2 : 1
                    }
                />
            ))}
        </div>
    );
};

export default Graph;