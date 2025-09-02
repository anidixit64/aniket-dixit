import React, { useState, useEffect, useRef } from "react";
import { FiFileText } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WritingCard = ({ w }) => {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const [titleFontSize, setTitleFontSize] = useState(2.6);
	const [descFontSize, setDescFontSize] = useState(1.4);

	// Function to adjust font size to fit container
	const adjustFontSize = (element, targetHeight, baseFontSize) => {
		if (!element) return baseFontSize;
		
		let fontSize = baseFontSize;
		element.style.fontSize = `${fontSize}rem`;
		
		while (element.scrollHeight > targetHeight && fontSize > 0.8) {
			fontSize -= 0.1;
			element.style.fontSize = `${fontSize}rem`;
		}
		
		return fontSize;
	};

	// Adjust font sizes when component mounts or content changes
	useEffect(() => {
		if (titleRef.current) {
			const newTitleSize = adjustFontSize(titleRef.current, 80, 2.6);
			setTitleFontSize(newTitleSize);
		}
		
		if (descRef.current) {
			const newDescSize = adjustFontSize(descRef.current, 100, 1.4);
			setDescFontSize(newDescSize);
		}
	}, [w.title, w.desc]);

	return (
		<div 
			className='works-card'
			style={{
				backgroundImage: `url(${w.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<div className='works-container'>
				<div className='top-work'>
					<div className='right'>
						<a className='work-link' href={w.site} target='_blank' rel='noreferrer'>
							<IoOpenOutline />
						</a>
					</div>
				</div>
				<div className='mid-work'>
					<p 
						ref={titleRef}
						className='work-title'
						style={{ fontSize: `${titleFontSize}rem` }}
					>
						{w.title}
					</p>
					<p 
						ref={descRef}
						className='work-desc'
						style={{ fontSize: `${descFontSize}rem` }}
					>
						{w.desc}
					</p>
				</div>
				<div className='bottom-work'>
					<div className='tech-row'>
						<small>{w.publication || 'Academic Paper'}</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WritingCard;
