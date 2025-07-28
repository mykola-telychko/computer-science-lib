var longestValidParentheses = function(s) {
    if (s.length <= 1) return 0;
    const dp = new Array(s.length).fill(0);
    let maxLength = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (dp[i - 1] > 0) {
                const matchIndex = i - dp[i - 1] - 1;
                if (matchIndex >= 0 && s[matchIndex] === '(') {
                    dp[i] = dp[i - 1] + 2 + (matchIndex > 0 ? dp[matchIndex - 1] : 0);
                }
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
};

let arrSym = ["(", ")"];

// make more often according 1-0 ( ) from rand-fns 
function getRandomInt() {
  return Math.round(Math.random());
}
function getRanInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let randomNum = getRandomInt();
let randTen = getRanInt(2, 10);
// console.log(randomNum); // Виведе випадкове ціле число від 1 до 10
// console.log(randTen); // Виведе випадкове ціле число: 0 або 1
let res = [];
for (let i = 0; i < randTen; i++){
  res.push(arrSym[getRandomInt()])
}
// console.log(res.join(""));

// Test cases
console.log('Input:', res.join(""));
console.log('Output:', longestValidParentheses(res.join("") ));
console.log('---------:');
