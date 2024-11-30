import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Line = ({ start, end, scene }) => {
    const lineRef = useRef();

    useEffect(() => {
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const points = [];
        points.push(new THREE.Vector3(start.x, start.y, start.z));
        points.push(new THREE.Vector3(end.x, end.y, end.z));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        lineRef.current = line;
        scene.add(line);

        return () => {
            scene.remove(line);
        };
    }, [start, end, scene]);

    return null;
};

export default Line;