// 배열 destruct assignment
var a, b, rest;
[a, b = 20] = [10, 30];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
//3번째 나머지 모든것들을 넣어줌

console.log(rest);
// expected output: [30,40,50]