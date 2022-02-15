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
  
  for(let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index, this));
  }
  return newArray;
}

Array.prototype.myFilter = function(callback) {
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let newArray = [];
  
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }
  return newArray;
}

Array.prototype.myReduce = function(callback, accumulator){
  if(typeof callback !== 'function') {
    throw new Error ("Argument are not correct");
  }
  
  for (let i = 0;i < this.length; i++) {
    accumulator =+callback(accumulator, this[i])
  }
  return accumulator;
}

Array.prototype.myFind = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let result;
  
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)) {
      result = (this[index]);
      break;
    }
  }
  return result;
}

Array.prototype.myForEach = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  for(let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}