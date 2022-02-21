"use strict";

/* Написать сортировку двумя различными методами 
(Можно выбрать любые методы сортировки, самые простые: пузырьковая, выбором)*/

Array.prototype.insertionSort = function(callback) {
  
  for(let i = 0; i < this.length; i++) {
    let currentElement = this[i];
    let nextElement = i - 1;
    while (nextElement >= 0 && callback(this[nextElement], currentElement)) {
      this[nextElement + 1] = this[nextElement];
      nextElement--;
    }
    this[nextElement + 1] = currentElement;
  }
  return this;
}

Array.prototype.myMergeSort = function() {
  if(this.length === 1) {
    return this;
  }
  let middleItem = Math.floor(this.length / 2);
  let itemsLeftSide  = this.slice(0, middleItem);
  let itemsRightSide = this.slice(middleItem);

  return comparedConcatenatedItems(itemsLeftSide.myMergeSort(), itemsRightSide.myMergeSort());
}

function comparedConcatenatedItems(itemsLeftSide, itemsRightSide) {
  let indexItemsLeftSide = 0;
  let indexItemsRightSide = 0;
  let comparedItems = [];
  
  while(indexItemsLeftSide < itemsLeftSide.length && indexItemsRightSide < itemsRightSide.length) {
    if(itemsLeftSide[indexItemsLeftSide] < itemsRightSide[indexItemsRightSide]) {
      comparedItems.push(itemsLeftSide[indexItemsLeftSide]);
      indexItemsLeftSide++;
    } else {
      comparedItems.push(itemsRightSide[indexItemsRightSide]);
      indexItemsRightSide++;
    }
  }
  return comparedItems.concat(itemsLeftSide.slice(indexItemsLeftSide)).concat(itemsRightSide.slice(indexItemsRightSide));
}

/* Написать свою реализацию бинарного дерева поиска.
(Возможности структуры данных должны быть: Добавить новый элемент, удалить элемент, найти элемент по его значению) */

class BinaryTreeSeach {
  
  constructor() {
    this.value = null;
    this.right = null;
    this.left = null;
  }
  
  insertTop(value, top) {
    top = top || this;
    if(top.value === null) {
      top.value = value;
      return value;
    }
    if(value < top.value) {
      if(top.left === null) {
        top.left = new BinaryTreeSeach();
      }
      return this.insertTop(value, top.left);
    } else {
      if(top.right === null) {
        top.right = new BinaryTreeSeach();
      }
      return this.insertTop(value, top.right);
    }
  }
  
  searchTop(value, top) {
    top = top || this;
    if(value < top.value) {
      if(top.left === null) {
        return false;
      }
      return this.searchTop(value, top.left);
    }
    if(value > top.value) {
      if(top.right === null) {
        return false;
      }
      return this.searchTop(value, top.right);
    } else {
      return true;
    }
  }
  
  seachMinTop(top) {
    top = top || this;
    if(top.left === null) {
      return top;
    }
    return this.seachMinTop(top.left);
  }
  
  removeTop(value, top) {
    top = top || this; 
    if(value < top.value) {
      if(top.left === null) {
        return false;
      }
      top.left = this.removeTop(value, top.left);
      return top;
    } else if(value > top.value) {
      if(top.right === null) {
        return false;
      }
      top.right = this.removeTop(value, top.right);
      return top;
    } else {
      top = top || this;
      if(top.left === null && top.right === null) {
        top = null;
        return top;
      } else if(top.left === null) {
        top = top.right;
        return top;
      } else if(top.right === null) {
        top = top.left;
        return top;
      } else {
        let minTop = this.seachMinTop(top.right);
        top.value = minElement.value;
        top.right = this.removeTop(minTop.value, top.right);
        return top;
      }
    }
  }
}









  



  
    

    




























