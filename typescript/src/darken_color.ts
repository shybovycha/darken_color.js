interface RGBType {
  r: number;
  g: number;
  b: number;
}

/**
  * Converts a HEX color value to RGB by extracting R, G and B values from string using regex.
  * Returns r, g, and b values in range [0, 255]. Does not support RGBA colors just yet.
  *
  * @param hex The color value
  * @returns The RGB representation or {@code null} if the string value is invalid
  */
const HEX2RGB = (hex: string): RGBType => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, (_match, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    return null;
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
};

export {
  HEX2RGB
};
