// async function foo(){
//   console.log(1);
//   let a = await 100;
//   console.log(a);
//   console.log(2);
// }

// console.log(0);
// foo();
// console.log(3);


// function* genDemo(){
//   console.log('start executor first 1');

//   yield 'generator 1';

//   console.log('start executor first 2');

//   yield 'generator 2';

//   console.log('end executor');

//   return yield 'generator 3';
// }

// console.log(' main 0');
// let gen = genDemo();

// console.log(gen.next().value);

// console.log(' main 1');

// console.log(gen.next().value);
// console.log(' main 3')


async function foo(){
  return 2
}



console.log(foo())