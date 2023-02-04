import React from 'react';
import { motion } from 'framer-motion';

function Background() {
	return (
    <motion.div 
      className='absolute w-screen h-screen top-0 bottom-0 right-0 left-0 bg-[url(/assets/img/bg.png)] dark:bg-[url(/assets/img/bg-dark.jpg)] bg-cover'
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ 
        duration: 300, 
        repeat: Infinity,
        repeatType: 'reverse', 
        ease: 'linear'
       }}
      initial={{ backgroundPosition:"0% 0%" }}
    />
	)
}

export default Background