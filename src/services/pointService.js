import { randomPosition } from '../utils/pointPosition';

export const getPoints = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const radius = 10;

        //temp mock
        const numPoints = 100; // Número de pontos a serem gerados
        const points = Array.from({ length: numPoints }, (_, id) => ({
            id,
            name: `Point ${id}`,
            position: randomPosition(radius),
        }));

        return points

    } catch (error) {
        console.error(error);
        return;
    }
}