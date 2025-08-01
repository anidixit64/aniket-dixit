import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/App.css';
import { motion } from "framer-motion";
import HomePage from "../pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 2250);
    const shimmerTimer = setTimeout(() => setShowShimmer(true), 2000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(shimmerTimer);
    };
  }, []);

  return (
    loading ? 
    <div className="loader">
      <div className="wreath-loader">
        <img
          src="/laurel-wreath.svg"
          alt="Laurel Wreath"
          className="wreath-background"
        />
        <motion.h1
          className={`etched-name ${showShimmer ? 'shimmer-active' : ''}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          ANIKET DIXIT
        </motion.h1>
      </div>
    </div>
    :
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
