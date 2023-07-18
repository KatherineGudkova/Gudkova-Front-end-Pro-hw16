const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(lenght, chars) {
    let result = ``;

    for (let i = 0; i < lenght; i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }

    return result;
}

const numberOfChar = Number(prompt(`Enter the number of characters to generate a randome key:`));


if (isNaN(numberOfChar)) {
    alert(`Error. It's not a number.`);
}
else {
    const key = generateKey(numberOfChar, characters);
    alert(`Your key: ${key}`);
}