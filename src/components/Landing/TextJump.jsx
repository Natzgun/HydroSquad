import React from 'react'
import { motion } from "framer-motion"
function TextJump() {
    const word = 'Todo comienza con el agua';

    const letterVariants = {
      hover: {
        y: -10,
        scale: 1.2,
      },
    };
  return (
    <div className="flex">
          {word.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="letter text-7xl text-white font-extrabold"
            variants={letterVariants}
            whileHover="hover"
            
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
          ))}

        </div>
  )
}

export default TextJump