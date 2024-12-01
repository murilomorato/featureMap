import { randomPosition } from '../utils/pointPosition';
import Point, { getPositionById } from '../models/PointModel';
import Connections from '../models/ConnectionModel';

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

    const numConnetions = 100;
    const connections = [];

    for (let i = 0; i < numConnetions; i++) {
        let idPointStart = Math.floor(Math.random() * points.length);
        let idPointEnd = Math.floor(Math.random() * points.length);
        if (idPointStart !== idPointEnd) {
            let connection = new Connections(i, idPointStart, idPointEnd);
            connections.push(connection);
        }
    }

    const linesCoordinates = connections.map((connection, index) => {
        const startPosition = getPositionById(points, connection.idPointStart);
        const endPosition = getPositionById(points, connection.idPointEnd);

        if (index < connections.length - 1) {
            return {
                id: index,
                start: startPosition,
                end: endPosition,
                idPointStart: connection.idPointStart,
                idPointEnd: connection.idPointEnd
            };
        }
        return null;
    }).filter(line => line !== null);

    return linesCoordinates;

};