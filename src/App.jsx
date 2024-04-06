import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage } from '@react-three/drei'
import Car from '../public/Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Canvas>
    <ambientLight intensity={1.5}/>
    <OrbitControls enableZoom={false}/>
    <pointLight position={[0,20,10]} intensity={1.5}/>
    <Suspense fallback={null}>
    <Stage environment={"sunset"}>
      <Car/>
</Stage>
    </Suspense>
    
   </Canvas>
    </>
  )
}

export default App
