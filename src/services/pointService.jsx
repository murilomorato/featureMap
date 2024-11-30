import { randomPosition } from '../utils/pointPosition';
import Point from '../models/PointModel';

export const getPointsAndConnections = async () => {
    try {
        //mock de conexões
        const points = await getAllPoints();
        const lines = getAllConnections(points);

        return { points, lines };
    } catch (error) {
        console.error(`Failed when try to get points and connections: ${error}`);
        return { points: [], lines: [] };
    }
};

const getAllPoints = async () => {
    const radius = 10;
    const numPoints = 100;

    const allPoints = Array.from({ length: numPoints }, (_, id) => (
        new Point(id, `Point ${id}`, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', randomPosition(radius))
    ));

    return allPoints;
};

const getAllConnections = (points) => {

    return points.map((point, index) => {
        if (index < points.length - 1) {
            return {
                id: index,
                start: point.position,
                end: points[index + 1].position,
            };
        }
        return null;
    }).filter(line => line !== null);

};