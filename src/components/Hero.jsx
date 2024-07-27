import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className='w-full flex justify-center items-center flex-col'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='head_text mt-5'
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Summarize Articles with <br className='max-md:hidden' />
        <motion.span
          className='orange_gradient'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          OpenAI GPT-4
        </motion.span>
      </motion.h1>
      <motion.h2
        className='desc'
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </motion.h2>
      <motion.button
        type='button'
        onClick={() =>
          window.open("https://github.com/TidbitsJS/Summize", "_blank")
        }
        className='black_btn mt-5'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        GitHub
      </motion.button>
      <motion.div
        className="mt-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <svg className="w-24 h-24 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;