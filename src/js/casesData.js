const items = [
	{
		id: 1,
		companyName: "BOL.COM",
		companySector: "retail",
		caseTitle: "A Summer island in the Netherlands",
		caseCategory: "media",
		imgName: "bol.webp",
	},
	{
		id: 2,
		companyName: "KEMPEN",
		companySector: "banking",
		caseTitle: "Not some average banking website",
		caseCategory: "website",
		imgName: "kempen.webp",
	},
	{
		id: 3,
		companyName: "PHILIPS",
		companySector: "tech",
		caseTitle: "Beautiful design meets innovative technology",
		caseCategory: "media",
		imgName: "philips.webp",
	},
	{
		id: 4,
		companyName: "GEMEENTEMUSEUM",
		companySector: "art",
		caseTitle: "A 100 years of Mondriaan & De Stijl",
		caseCategory: "media",
		imgName: "gemeente-museum.webp",
	},
	{
		id: 5,
		companyName: "florensis",
		companySector: "retail",
		caseTitle: "Rethinking the entire online ecosystem",
		caseCategory: "strategy",
		caseWidth: "extended",
		imgName: "florensis.webp",
	},
	{
		id: 6,
		companyName: "amazon",
		companySector: "commerce",
		caseTitle: "Starting with delivering through drones",
		caseCategory: "media",
	},
	{
		id: 7,
		companyName: "MICROSOFT",
		companySector: "tech",
		caseTitle:
			"Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
		caseCategory: "media",
	},
	{
		id: 8,
		companyName: "O’NEILL",
		companySector: "retail",
		caseTitle:
			"Integrating existing content into O’Neills’s new e-commerce platform",
		caseCategory: "website",
	},
	{
		id: 9,
		companyName: "BE LIGHTNING",
		companySector: "retail",
		caseTitle: "Delivering clarity on a global scale",
		caseCategory: "website",
		imgName: "be-lightning.webp",
	},
	{
		id: 10,
		companyName: "TUI",
		companySector: "banking",
		caseTitle: "Swipe to find your next holiday destination",
		caseCategory: "website",
		imgName: "tui.webp",
	},
	{
		id: 11,
		companyName: "chocomel",
		companySector: "retail",
		caseTitle: "A campaign for the limited edition letter packs",
		caseCategory: "media",
		imgName: "chocomel.webp",
	},
	{
		id: 12,
		companyName: "jbl",
		companySector: "retail",
		caseTitle: "Live like a champion with Jerome Boateng",
		caseCategory: "media",
		imgName: "jbl.webp",
	},
	{
		id: 13,
		companyName: "zalando",
		companySector: "commerce",
		caseTitle: "Innovative SEO and content strategy for Zalando",
		caseCategory: "strategy",
		imgName: "zalando.webp",
	},
	{
		id: 14,
		companyName: "KONINKLIJKE BIBLIOTHEEK",
		companySector: "art",
		caseTitle: "The search of the most influential book ever",
		caseCategory: "media",
		imgName: "koninklijke-bibliotheek.webp",
	},
	{
		id: 17,
		companyName: "MICROSOFT",
		companySector: "tech",
		caseTitle:
			"Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
		caseCategory: "media",
	},
	{
		id: 18,
		companyName: "MICROSOFT",
		companySector: "tech",
		caseTitle:
			"Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
		caseCategory: "media",
	},
	{
		id: 19,
		companyName: "MICROSOFT",
		companySector: "tech",
		caseTitle:
			"Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
		caseCategory: "media",
	},
	{
		id: 20,
		companyName: "arla ",
		companySector: "commerce",
		caseTitle: "Swipe to find your next holiday destination",
		caseCategory: "website",
		imgName: "hero.webp",
		caseWidth: "extended",
	},
	{
		id: 15,
		companyName: "LIBERTY GLOBAL ",
		companySector: "tech",
		caseTitle: "The search of the most influential book ever",
		caseCategory: "website",
		imgName: "liberty-global.webp",
	},
	{
		id: 16,
		companyName: "arla ",
		companySector: "commerce",
		caseTitle: "Swipe to find your next holiday destination",
		caseCategory: "website",
		imgName: "arla.webp",
	},
];

const NO_IMAGE_WRAPPER_ROWS = 3;

const noImageCases = items.filter((x) => !x.imgName);

const casesList = document.querySelector(".cases-list");
const categoriesFilter = document.querySelector("#category-filter");
const industriesFilter = document.querySelector("#industries-filter");
const main = document.querySelector("main");
let firstRender = true;

const clientQuoteBlock = `
	<div class="client-quote-wrapper">
		<p class="client-quote-citation">“Dept helped us tell our story through a bold new identity and a robust
			online experience. To the tone of 60% growth in
			online bookings in just one month”</p>
		<p class="client-quote-details">
			MATTIJS TEN DRINK - ceo, transavia
		</p>
	</div>`;

