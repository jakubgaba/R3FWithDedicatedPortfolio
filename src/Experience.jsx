import { Text, Html, ContactShadows, PresentationControls, Float, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'


export default function Experience() {
    const { size } = useThree();
    const computer = useGLTF('/model.gltf')

    const config = {
        large: {
            presentationControls: { rotation: [0.2, -Math.PI * 2.1, 0.1], polar: [0, Math.PI / 3], azimuth: [-Math.PI / 10, Math.PI / 3], snap: true, zoom: 0.6 },
            rectAreaLight: { position: [0, 0.55, -1.15], rotation: [-0.1, Math.PI, 0] },
            primitive: { positionY: -1.2 },
            text: { position: [1.5, 0.5, 0.25], rotationY: -1.4 },
        },
        small: {
            presentationControls: { rotation: [0.2, -Math.PI * 2.2, 0.2], polar: [0, Math.PI / 3], azimuth: [-Math.PI / 10, Math.PI / 3], snap: true, zoom: 0.6 },
            rectAreaLight: { position: [0, 0.55, -2.4], rotation: [-0.1, Math.PI, 0] },
            primitive: { positionY: -1.5, positionZ: -1 },
            text: { position: [1.6, 0.5, -1], rotationY: -1.4, }
        }
    };

    // Function to select configuration
    const sceneConfig = size.width > 500 ? config.large : config.small;

    // Scene components
    const SceneComponent = ({ config }) => (
        <PresentationControls {...config.presentationControls}>
            <Float rotationIntensity={0.3}>
                <rectAreaLight width={2.5} height={1.65} intensity={25} color={'#ffffff'} {...config.rectAreaLight} />
                <primitive object={computer.scene} position-y={config.primitive.positionY} position-z={config.primitive.positionZ || 0}>
                    <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                        <iframe src="https://jakubgabaportfolio.vercel.app/" title="Embedded Page"></iframe>
                    </Html>
                </primitive>
                <Text font='./bangers-v20-latin-regular.woff' fontSize={1} position={config.text.position} rotation-y={config.text.rotationY} children={'JAKUB\nGABA'} textAlign='left'></Text>
            </Float>
        </PresentationControls>
    );

    return <>
        <color args={['#241a1a']} attach={'background'} />
        <SceneComponent config={sceneConfig} />
        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
}