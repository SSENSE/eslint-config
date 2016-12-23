:toc: macro
:toc-title:
:toclevels: 99
:numbered:

# eslint-config-ssense

JavaScript code standards at SSENSE


## Installation
```
npm install --save-dev eslint eslint-config-ssense
```

Because of the [current inability for sharable configs]https://github.com/eslint/eslint/issues/3458) to supply their dependencies you will also need to:

```
npm install --save-dev \
  babel-eslint \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint-plugin-fp \
  eslint-plugin-vue
```


toc::[]


## Rules

#### `semi`

  Never.

  Refactoring is harder.

  The act of changing/moving code  is made tedious by constantly baby sitting removal/addition of semicolons. For example: transitioning between `() => (...)` / `() => {...}`, moving the last `.then`/`.catch`/ `.foo` in a pipeline up or appending to it, etc..

  Reading and writing is harder.

  JavaScript is a syntactically verbose language. Semicolons make it worse yet. Reading code with semicolons is objectively more fatiguing than code without given the reduction in visual noise. For writing, a day of coding with semicolons wears more on the fingers/hand than code without.

  Further reading

  * http://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi[ASI rules]
  * http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding[An open letter to JavaScript leaders regarding Semicolons]
  * http://inimino.org/~inimino/blog/javascript_semicolons[JavaScript Semicolon Insertion; Everything you need to know]
  * http://mislav.net/2010/05/semicolons/[Semicolons in JavaScript are optional]

#### `quotes`

  Double.

  Some languages treat single/double as different types (Java, Haskell, PureScript, ...), don't even have single quotes (Clojure), or idiomatically use double (HTML). It is therefore better (Assuming a polyglot programmer) for habit building and retention to use double quotes as well in JavaScript.

#### `no-multiple-empty-lines`

  Up to three allowed. Two empty lines are not enough to clearly partition major sections of a module (e.g. after all `import ...`).

#### `import/no-namespace`

  Yes.

  ```
  import * as Foo from 'bar'
  ```
  Is a misfeature of the new JS module syntax. Instead of relying on this we should always write modules that support:
  ```
  import Foo from 'bar'
  ```
  by aliasing our `export` with  `export default`.

  * This is more like CommonJS which makes transition from `require` easier.
  * This is simpler for developers because they have fewer options.
  * This is easier to read; `* as ...` scattered multiple times throughout imports is noisy.

#### `import/no-commonjs`

  No. Mixing `require` with `import` in one module or codebase is jarring at best.

#### `fp/no-arguments`

  > Functional programming works better with known and explicit parameters. Also, having an undefined number of parameters does not work well with currying.

##### Fail

```
function sum() {
  const numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce((a, b) => a + b);
}

sum(1, 2, 3);
```

##### Pass

```
function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}

sum([1, 2, 3]);

var args = node.arguments;
```

#### `no-class`

We forbid ES2015 Class syntax.

> Classes are nice tools to use when programming with the object-oriented paradigm, as they hold internal state and give access to methods on the instances. In functional programming, having stateful objects is more harmful than helpful, and should be replaced by the use of pure functions.

Further reading: https://github.com/joshburgess/not-awesome-es6-classes/[Not Awesome: ES6 Classes; A curated list of resources on why ES6 (aka ES2015) classes are NOT awesome]

##### Fail

```
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

##### Pass

```
function polygon(height, width) {
  return {
    height: height,
    width: width
  };
}
```

#### `fp/no-delete`

> delete is an operator to remove fields from an object or elements from an array. This purposely mutates data, which is not wanted when doing functional programming.

Also, https://github.com/google/google-api-nodejs-client/issues/375[Avoid using delete operator].

##### Fail
```
delete foo;
delete foo.bar;
delete foo[bar];
```
##### Pass
```
var _ = require('lodash/fp');

