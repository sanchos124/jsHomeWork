function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let userInput = prompt("Введіть довільний рядок:");
let userChoice = parseInt(prompt("Введіть ID операції (ціле число):"));

switch (userChoice) {
  case 1:
    let index = parseInt(
      prompt("Введіть індекс для отримання Unicode значення символу:")
    );
    let unicodeValue = userInput.charCodeAt(index);
    console.log(
      `Unicode значення символу на позиції ${index}: ${unicodeValue}`
    );
    break;

  case 2:
    let removeIndex = parseInt(prompt("Введіть індекс для видалення символу:"));
    let stringWithoutChar =
      userInput.slice(0, removeIndex) + userInput.slice(removeIndex + 1);
    console.log(
      `Рядок після видалення символу на позиції ${removeIndex}: ${stringWithoutChar}`
    );
    break;

  case 3:
    let replaceIndex = parseInt(prompt("Введіть індекс для заміни символу:"));
    let randomSmileys = [
      "😀",
      "😊",
      "🤖",
      "🌟",
      "🎈",
      "🍀",
      "🎉",
      "🚀",
      "💡",
      "🎶",
    ];
    let randomIndex = getRandomIntInclusive(0, 9);
    let replacedString =
      userInput.substring(0, replaceIndex) +
      randomSmileys[randomIndex] +
      userInput.substring(replaceIndex + 1);
    console.log(
      `Рядок після заміни символу на позиції ${replaceIndex}: ${replacedString}`
    );
    break;

  case 4:
    let letterCount = userInput.replace(/\s/g, "").length;
    console.log(`Кількість літер у рядку (без пробілів): ${letterCount}`);
    break;

  default:
    console.log("Невірний ID операції.");
}
