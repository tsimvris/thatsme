const OLDWORD = document.querySelector("#current");
const NEWWOLD = document.querySelector("#next");

const WORDS = [
	"Hello",
	"I am Petros Tsimvris",
	"I am a Alumni",
	"Frontend Developer"
];
let currentWord = 0;

OLDWORD.textContent = WORDS[currentWord];
NEWWOLD.textContent = WORDS[currentWord + 1];

const setWord = (element) => {
	if (!element.classList.contains("show")) {
		element.textContent = WORDS[(currentWord + 2) % WORDS.length];
	}
};

const animateWord = () => {
	OLDWORD.classList.toggle("show");
	NEWWOLD.classList.toggle("show");
};

const startMorph = () => {
	animateWord();
	setTimeout(() => {
		setWord(OLDWORD);
		setWord(NEWWOLD);
	}, 750);
};

setInterval(() => {
	startMorph();
	currentWord++;
}, 1000);
