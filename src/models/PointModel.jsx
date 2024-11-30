
class Point {
    constructor(id, name, description, position) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.position = position;
    }
}

export const getPositionById = (points, id) => {
    const point = points.find(point => point.id === id);
    return point ? point.position : null;
};

export default Point;