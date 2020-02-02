function sum (a,b) {
  return a+b;
} // декларэйшн всплывает. если использую выше, чем описываю саму функцию

const result = sum (2,2 )


const sum = function(a,b) {
  return a+b;
} //внутри выражения объявления переменной, когда внутри какого-то другого выражения экспрешн. не всплывает

const sum = (a,b) => a+b; //экспрешн стрелочная. в нем нет псеводмассива arguments 

//если после объявления будут еще операции, то const не подойдет
//Applications
const a = [1,2,3,4];

for (let i = 0; i<a.length; i++) {
  console.log(i);
}
// если хотите использовать ш вне счетчика


// ARGUMENTS 

// передаем один аргумент массив
function sum (numbers) {
  let result =0;

  for (let i = 0; i<numbers.length; i++) {
    const value = numbers[i];
    result = result +value;
  }
  return result;
} 
const result = sum ([2,2,5,7])
console.log(result)

//сокращаем и получаем функцию нижу
function sum (numbers) {
  let result =0;

  for (let i = 0; i<numbers.length; i++) {
    result += numbers [i];
  }
  return result;
} 
const result = sum ([2,2,5,7])
console.log(result)

// другой способ передаем 5 аргументов
function sum () {
  let result =0;

  for (let i = 0; i<arguments.length; i++) {
    result += arguments[i];
  }
  return result;
} 
const result = sum (2,2,5,7);
console.log(result)

//РЕКУРСИЯ
// стэк вызовов- пирамида. То растет, то уменьшается 
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
}

f1(); //выдаст в консоль f3
// |||| пирамида 
// функция возвращается в то место, где она вызывалась
// 

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
}
console.log('до вызова');
f1(); // не перейдет на следующую строку пока не будет выполнены все вышестоящие. Пока стек не раскрутится обратно.
console.log('после вызова');


//зациклененная функция. неконтролируемая рекурсия
function f1() {
  f1();
}
f1();

//конторлируемая рекурсия. таким способом можно рекурсивно перебирать dom дерево 
let i = 0;
function f1() {
  console.log(++i);
  if (i<10) {
  f1();
  }
}

f1();