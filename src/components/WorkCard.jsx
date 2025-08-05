import React, { useState, useEffect, useRef } from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const WorkCard = ({ w }) => {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const [titleFontSize, setTitleFontSize] = useState(2.6);
	const [descFontSize, setDescFontSize] = useState(1.4);

	// Function to get the correct image based on the image path
	const getImageSrc = (imagePath) => {
		if (imagePath.includes('linguistics')) return "/images/linguistics.jpg";
		if (imagePath.includes('parchment')) return "/images/parchment.jpg";
		if (imagePath.includes('self')) return "/images/self.jpg";
		return "/images/linguistics.jpg"; // fallback
	};

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

	// Function to distribute tech tags based on count
	const distributeTechTags = (techArray) => {
		const count = techArray.length;
		
		switch (count) {
			case 1:
				// 1 tag: centered among the two rows
				return {
					topRow: [],
					bottomRow: techArray,
					centerSingle: true
				};
			case 2:
				// 2 tags: two tags on the bottom row
				return {
					topRow: [],
					bottomRow: techArray,
					centerSingle: false
				};
			case 3:
				// 3 tags: two tags on the first row, one on the bottom row
				return {
					topRow: techArray.slice(0, 2),
					bottomRow: techArray.slice(2, 3),
					centerSingle: false
				};
			case 4:
				// 4 tags: two on each row
				return {
					topRow: techArray.slice(0, 2),
					bottomRow: techArray.slice(2, 4),
					centerSingle: false
				};
			case 5:
				// 5 tags: three on the top row, two on the bottom row
				return {
					topRow: techArray.slice(0, 3),
					bottomRow: techArray.slice(3, 5),
					centerSingle: false
				};
			default:
				// Fallback: distribute evenly
				const half = Math.ceil(count / 2);
				return {
					topRow: techArray.slice(0, half),
					bottomRow: techArray.slice(half),
					centerSingle: false
				};
		}
	};

	const { topRow, bottomRow, centerSingle } = distributeTechTags(w.tech);

	return (
		<div 
			className='works-card'
			style={{
				backgroundImage: `url(${getImageSrc(w.image)})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}}
		>
			<div className='works-container'>
				<div className='top-work'>
					<div className='right'>
						{w.gitlink && (
							<Link className='work-git' to={w.gitlink} target='_blank'>
								<FiGithub />
							</Link>
						)}
						<Link className='work-link' to={w.site} target='_blank'>
							<IoOpenOutline />
						</Link>
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
					{/* Always render top row, even if empty */}
					<div className='tech-row'>
						{topRow.map((tech, index) => (
							<small key={index}>{tech}</small>
						))}
					</div>
					{/* Always render bottom row */}
					<div className={`tech-row ${centerSingle ? 'center-single' : ''}`}>
						{bottomRow.map((tech, index) => (
							<small key={index + topRow.length}>{tech}</small>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;