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

// /**
//  * objects are copied by their reference
//  */
// let x = { value: 10};
// let y = x;

// x.value = 20;

// let number = 10;

// function increment(number) {
//     number++;
// }

// increment(number);

// console.log(number)

// let obj = { value: 10 };

// function increment(obj) {
//   obj.value++;
// }

// increment(obj);

// console.log(obj);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const circle = new Circle(10);

// circle.location = { x: 1 };
// // const propertyName = 'location';
// const propertyName = 'center location';
// // circle['location'] = { x: 1 };
// circle[propertyName] = { x: 1 };

// delete circle.location;

// for(let key in circle) {
//     if(typeof circle[key] !== 'function')
//         console.log(key, circle[key])
// }

// const keys = Object.keys(circle);
// console.log("🚀 ~ file: app.js:114 ~ keys:", keys);

// if('radius' in circle)
//     console.log(first)

// function Circle(radius) {

//     this.radius = radius;

//     let defaultLocation = { x: 0, y: 0 }

//     const computeOptimumLocation = (factor) => {
//         // ... 
//     }

//     this.draw = function() {
//         this.computeOptimumLocation();

//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.defaultLocation = false;
// circle.computeOptimumLocation();
// circle.draw();

function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();