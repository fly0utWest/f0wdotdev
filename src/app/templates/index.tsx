'use client';  

import React from 'react';
import { motion } from 'framer-motion';

function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    className='w-full'
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default Template;
