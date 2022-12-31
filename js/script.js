/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
	{
		quote:"He and Stephen Houston had deciphered a glyph composed of an ahau face half covered with a jaguar pelt as 'way', the word for 'to sleep,' 'to dream,' 'to metamorphize or transform.'",
		source:'Linda Schele, David Freidel',
		citation:'A Forest of Kings',
		year:1990
	},
	{
		quote:"Special tools are only allowed for darn good reasons.",
		source:'Makers Bill of Rights',
		citation:'Worldchanging, Revised & Updated',
		year:2011
	},
	{
		quote:"Financial accounting information must be comprehensible to those who have a resonable understanding of business and economic activities and who are willing to study information with reasonable diligence.",
		source:'Financial Accounting Standards Board of the United States of America',
		citation:'MBA Fundamentals: Accounting & Finance',
		year: 2009
	},
	{
		quote:"Conflicts and disputes that are not settled by agreement between the parties may be resolved by litigation.",
		source:'Rob Corley, Eric Holmes, William Robert',
		citation:'Principles of Business Law, 12th Ed.',
		year:1983
	},
	{
		quote:"I have a pen that can write underwater. It can also write other words too.",
		source:'@DadSaysJokes',
		citation:'Dad Jokes, The Cheesy Edition',
		year:2020
	}
];

/***
 * for ( let propName in quotes ) {
	console.log( quotes[propName]);
***/


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
	var quotei = Math.floor( Math.random() * quotes.length );
	console.log(quotei);
	return quotes[quotei];
}


/***
 * `printQuote` function
***/
function printQuote () {
	let selectedQuote = getRandomQuote();
	let toPrint = 
		`<p class="quote">${selectedQuote.quote}</p>
		<p class="source">${selectedQuote.source}`;
	
	if (selectedQuote.citation) {
		toPrint += `<span class="citation">${selectedQuote.citation}</span>`;
	}
	
	if (selectedQuote.year) {
		toPrint += `<span class="year">${selectedQuote.year}</span>`;
	}
	
	toPrint += `</p>`;
	
	document.querySelector('.quote-box').innerHTML = toPrint;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);