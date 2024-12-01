export const getConnectedPoints = (pointId, lines) => {
    return lines.reduce((acc, line) => {
        if (line.idPointStart === pointId) {
            acc.push(line.idPointEnd);
        } else if (line.idPointEnd === pointId) {
            acc.push(line.idPointStart);
        }
        return acc;
    }, []);
};