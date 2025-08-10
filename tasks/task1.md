

---

````markdown
# JavaScript Scope Practice Questions



---

## Questions

### 1
```js
var name = "Alex";
test();

function test() {
    console.log(name);
    var name = "Sam";
    console.log(name);
}
````

---

### 2

```js
var x = 1;
function foo() {
    console.log(x);
    var x = 2;
    console.log(x);
}
foo();
console.log(x);
```

---

### 3

```js
function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();
```

---

### 4

```js
console.log(a);
let a = 5;
```

---

### 5

```js
var a = 5;
(function() {
    console.log(a);
    var a = 10;
    console.log(a);
})();
```

---

### 6

```js
{
    let a = 10;
    {
        let a = 20;
        console.log(a);
    }
    console.log(a);
}
```

---

### 7

```js
function parent() {
    var value = "Parent";
    function child() {
        console.log(value);
    }
    return child;
}
var func = parent();
func();
```

---

### 8

```js
console.log(b);
var b = 20;
console.log(b);
```

---

### 9

```js
function test() {
    console.log(c);
}
var c = 100;
test();
```

---

### 10

```js
var a = 1;
function one() {
    console.log(a);
}
function two() {
    var a = 2;
    one();
}
two();
```

---

### 11

```js
var name = "global";
function showName() {
    console.log(name);
}
(function() {
    var name = "local";
    showName();
})();
```

---

### 12

```js
function foo() {
    console.log(x);
    x = 20;
}
foo();
console.log(x);
```

---

### 13

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

---

### 14

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

---

### 15

```js
var teacher = "John";
function classroom() {
    console.log(teacher);
    var teacher = "Sarah";
}
classroom();
```

---

### 16

```js
(function() {
    console.log(a);
    var a = 5;
})();
```

---

### 17

```js
{
    var globalVar = "I am global";
}
console.log(globalVar);
```

---

### 18

```js
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
example();
```

---

### 19

```js
(function() {
    console.log(typeof undeclaredVar);
})();
```

---

### 20

```js
let x = 5;
{
    let x = 10;
    {
        console.log(x);
    }
}
```

---

```


```
