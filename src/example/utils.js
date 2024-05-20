import maps from './maps';
import palettes from './palettes';

export const getRandom = () => ({
  map: maps[Math.floor(Math.random() * maps.length)],
  palette: palettes[Math.floor(Math.random() * palettes.length)]
});

// invert color helpers
const hexToComponents = hex =>
  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

const componentToHex = c => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const rgbToHex = (r, g, b) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

export const invert = hex => {
  const rgb = hexToComponents(hex);

  const { r, g, b } = rgb
    ? {
        r: 255 - parseInt(rgb[1], 16),
        g: 255 - parseInt(rgb[2], 16),
        b: 255 - parseInt(rgb[3], 16)
      }
    : {
        r: 1,
        g: 1,
        b: 1
      };

  return rgbToHex(r, g, b);
};
