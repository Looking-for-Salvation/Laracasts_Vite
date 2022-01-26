import axios from "axios";

export default {
	namespaced: true,
	state() {
		return {
			skills: [
				{
					type: "frameworks",
					seriesCount: 55,
					lessonsCount: 951,
					img: frameworksImage,
					url: { name: "Browse Frameworks" },
				},
				{
					type: "languages",
					seriesCount: 17,
					lessonsCount: 149,
					img: languagesImage,
					url: { name: "Browse Languages" },
				},
				{
					type: "techniques",
					seriesCount: 33,
					lessonsCount: 370,
					img: techniquesImage,
					url: { name: "Browse Techniques" },
				},
				{
					type: "testing",
					seriesCount: 12,
					lessonsCount: 100,
					img: testingImage,
					url: { name: "Browse Testing" },
				},
				{
					type: "tooling",
					seriesCount: 30,
					lessonsCount: 345,
					img: toolingImage,
					url: { name: "Browse Tooling" },
				},
			],
		};
	},
	mutations: {
		setSkillsData(state, payload) {
			state.skills = payload.skills;
		},
	},
	getters: {
		skills(state) {
			return state.skills;
		},
	},
	actions: {
		loadSkills({ commit }) {
			axios
				.get("http://127.0.0.1:8000/api/home/parent-categories")
				.then((response) => {
					console.log(response);
					if (response.ok) return response.json();
				})
				.then((data) => {
					commit("setSkillsData", { skills: data });
				})
				.catch((error) => {
					console.log(error);
					console.log(error.response);
				});

			// fetch("http://127.0.0.1:8000/api/home/parent-categories")
			// 	.then((response) => {
			// 		console.log(response);
			// 		if (response.ok) return response.json();
			// 	})
			// 	.then((data) => {
			// 		commit("setSkillsData", { skills: data });
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 		console.log(error.response);
			// 	});
		},
	},
};

import frameworksImage from "@/assets/images/home/frameworks-default.svg";
import languagesImage from "@/assets/images/home/languages-default.svg";
import techniquesImage from "@/assets/images/home/techniques-default.svg";
import testingImage from "@/assets/images/home/testing-default.svg";
import toolingImage from "@/assets/images/home/tooling-default.svg";
