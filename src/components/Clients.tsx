import React from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Global Clients
        </motion.h2>
        <motion.p 
          className="text-center text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're proud to work with 6 amazing clients across the globe.
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="w-64 h-64 bg-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
            6
          </div>
        </motion.div>
        <motion.p 
          className="text-center mt-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          From startups to enterprises, we deliver exceptional digital solutions.
        </motion.p>
      </div>
    </section>
  )
}

export default Clients