const noResultsWarningBlock = `
	<div class="no-results-warning">
		Ooops, we could not provide any results matching the filters selected
	</div>`;

function createCase(item) {
	const newItem = document.createElement("article");
	newItem.classList.add("case");

	const indexNoImageCasesItem = noImageCases.findIndex((x) => x.id === item.id);
	const wrapperID = Math.floor(indexNoImageCasesItem / NO_IMAGE_WRAPPER_ROWS);
	let newNoImageCasesWrapper = "";
	let parentNode = "";

	if (item.imgName) {
		items.filter((x) => !x.imgName);
		parentNode = casesList;
	} else if (
		document.querySelector(".no-image-cases-wrapper") === null ||
		document.querySelectorAll(".no-image-cases-wrapper")[wrapperID] ===
			undefined
	) {
		newNoImageCasesWrapper = document.createElement("div");
		newNoImageCasesWrapper.classList.add("no-image-cases-wrapper");
		casesList.appendChild(newNoImageCasesWrapper);
		parentNode = newNoImageCasesWrapper;
	} else {
		newNoImageCasesWrapper = document.querySelectorAll(
			".no-image-cases-wrapper"
		)[wrapperID];
		parentNode = newNoImageCasesWrapper;
	}

	if (item.caseWidth !== undefined) {
		newItem.classList.add(`case__${item.caseWidth}`);
	}

	const IMG_URL_BASE_PATH = "./src/imgs/casesBackgrounds/";

	const imageBlock = item.imgName
		? `<picture class="case-image-wrapper">
						<img loading="lazy" src=${IMG_URL_BASE_PATH + item.imgName} lazyload alt=${
				item.imgName.split(".")[0]
		  } case>
				</picture>
						`
		: "";

	const caseDetailsBlock = `
		<div class="case-details">
      <span class="case-subtitle">${item.companyName}</span>
			<h2 class="case-title">${item.caseTitle}
			</h2>
			<p class="case-readmore-button">
				<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="6" cy="6" r="5.7" stroke="white" stroke-width="0.6" />
					<circle cx="6" cy="6" r="1.7" fill="white" stroke="white" stroke-width="0.6" />
				</svg>
				<span class="case-readmore-text">Read more</span>
			</p>
		</div>`;

	newItem.innerHTML = imageBlock + caseDetailsBlock;

	parentNode.appendChild(newItem);
}

function setFiltersOptions() {
	// not an efficiency scalable solution but fast to implement on a test
	const categoriesOptions = [
		...new Set(items.map((item) => item.caseCategory)),
	];
	const industriesOptions = [
		...new Set(items.map((item) => item.companySector)),
	];

	categoriesOptions.forEach((category) => {
		const categoryOption = document.createElement("option");
		categoryOption.value = category;
		categoryOption.innerText = category;
		categoriesFilter.appendChild(categoryOption);
	});

	industriesOptions.forEach((industry) => {
		const industryOption = document.createElement("option");
		industryOption.value = industry;
		industryOption.innerText = industry;
		industriesFilter.appendChild(industryOption);
	});
}

function getFilteredCases() {
	const filters = {
		category: categoriesFilter.value.toLowerCase(),
		industry: industriesFilter.value.toLowerCase(),
	};
	const { category, industry } = filters;

	if (category === "all" && industry === "all") return (filteredList = items);
	if (category === "all") {
		return (filteredList = items.filter(
			(item) => item.companySector === industry
		));
	}
	if (industry === "all")
		return (filteredList = items.filter(
			(item) => item.caseCategory === category
		));

	return (filteredList = items.filter(
		(item) => item.caseCategory === category && item.companySector === industry
	));
}

function renderFilteredCases() {
	getFilteredCases();
	casesList.innerHTML = "";
	if (filteredList.length === 0) {
		casesList.innerHTML = noResultsWarningBlock;
	}
	filteredList.forEach((item, i) => {
		createCase(item, i);
		i + 1 === filteredList.length
			? (casesList.innerHTML += clientQuoteBlock)
			: null;
	});
	filteredList.length !== items.length && filteredList.length !== 0
		? casesList.classList.add("cases-list__filtered")
		: casesList.classList.remove("cases-list__filtered");
	if (firstRender === false) {
		scrollBackToNavbar();
		setTimeout(() => {
			navbar.style.top = "calc(var(--navbar-height) * -1)";
		}, 750);
	}
	firstRender = false;
}
// TODO: FIX NAVBAR SCROLL ON FIRST RENDER

function scrollBackToNavbar() {
	const y = main.getBoundingClientRect().bottom + window.scrollY;
	window.scroll({
		top: y,
		behavior: "smooth",
	});
}

renderFilteredCases();

document.addEventListener("DOMContentLoaded", setFiltersOptions);

categoriesFilter.addEventListener("input", renderFilteredCases);
industriesFilter.addEventListener("input", renderFilteredCases);
