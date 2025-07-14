import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Electron = ({ radius = 1.5, speed = 1, phase = 0, tilt = 0, color = '#00ffff' }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase
    const x = radius * Math.cos(t)
    const y = radius * Math.sin(t) * Math.sin(tilt)
    const z = radius * Math.sin(t) * Math.cos(tilt)

    ref.current.position.set(x, y, z)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  )
}

const AtomLoader = () => {
  return (
    <group>
      {/* nucleus */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#ff1493" emissive="#ff1493" emissiveIntensity={1} />
      </mesh>

      {/* electrons */}
      <Electron radius={1.5} speed={1} phase={0} tilt={Math.PI / 4} />
      <Electron radius={1.5} speed={1.2} phase={Math.PI / 2} tilt={Math.PI / 3} />
      <Electron radius={1.5} speed={0.8} phase={Math.PI} tilt={Math.PI / 6} />
    </group>
  )
}

export default AtomLoader
