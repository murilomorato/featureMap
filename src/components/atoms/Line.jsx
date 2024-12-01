import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Line = ({ start, end, scene, opacity }) => {
    const lineRef = useRef();

    useEffect(() => {
        const material = new THREE.LineDashedMaterial({
            color: 0x4a5072,
            dashSize: 0.15,
            gapSize: 0.1,
            transparent: true,
            opacity: opacity
        });
        const points = [];
        points.push(new THREE.Vector3(start.x, start.y, start.z));
        points.push(new THREE.Vector3(end.x, end.y, end.z));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        line.computeLineDistances();
        lineRef.current = line;
        scene.add(line);

        return () => {
            scene.remove(line);
        };
    }, [start, end, scene, opacity]);

    useEffect(() => {
        if (lineRef.current) {
            lineRef.current.material.opacity = opacity;
        }
    }, [opacity]);

    return null;
};

export default Line;