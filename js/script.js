"use strict";

/* 1 Написать функцию которая проверяет являются две строки анаграммой или нет*/

function checkIsAnagram(stringFirst, stringSecond) {

    if(typeof stringFirst !== 'string' || typeof stringSecond !== 'string') {
        throw new Error("Arguments are not string");
    }

    if(stringFirst === '' || stringSecond === '') {
        throw new Error("Arguments are not correct");
    }

    let counter = 0;

    if(stringFirst.length !== stringSecond.length) {
        return false;
    }
    
    for(let i = 0; i < stringFirst.length; i++) {
        for(let j = 0; j < stringSecond.length; j++) {
            if(stringFirst[i] === stringSecond[j]) {
                counter++;
                break;
            }
        }
    }

    return counter === stringSecond.length;
}


/* 3 Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.*/
     
function calcAmountDigitsRecurs(numberInput, counter) {

    if(typeof numberInput !== 'number' || typeof counter !== 'number') {
        throw new Error("Arguments are not a number");
    }

      counter = counter || 0;

    if(parseInt(numberInput / 10) === 0) {
        return ++counter;
    }

    return calcAmountDigitsRecurs(parseInt(numberInput / 10), ++counter);    
}


function calcAmountDigits(numberImput) {

    if(typeof numberImput !== 'number') {
        throw new Error("Arguments are not a number");
    }
    
    let counter = 0;
    
    do {
        numberImput /= 10;
        counter++;
    } while (numberImput > 0);
  
    return counter;
}


/* 4 Реализовать функцию которая проверяет, является ли строка палиндромом*/

function checkIsPalindrome (inputString) {

    if(typeof inputString !== 'string' || inputString === '') {
        throw new Error("Arguments are not correct");
    }


    let indexStart = 0;
    let indexEnd = inputString.length - 1;

    while(indexStart < indexEnd) {
        if(inputString[indexStart] !== inputString[indexEnd]) {
            return false;
        }
        indexStart++;
        indexEnd--;
    }

    return true;
}


/* 5 Написать функцию которая вычисляет подсчет уникальных слов в предложении*/

function calcUniqueWords(sentence) {
    if(typeof sentence !== 'string' || sentence === '') {
        throw new Error("Arguments are not correct");
    }

    sentence = splitStringIntoArrayWords(sentence);
    let uniqueWords = [];
    
    for(let i = 0; i < sentence.length; i++) {
       let temporary = 0;
       for(let j = 0; j < sentence.length; j++) {
           if(sentence[j] === sentence[i]) {
               temporary++;
            }
        }
        
        if(temporary === 1) {
            uniqueWords.push(sentence[i]);
        }
    }
    return uniqueWords.length;
}


function splitStringIntoArrayWords(sentence) {

    if(typeof sentence !== 'string' || sentence === '') {
        throw new Error("Arguments are not correct");
    }

    let arrayWords = [];
    let temporaryString = '';

    for(let i = 0; i <= sentence.length - 1; i++) {
        if(sentence[i] !== '') {
            temporaryString += sentence[i];
        }
        if(sentence[i] === ' ' || i === sentence.length - 1) {
            arrayWords.push(temporaryString);
            temporaryString = '';
        }
    }
    
    return arrayWords;
} 


/* 6 Написать функцию которая вычисляет вхождение каждого слова в предложение*/

function calcAmountEveryWord(sentence) {
    
    if(typeof sentence !== 'string' || sentence === '') {
        throw new Error("Arguments are not correct");
    }
    
    sentence = splitStringIntoArrayWords(sentence);
    let objectResult = {};
    
    for(let i = 0 ; i < sentence.length ; i++){
        if(objectResult[sentence[i]]) {
            objectResult[sentence[i]]++;
        } else {
            objectResult[sentence[i]] = 1;
        }
    }
    
    return objectResult;
}
    

/* 7 Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.*/

function Trigon(sideA, sideB, hypotenuse) {
    if(typeof sideA !== 'number' || typeof sideB !== 'number' || typeof hypotenuse !== 'number' ) {
        throw new Error("Arguments are not a number");
    }
    if(sideA <= 0 || sideB <= 0 || hypotenuse <= 0) {
        throw new Error ("Arguments are not correct");
    }
    
    this.sideA = sideA;
    this.sideB = sideB;
    this.hypotenuse = hypotenuse;
    
    this.perimeter = function() {
        return this.sideA + this.sideB + this.hypotenuse;
    };
    
    this.area = function() {
        return 0.25*Math.sqrt (
            (this.sideA+this.sideB+this.hypotenuse)
            *(this.sideA+this.sideB-this.hypotenuse)
            *(this.sideA+this.hypotenuse-this.sideB)
            *(this.sideA+this.hypotenuse-this.sideA)
            );
        };
    }
    
    
