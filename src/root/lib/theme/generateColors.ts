import {toRgba} from "@mantine/core";
import {MantineColorsTuple} from "@mantine/core/lib/core/MantineProvider/theme.types";

export function generatePrimaryColors(color: string): MantineColorsTuple {
  const colorLight = generateLightColor(color);
  const colorDark = generateDarkColor(color);

  return [
    colorLight, // Primary-0 = Primary light
    colorLight, // Primary-1 = Primary light
    colorLight, // Primary-2 = Primary light
    color, // Primary-3 = Primary
    color, // Primary-4 = Primary
    color, // Primary-5 = Primary
    color, // Primary-6 = Primary
    colorDark, // Primary-7 = Primary darker
    colorDark, // Primary-8 = Primary darker
    colorDark, // Primary-9 = Primary darker
  ];
}

export const calcColor = (value: number, colorValue: number) =>
  Math.round(value + (colorValue - value) * 0.1);

export function generateLightColor(color: string) {
  const {r, g, b, a} = toRgba(color);
  const whiteRGBA = toRgba("#ffffff");

  const newR = calcColor(whiteRGBA.r, r);
  const newG = calcColor(whiteRGBA.g, g);
  const newB = calcColor(whiteRGBA.b, b);

  return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
}

export function generateDarkColor(color: string) {
  const {r, g, b, a} = toRgba(color);
  const darkRGBA = toRgba("#212529");

  const newR = calcColor(r, darkRGBA.r);
  const newG = calcColor(g, darkRGBA.g);
  const newB = calcColor(b, darkRGBA.b);

  return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
}
