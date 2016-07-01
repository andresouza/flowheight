# FlowHeight #

Responsive web elements: position and style based on element height.

Inspired by [FlowType.JS](http://simplefocus.com/flowtype/)

## What does FlowHeight do? ##

If you are building an awesome Landing Page or trying to style different sections and make their elements responsive across multiple devices, FlowHeight can help you!

FlowHeight changes the font-size based on a specific element's height. This allows for a perfect element fit at any screen height using the unit `rem` or `em`.


## Getting Started ##

### Step 1: Install FlowHeight ###

- [Download the latest release](https://github.com/andresouza/flowheight/releases/tag/1.1.0).
- Clone the repo: `git clone https://github.com/andresouza/flowheight.git`.
- Install with [Bower](http://bower.io): `bower install flowheight`.

### Step 2: Call FlowHeight ###

Simply call Flowheight before the close of your `body` tag:

```javascript
$('html').flowheight();
```

### Step 3: Make Changes ###

```javascript
$('html').flowheight({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 12,
   maxFont   : 40,
   fontRatio : 30
});
```

### Step 4: Position the elements where you want and style them  ###

```css
h1 {
  font-size: 1.5rem;
  padding: 1rem 0;
}

img {
  position: absolute;
  top: 10rem;
  left: 5rem;
  height: 20rem;
}

#element {
  width: 15rem;
}
```


## Options ##

### Thresholds ###

Set minimum and maximum height thresholds.

```javascript
$('html').flowheight({
   minimum : 500,
   maximum : 1200
});
```

Set minimum and maximum font-size thresholds.

```javascript
$('html').flowheight({
   minFont : 12,
   maxFont : 40
});
```

### Font-size ###

Set your own font-size using the `fontRatio` variable. When using `fontRatio`, increase the value to make the font smaller (and vice versa).

```javascript
$('html').flowheight({
   fontRatio : 30
});
```


## Brought to you by... ##

[Andre Souza](https://github.com/andresouza)

FlowHeight is inspired by [FlowType.JS](http://simplefocus.com/flowtype/)

FlowHeight is licensed under the MIT License. See the LICENSE file for copy permission.
