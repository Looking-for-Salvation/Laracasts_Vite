import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";

//* Topics components
import TopicsPage from "@/views/TopicsPage.vue";
import Topics from "@/views/topics/Topics.vue";
import FrameworkTopics from "@/views/topics/Frameworks.vue";
import LanguageTopics from "@/views/topics/Languages.vue";
import TechniqueTopics from "@/views/topics/Techniques.vue";
import TestingTopics from "@/views/topics/Testing.vue";
import ToolingTopics from "@/views/topics/Tooling.vue";

//* Series component
import SeriesPage from "@/views/SeriesPage.vue";

//* Podcast components
import PodcastPage from "@/views/PodcastPage.vue";

//* Discuss components
import DiscussPage from "@/views/DiscussPage.vue";

import NotFound from "@/views/NotFound.vue";

const SignupPage = () => import("@/views/SignupPage.vue");
const QuestionsPage = () => import("@/views/QuestionsPage.vue");
const TermsPage = () => import("@/views/TermsPage.vue");
const PrivacyPage = () => import("@/views/PrivacyPage.vue");

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: "Home", path: "/", component: HomePage },
		{ name: "Join", path: "/join", redirect: { name: "Home", query: { modal: "join" } } },
		{
			name: "Browse",
			path: "/browse",
			component: TopicsPage,
			redirect: { name: "Browse All" },
			children: [
				{ name: "Browse All", path: "all", component: Topics },
				{ name: "Browse Frameworks", path: "frameworks", component: FrameworkTopics },
				{ name: "Browse Languages", path: "languages", component: LanguageTopics },
				{ name: "Browse Techniques", path: "techniques", component: TechniqueTopics },
				{ name: "Browse Testing", path: "testing", component: TestingTopics },
				{ name: "Browse Tooling", path: "tooling", component: ToolingTopics },
			],
		},
		{ name: "Series", path: "/series", component: SeriesPage },
		{ name: "Podcast", path: "/podcast", component: PodcastPage },
		{ name: "Discuss", path: "/discuss", component: DiscussPage },
		{ name: "Sign Up", path: "/signup", component: SignupPage },
		{ name: "FAQ", path: "/faq", component: QuestionsPage },
		{ name: "Terms", path: "/terms", component: TermsPage },
		{ name: "Privacy", path: "/privacy", component: PrivacyPage },
		{ name: "Not Found", path: "/:notFound(.*)", components: { rootroute: NotFound } },
	],
	linkActiveClass: "router-active",
	linkExactActiveClass: "router-exact-active",
	scrollBehavior(_, _2, savedPosition) {
		if (savedPosition) return savedPosition;
		return { left: 0, top: 0 };
	},
});

export default router;
