import React from 'react'
import { Smartphone, Server, Users, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Smartphone, title: 'Mobile Apps', description: 'Cutting-edge mobile applications for iOS and Android platforms.' },
  { icon: Server, title: 'Backend Services', description: 'Robust and scalable backend solutions to power your applications.' },
  { icon: Users, title: 'Consultation', description: 'Expert advice to guide your technology decisions and strategy.' },
  { icon: Code, title: 'Code Assessment', description: 'Thorough evaluation and optimization of your existing codebase.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services