let lastScrollTop;
let root = document.querySelector(":root");
let navbar = document.querySelector(".navbar");
const menuButton = document.querySelector("#menu-button");
const scrollUpButton = document.querySelector(".scroll-up-button");
const menuItems = [...document.querySelectorAll(".menu-item li")];
const countryItems = [...document.querySelectorAll(".country-item")];

function setNavbarHeightProperty() {
	const navbarHeight = getComputedStyle(navbar).height;
	root.style.setProperty("--navbar-height", navbarHeight);
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMenuItemActive() {
	menuItems.map((menuItem) => {
		if (
			window.location.pathname === "/" &&
			menuItem.textContent.toLowerCase() === "home"
		) {
			menuItem.setAttribute("data-menu-item", "active");
			return;
		}
		if (window.location.pathname.includes(menuItem.innerText.toLowerCase())) {
			menuItem.setAttribute("data-menu-item", "active");
		}
	});
}
function selectCountry(e) {
	countryItems.map((countryItem) => {
		countryItem.setAttribute("data-country-item", "");
	});
	e.target.setAttribute("data-country-item", "active");
	localStorage.selectedCountry = e.target.innerText.toLowerCase();
}

function setCountryItemActive() {
	!localStorage.selectedCountry
		? (localStorage.selectedCountry = "nederland")
		: null;
	countryItems.map((countryItem) => {
		countryItem.setAttribute("data-country-item", "");
		if (localStorage.selectedCountry === countryItem.innerText.toLowerCase()) {
			countryItem.setAttribute("data-country-item", "active");
		}
	});
}

function hideNavbar() {
	closeMenu();
	const navbarHeight = getComputedStyle(navbar).height;
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = `-${navbarHeight}`;
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop;
}

const toggleMenuAnimTl = gsap.timeline();

toggleMenuAnimTl
	.to(".menu", { maxHeight: "85vh", duration: 0.2 })
	.fromTo(
		[".menu-item li"],
		{ opacity: 0, left: "7rem" },
		{ opacity: 1, left: 0, stagger: 0.08, duration: 0.1, delay: -0.1 }
	)
	.fromTo(
		".countries-side-panel",
		{ maxWidth: 0, paddingRight: 0, duration: 1 },
		{ maxWidth: "100%", paddingRight: "1.6rem", delay: -0.7, duration: 1 }
	)
	.fromTo(
		[".countries-side-panel-label,.country-item"],
		{ opacity: 0, right: "7rem" },
		{ opacity: 1, right: 0, stagger: 0.08, duration: 0.1, delay: -1 }
	);
toggleMenuAnimTl.pause();

function toggleMenu() {
	menuButton.blur();
	if (!navbar.classList.contains("navbar__extended")) {
		openMenu();
	} else {
		closeMenu();
	}
}

function closeMenu() {
	navbar.classList.remove("navbar__extended");
	toggleMenuAnimTl.reverse();
}
function openMenu() {
	navbar.classList.add("navbar__extended");
	toggleMenuAnimTl.play();
}

setNavbarHeightProperty();
setMenuItemActive();
setCountryItemActive();

countryItems.forEach((countryItem) =>
	countryItem.addEventListener("click", selectCountry)
);
document.addEventListener("resize", setNavbarHeightProperty);

scrollUpButton.addEventListener("click", scrollToTop);

scrollUpButton.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		scrollToTop();
	}
});

window.addEventListener("scroll", hideNavbar);

menuButton.addEventListener("click", toggleMenu);
menuButton.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		toggleMenu();
		menuButton.focus();
	}
});
