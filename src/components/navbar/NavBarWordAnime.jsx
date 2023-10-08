import React from 'react'
import { motion } from "framer-motion"
function NavBarWordAnime(props) {
  return (
    <motion.button
        className="resizable-button"
        whileHover={{ scale: 1.1, y: 5 }}
        whileTap={{ scale: 0.8, y: 0 }} 
        >
        {props.palabra}
    </motion.button>
  )
}

export default NavBarWordAnime