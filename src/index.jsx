import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { StrictMode, Suspense } from 'react'
import { NoToneMapping, SRGBColorSpace } from 'three'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
};

const innerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};
const dataStyles = {
    marginTop: '10%',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '25px',
    backgroundColor: 'black'
};

root.render(
    <StrictMode>
        <Canvas flat dpr={[1, 2]}
            gl={{
                antialias: true,
                toneMapping: NoToneMapping,
                outputColorSpace: SRGBColorSpace,
                powerPreference: 'high-performance',
            }}
            className='r3f'
            camera={{
                fov: 40,
                near: 0.1,
                far: 100,
                position: [-3, 1.5, 4]
            }}
        >
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader
            containerStyles={containerStyles}
            innerStyles={innerStyles}
            dataStyles={dataStyles}
            dataInterpolation={(p) => `Loading portfolio ${p.toFixed(2)}%`}
        />
    </StrictMode>
)
