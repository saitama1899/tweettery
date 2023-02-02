import React from "react"
import { motion } from "framer-motion"

const transition = {
  duration: 1, 
  repeat: Infinity,
  ease: 'linear'
}

export default function CircleLoader() {
  return (
    <div className="relative w-6 h-6 box-border m-auto ">
      <motion.span
        className="block w-6 h-6 absolute box-border top-0 left-0 border-[0.25rem] border-white border-t-sky-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={transition}
      />
    </div>
  )
}