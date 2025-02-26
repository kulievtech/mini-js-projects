const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/"
];

let symbolEl = document.getElementById("symbols");
let numberEl = document.getElementById("numbers");
let passwordOneEl = document.getElementById("password1");
let passwordTwoEl = document.getElementById("password2");
let passwordLengthEl = document.getElementById("password-length");

symbolEl.addEventListener("change", function (e) {
    isSymbolIncluded = e.target.checked;
});

numberEl.addEventListener("change", function (e) {
    isNumberIncluded = e.target.checked;
});

passwordLengthEl.addEventListener("input", function () {
    passwordLength = parseInt(passwordLengthEl.value, 10);
});

let isSymbolIncluded = symbolEl.checked;
let isNumberIncluded = numberEl.checked;

let passwordLength = 15;

function generateTwoRandomPasswords() {
    let randomPasswordOne = "";
    let randomPasswordTwo = "";

    let characters = letters.slice();

    if (isNumberIncluded) {
        characters = characters.concat(numbers);
    }

    if (isSymbolIncluded) {
        characters = characters.concat(specialCharacters);
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        randomPasswordOne += characters[randomIndexOne];

        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        randomPasswordTwo += characters[randomIndexTwo];
    }

    passwordOneEl.textContent = randomPasswordOne;
    passwordTwoEl.textContent = randomPasswordTwo;
}

function copyToClipboard(passwordBoxId) {
    const textToCopy = document.getElementById(passwordBoxId).textContent;

    navigator.clipboard.writeText(textToCopy);

    if (textToCopy) {
        alert("Password copied to clipboard!");
    } else {
        alert(
            "You did not generate a password yet, please click Generate Password button."
        );
    }
}
