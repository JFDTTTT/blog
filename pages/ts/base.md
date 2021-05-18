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
