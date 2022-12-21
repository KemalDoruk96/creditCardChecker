// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid4 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid4 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery2 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery3 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, invalid1, invalid2, invalid3, invalid4, mystery1, mystery2, mystery3];

// Add your functions below:


                 
const validateCred = (arr) =>{
  let mutatioedNumber;
  let totalMutatioedNumber = 0;
  let totalNormalNumber = 0;
  let totalNumber = 0;
  for( let i = arr.length-2 ; i >= 0  ; i = i - 2){
      mutatioedNumber = 2 * arr[i];
       if (mutatioedNumber > 9){
           mutatioedNumber -= 9;
          }
      totalMutatioedNumber += mutatioedNumber;
    }
    for(let j =arr.length-3 ; j >= 0; j = j- 2){
       totalNormalNumber += arr[j];
    }
     totalNumber = totalNormalNumber + totalMutatioedNumber + arr[arr.length - 1] ;
     
    return totalNumber % 10 === 0;
    
 }
  console.log(validateCred(mystery1));
  
  
 function findInvalidCards(cards) {
  const invalid = [];

  for (let i = 0; i < cards.length; i++) {
    let currCred = cards[i];
    if (!validateCred(currCred)) {
      invalid.push(currCred);
    }
  }

  return invalid;
}
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4])); // 
console.log(findInvalidCards([mystery1, mystery2, mystery3]));


function idInvalidCardCompanies(invalidBatch) {
  const companies = [];
  for (let i = 0; i < invalidBatch.length; i++) {
    switch (invalidBatch[i][0]) {
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
        console.log('Company not found');
    }
  }
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); 
console.log(idInvalidCardCompanies(batch)); 



 





