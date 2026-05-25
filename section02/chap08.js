// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); //false 반환

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 // 배열의 앞에서부터 찾는다.
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20); //false 반환

// let objectArr = [
//   { name: "이정환" },
//   { name: "홍길동" },
// ];

// console.log(
//   objectArr.indexOf({ name: "이정환" })
// ); //찾을 수 없음!

// console.log(
//   objectArr.findIndex(
//     (item) => item.name === "이정환" //프로퍼티(값) 을 기준으로 비교하기 때문에 정확한 위치 찾아냄.
//   )
// );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
  (item) => item === 999
);

console.log(findedIndex);
//indexof는 원시타입에서는 정확한 위치를 찾아낼 수 있으나, 객체타입에서는 정확환 위치를 찾아내기 어렵다.
//따라서 얕은 비교는 indexof로 가능하고, 깊은 비교를 할 때는 findindex를 사용하자!

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
];

const finded = arr5.find(
  (item) => item.name === "이정환"
);

console.log(finded);