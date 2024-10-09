import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SourcesX</h3>
            <p className="mb-4">Innovative digital solutions for your business.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sourcesx/" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              <a href="https://x.com/_sourcesx" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
              <a href="https://www.instagram.com/_sourcesx" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/company/sources-technologies/" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://github.com/SourcesTechnologies" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400">Backend Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Consultation</a></li>
              <li><a href="#" className="hover:text-blue-400">Code Assessment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="mb-2">Email: info@sourcesx.com</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Tech Street, Innovation City, 12345</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 SourcesX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer