let confirmResult = confirm("Tell me three most important words 💚");

if (confirmResult) {
  let words = [];
  let i = 0;

  while (i < 3) {
    let word = prompt(`Enter word ${i + 1}:`);
    if (word === null || word === "" || /\d/.test(word)) {
      continue;
    }

    let format = prompt(
      `Choose the format for '${word}': (uppercase, lowercase, capitalize)`
    );
    if (
      format === "uppercase" ||
      format === "lowercase" ||
      format === "capitalize"
    ) {
      switch (format) {
        case "uppercase":
          word = word.toUpperCase();
          break;
        case "lowercase":
          word = word.toLowerCase();
          break;
        case "capitalize":
          word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          break;
        default:
          break;
      }
      words.push(word);
      i++;
    }
  }

  console.log(`${words[0]} ${words[1]} ${words[2]}!`);
} else {
  console.log("Operation canceled.");
}
