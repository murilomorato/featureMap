import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Point = ({ position, scene }) => {
    const pointRef = useRef();

    useEffect(() => {
        const geometry = new THREE.CircleGeometry(0.6, 32); // Aumentar o tamanho do ponto
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const circle = new THREE.Mesh(geometry, material);
        circle.position.set(position.x, position.y, position.z);
        pointRef.current = circle;
        scene.add(circle);

        return () => {
            scene.remove(circle);
        };
    }, [position, scene]);

    return null;
};

export default Point;