import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

// Components
import Ground from './components/Ground'
import Camera from './components/Camera'
import Player from './components/Player'

function App () {
  return (
    <>
      <Canvas>
        <Sky />
        <ambientLight intensity={0.5} />
        <Camera />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div id="pointer">+</div>
    </>
  )
}

export default App
