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

// anotherCircle.draw()

const Circle1 = new Function(
  'radius',
  `
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
`
);

const circle1 = new Circle1(1); 
