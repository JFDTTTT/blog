# 基础

## 基础类型

### 布尔值

```typescript
let isDown: boolean = true;
```

### 数字

```typescript
let decLiteral: number = 666;
```

### 字符串

```typescript
let myName: string = "wo shi xiao ming";
```

### 数组

有两种的方式可以定义数组，第一种是在类型后面直接跟`[]`

```typescript
let arr1: number[] = [1, 2, 3];
```

第二种泛型写法

```typescript
let arr2: Array<string> = ["a", "b"];
```

### 元组

元组是表示一个已知数量和类型的数组，跟数组的区别就是：元组内的元素不要求类型相同

```typescript
let arr3: [string, number] = ["abc", 123];
```

### 枚举

枚举既可以根据 key 找 value，也可以根据 value 找 key，**默认 value 是从 0 开始**

```typescript
enum Color {
  red,
  blue,
  green,
}

console.log(Color.red); // 0
console.log(Color[0]); // red

enum Color1 {
  red = 1,
  blue = 2,
  green = 3,
}

console.log(Color1.red); // 1
console.log(Color1[1]); // red
```

### any

any 是任意类型，跟 Object 类型的区别是：Object 类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，  
::: tip
声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
:::

```typescript
let str: any = 4;
str.toFixed(2);

let str1: Object = 4;
str1.toFixed(); //报错
```

### Void

Void 表示没有任何类型，当函数没有返回值是，通常返回值得类型是 Void

```typescript
function fn(): void {
  console.log("hello void");
}
```

void 的类型的变量只能赋值`undefined`和`null`

```typescript
let unusable: void = undefined;
```

### Null 和 Undefined

`null`和`undefined`两者各自有自己的类型分别叫做 undefined 和 null

```typescript
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是任意类型的子类型，就是说你可以把`null`和`undefined`赋值给任意类型

```typescript
let test: number = 123;
test = null;
test = undefined;
```

然而当制定了`--strictNullChecks`标记，`null`和`undefined`就只能赋值给自己的类型或者`void`,

::: tip
官方建议使用`--strictNullChecks`(严格模式)
:::

### Never

never 类型是表示那些永远不存在的值得类型 **（无法达到的终点）**  
我理解是没有返回值，因为程序没有执行完，所以就永远没有返回

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

### Object

object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。**(除去六个基础类型之外)**

```typescript
function create(o: object): void {}

create(null);
create({ a: 1 });
create([1, 2, 3]);

create(123); //Error
create("abc"); //Error
```

### 类型断言

当你准确的值得某个变量的准确类型的时候，就可以使用断言
断言对运行时没有影响，只在编译时起作用

尖括号写法

```typescript
let someValue: any = "this is a string";
let l = (<string>someValue).length;
```

`as`写法

```typescript
let someValue1: any = "this is a string";
let l1 = (someValue1 as string).length;
```

- 联合类型可以被断言为其中一个类型
- 父类可以被断言为子类
- 任何类型都可以被断言为 any
- any 可以被断言为任何类型
- 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

## 高级类型

### 交叉类型

**交叉类型是将多个类型合并为一个类型。它包含了所需的所有类型的特性**。Person & Serializable & Loggable 同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。

混入的一个简单例子：

```typescript
function entend<T, U>(first: T, second: U): T & U {
  let res = <T & U>{};
  for (const key in first) {
    (res as any)[key] = first[key];
  }
  for (const key in second) {
    (res as any)[key] = second[key];
  }
  return res;
}

const a = {
  a: 123,
  b: 456,
};

const b = {
  c: 123,
  d: 456,
};

const jim = entend(a, b);

jim.a;
```

### 联合类型

联合类型表示一个值可以是几种类型之一。 我们用竖线（ | ）分隔每个类型，所以 number | string | boolean 表示一个值可以是 number， string，或 boolean。

**如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。**

```typescript
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Bird | Fish {
  return;
}

let pet = getSmallPet();

pet.layEggs();
// pet.fly() // error
```

### 类型保护与区分类型

联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish 时怎么办？ JavaScript 里常用来区分 2 个可能值的方法是检查成员是否存在。

```typescript
let pet = getSmallPet();

