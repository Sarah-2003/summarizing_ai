import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from "./components/About";
import { logo } from "./assets";

import "./App.css";

const App = () => {
  return (
    <Router>
      <motion.header 
        className='w-full relative overflow-hidden bg-gradient-to-r from-amber-50 to-yellow-100 shadow-sm py-6 px-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='gradient absolute inset-0 z-0 opacity-10'></div>
        <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className='flex items-center'>
            <motion.img
              src={logo}
              alt='sumz_logo'
              className='w-24 object-contain'
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.span
              className='ml-3 text-2xl font-bold text-gray-800'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
            </motion.span>
          </Link>
          <nav>
            <motion.div
              className="flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {["Home", "Pricing", "About"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className='text-gray-700 hover:text-amber-600 transition-colors duration-300 text-lg font-medium'
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </nav>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-yellow-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.header>

      <main className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-8">
        <p className="text-gray-600">© 2023 Summize. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;