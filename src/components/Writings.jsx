import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WritingCard from './WritingCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { MLData, FSData } from '../data/WritingData';
import '../styles/Works.css';

const Writings = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right

	// Combine all writings into a single array
	const allWritings = [...MLData, ...FSData];

	const nextCard = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % allWritings.length);
	};

	const prevCard = () => {
		setDirection(-1);
		setCurrentIndex((prevIndex) => (prevIndex - 1 + allWritings.length) % allWritings.length);
	};

	const goToCard = (index) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	// Animation variants for the card transitions
	const cardVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			scale: 0.1,
			opacity: 0
		}),
		center: {
			zIndex: 1,
			x: 0,
			scale: 1,
			opacity: 1
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			scale: 0.1,
			opacity: 0
		})
	};

	return (
		<section id='writings'>
			<div className='works-container'>
				<div className='works-header'>
					<h2 className='heading-text'>Writings</h2>
					<div className='heading-divider'></div>
				</div>

				<div className='works-carousel'>
					<motion.button
						className='carousel-arrow'
						onClick={prevCard}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
					>
						<IoChevronBackOutline />
					</motion.button>

					<div className='works-card-container'>
						<AnimatePresence initial={false} custom={direction} mode='sync'>
							<motion.div
								key={currentIndex}
								custom={direction}
								variants={cardVariants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 400, damping: 40, duration: 0.3 },
									scale: { type: "spring", stiffness: 400, damping: 40, duration: 0.3 },
									opacity: { duration: 0.15 }
								}}
								className='works-card-wrapper'
							>
								<WritingCard w={allWritings[currentIndex]} />
							</motion.div>
						</AnimatePresence>
					</div>

					<motion.button
						className='carousel-arrow'
						onClick={nextCard}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
					>
						<IoChevronForwardOutline />
					</motion.button>
				</div>

				<div className='carousel-indicators'>
					{allWritings.map((_, index) => (
						<motion.button
							key={index}
							className={`indicator ${index === currentIndex ? 'active' : ''}`}
							onClick={() => goToCard(index)}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1 }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Writings;