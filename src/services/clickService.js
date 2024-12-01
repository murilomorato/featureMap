export const handlePointClick = (pointId, lines, setSelectedPoint, setConnectedPoints) => {
    setSelectedPoint(pointId);

    // Identificar os pontos conectados ao ponto clicado
    const connected = lines.reduce((acc, line) => {
        if (line.idPointStart === pointId) {
            acc.push(line.idPointEnd);
        } else if (line.idPointEnd === pointId) {
            acc.push(line.idPointStart);
        }
        return acc;
    }, []);
    setConnectedPoints(connected);
    console.log(`Ponto clicado: ${pointId}`);
    console.log(`Ponto conectado: ${connected}`);
};