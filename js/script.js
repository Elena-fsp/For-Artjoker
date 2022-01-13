/* JS */


function  getBonusAmount (promocode) {

  let arrPromocode = [],
      messageBonusAmount = ['Промокод имеет бонус 2000 грн', 'Промокод имеет бонус 1000 грн', 'Промокод имеет бонус 100 грн', 'Промокод не действителен'],
      multiplesNum = [],
      nonMultiplesNum = [];
      
  let sumMultiplesNum,
      sumNonMultiplesNum;

for (let i = 0; i = promocode; i++ ) {
  arrPromocode.push(promocode % 10);
  promocode = parseInt(promocode / 10);
}

arrPromocode.reverse();

if (arrPromocode.every(item => typeof(item) === 'number') && arrPromocode.length === 8) {

      arrPromocode.forEach(item => {
        if (item % 2 === 0) {
          multiplesNum.push(item);
        } else { 
          nonMultiplesNum.push(item);
        }
      });

  sumMultiplesNum = multiplesNum.reduce((sum,current) => sum+current);
  sumNonMultiplesNum = nonMultiplesNum.reduce((sum,current) => sum+current);
  
     if( sumMultiplesNum > sumNonMultiplesNum && nonMultiplesNum.length == 4 && nonMultiplesNum[0]  < nonMultiplesNum[1] && nonMultiplesNum[2] < nonMultiplesNum[3]) {
       return messageBonusAmount[0];
      } else if (sumMultiplesNum > sumNonMultiplesNum  && nonMultiplesNum.length == 4 ) {
        return messageBonusAmount[1];
      } else if (sumMultiplesNum > sumNonMultiplesNum ) {
        return messageBonusAmount[2];
      } else {
        return messageBonusAmount[3];
      }
    
    } else {
      return('Промокод введен некоректно');
    }
}



console.log(getBonusAmount(84533920));
console.log(getBonusAmount(48183276));
console.log(getBonusAmount(73289388));
console.log(getBonusAmount(37283988));
console.log(getBonusAmount(3728398));
console.log(getBonusAmount(372839889999));
console.log(getBonusAmount('7223344'));
