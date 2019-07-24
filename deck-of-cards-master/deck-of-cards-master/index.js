const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const families = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * create a cards array
 *
 * Loop through the suits
 *    Loop through the ranks
 *      Change the suit and rank inside the template literal
 *      push card to cards
 *
 * Retrieve deck from HTML
 * Insert cards to deck
 *
 * Add an Event Listener to the deck
 *    Look for an element with class of 'card' using the closest() method
 *    If the element exists
 *      Toggle the class 'flipped'
 */

/*
<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>
*/
const cards = [];

	for(const family of families){

		for(const rank of ranks){
			
			cards.push('<div class="card">')
  			cards.push('<div class="card__inner">')
    		cards.push('<div class="card__front">')
			cards.push(`<div class="number ${family}">${rank}</div>`)
      		cards.push(`<div class="suit"><img src="images/${family}.png"></div>`)
			cards.push(`<div class="number ${family}">${rank}</div>`)
    		cards.push('</div>')
    		cards.push('<div class="card__back"></div>')
  			cards.push('</div>')
			cards.push('</div>')
		}
	}	
	
const $deck = document.getElementById("deck");

$deck.innerHTML = cards.join(" ");

$deck.addEventListener('click', function(e){
  const flipped = e.target.closest('.card');
  if(flipped){
    flipped.classList.toggle('flipped');
  }
});









