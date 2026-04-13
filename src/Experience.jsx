import { Text, Html, ContactShadows, PresentationControls, Float, useGLTF, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Experience() {
    const { size } = useThree();
    const computer = useGLTF('/model.gltf')

    const isLarge = size.width > 500;

    const presentationControls = isLarge
        ? { rotation: [0.2, -Math.PI * 2.1, 0.1], polar: [0, Math.PI / 3], azimuth: [-Math.PI / 10, Math.PI / 3], snap: true, zoom: 0.6 }
        : { rotation: [0.2, -Math.PI * 2.2, 0.2], polar: [0, Math.PI / 3], azimuth: [-Math.PI / 10, Math.PI / 3], snap: true, zoom: 0.6 };

    const rectAreaLight = isLarge
        ? { position: [0, 0.55, -1.15], rotation: [-0.1, Math.PI, 0] }
        : { position: [0, 0.55, -2.4],  rotation: [-0.1, Math.PI, 0] };

    const primitiveY = isLarge ? -1.2 : -1.5;
    const primitiveZ = isLarge ? 0   : -1;
    const textPos    = isLarge ? [1.5, 0.5, 0.25] : [1.6, 0.5, -1];

    return <>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <color args={['#241a1a']} attach={'background'} />
        <PresentationControls {...presentationControls}>
            <Float rotationIntensity={0.3}>
                <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#ffffff'} {...rectAreaLight} />
                <primitive object={computer.scene} position-y={primitiveY} position-z={primitiveZ}>
                    <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                        <iframe src="https://jakubgabaportfolio.vercel.app/" title="Embedded Page"></iframe>
                    </Html>
                </primitive>
                <Text font='./bangers-v20-latin-regular.woff' fontSize={1} position={textPos} rotation-y={-1.4} textAlign='left'>{'JAKUB\nGABA'}</Text>
            </Float>
        </PresentationControls>
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={1.5} />
    </>
}