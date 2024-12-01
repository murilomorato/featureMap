import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { itemColors } from '../../utils/colors';

const Point = ({ id, position, name, scene, onClick, opacity }) => {
    const pointRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        // Criar o ponto
        const geometry = new THREE.CircleGeometry(0.3, 32);
        const color = itemColors[Math.floor(Math.random() * itemColors.length)];
        const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
        const circle = new THREE.Mesh(geometry, material);
        circle.position.set(position.x, position.y, position.z);
        pointRef.current = circle;
        scene.add(circle);

        // Criar o texto
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fontSize = 80; // Ajustar o tamanho da fonte
        context.font = `${fontSize}px Arial`;
        context.fillStyle = '#383F46';
        context.fillText(name, 0, fontSize);

        // Ajustar o tamanho do canvas para o texto
        const textWidth = context.measureText(name).width;
        canvas.width = textWidth;
        canvas.height = fontSize;
        context.font = `${fontSize}px Arial`;
        context.fillStyle = '#383F46';
        context.fillText(name, 0, fontSize);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.set(position.x, position.y - 0.5, position.z);
        sprite.scale.set(textWidth / 220, fontSize / 220, 1);
        textRef.current = sprite;
        scene.add(sprite);

        // Adicionar evento de clique
        const handleClick = (event) => {
            event.stopPropagation();
            //onClick(pointRef.current);
            onClick(id);
        };
        circle.userData = { handleClick };

        // Adicionar o evento de clique ao raycaster
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onMouseClick = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, scene.userData.camera);

            const intersects = raycaster.intersectObjects(scene.children);
            for (let i = 0; i < intersects.length; i++) {
                if (intersects[i].object === circle) {
                    handleClick(event);
                }
            }
        };

        window.addEventListener('click', onMouseClick);

        return () => {
            window.removeEventListener('click', onMouseClick);
            scene.remove(circle);
            scene.remove(sprite);
        };
    }, [position, name, scene, onClick, opacity]);

    return null;
};

export default Point;