// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당 - 중괄호를 이용한다.
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person); //객체를 넘겼을 때에만 사용가능 ex. 10같은 값을 넣으면 구조분해할당 불가능.