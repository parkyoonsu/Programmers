// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b; /// 3
//         callback(sum);
//     }, 3000);
// }
// add(1, 2, (value) => {
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

//인덴트(들여쓰기)가 깊어지는 방식
//기능이 늘어날 수록 가독성이 안좋아짐 
//떡볶이(3초)-> 식은 떡볶이(2초) -> 냉동된 떡볶이(1.5초)