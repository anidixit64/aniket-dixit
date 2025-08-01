import React from 'react';
import {
	FaHtml5,
	FaReact,
	FaJava,
	FaPython,
	FaDocker,
	FaGithub
} from "react-icons/fa";
import { DiJavascript1, DiPostgresql, DiSqllite, DiRedis } from "react-icons/di";
import { SiPytorch, SiFlask, SiTensorflow, SiTableau, SiPrometheus, SiCplusplus, SiScikitlearn} from "react-icons/si";
import { VscTerminalBash} from "react-icons/vsc";

export const SkillsData = [
	{
		name: "Python",
		icon: <FaPython style={{ color: "#3776AB" }} />,
	},
	{
		name: "Java",
		icon: <FaJava style= {{color: "#007396"}} />,
	},
	{
		name: "C++",
		icon: <SiCplusplus style= {{color: "#00599C"}} />,
	},
	{
		name: "SQL",
		icon: <DiSqllite style= {{color: "#4479A1"}} />,
	},
	{
		name: "PostgreSQL",
		icon: <DiPostgresql style= {{color: "#336791"}} />,
	},
	{
		name: "Redis",
		icon: <DiRedis style= {{color: "#DC382D"}} />,
	},
	{
		name: "PyTorch",
		icon: <SiPytorch style={{color: "#EE4C2C"}} />,
	},
	{
		name: "TensorFlow",
		icon: <SiTensorflow style={{color: "#FF6F00"}} />,
	},
	{
		name: "Scikit-learn",
		icon: <SiScikitlearn style= {{color: "#F7931E"}} />,
	},
	{
		name: "Flask",
		icon: <SiFlask style={{ color: "#000000"}}/>,
	},
	{
		name: "JavaScript",
		icon: <DiJavascript1 style={{ color: "#F7DF1E" }} />,
	},
	{
		name: "HTML",
		icon: <FaHtml5 style={{ color: "#E34F26"}} />,
	},
	{
		name: "React",
		icon: <FaReact style={{ color: "#61DAFB" }} />,
	},
	{
		name: "Docker",
		icon: <FaDocker style={{ color: "#2496ED" }} />,
	},
	{
		name: "Prometheus",
		icon: <SiPrometheus style={{color: "#E6522C"}} />,
	},
	{
		name: "Tableau",
		icon: <SiTableau style={{color: "#E97627"}} />,
	},
	{
		name: "Bash",
		icon: <VscTerminalBash style= {{color: "#4EAA25"}} />,
	},
	{
		name: "Github",
		icon: <FaGithub style= {{color: "#181717"}} />,
	}
];
