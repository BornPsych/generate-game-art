# react-color-wander

# Installation

`npm i generate-game-art`

# Usage

```javascript
import Art from 'generate-game-art';

<Art
  ref={(ref) => (this.art = ref)}
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
