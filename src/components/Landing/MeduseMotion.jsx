import React,{useState, useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
function MeduseMotion() {
 
    const controls = useAnimation();

    const startAnimation = async () => {
        while (true) {
            await controls.start({ x: '1000%', transition: { duration: 12, ease: 'linear' ,delay:2}}); 
      
            await controls.start({ x: '-800%', transition: { duration: 12, ease: 'linear' }}); 
            
        }
      
    };
  
    React.useEffect(() => {
      startAnimation();
    }, []);
  
    return (
        <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
        <motion.div
          style={{display: 'flex', width: '50%', height: '50%' }}
          >
          <motion.img
            src="../../assets/images/medusas/1.png"
            alt="Imagen 1"
            style={{ width: '25%', height: '100%' }}
            animate={controls} 
          />
          
        </motion.div>
      </div>
    );
}

export default MeduseMotion

