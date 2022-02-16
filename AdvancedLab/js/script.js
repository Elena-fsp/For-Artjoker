"use strict";

/* 1. Написать свою реализацию функций bind, call.
Новая реализация должна по функционалу работать аналогично как и соответствующие стандартные функции.
Без использования стандартных функций.*/

Function.prototype.myBind = function(contextObject, ...arguments) {
  if(typeof contextObject !== 'object') {
    throw new Error ("Arguments are not object");
  }
  
  let contextFunction = this;
  
  return function(...arguments) {
    let symbol = Symbol();
    contextObject[symbol] = contextFunction;
    let result = contextObject[symbol](...rest.concat(arguments));
    delete contextObject[symbol];
    
    return result;
  };
}

Function.prototype.myCall = function(contextObject, ...args){
  if(typeof contextObject !== 'object') {
    throw new Error ("Arguments are not object");
  }
  
  let symbol = Symbol();
  contextObject[symbol] = this;
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
  
  let modifiedElements = [];
  
  for(let index = 0; index < this.length; index++) {
    modifiedElements.push(callback(this[index], index, this));
  }
  return modifiedElements;
}

Array.prototype.myFilter = function(callback) {
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  let filteredItems= [];
  
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)) {
      filteredItems.push(this[index]);
    }
  }
  return filteredItems;
}

Array.prototype.myReduce = function(callback, accumulator){
  if(typeof callback !== 'function') {
    throw new Error ("Argument are not correct");
  }
  
  for(let i = 0; i < this.length; i++) {
    accumulator =+ callback(accumulator, this[i]);
  }

  return accumulator;
}

Array.prototype.myFind = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  for(let index = 0; index < this.length; index++) {
    if(callback(this[index], index, this)) {
      return this[index];
      break;
    }
  }
}

Array.prototype.myForEach = function(callback){
  if(typeof callback !== 'function') {
    throw new Error ("Argument is not function");
  }
  
  for(let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
}