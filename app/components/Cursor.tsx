// 'use client'
//
// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
//
// export default function Cursor() {
//     const [pos, setPos] = useState({ x: 0, y: 0 })
//     const [hidden, setHidden] = useState(true)
//     const [pointer, setPointer] = useState(false)
//
//     useEffect(() => {
//         if (window.matchMedia('(pointer: coarse)').matches) return
//         setHidden(false)
//
//         const move = (e: MouseEvent) => {
//             setPos({ x: e.clientX, y: e.clientY })
//             const el = e.target as HTMLElement
//             setPointer(!!el?.closest('a, button, [role="button"], input, textarea'))
//         }
//         window.addEventListener('mousemove', move)
//         return () => window.removeEventListener('mousemove', move)
//     }, [])
//
//     if (hidden) return null
//
//     return (
//         <>
//             <motion.div
//                 className="pointer-events-none fixed left-0 top-0 z-[150] h-2 w-2 rounded-full bg-[#6366f1] mix-blend-difference"
//                 animate={{ x: pos.x - 4, y: pos.y - 4 }}
//                 transition={{ type: 'spring', stiffness: 900, damping: 40, mass: 0.3 }}
//             />
//             <motion.div
//                 className="pointer-events-none fixed left-0 top-0 z-[150] rounded-full border border-[#6366f1]/60"
//                 animate={{
//                     x: pos.x - (pointer ? 24 : 16),
//                     y: pos.y - (pointer ? 24 : 16),
//                     width: pointer ? 48 : 32,
//                     height: pointer ? 48 : 32,
//                     opacity: pointer ? 0.9 : 0.5,
//                 }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.6 }}
//             />
//         </>
//     )
// }
