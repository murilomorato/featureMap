import * as THREE from 'three';
import { createCamera, createRenderer, handleResize, setupZoom } from './cameraService';

export const initializeScene = async (mountRef, sceneRef, setPoints, setLines, getPointsAndConnections) => {
    const { points, lines } = await getPointsAndConnections();
    setPoints(points);
    setLines(lines);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const initZoomScale = 20;

    const camera = createCamera(width, height, initZoomScale);
    sceneRef.current.userData.camera = camera;
    const renderer = createRenderer(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const zoomSensibility = 1.0;
    const moveSensibility = 0.1;
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