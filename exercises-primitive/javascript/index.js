// https://github.com/mykola-telychko/assistant-js
// best practices: separateOddEven / explodeArrayInterleave

function separateNums(arr, mod){
  let oddArr = [];
  let evenArr = [];
  
  if ( mod==="odd" ) {

        for ( let i = 0; i < arr.length; i++ ){
            if(arr[i] % 2 != 0){
                oddArr.push(arr[i]);
            }
        }

  } else if ( mod==="even" ) {

        for ( let i = 0; i < arr.length; i++ ) {
            if(arr[i] % 2 == 0){
                evenArr.push(arr[i]);
            }
        }

  } else {

        for ( let i = 0; i < arr.length; i++ ) {
            if(arr[i] % 2 == 0){
                evenArr.push(arr[i]);
            } else if(arr[i] % 2 != 0){ 
                oddArr.push(arr[i]);
            }
        }

  }
  
  return { "odd":oddArr, "even": evenArr };
}

let arrInteger = [1,2,3,4,5,6,7,8,9,12,31,45,67,18,59]
console.log(separateNums(arrInteger));
console.log(separateNums(arrInteger, 'odd'));
console.log(separateNums(arrInteger, 'even'));