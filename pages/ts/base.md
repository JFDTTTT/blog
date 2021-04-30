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
