import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='app'>
      <motion.h1 
        className='head_text'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className='orange_gradient'>Us</span>
      </motion.h1>
      <motion.p 
        className='desc'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are a team of passionate developers and AI enthusiasts dedicated to making information more accessible through advanced summarization technology.
      </motion.p>
      
      <motion.div 
        className='mt-10 summary_box'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className='font-satoshi font-bold text-gray-600 text-xl mb-3'>Our Mission</h2>
        <p className='font-inter font-medium text-sm text-gray-700'>
          Our mission is to help users quickly digest large amounts of information by providing concise and accurate summaries of articles and web content.
        </p>
      </motion.div>

      <motion.div 
        className='mt-10 summary_box'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className='font-satoshi font-bold text-gray-600 text-xl mb-3'>Our Technology</h2>
        <p className='font-inter font-medium text-sm text-gray-700'>
          We leverage state-of-the-art AI models, including OpenAI's GPT-4, to analyze and summarize complex articles. Our advanced algorithms ensure that the most important information is extracted and presented in a clear, concise manner.
        </p>
      </motion.div>

      <motion.div 
        className='mt-10 summary_box'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className='font-satoshi font-bold text-gray-600 text-xl mb-3'>Why Choose Us</h2>
        <ul className='font-inter font-medium text-sm text-gray-700 list-disc pl-5'>
          <li>Accurate and concise summaries</li>
          <li>User-friendly interface</li>
          <li>Support for multiple languages</li>
          <li>Constantly improving AI models</li>
          <li>Commitment to user privacy and data security</li>
        </ul>
      </motion.div>

      <motion.button
        type='button'
        onClick={() => window.open("https://github.com/TidbitsJS/Summize", "_blank")}
        className='black_btn mt-10'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More on GitHub
      </motion.button>
    </div>
  );
};

export default About;