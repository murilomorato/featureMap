import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Point = ({ position, name, scene }) => {
    const pointRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        // props do ponto
        const geometry = new THREE.CircleGeometry(0.6, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const circle = new THREE.Mesh(geometry, material);
        circle.position.set(position.x, position.y, position.z);
        pointRef.current = circle;
        scene.add(circle);

        // props do texto
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fontSize = 80; // Ajustar o tamanho da fonte
        context.font = `${fontSize}px Arial`;
        context.fillStyle = 'grey';
        context.fillText(name, 0, fontSize);

        // ajustes de proporção do texto
        const textWidth = context.measureText(name).width;
        canvas.width = textWidth;
        canvas.height = fontSize;
        context.font = `${fontSize}px Arial`;
        context.fillStyle = 'grey';
        context.fillText(name, 0, fontSize);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(position.x, position.y - 0.7, position.z);
        sprite.scale.set(textWidth / 220, fontSize / 220, 1);
        textRef.current = sprite;
        scene.add(sprite);

        return () => {
            scene.remove(circle);
            scene.remove(sprite);
        };
    }, [position, name, scene]);

    return null;
};

export default Point;