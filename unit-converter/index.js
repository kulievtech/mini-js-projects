// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const numberInputEl = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
    const numberValue = numberInputEl.value;
    const number = Number(numberValue);

    if (!number) return;

    const meterToFeet = (number * 3.281).toFixed(3);
    const feetToMeter = (number / 3.281).toFixed(3);
    const literToGallon = (number * 0.264).toFixed(3);
    const gallonToLiter = (number / 0.264).toFixed(3);
    const kiloToPounds = (number * 2.204).toFixed(3);
    const poundsToKilos = (number / 2.204).toFixed(3);

    lengthEl.textContent = `${number} meters =  ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters`;

    volumeEl.textContent = `${number} liters =  ${literToGallon} gallons | ${number} gallons = ${gallonToLiter} liters`;

    massEl.textContent = `${number} kilos =  ${kiloToPounds} pounds | ${number} pounds = ${poundsToKilos} kilos`;
});
