[![Build Status](https://travis-ci.org/customcommander/macgyver.svg?branch=master)](https://travis-ci.org/customcommander/macgyver)

# MacGyver

> Restore Native Prototypes To Their Full Glory



### Installation

`npm install @customcommander/macgyver`

How it fits into your build or project is your own personal business but just know that it is an UMD module.



### The Problem

People or libraries monkey patching native prototypes with broken custom implementations that break other people's code.



### Example

Go to any website (with a decent browser), open the console and run this:

```javascript
[1,2,3].reduce((tot, num) => tot + num, 0);
// 6 (Yay!)
```

Now find one using Prototype 1.6.0.2 (for instance) and run the same line:

```javascript
[1,2,3].reduce((tot, num) => tot + num, 0);
// [1,2,3] (WTF?!)
```

If you know where to look you can immediately see the issue:

```javascript
Array.prototype.reduce.toString();
// "function () {
//     return this.length > 1 ? this : this[0];
// }"
```



### The Workaround Solution

Go to that same website using Prototype 1.6.0.2, drop [MacGyver](dist/macgyver.js) in the console and then run:

```javascript
macgyver([1,2,3]).reduce((tot, num) => tot + num, 0);
// 6 (Yay!)

macgyver([1,2,3]).reduce.toString();
// "function reduce() { [native code] }"

Array.prototype.reduce.toString();
// "function () {
//     return this.length > 1 ? this : this[0];
// }"
```

What `MacGyver` did was to simply recreate your array using pristine native methods from a separate frame.



### The Permanent Solution

If you would rather not wrap your objects in some duct tape all the time, you can duct tape the current context permanently instead:

```javascript
macgyver.ductTape();
Array.prototype.reduce.toString();
// "function reduce() { [native code] }"
```

### The Future

`MacGyver` only deals with arrays for now. If you need more from it just ask, or better: raise a pull request.