if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else {
  (<Bird>pet).fly();
}
```

### 类型谓词

这里可以注意到我们不得不多次使用类型断言。 假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet 的类型的话就好了。

```typescript
function isFish(pet: Bird | Fish): pet is Fish {
  return !!(pet as Fish).swim;
}
```

**pet is Fish 就是类型谓词。 谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名**

每当使用一些变量调用 isFish 时，TypeScript 会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的。

注意 TypeScript 不仅知道在 if 分支里 pet 是 Fish 类型； 它还清楚在 else 分支里，一定 不是 Fish 类型，一定是 Bird 类型。

```typescript
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

### typeof 类型保护

然而，必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。 幸运的是，现在我们不必将 typeof x === "number"抽象成一个函数，因为 TypeScript 可以将它识别为一个类型保护。 也就是说我们可以直接在代码里检查类型了。

两种形式：typeof v === "typename"和 typeof v !== "typename"， "typename"必须是 "number"， "string"， "boolean"或 "symbol"。

```typescript
function add(value: string | number) {
  if (typeof value === "string") {
    value.replace("a", "b");
  } else {
    value.toFixed();
  }
}
```

### instanceof 类型保护

```typescript
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // 类型细化为'StringPadder'
}
```

### 类型别名 type

类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。

```typescript
type Name = string;

type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;

type Container<T> = { value: T };
```

:::tip
起别名不会新建一个类型 - 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用，尽管可以做为文档的一种形式使用。
:::

### 索引类型

使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的 JavaScript 模式是从对象中选取属性的子集。

```typescript
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Jarid",
  age: 35,
};
let strings: string[] = pluck(person, ["name"]); // ok, string[]
```

首先是 keyof T， **索引类型查询**操作符。 对于任何类型 T， keyof T 的结果为 T 上已知的公共属性名的联合。 例如：

```typescript
let personProps: keyof Person; // 'name' | 'age'
```

第二个操作符是 T[K]， 索引访问操作符。 在这里，类型语法反映了表达式语法。 这意味着 person['name']具有类型 Person['name'] — 在我们的例子里则为 string 类型。 然而，就像索引类型查询一样，你可以在普通的上下文里使用 T[K]，这正是它的强大所在。 你只要确保类型变量 K extends keyof T 就可以了。 例如下面 getProperty 函数的例子：

```typescript
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}
```

## 接口

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型

### 什么是接口

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

### 简单例子

```typescript
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: "Tom",
  age: 25,
};
```

赋值的时候，变量的形状必须和接口的形状保持一致。多或者少属性都不允许。

**接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。**

### 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```typescript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom",
};
```

**这时仍然不允许添加未定义的属性**

### 任意属性

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};
```

**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  gender: "male",
};
```

### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

```typescript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: "Tom",
  gender: "male",
};
```

**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：**

```typescript
interface Person {
  readonly id?: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  gender: "male",
};

// tom.id = 89757; //error
```

### 类类型

#### 实现接口

```typescript
interface ClockInterface {
  currentTime: Date;
  fn(string: string): string;
}

class Cloack implements ClockInterface {
  currentTime: Date;
  fn(string) {
    return string;
  }
}
```

#### 类静态部分与实例部分的区别

当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：

```typescript
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```

interface, 只对其实例部分进行类型检查。 constructor 存在于类的静态部分，所以不在检查的范围内。

### 接口继承

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

继承多个接口

```typescript
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 数组

在 TypeScript 中，数组类型有多种定义方式，比较灵活

### 「类型 + 方括号」表示法

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

### 数组泛型

```typescript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

### 用接口表示数组

```typescript
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组。

## 函数

### 为函数定义类型

```typescript
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
};
```

### 完整函数类型

```typescript
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

:::tip
`:`后面是类型，`=`后面是赋值
:::

### 用接口定义函数的形状

```typescript
interface MyAdd {
  (x: number, y: number): number;
}

let myAdd: MyAdd = (x, y) => x + y;
```

### 可选参数

需要注意的是，**可选参数必须接在必需参数后面。** 换句话说，可选参数后面不允许再出现必需参数了：

```typescript
//error
function buildName(firstName?: string, lastName: string) {
  if (firstName) {
    return firstName + " " + lastName;
  } else {
    return lastName;
  }
}
```

### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}
```

上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
