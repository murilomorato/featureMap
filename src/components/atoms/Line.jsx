import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Line = ({ start, end, scene, opacity }) => {
    const lineRef = useRef();

    useEffect(() => {
        const material = new THREE.LineDashedMaterial({
            color: 0xafafaf,
            dashSize: 0.06,
            gapSize: 0.06,
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

    return null;
};

export default Line;