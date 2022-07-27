document.addEventListener("DOMContentLoaded", function () {
	const tl = gsap.timeline();
	tl.fromTo(
		".logo-container svg path",
		{ rotation: "-45deg", y: "-110%", x: "-20%", transformOrigin: "top left" },
		{ rotation: "0deg", y: 0, x: 0, stagger: 0.1, duration: 0.5 }
	)
		.fromTo(
			[".navbar-item"],
			{ y: 50 },
			{ y: 0, stagger: 0.05, duration: 0.5, delay: -1.2 }
		)
		.fromTo(
			["#menu-button svg circle"],
			{ y: 50 },
			{ y: 0, stagger: 0.05, duration: 0.5, delay: -1.2 }
		)
		.fromTo(
			"header",
			{ scale: 1.3, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.5, delay: -0.3 }
		)
		.fromTo(
			".content",
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, delay: -0.3 }
		)
		.fromTo(
			["header .card-title", "header .card-subtitle"],
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.3, delay: 0.3 }
		);
});
