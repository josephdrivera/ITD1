/* Rivera Joseph
January 25, 2019
1.3 Code Exercise 02: Story Time
*/

//prompt the user for their name
let userName = prompt('What is your name?');

//prompt the user for A Color
let userColor = prompt('Awesome what is favourite Color?');

//prompt the user for A Number
let userNumber = prompt('good color, pick a number?');

//prompt the user for Their Favorite Movie
let userTheirFavoriteMovie = prompt(
    'I like that number, What is your favorite Movie?'
);

//prompt the user for A Type of Animal
let userTypeOfAnimal = prompt('Its your favorite Animal?');

//prompt the user for An Adjective
let adjective = prompt('give me a Adjective');

alert('Check the Console for their story.');

//console.log the story
console.log(
    userName +
        'is going out for a run, it’s looking for his favorite ' +
        userColor +
        ' pull over'
);

console.log(
    'he Knows he has ' +
        userNumber +
        ' ' +
        userColor +
        ' pull over but he just can’t find them.'
);

console.log(
    'so he decide to go to a ' +
        adjective +
        'movie theater and see ' +
        userTheirFavoriteMovie +
        'with his favorite person in the whole world his' +
        userTypeOfAnimal
);
