# react-color-wander

[![npm version](https://badge.fury.io/js/react-color-wander.svg)](https://badge.fury.io/js/react-color-wander)

<img src="https://raw.githubusercontent.com/sonaye/react-color-wander/master/demo.gif" width="400">

# Live Demo

You can view the algorithm in real-time here:

https://sonaye.github.io/react-color-wander

In Chrome, you can right-click the canvas an "Save As" to get the full resolution.

# Output

Here are a few examples.

<img src="http://i.imgur.com/VU7G4LX.jpg" width="85%" />
<img src="http://i.imgur.com/ooYrDUW.jpg" width="85%" />
<img src="http://i.imgur.com/dTb32La.jpg" width="85%" />
<img src="http://i.imgur.com/IrZGveh.jpg" width="85%" />
<img src="http://i.imgur.com/TyI4sQX.jpg" width="85%" />
<img src="http://i.imgur.com/5QRD3Ps.jpg" width="85%" />

# Installation

`yarn add react-color-wander`

# Usage

```javascript
import Art from 'react-color-wander';

<Art
  ref={ref => (this.art = ref)}
  map={require('./map.png')}
  palette={['red,', 'green', 'blue']}
  // seed="259022"
  // height={600} // default = innerHeight
  // width={800} // default = innerWidth
/>;

// to start drawing
this.art.draw();

// to stop drawing
this.art.stop();

// to get drawing dataURL (image/png)
this.art.data();

// to get some metadata
this.art.metadata();

// to get a ref. to the canvas
this.art.ref();
```

## Example

Available [here](https://github.com/sonaye/react-color-wander/tree/master/src/example).
