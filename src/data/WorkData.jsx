export const MLData = [
	{
		title: "Vivre",
		desc: "Multilingual Python library for bootstrapping parallel corpora and automatic alignment for multilingual training",
		tech: [
			"Spacy",
			"Python",
			"Docker",
			"beautifulsoup4",
		],
		gitlink: "//github.com/anidixit64/vivre",
		site: "https://vivre.readthedocs.io/en/latest/",
		image: "/public/images/vivre-icon.png",
	},
	{
		title: "Fifa Career Manager",
		desc: "FIFA24 Career Mode assistant site with statistics powered player recommendations and team organization",
		tech: ["Javascript", "HTML", "Next.js"],
		gitlink: "https://github.com/anidixit64/fifa-manager",
		site: "https://fifa-manager-black.vercel.app",
		image: "/public/images/fifa-manager.png",
	},
	{
		title: "Alexandria",
		desc: "AI powered bibliography generator for academic and casual sources. Powered by Wikipedia parseing and filtering",
		tech: ["Python", "Javascript", "HTML", "React.js", "CSS"],
		gitlink: "https://github.com/anidixit64/fifa-manager",
		site: "https://fifa-manager-black.vercel.app",
		image: "/public/images/alexandria.png",
	},
	{
		title: "HealthNav",
		desc: "AI powered healthcare navigation system and automated doctor finder.",
		tech: ["Javascript", "HTML/CSS", "GoogleAPI", "Llama3", "OpenBio-LLM"],
		gitlink: "//github.com/aarushisi/healthnav-webdev",
		site: "//github.com/aarushisi/healthnav-webdev",
		image: "/public/images/healthnav.png",
	},
	{
		title: "Pro Interview Bot",
		desc: "Job interview practice site with LLM and RAG powered feedback and analysis",
		tech: ["OpenAI", "React.js", "CSS", "NLTK", "PyTorch"],
		gitlink: "https://github.com/anidixit64/Interview-Evaluator",
		site: "https://github.com/anidixit64/Interview-Evaluator",
		image: "/public/images/app_icon.png",
	},
];

// Combine all works into a single array
export const allWorks = [...MLData, ...FSData];
