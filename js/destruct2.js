//객체 배열 할당 => 동일한 키값응로 해체 할당

//순서가 바뀌어도 동일한 키값의 값이 할당
var {q, p, o = 3} = {p: 42, q: 50};

console.log(p); // 42
console.log(q); // true
console.log(o);