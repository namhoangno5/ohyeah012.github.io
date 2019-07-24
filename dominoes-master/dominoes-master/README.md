# Dominoes

## Introduction
Oh, Dominoes. So fun to play, but you better be careful, otherwise they will all fall down.

## Objective
For this assignment you will be demonstrating your skills of HTML Creation with JavaScript, by randomly generating and displaying 100 dominoes on the page.

## Requirements
The following requirements must be met in order to complete the assignment successfully: 


1. Download the [Dominoes starter files](https://github.com/MTM6230/dominoes/archive/master.zip). Inside the starter files will be `index.html`, `style.css` and `index.js`. All the changes will be made to the `index.js` file. **Do NOT change the `index.html` or `style.css` files.**
2. Using the `template literals`, `arrays`, `for loops`, and techniques you have learned, create 100 ***random*** dominoes and placing inside of the dominoes container (`<div class="dominoes" id="dominoes">...</div>`) using only JavaScript.
3. Once completed, submit the `index.js` file to the **Dominoes** assignment on Brightspace.

## Additional Information

### Starter Files
The following outlines the code found in the starter files. 

#### The `index.html` file  
The `index.html` file will have a `dominoes` container as well as a single domino to use a blueprint for creating additional dominoes. 

#### The `style.css` file
The `style.css` file contains all the necessary styles for the creating and displaying the dominoes as long as the structure of the dominoes is properly created.

#### The `index.js` file
The `index.js` file contain the `randomInt()` function which should be used to randomly choose the number of dots to display on each domino. 


### Dominoes Structure

All dominoes must be created inside of the `dominoes` container.

A single domino has the following structure:

```html
<div class="domino">
  <div class="dots dots-5">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <div class="dots dots-4">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</div>
```

Each dominoes must have a class of `domino`. 

```html
<div class="domino">...</div>
```

Each domino also consists of two sections of dots. A section will be given the class `dots` and a second class that indicates the number of dots for that section using the following naming convention `dots-#`.

```html
<div class="dots dots-4">...</div>
```

A dot is created using a class of `dot`. 

```html
<div class="dot"></div>
```

A `<div>` with a class of `dot` must be created for each dot on a domino.

### The `randomInt()` function

The `randomInt()` function takes two numbers that represent the range from which to choose the random number.

```js
// To choose a number from 1 to 10
const number = randomInt(1, 10)
```

