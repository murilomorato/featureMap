import { Canvas, useFrame } from '@react-three/fiber'
import * as pointPosition from '../../utils/pointPosition';

const Dot = () => {

    const radius = 2000;
    const DotData = {
        name: 'Point xyz',
        group: (Math.random() * 6),
        position: pointPosition.randomPosition(radius),
        color: 'red',
        scale: 1
    };

    return (
        <Canvas>
            <mesh>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color="red" />
            </mesh>
        </Canvas>
    );

};

export default Dot;

//<sphere args={[1, 100, 100]} scale={2.4} />