const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, '');

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

export const toRgba = (cssVariable: string) => {
  const regex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  const isHex = regex.test(cssVariable);

  if (isHex) {
    const rgb = hexToRgb(cssVariable);

    return ({ opacityValue = 1 }: { opacityValue?: number }): string =>
      `rgba(${rgb}, ${opacityValue})`;
  }

  const color = `var(${cssVariable})`;

  return ({ opacityValue = 1 }: { opacityValue?: number }): string =>
    `rgba(${color}, ${opacityValue})`;
};
