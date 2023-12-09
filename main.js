// Запитати від користувача дані
const firstName = prompt("Введіть ваше ім'я:");
const lastName = prompt("Введіть ваше прізвище:");
const birthDay = parseInt(prompt("Введіть день народження:"), 10);
const birthMonth = parseInt(
  prompt("Введіть місяць народження (у числовому форматі):"),
  10
);
const birthYear = parseInt(prompt("Введіть рік народження:"), 10);

// Визначення знаку зодіаку
let zodiacSign = "";

if (
  (birthMonth === 1 && birthDay >= 20) ||
  (birthMonth === 2 && birthDay <= 18)
) {
  zodiacSign = "Aquarius ♒";
} else if (
  (birthMonth === 2 && birthDay >= 19) ||
  (birthMonth === 3 && birthDay <= 20)
) {
  zodiacSign = "Pisces ♓";
} else if (
  (birthMonth === 3 && birthDay >= 21) ||
  (birthMonth === 4 && birthDay <= 19)
) {
  zodiacSign = "Aries ♈";
} else if (
  (birthMonth === 4 && birthDay >= 20) ||
  (birthMonth === 5 && birthDay <= 20)
) {
  zodiacSign = "Taurus ♉";
} else if (
  (birthMonth === 5 && birthDay >= 21) ||
  (birthMonth === 6 && birthDay <= 20)
) {
  zodiacSign = "Gemini ♊";
} else if (
  (birthMonth === 6 && birthDay >= 21) ||
  (birthMonth === 7 && birthDay <= 22)
) {
  zodiacSign = "Cancer ♋";
} else if (
  (birthMonth === 7 && birthDay >= 23) ||
  (birthMonth === 8 && birthDay <= 22)
) {
  zodiacSign = "Leo ♌";
} else if (
  (birthMonth === 8 && birthDay >= 23) ||
  (birthMonth === 9 && birthDay <= 22)
) {
  zodiacSign = "Virgo ♍";
} else if (
  (birthMonth === 9 && birthDay >= 23) ||
  (birthMonth === 10 && birthDay <= 22)
) {
  zodiacSign = "Libra ♎";
} else if (
  (birthMonth === 10 && birthDay >= 23) ||
  (birthMonth === 11 && birthDay <= 21)
) {
  zodiacSign = "Scorpio ♏";
} else if (
  (birthMonth === 11 && birthDay >= 22) ||
  (birthMonth === 12 && birthDay <= 21)
) {
  zodiacSign = "Sagittarius ♐";
} else {
  zodiacSign = "Capricorn ♑";
}

// Розрахунок віку користувача
const currentYear = 2022;
const userAge = currentYear - birthYear;

// Перевірка на високосний рік
let leapYearInfo = "";
if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
  leapYearInfo = " (Leap year)";
}

// Формування та виведення результату
let userBio = `${firstName} ${lastName}, ${userAge} років${leapYearInfo}, ${zodiacSign}`;

console.log(`User Bio: ${userBio}`);
