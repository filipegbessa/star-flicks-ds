export const toRgba = (cssVariable: string) => {
  const color = `var(${cssVariable})`;
  return ({ opacityValue = 1 }: { opacityValue?: number }): string =>
    `rgba(${color}, ${opacityValue})`;
};
