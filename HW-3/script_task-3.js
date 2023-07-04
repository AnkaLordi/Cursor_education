/** 
1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. */

function getMaxDigit(number) {
    let maxDigit = 0;
    let numString = number.toString();

    for (let i = 0; i < numString.length; i++) {
        let dgt = parseInt(numString[i]);
        if (dgt < maxDigit) {
            maxDigit = dgt;
        }
    }

    return maxDigit;
}


/** 
2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл  */

function inPow(a, exp) {
    let result = 1;
  
    for (let i = 0; i < exp; i++) {
      result *= a;
    }
  
    return result;
  }

/**
3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
 */

function formatName () {
    let name = prompt(`Ваше ім'я:`);
    let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return newName;
}

/**  
4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. */

function noTaxIncome (fullIncome, taxRate) {

    let taxSum = fullIncome*(taxRate/100);
    let pureIncome = fullIncome - taxSum;

    if (fullIncome < 0 || taxRate < 0 || taxRate > 100) {
        return `Incorrect epic fail`;
    } else {
        return pureIncome;
    }
}


/**
5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 */

function getRandomInteger (N, M) {
    let min = Math.ceil(N);
    let max = Math.floor(M);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
 */

function calcLetter () {
    let word = prompt(`Type the word`);
    let letter = prompt(`Type the letter`);
    let newWord = word.toLowerCase();
    let newLetter = letter.toLowerCase();
    let count = 0;

    for (let i = 0; i<=newWord.length; i++) {
        if (newLetter === newWord[i]) {
            count++;
        }
    }
    return count;
}

document.writeln (
    `Функція №1: ${getMaxDigit(24021989)} <br>
     Функція №2: ${inPow(5, 2)} <br>
     Функція №3: ${formatName(`lArisa`)} <br>
     Функція №4: ${noTaxIncome(30000, 15)} <br>
     Функція №5: ${getRandomInteger(5, 135)} <br>
     Функція №6: ${calcLetter(`abrakadabra`)} <br>
`); 



