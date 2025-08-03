import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { MLData, FSData } from "../data/WorkData";
import WorkCard from "./WorkCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Works = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	
	// Combine all works into a single array
	const allWorks = [...MLData, ...FSData];

	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	const nextCard = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === allWorks.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevCard = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? allWorks.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='works' id='works'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
					className='heading'>
					<p className='heading-text'>Works</p>
					<div className='heading-divider'></div>
				</motion.div>

				<motion.div
					className='works-carousel'
					initial={{ opacity: 0 }}
					whileInView={fade}>
					<button 
						className='carousel-arrow carousel-arrow-left'
						onClick={prevCard}
						aria-label="Previous work"
					>
						<IoChevronBack />
					</button>
					
					<div className='works-card-container'>
						<WorkCard w={allWorks[currentIndex]} />
					</div>
					
					<button 
						className='carousel-arrow carousel-arrow-right'
						onClick={nextCard}
						aria-label="Next work"
					>
						<IoChevronForward />
					</button>
				</motion.div>

				<div className='carousel-indicators'>
					{allWorks.map((_, index) => (
						<button
							key={index}
							className={`indicator ${index === currentIndex ? 'active' : ''}`}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Go to work ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Works;