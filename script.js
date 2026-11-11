'use strict';
// Bundled locally; only the links to external sources require internet.
const english = {
  "skip": "Skip to content",
  "navProblem": "Why we exist",
  "navHow": "The solution",
  "navWho": "Who it’s for",
  "heroEyebrow": "SAFETY ALONG YOUR ROUTE",
  "heroTitle1": "See the risks.",
  "heroTitle2": "Plan your",
  "heroTitle3": "journey.",
  "heroDescription": "An app concept to show whether your route in São Paulo crosses risk areas.",
  "try": "View route status",
  "understand": "Why SAFEJY?",
  "academic": "Academic project",
  "mapTitle": "Route safety",
  "simulation": "SIMULATION",
  "mapConcept": "ILLUSTRATIVE MAP",
  "mapAlt": "Fictional map showing one route from A to B crossing a red risk zone.",
  "riskZone": "⚠ Risk zone",
  "origin": "A · Start",
  "destination": "B · Destination",
  "legendRisk": "Risk zone",
  "legendRoute": "Assessed route",
  "mapNote": "Illustrative example. It does not show actual street risk.",
  "heroBottom": "KNOW YOUR ROUTE BEFORE YOU GO.",
  "problemEyebrow": "01 / OUR PURPOSE",
  "problemTitle": "Why we exist.",
  "problemDescription": "To help people unfamiliar with São Paulo identify risks along their route before leaving.",
  "statValue": "18.5<span>%</span>",
  "statDescription": "of all phone robberies and thefts in Brazil in 2024 happened in São Paulo city.",
  "readSource": "Read the original story",
  "news2Title": "Study maps locations with the most incidents.",
  "news2Description": "FECAP analyzed phone robbery and theft records from 2025.",
  "readStudy": "Read the study",
  "news3Title": "São Paulo state records 27,400 phone robberies in four months.",
  "news3Description": "According to the SSP, these incidents occurred in the state from January to April 2026, despite a decline in reports.",
  "sourceNote": "Sources with dates and links to the original publications. The stories provide context; the map uses fictional data.",
  "solutionEyebrow": "02 / OUR PROPOSAL",
  "solutionTitle": "See the risks<br>along your route.",
  "solutionDescription": "The idea is to show whether your chosen route crosses a risk area.",
  "step1Title": "Enter your route.",
  "step1Description": "Enter your starting point and destination in São Paulo.",
  "step2Title": "See the risk areas.",
  "step2Description": "Red zones would highlight sections that require attention.",
  "step3Title": "Check the result.",
  "step3Description": "Receive a safety indication for your chosen route.",
  "solutionCallout": "Our difference: <strong>showing risks along the route.</strong>",
  "backDemo": "View the map example",
  "audienceEyebrow": "03 / WHO IT’S FOR",
  "audienceTitle": "For people new<br>to the city.",
  "audienceDescription": "Information for visitors and professionals traveling through unfamiliar places.",
  "who1Title": "Tourists and visitors",
  "who1Description": "People from other cities who want to plan their sightseeing.",
  "who1Tag": "TOURISM & DISCOVERY",
  "who2Title": "Business travelers",
  "who2Description": "People heading to meetings, events or workplaces in unfamiliar areas.",
  "who2Tag": "WORK & EVERYDAY LIFE",
  "who3Title": "Drivers and travelers",
  "who3Description": "Rideshare drivers and professionals traveling to São Paulo.",
  "who3Tag": "MOBILITY & TRAVEL",
  "visionEyebrow": "04 / NEXT STEPS",
  "visionTitle": "Know the risks.<br><em>Plan your trip.</em>",
  "visionDescription": "SAFEJY aims to help people arriving in São Paulo understand route risks before their trip.",
  "now": "NOW",
  "nowTitle": "Validate the idea",
  "nowDescription": "Present the prototype and listen to tourists and drivers.",
  "next": "NEXT STEP",
  "nextTitle": "Develop the app",
  "nextDescription": "Define data sources, risk criteria and route assessment.",
  "visionNote": "Academic project. No route guarantees an absence of risk.",
  "footer": "Information before you go.",
  "academicFooter": "ACADEMIC PROJECT · 2026",
  "purposeLabel": "WHY WE EXIST",
  "purposeSummary": "People arriving in São Paulo need information to get around.",
  "purposeLink": "News and sources",
  "routeResult": "Route at risk",
  "routeExplanation": "This route crosses a risk area.",
  "newsIntro": "News and research that show the problem.",
  "viewMap": "View the map example",
  "newsPhotoCredit1": "Photo: SSP handout",
  "newsPhotoCredit2": "Illustrative image: Freepik / FECAP",
  "newsPhotoCredit3": "Photo: SSP-SP"
};
const portuguese = {};
document.querySelectorAll('[data-i18n]').forEach(el => { portuguese[el.dataset.i18n] = el.innerHTML; });
let language = 'pt';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateThemeLabels(){
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = language === 'pt' ? (dark ? 'Ativar tema claro' : 'Ativar tema escuro') : (dark ? 'Switch to light theme' : 'Switch to dark theme');
  const button = document.getElementById('theme-toggle');
  button.setAttribute('aria-label',label);
  button.title = label;
  button.setAttribute('aria-pressed',String(dark));
  document.getElementById('theme-label').textContent = language === 'pt' ? (dark ? 'Claro' : 'Escuro') : (dark ? 'Light' : 'Dark');
}
function setTheme(theme){
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101b15' : '#ffffff';
  updateThemeLabels();
}
function setLanguage(value){
  language = value;
  const dictionary = language === 'en' ? english : portuguese;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  document.title = language === 'pt' ? 'SAFEJY — Planeje seu caminho.' : 'SAFEJY — Plan your journey.';
  document.querySelectorAll('[data-i18n]').forEach(el => { if(dictionary[el.dataset.i18n] !== undefined) el.innerHTML = dictionary[el.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === language)));
  document.querySelectorAll('img[data-alt-pt]').forEach(img => { img.alt = language === 'pt' ? img.dataset.altPt : img.dataset.altEn; });
  document.querySelector('.header nav').setAttribute('aria-label',language === 'pt' ? 'Principal' : 'Main navigation');
  document.querySelector('.identity-logo').alt = language === 'pt' ? 'Logo SAFEJY: escudo e marcador em tons de verde' : 'SAFEJY logo: a shield and location pin in shades of green';
  document.querySelectorAll('.brand').forEach(el => el.setAttribute('aria-label',language === 'pt' ? 'SAFEJY — início' : 'SAFEJY — home'));
  updateThemeLabels();
}
function focusMap(){
  const map = document.getElementById('demo');
  map.scrollIntoView({behavior:reducedMotion.matches ? 'instant' : 'smooth',block:'center'});
  map.focus({preventScroll:true});
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
document.getElementById('theme-toggle').addEventListener('click',()=>{
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try{localStorage.setItem('safejy-theme',theme);}catch(error){/* Storage can be disabled for local files. */}
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>anchor.addEventListener('click',event=>{
  if(anchor.classList.contains('brand')){event.preventDefault();window.scrollTo({top:0,behavior:'instant'});return;}
  if(anchor.getAttribute('href') === '#demo'){event.preventDefault();focusMap();}
}));
document.getElementById('view-map').addEventListener('click',focusMap);
setLanguage('pt');
setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
