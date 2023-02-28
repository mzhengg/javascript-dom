// selecting the container id
const container = document.querySelector('#container');

// ELEMENT #1
// create a new html 'div' element
const content = document.createElement('div');
// add a new class 'content' to 'div'
content.classList.add('content');
// add text to the element
content.textContent = 'This is the glorious text-content!';
// add this new element to the container id
container.appendChild(content);

// ELEMENT #2
// create a new html 'p' element
const redParagraph = document.createElement('p');
// make contents red
redParagraph.style.color = 'red';
// add text to the element
redParagraph.textContent = 'Hey, I\'m red!';
// add this new element to the container id
container.appendChild(redParagraph);

// ELEMENT #3
// create a new html 'h3' element
const blueHeader = document.createElement('h3');
// make contents blue
blueHeader.style.color = 'blue';
// add text to the element
blueHeader.textContent = 'I\'m a blue h3!';
// add this new element to the container id
container.appendChild(blueHeader);

// ELEMENT #4
// create a new html 'div' element
const subContainer = document.createElement('div');
// add a new id 'subContainer' to 'div' element
subContainer.setAttribute('id', 'subContainer');
// add a black border
subContainer.style.border = 'black';
// add a pink background
subContainer.style.backgroundColor = 'pink';
// add this new element to the container id
container.appendChild(subContainer);

// selecting the subContainer id
const innerContainer = document.querySelector('#subContainer');

// ELEMENT #5
const h1Heading = document.createElement('h1');
h1Heading.textContent = 'I\'m in a div'
innerContainer.appendChild(h1Heading);

// ELEMENT #6
const regularParagraph = document.createElement('p');
regularParagraph.textContent = 'ME TOO!'
innerContainer.appendChild(regularParagraph);