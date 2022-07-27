const { createApp } = Vue;

const vueApp = createApp({
	data() {
		return {
			userInput: '',
			showParagraph: true,
			paragraphColor: '',
		};
	},
	computed: {
		paragraphClasses() {
			return {
				user1: this.userInput === 'user1',
				user2: this.userInput === 'user2',
				visible: this.showParagraph,
				hidden: !this.showParagraph,
			};
		},
	},
	methods: {
		toggleParagraphVisibility() {
			this.showParagraph = !this.showParagraph;
		},
	},
});

vueApp.mount('#assignment');
