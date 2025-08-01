import React, { useState } from "react";
import "../styles/Writings.css";
import { motion } from "framer-motion";
import { MLData, FSData } from "../data/WritingData";
import WritingCard from "./WritingCard";

const Works = () => {
	const [activeTab, setActiveTab] = useState("react");

	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	const tabData = [
		{ id: "react", label: "Publications", data: MLData },
		{ id: "vue", label: "Class Papers", data: FSData },
	];

	return (
		<div className='writings' id='works'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
					className='heading'>
					<p className='heading-text'>Writings</p>
				</motion.div>

				<div className='tabs'>
					{tabData.map((tab) => (
						<button
							key={tab.id}
							className={`tab ${activeTab === tab.id ? "active" : ""}`}
							onClick={() => setActiveTab(tab.id)}>
							{tab.label}
						</button>
					))}
				</div>

				<motion.div
					className='works-box'
					initial={{ opacity: 0 }}
					whileInView={fade}>
					{tabData.map(
						(tab) =>
							activeTab === tab.id && (
								<React.Fragment key={tab.id}>
									{tab.data.map((w, index) => (
										<WritingCard w={w} tabId={tab.id} key={index} />
									))}
								</React.Fragment>
							)
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Works;