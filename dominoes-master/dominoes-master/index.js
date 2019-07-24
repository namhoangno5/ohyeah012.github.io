/**
 * randomInt:
 * Returns a random positive integer from min to max
 * @Parameters: min - the smallest possible number, max - largest possible number
 * @Return: Int
 * @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/* This example shows how to get a random number from 1 to 10. */
const example = randomInt(1, 10)
// Check the console to see the result.
console.log('Random Number', example)

const dominoes = [];

const $dominoes = document.getElementById('dominoes');

for (let j = 0; j < 100; j++) {
    const number = randomInt(1, 6);
    const $number = randomInt(1, 6);

    dominoes.push(`<div class="domino">`, `<div class="dots dots-${number}">`);

    for (let i = 0; i < number; i++) {
        dominoes.push(`<div class="dot"></div>`);
    }

    dominoes.push('</div>');

    dominoes.push(`<div class="dots dots-${$number}">`);

    for (let j = 0; j < $number; j++) {
        dominoes.push(`<div class="dot"></div>`);
    }
    dominoes.push(`</div>`);
    dominoes.push(`</div>`);
}

$dominoes.innerHTML = dominoes.join('');