class Trigon {
    
    constructor(sideA, sideB, hypotenuse) {
        if(typeof sideA !== 'number' || typeof sideB !== 'number' || typeof hypotenuse !== 'number' ) {
            throw new Error("Arguments are not a number");
        }
        if(sideA <= 0 || sideB <= 0 || hypotenuse <= 0) {
            throw new Error ("Arguments are not correct");
        }
        
        this.sideA = sideA;
        this.sideB = sideB;
        this.hypotenuse = hypotenuse;
    }
  
    calcPerimeterTrigon() {
        return this.sideA + this.sideB + this.hypotenuse;
    };

    calcAreaTrigon() {
        return 0.25*Math.sqrt (
        (this.sideA+this.sideB+this.hypotenuse)
       *(this.sideA+this.sideB-this.hypotenuse)
       *(this.sideA+this.hypotenuse-this.sideB)
       *(this.sideA+this.hypotenuse-this.sideA)
       );
    };
}


function Rectangle(width, height) {
    if(typeof width !== 'number' || typeof height !== 'number') {
        throw new Error("Arguments are not a number");
    }
    if(width <= 0 || height <= 0) {
        throw new Error ("Arguments are not correct");
    }
    
    this.width = width;
    this.height = height;
    
    this.perimeter = function() {
        return 2 * (this.width + this.height);
    };
    
    this.area = function() {
        return this.width * this.height;
    };
}


class Rectangle {
    
    constructor(width, height) {
        if(typeof width !== 'number' || typeof height !== 'number') {
            throw new Error("Arguments are not a number");
        }
        if(width <= 0 || height <= 0) {
            throw new Error ("Arguments are not correct");
        }
        
        this.width = width;
        this.height = height;
    }
    
    calcPerimeterRectangle() {
        return 2 * (this.width + this.height);
    };
    
    calcAreaRectangle() {
        return this.width * this.height;
    };
}


function Circle(radius) {
    if(typeof radius !== 'number') {
        throw new Error("Arguments are not a number");
    }
    if(radius <= 0) {
        throw new Error ("Arguments are not correct");
    }
    
    this.radius = radius;
    
    this.perimeter = function() {
        return 2*Math.PI*this.radius;
    };
    
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };
}


class Circle {
      
    constructor (radius) {
        if(typeof radius !== 'number') {
            throw new Error("Arguments are not a number");
        }
        if(radius <= 0) {
            throw new Error ("Arguments are not correct");
        }
        
        this.radius = radius;
    }
    
    calcPerimeterCircle() {
        return 2*Math.PI*this.radius;
    };
    
    calcAreaCircle() {
        return Math.PI * this.radius * this.radius;
    }
}


/* 8 Вычислить факториал числа. Реализовать с помощью рекурсии.
 Реализовать мемоизированную функцию вычисления факториала.*/

function calcFactorialRecurs(numberInput) {
    if(typeof numberInput !== 'number' || numberInput < 0) {
        throw new Error("Arguments are not correct");
    }
    
    if(numberInput <= 1) {
        return 1;
    }
    
    return numberInput * calcFactorialRecurs(numberInput - 1);
}


let calcFactorialRecursionMemo = (function(){
    if(typeof numberInput !== 'number' || numberInput < 0) {
        throw new Error("Arguments are not correct");
    }
    
    let cashe = {};
    
    return function factorial(numberImput) {
        if(numberImput === 0) {
            return 1;
        }
        if(cashe[numberImput] === undefined) {
            cashe[numberImput] = factorial(numberImput - 1);
        }
        return numberImput * cashe[numberImput];
    };
})();


function calcFactorialIteratively(numberInput) {
    if(typeof numberInput !== 'number' || numberInput < 0) {
        throw new Error("Arguments are not correct");
    }
    
    let result = 1;
    
    for(let i = 2; i <= numberInput; i++) {
        result *= i;
    }
    
    return result;
}


/* 9 Посчитать сумму всех элементов массива, только тех которые
 (Кратные двум, кратные трем, которые только положительные и нечетные),
  реализовать с помощью рекурсии для одномерного массива.
*/

