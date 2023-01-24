//apply the language values to the content
document.addEventListener('DOMContentLoaded', () => {
	//skip the lang value in the HTML tag for this example
	let zones = document.querySelectorAll('html [lang]');
	applyStrings(zones);

	let lang = findLocaleMatch();
	const containers = document.querySelectorAll(`html [lang*=${lang}]`);
	containers.forEach((container) => {
		container.className = 'lang-match';
	});
});

function applyStrings(containers) {
	containers.forEach((container) => {
		//find all the elements that have data-key
		let locale = container.getAttribute('lang');
		//console.log('looking inside of ', locale);
		container.querySelectorAll(`[data-key]`).forEach((element) => {
			let key = element.getAttribute('data-key');
			// console.log(element);
			// console.log(key);
			let lang = locale.substr(0, 2); //first 2 characters
			if (key) {
				element.textContent = langdata.languages[lang].strings[key];
			}
		});
	});
}

function findLocaleMatch() {
	let keys = Object.keys(langdata.languages); //from our data
	let locales = Intl.getCanonicalLocales(keys); //from our data validated

	let lang = navigator.language; //from browser
	let locale = Intl.getCanonicalLocales(lang); //from browser validated
	console.log('browser language', lang);
	console.log('locales from data file', locale);

	//find the match for locale inside locales (en-US or nb-NO)
	let langMatch = document.documentElement.getAttribute('lang'); //default
	locales = locales.filter((l) => locale == l);
	langMatch = locales.length > 0 ? locales[0] : langMatch;
	return langMatch;
}

let langdata = {
	languages: {
		en: {
			strings: {
				discription: 'Who writes clean, elegent and efficient code',
				firstBtn: 'View my work',
				firstLabel: 'About me',
				firstDiscription:
					"I am a person who has a 'can-do attitude', which means curious, willing to deal with problems, investigate ambiguities, learn new technologies." +
					'\nActively work to share knowledge and best practice in a supportive environment, and promote continuous improvement.' +
					'\nUnderstand and care about the importance of creating well-documented and tested software services.' +
					'\nEnjoy being part of a team that continuously improves its processes, shares and receives constructive.' +
					"feedback, contributes to everyone's growth and always has the best support and product for our customers!" +
					'\nAdaptable and can fit in anywhere, a person who enjoys life, who willingly and easily learns new techniques and technologies every day.' +
					'\nI am looking for opportunities to learn full stack development, and gain more expertise, develop myself in the field and become the best developer.',
				secondLabel: 'Skils',
				letsWorkTitle: "Let's work together",
				projectsTitle: 'Projects',
				aboutNav: 'About',
				projectsNav: 'Projects',
				contactNav: 'Contact'
			}
		},
		nb: {
			strings: {
				discription: 'Som skriver ren, elegant og effektiv kode',
				firstBtn: 'Se prosjektene mine',
				firstLabel: 'Om Meg',
				firstDiscription:
					"Jeg er en person som har en 'kan-gjøre-holdning', som betyr nysgjerrig,villig til å håndtere problemer, undersøke uklarheter, og lære nye teknologier." +
					'\nArbeid aktivt for å dele kunnskap og beste praksis i et støttende miljø, og fremme kontinuerlig forbedring.' +
					'\nForstår og bryr meg om viktigheten av å lage veldokumenterte og testede programvaretjenester.' +
					'\nTrives med å være en del av et team som kontinuerlig forbedrer sine prosesser, deler og mottar konstruktive tilbakemeldinger, bidrar til alles vekst og alltid har den beste støtten og produktet for våre kunder!' +
					'\nTilpasningsdyktig og kan passe inn hvor som helst, en person som nyter livet, som villig og enkelt lærer nye teknikker og teknologier hver dag.' +
					'\nJeg ser etter muligheter for å lære full stack utvikling, og få mer kompetanse, utvikle meg innen faget og bli den beste utvikler.',
				secondLabel: 'Ferdigheter',
				letsWorkTitle: 'La oss jobbe sammen',
				projectsTitle: 'Prosjektene',
				aboutNav: 'OM Meg',
				projectsNav: 'Prosjekter',
				contactNav: 'Kontakt'
			}
		}
	}
};
