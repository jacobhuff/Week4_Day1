let obj1 = {
  prop1: 'Object 1',
  prop2: [1, 2, 3],
  prop3: 1
}
let obj2 = {
  prop1: 'Object 2',
  prop2: [4, 5, 6],
  prop3: 2
}
let obj3 = {
  prop1: 'Object 3',
  prop2: [7, 8, 9],
  prop3: 3
}

console.log("Obj1: " + obj1.prop1);
console.log("Obj2: " + obj2.prop1);
console.log("Obj3: " + obj3.prop1);

function takesArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

takesArray(obj3.prop2);