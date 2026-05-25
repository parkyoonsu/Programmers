// function returnFlase() {
//     console.log("False 함수");
//     return undefined;
// }
// function returnTrue() {
//     console.log("True 함수")
//     return 10;
// }
// console.log(returnFlase() && returnTrue());

// // 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });

// true || true 이면 앞에 있는 true값 반환
// true && true 이면 뒤에 있는 true값 반환