function  sumElementsArray(arrayElements, callback) {
    if(!Array.isArray(arrayElements) || typeof callback !== 'function' || arrayElements.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let sumElements = 0;
    
    for(let i = 0; i < arrayElements.length; i++) {
        if(callback (arrayElements[i])) {
           sumElements += arrayElements[i];
        }
    }
    
    return sumElements;
}


function sumElementsOfArrRecurs(arrayElements, callback, index) {
    if(!Array.isArray(arrayElements) || typeof callback !== 'function' || arrayElements.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    index = index || 0;
    
    if(index > arrayElements.length) {
        return 0;
    }
    
    if(callback(arrayElements[index])) {
        return arrayElements[index] += sumElementsOfArrRecurs(arrayElements, callback, ++index);
    }
    
    return sumElementsOfArrRecurs(arrayElements, callback, ++index);
}

/* 10  Посчитать количество элементов массива которые
 (Нулевые, отрицательные, положительные, простые числа)
*/

function amountOfElements(arrayElements, callback) {
    if(!Array.isArray(arrayElements) || typeof callback !== 'function' || arrayElements.length === 0) {
        throw new Error("Arguments are not correct");
    }

	let counter = 0;
    
    for(let i = 0; i < arrayElements.length; i++) {
        if(callback(arrayElements[i])) {
            counter++;
        }
    }
    
    return counter;
}


/* 11 Написать функции которые преобразовывают число из десятичной системы счисления в двоичную
 и в обратную сторону. (Достаточно написать для целых положительных чисел)
*/

function  calcBinaryNumber(decimalNumber) {
    if(typeof decimalNumber !== 'number') {
        throw new Error("Arguments are not number");
    }
    
    let binaryNumber = '';
    
    while (decimalNumber >= 1) {
        binaryNumber +=  Math.floor(decimalNumber) % 2;
        decimalNumber = decimalNumber / 2;
	}
    
    return binaryNumber.split('').reverse('').join('');
}


function calcDecimaNumber(binaryNumber) {
    if(typeof binaryNumber !== 'number') {
        throw new Error("Arguments are not number");
    }
    
    let sum = 0;
    let numberPower = 0;
    let counter = 0;
    
    let numberArray = String(binaryNumber).split("");
    
    for (let i = numberArray.length - 1; i >= 0; i--) {
        numberPower = numberArray[i] * 2 ** counter;
        sum += numberPower;
        counter++;
    }
    
    return sum;
}


/* 12 Пункты 9 и 10 выполнить для двумерных массивов.*/

function sumElementsTwoDemensional(twoDimensionalArray, callback) {
    if(!Array.isArray(twoDimensionalArray) || typeof callback !== 'function' || twoDimensionalArray.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let sumElements = 0;
    
    for(let i = 0; i < twoDimensionalArray.length; i++) {
        for(let j = 0; j < twoDimensionalArray[i].length; j++) {
            if(callback(twoDimensionalArray[i][j])) {
                sumElements += twoDimensionalArray[i][j];
            }
        }
    }
    return sumElements;
}

function calcAmountElementsTwoDimensional(twoDimensionalArray, callback) {
    if(!Array.isArray(twoDimensionalArray) || typeof callback !== 'function' || twoDimensionalArray.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let counter = 0;
    
    for(let i = 0; i < twoDimensionalArray.length; i++) {
        for(let j = 0; j < twoDimensionalArray[i].length; j++) {
            if(callback(twoDimensionalArray[i][j])) {
                counter++;
            }
        }
    }
    return counter;
}


/* 13 Посчитать сумму значений чисел от min до max
(всех, только тех которые кратны 3, только положительные).
 Нарисовать блок схему. Реализовать также с помощью рекурсии.*/
 
function calcSumMinToMax(minNumber, maxNumber, callback) {
    if(typeof minNumber !== 'number' || typeof maxNumber !== 'number' || typeof callback !== 'function') {
        throw new Error("Arguments are not correct");
    }
    if(minNumber > maxNumber || maxNumber == 0) {
        throw new Error("Arguments are not correct");
    }
    
    let sum = 0;
    
    for(let i = minNumber; i <= maxNumber; i++) {
        if(callback(i)) {
            sum += i;
        }
    }
    return sum;
}


function calcSumMinToMaxRecurs(minNumber, maxNumber, callback) {
    if(typeof minNumber !== 'number' || typeof maxNumber !== 'number' || typeof callback != 'function') {
        throw new Error("Arguments are not correct");
    }
    if(minNumber > maxNumber || maxNumber == 0) {
        throw new Error("Arguments are not correct");
    }
    
    let result = 0;
    
    if(callback(minNumber)) {
        result += minNumber;
    }
    
    if (++minNumber <= maxNumber) {
        result += calcSumMinToMaxRecurs(minNumber, maxNumber);
    }
    
    return result;
}


/* 14 Найти среднее значение всех элементов одномерного/двумерного массива
 (Среднее только тех которые четные и которые не четные).*/

function calcAverageElements(arrayElements, callback) {
    if(!Array.isArray(arrayElements) || typeof callback !== 'function' || arrayElements.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let sum = 0;
    let counter = 0;
    
    for(let i = 0; i < arrayElements.length; i++) {
        if(callback(arrayElements[i])) {
            sum += arrayElements[i];
            counter++;
        }
    }
    return sum / counter;
}


function calcAverageElementsTwoDimensional(twoDimensionalArray, callback) {
    if(!Array.isArray(twoDimensionalArray) || typeof callback !== 'function' || twoDimensionalArray.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let sum = 0;
    let counter = 0;

    for(let i = 0; i < twoDimensionalArray.length; i++) {
        for(let j = 0; j < twoDimensionalArray[i].length; j++) {
            if(callback(twoDimensionalArray[i][j])) {
                sum += twoDimensionalArray[i][j];
                counter++;
            }
        }
    }
    return sum / counter;
}


/* 15 Транспонировать матрицу, сложить две матрицы.*/

function showTransportedMatrix(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let transportedMatrix = [];
    
    for(let i = 0; i < matrixInput[i].length; i++) {
        transportedMatrix[i] = [];
        for(let j = 0; j < matrixInput.length; j++) {
            transportedMatrix[i][j] = matrixInput[j][i];
        }
    }
    return transportedMatrix;
}

function calcSumTwoMatriсes(matrixFirst, matrixSecond) {
    if(!Array.isArray(matrixFirst) || !Array.isArray(matrixSecond) || matrixFirst.length === 0 || matrixSecond.length === 0) {
        throw new Error("Arguments are not correct");
    }
    if(matrixFirst.length !== matrixSecond.length) {
        throw new Error("Arguments are not correct");
    }
    
    let sumTwoMatrices = [];
    for(let i = 0; i < matrixFirst.length; i++) {
        sumTwoMatrices[i] = [];
        for(let j = 0; j < matrixFirst[0].length; j++) {
            sumTwoMatrices[i][j] = matrixFirst[i][j] + matrixSecond[i][j];
        }
    }
    return sumTwoMatrices;
}


/* 16 Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент.
 Для столбца аналогично реализовать.
*/

function deleteStringWithNullElements(twoDimensionalArray) {
    if(!Array.isArray(twoDimensionalArray) || twoDimensionalArray.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let counter = 0;
    
    for(let i = 0; i < twoDimensionalArray.length; i++) {
        for(let j = 0; j < twoDimensionalArray[0].length; j++) {
            if(twoDimensionalArray[i][j] === 0) {
                counter++;
            }
        }
        
        if(counter > 0) {
            twoDimensionalArray.splice(i, 1);
            counter = 0;
        }
    }
    return twoDimensionalArray;
}

function deleteRowWithNullElements (twoDimensionalArray) {
    if(!Array.isArray(twoDimensionalArray) || twoDimensionalArray.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    for(let i = 0; i < twoDimensionalArray.length; i++) {
        for(let j = 0; j < twoDimensionalArray[0].length; j++) {
            if(twoDimensionalArray[i][j] === 0) {
                let column = j;
                for(let k = 0; k < twoDimensionalArray.length; k++) {
                    twoDimensionalArray[k].splice(column, 1);
                }
            }
        }
    }
    return twoDimensionalArray;
}


/*  17 Посчитать сумму/количество нулевых элементов/
среднее значение элементов матрицы над и под главной диагональю
 и на главной диагональю.
*/

function calcElementsOnMainDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsOnMainDiagonal = [];

     for (let i = 0; i < matrixInput.length; i++) {
        for (let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
               arrayElementsOnMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return amountOfElements(arrayElementsOnMainDiagonal, callback);    
}

function calcSumOnMainDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsOnMainDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsOnMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return sumElementsArray (arrayElementsOnMainDiagonal, callback);    
}

function calcAvarageMainDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsOnMainDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsOnMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return calcAverageElements(arrayElementsOnMainDiagonal, callback);
}

function calcElementsUnderMainDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let arrayElementsUnderMainDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i > j) {
                arrayElementsUnderMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return amountOfElements(arrayElementsUnderMainDiagonal, callback);    
}

function calcSumUnderDiagonal (matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsUnderMainDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsUnderMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return sumElementsArray(arrayElementsUnderMainDiagonal, callback);    
}

function calcAvarageUnderDiagonal (matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }
    
    let arrayElementsUnderMainDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsUnderMainDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return calcAverageElements(arrayElementsUnderMainDiagonal, callback);    
}

function calcElementsAboveDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsAboveDiagonal = [];
    
    for(let i = 0; i < arrayElementsAboveDiagonal.length; i++) {
        for(let j = 0; j < arrayElementsAboveDiagonal[0].length; j++) {
            if(i < j) {
                arrayElementsAboveDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return amountOfElements(arrayElementsAboveDiagonal, callback);    
}


function calcSumAboveDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsAboveDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsAboveDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return sumElementsArray(arrayElementsAboveDiagonal, callback);   
}

function calcAvarageAboveDiagonal(matrixInput) {
    if(!Array.isArray(matrixInput) || matrixInput.length === 0) {
        throw new Error("Arguments are not correct");
    }

    let arrayElementsAboveDiagonal = [];
    
    for(let i = 0; i < matrixInput.length; i++) {
        for(let j = 0; j < matrixInput[0].length; j++) {
            if(i === j) {
                arrayElementsAboveDiagonal.push(matrixInput[i][j]);
            }
        }
    }
    return calcAverageElements(arrayElementsAboveDiagonal, callback);    
}


/*  18 Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
 (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.
*/

let generatorObjectFibonacci = {
    
    *fibonacci() {
        let currentNumber = 0;
        let next = 1;
        
        while(true) {
            yield currentNumber;
            let nextNumber = currentNumber + next;
            currentNumber = next;
            next = nextNumber;
        }
    }
}

let iteratorObjectFibonacci = {
    
    currentNumber: 0, 
    nextNumber: 1, 
    temp: 0,
    
    [Symbol.iterator]() {
        return this; 
     }, 

    next(){ 
        this.temp = this.nextNumber; 
        this.nextNumber = this.temp + this.currentNumber; 
        this.currentNumber = this.temp; 
        return {
            value: this.nextNumber,
        }
    }
} 

let fibonacci = (function() {

    let cache = {};
    
    function fibonacci(n) {
        if(n in cache) {
            return cache[n];
        }
        if(n <= 1) {
            cache[n] = n;
        } else {
            cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
        }
        return cache[n];
    };
    return fibonacci;
})();
  

  /*  19 Реализовать с помощью итератора и генератора светофор.
 При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.
*/

function* switchTrafficLight() {
    while(true) {
        yield 'красный';
        yield* switchTrafficLight2();
    }
    
    function* switchTrafficLight2() {
        yield 'желтый';
        yield 'зеленый';
        yield 'желтый';
    }
}

let iteratorTrafficLight = {
    
    color: 'красный желтый зеленый желтый',
    
    [Symbol.iterator]() {
        return {
            index: 0,
            color: this.color.split(' '),
            next() {
                while(true) {
                    if(this.index < this.color.length) {
                        return {
                            value: this.color[this.index++],
                            done: false,
                        };
                    }
                    if(this.index > 3) {
                        this.index = 0;
                    }
                }
            }
        }
    }
}


/* 20 Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово).
Посчитать количество битов числа которые установлены в единицу и которые установлены в 0.
Написать свою реализацию для ~, двумя способами).*/

function checkIsPositiveNumber(numberInput) {
    if(typeof numberInput !== 'number') {
        throw new Error("Argument is not number");
    }
    
    return (numberInput & (1 << 31)) === 0;
}

function calcAmountBits(numberInput) {
    if(typeof numberInput !== 'number') {
        throw new Error("Argument is not number");
    }
    
    let typesBit = {
        bitZero: 32,
        bitOne: 0
    }
    
    for(let i = 0; i < 32; i++) {
		if((numberInput & 1 << i) == 1 << i) {
			--typesBit.bitZero;
			++typesBit.bitOne;
		}
	}
	return typesBit;
}

function reversesBit(inputNumber) {
    if(typeof inputNumber !== 'number') {
        throw new Error("Argument is not number");
    }
    return (-(inputNumber + 1));
}

function switchBit(inputNumber) {
    if(typeof inputNumber !== 'number') {
        throw new Error("Argument is not number");
    }

    for(let i = 0; i < 32; i++) {
        if(((inputNumber >> i) & 1) === 0) {
            inputNumber ^= (0 << i);
        }
        inputNumber ^= (1 << i);
    }
    return inputNumber;
}
 
  
    