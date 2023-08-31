// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function() {
//         console.log('draw')
//     }
// };

// // factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// const circle = createCircle(1);

// // circle.draw();

// // Constructor function
// function Circle(radius) {
//   console.log('this', this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const anotherCircle = new Circle(1);

// const anotherCircle2 = Circle.call({}, 1);

// const anotherCircle3 = Circle.apply({}, 1);

// anotherCircle.draw()

// const Circle1 = new Function(
//   'radius',
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// `
// );

// const circle1 = new Circle1(1); 

/**
 * Primitives are copied by their value
 */
// let x = 10;
// let y = x;

// x = 20;

/**
 * objects are copied by their reference
 */
let x = { value: 10};
let y = x;

x.value = 20;