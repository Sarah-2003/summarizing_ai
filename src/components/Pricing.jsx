import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  { name: 'Basic', price: '₹0', features: ['5 summaries/day', 'Basic support', 'Web access'] },
  { name: 'Pro', price: '₹799', features: ['Unlimited summaries', 'Priority support', 'Web & Mobile access'] },
  { name: 'Enterprise', price: 'Custom', features: ['Custom integration', 'Dedicated support', 'Advanced analytics'] },
];

const Pricing = () => {
  return (
    <div className='app'>
      <motion.h1 
        className='head_text'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our <span className='orange_gradient'>Pricing Plans</span>
      </motion.h1>
      <motion.div 
        className='mt-10 flex flex-wrap justify-center gap-10'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div 
            key={plan.name} 
            className='pricing_card'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className='font-satoshi font-bold text-2xl mb-4'>{plan.name}</h2>
            <p className='font-inter text-3xl mb-6 orange_gradient'>{plan.price}{plan.name !== 'Enterprise' && '/month'}</p>
            <ul className='font-inter text-sm mb-6 text-gray-700'>
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className='mb-2 flex items-center'
                >
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              className='black_btn'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;