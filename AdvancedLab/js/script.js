"use strict";

/* 1. Написать свою реализацию функций bind, call.
Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции.
Без использования стандартных функций.*/

Function.prototype.myBind = function(contextObject, ...arg) {
  if(typeof contextObject !== 'object') {
    throw new Error ("Arguments are not object");
  }
  
  let func = this;
  
  return function (...args) {
    let symbol = Symbol();
    contextObject[symbol] = func;
    let result = contextObject[symbol](...args);
    delete contextObject[symbol];
    
    return result;
  };
}

Function.prototype.myCall = function(contextObject, ...args){
  if(typeof contextObject !== 'object') {
    throw new Error ("Arguments are not object");
  }
  
  let func = this;
  let symbol = Symbol();
  contextObject[symbol] = func;
  let result = contextObject[symbol](...args);
  delete contextObject[symbol];
  return result;
}


/*2. Написать свою реализацию функций для работы с массивами,
 которые являются аналогами следующих функций: map, filter, reduce, find, forEach.
 Без использования стандартных функций*/

Array.prototype.myMap = function(callback) {
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let newArray = [];
  
  for(let item of this) {
    newArray.push(callback(item));
  }
  return newArray;
}

Array.prototype.myFilter = function(callback) {
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let newArray = [];
  
  for(let item of this) {
    if(callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

Array.prototype.myReduce = function(callback, initialValue){
  if(typeof callback !== 'function' || typeof initialValue !== 'number' ) {
    throw new Error ("Argument are not correct");
  }
  
  for(let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue);
  }
  return initialValue;
}

Array.prototype.myFind = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let result;
  
  for(let item of this) {
    if(callback(item)) {
      result = (item);
      break;
    }
  }
  return result;
}

Array.prototype.myForEach = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  for(let item of this) {
    callback(item);
  }
}





