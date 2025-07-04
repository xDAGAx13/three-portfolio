import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Rohan</p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>

        <div className='w-full h-full absolute inset-0'>
          <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader/>}>

            <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
            <HackerRoom scale={0.05} position={[0,0,0]} rotation={[0, 0, 0]}/>  

            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero