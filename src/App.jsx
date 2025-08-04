import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/App.css';
import { motion } from "framer-motion";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 3000);
    const shimmerTimer = setTimeout(() => setShowShimmer(true), 1500);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(shimmerTimer);
    };
  }, []);

  return (
    loading ? 
    <div className="loader">
      <motion.div 
        className="wreath-loader"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="wreath-container">
          <img
            src="/laurel-wreath.svg"
            alt="Laurel Wreath"
            className="wreath-background"
          />
          <div className="wreath-mask">
            <motion.div
              className="gold-wave"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                delay: 0.8,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
        <motion.h1
          className={`etched-name ${showShimmer ? 'shimmer-active' : ''}`}
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.8, 
            delay: 0.5,
            ease: "easeOut"
          }}
        >
          ANIKET DIXIT
        </motion.h1>
      </motion.div>
    </div>
    :
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Router>
        <HomePage />
      </Router>
    </motion.div>
  );
}

export default App;
