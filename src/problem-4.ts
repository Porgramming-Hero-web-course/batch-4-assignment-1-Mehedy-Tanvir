// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function isCircle(shape: Shape): shape is Circle {
  return shape.shape === "circle";
}

function isRectangle(shape: Shape): shape is Rectangle {
  return shape.shape === "rectangle";
}

function calculateShapeArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else if (isRectangle(shape)) {
    return shape.width * shape.height;
  } else {
    return 0;
  }
}

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log(circleArea);
// console.log(rectangleArea);