var fooWithoutBar = _.omit('bar', foo);
var fooWithoutField = _.omit(bar, foo);
```

#### `fp/no-events`

> The use of EventEmitter with the events module provided by Node.js promotes implicit side-effects by emitting and listening to events. Instead of events, you should prefer activating the wanted effects by calling the functions you wish to use explicitly.

And/or use a functional reactive programming library instead: https://github.com/cujojs/most[`most`], https://github.com/Reactive-Extensions/RxJS[`rxjs`].

##### Fail

```
import EventEmitter from 'events';
```

#### `fp/no-get-set`

##### Fail
```
const person = {
  name: 'Some Name',
  get age() {
    return this._age;
  },
  set age(n) {
    if (n < 0) {
      this._age = 0;
    } else if (n > 100) {
      this._age = 100;
    } else {
      this._age = n;
    }
  }: 20
};

person.__defineGetter__('name', function() {
  return this.name || 'John Doe';
});

person.__defineSetter__('name', function(name) {
  this.name = name.trim();
});
```
##### Pass
```
const person = {
  name: 'Some Name',
  age: 20
};

function clamp(n, min, max) {
  if (n <= min) {
    return min;
  }
  if (n >= max) {
    return max;
  }
  return n;
}

function setAge(age, person) {
  return Object.assign({}, person, {age: clamp(age, 0, 100)});
}
```

#### `fp/no-let`

> If you want to program as if your variables are immutable, part of the answer is to not allow your variables to be reassigned. By not allowing the use of let and var, variables that you declared may not be reassigned.

#### Fail
```
let a = 1;
let b = 2,
    c = 3;
let d;
```
#### Pass
```
const a = 1;
const b = 2,
      c = 3;
```

#### `fp/no-loops`
> Loops, such as for or while loops, work well when using a procedural paradigm. In functional programming, recursion or implementation agnostic operations like map, filter and reduce are preferred.

#### Fail
```
const result = [];
const elements = [1, 2, 3];

for (let i = 0; i < elements.length; i++) {
  if (elements[i] > 2) {
    result.push(elements[i]);
  }
}

for (element in elements) {
  result.push(element * 10);
}

for (element of elements) {
  result.push(element * 10);
}

while (n < 100) {
  result.push(n);
  n *= 2;
}

do {
  result.push(n);
  n *= 2;
} while (n < 100);
```
##### Pass
```
const elements = [1, 2, 3];

const result = elements.filter(element => element > 2);

const result = elements.map(element => element * 10);

function doubleThemAll(n) {
  if (n >= 100) {
    return [];
  }
  return [n].concat(doubleThemAll(n * 2));
}
const result = doubleThemAll(n);
```
#### `fp/no-this`

> When doing functional programming, you want to avoid having stateful objects and instead use simple JavaScript objects.

#### Fail
```
const object = {
  numbers: [1, 2, 3],
  sum: function() {
    return this.numbers.reduce((a, b) => a + b, 0);
  }
}

object.sum();
```
#### Pass
```
function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}

sum([1, 2, 3]);
```



## Usage

Simply put the following in your `package.json` (http://eslint.org/docs/user-guide/configuring#extending-configuration-files[see official docs for more information]).

```
  "eslintConfig": {
    "extends": "ssense"
  }
```


## Plugins / Extends

* Extends the https://github.com/airbnb/javascript[AirBnB rules]

* Uses plugin https://github.com/benmosher/eslint-plugin-import[`import`]

  Providesjjjj rules that help prevent import bugs and enforces style.

* Uses plugin https://github.com/jfmengels/eslint-plugin-fp[`fp`]

  Provides rules that help enforce functional programming.

  * http://blog.wolksoftware.com/the-rise-of-functional-programming-and-the-death-of-angularjs[The rise of functional programming & the decline of Angular 2.0]

* Uses plugin https://github.com/vuejs/eslint-plugin-vue[`vue`]

  Currently, the sole purpose of having this plugin is to parse https://vuejs.org/v2/guide/single-file-components.html[`.vue` files]. Also, it https://github.com/vuejs/eslint-plugin-vue/issues/1[does not support eslint's `--fix` feature].
