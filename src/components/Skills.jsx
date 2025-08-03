import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-text'>My Skills</p>
						<div className='heading-divider'></div>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='skills-box'
						initial={{ y: "-80px", opacity: 0 }}>
						{SkillsData.map((row, rowIndex) => (
							<div key={rowIndex} className='skill-row'>
								<h3 className='skill-row-header'>{row.header}</h3>
								<div className='skill-row-grid'>
									{row.skills.map((el, index) => (
										<div className='skill-card' key={index}>
											<div className='skill-icon'>{el.icon}</div>
											<small className='skill-desc'>{el.name}</small>
										</div>
									))}
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;