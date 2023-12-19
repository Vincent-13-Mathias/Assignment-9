function reverseString(userInput) {
    let reversed = '';
    for (let x = userInput.length -1; x >= 0; x--) {
        reversed += userInput[x];
    }

    return reversed;
}

let userInput = prompt('Enter your name');
let reversedString = reversedString(input);

console.log('Reversed String;', reverseString);
