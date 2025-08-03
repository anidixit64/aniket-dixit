import React from "react";
import { FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WorkCard = ({ w }) => {
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
		<Link to={w.site} target='_blank' className='work-link-group'>
			<div className='works-card'>
				<div className='works-container'>
					<div className='top-work'>
						<FiFolder className='work-folder' />
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
						<p className='work-title'>{w.title}</p>
						<p className='work-desc'>{w.desc}</p>
					</div>
					<div className='bottom-work'>
						{topRow.length > 0 && (
							<div className='tech-row'>
								{topRow.map((tech, index) => (
									<small key={index}>{tech}</small>
								))}
							</div>
						)}
						<div className={`tech-row ${centerSingle ? 'center-single' : ''}`}>
							{bottomRow.map((tech, index) => (
								<small key={index + topRow.length}>{tech}</small>
							))}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default WorkCard;