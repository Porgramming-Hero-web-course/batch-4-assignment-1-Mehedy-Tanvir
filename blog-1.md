# The Significance of Union and Intersection Types in TypeScript

Typescript is the superset of Javascript. It allows us to bring clarity and safety to the codebase by adding static types. Union types and intersection types are the two typescript features which play vital role in making code flexible, expressive, and safe. By understanding these types developers can ensure proper type handling.

## Union Types

A **union type** in TypeScript allows a value to be one of several types. This is defined using the `|` operator. We can think a union type as an "either/or" type value which can have one type from a defined set of types, making the code more flexible.

### When to Use Union Types

Union types are useful when:

- A function parameter or variable can have multiple types.
- Handling scenarios where values might be one of several possible options.

### Example: Basic Union Type

Let's consider a variable which can be either a string or a number:

```typescript
let value: string | number;

value = "Hello World!"; // Valid
value = 34; //  Valid
// value = true;               // Error: Type 'boolean' is not assignable to type 'string | number'
```

In this example, value can hold either a string or a number.

## Intersection Types

An **intersection type** in TypeScript combines multiple types into one. This is defined using the `&` operator. We can think of an intersection type as an "and" type value which must have all the properties of all types in the intersection.

### When to Use Intersection Types

Intersection types are useful when:

- Combining the properties of multiple types into a single type.
- Dealing with objects that need to meet multiple structural requirements.

### Example: Basic Intersection Type

Let's consider two interfaces, `Person` and `Employee`, and create an `EmployeeProfile` type that combines them:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
  name: "Alice",
  age: 30,
  employeeId: 123,
  department: "Engineering",
};
```

In this example, EmployeeProfile has all properties from both Person and Employee.
