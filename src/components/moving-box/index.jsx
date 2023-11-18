import React from 'react';
import { motion } from 'framer-motion';

const MovingBox = () => {
  return (
    <motion.div
      className="box bg-lightBlue h-20 w-20 absolute"
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />
  );
};

export default MovingBox;
