console.log(1);

setTimeout(() => { //3초를 세는 타이머만 실행시켜 놓음. 그리고 다음으로 넘어감.
  console.log(2); //브라우저가 관리하는 별도의 공간에서 실행하는 것.
}, 3000);

console.log(3);