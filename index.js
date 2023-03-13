function EnteringNumbers(numberOfNumbers, sum, enterNumbers) {
    const numeric = prompt("Введіть число: (для завершення введіть 0)");
    if (numeric === "0") {
        let average = sum / numberOfNumbers;
        console.log(`Введені числа ${enterNumbers} кількість чисел які були введені: ${numberOfNumbers} їх загальна сума: ${sum} та середнє арифметичне: ${average}`);
    } else {
        let numeric2 = Number(numeric);
        sum += numeric2;
        numberOfNumbers ++;
        enterNumbers += " "+ numeric + ",";
        return EnteringNumbers(numberOfNumbers, sum, enterNumbers);
    }
}
  EnteringNumbers(0, 0, "");
