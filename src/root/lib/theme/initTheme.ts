import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  rem,
} from "@mantine/core";

import {generatePrimaryColors} from "./generateColors";

import "./styles/index.scss";
import {UIconfig} from "@shared/config/ui";
const DEFAULT_BRAND_COLOR = "#FFAA1D";
const DEFAULT_SECONARY_COLOR = "#363636";
const DEFAULT_BRAND_COLOR_2 = "#FECC00";
const DEFAULT_TEXT_COLOR = "#363636";

export const initTheme = (
  brandColor = DEFAULT_BRAND_COLOR,
  secondaryColor = DEFAULT_SECONARY_COLOR,
  brandColor2 = DEFAULT_BRAND_COLOR_2,
  textColor = DEFAULT_TEXT_COLOR
): MantineThemeOverride =>
  createTheme({
    colors: {
      green: [
        "#B6CDB2",
        "#B6CDB2",
        "#62875C",
        "#62875C",
        "#55A148",
        "#55A148",
        "#45AF32",
        "#45AF32",
        "#61CD4F",
        "#75E363",
        "#75E363",
      ],
      analog: generatePrimaryColors(brandColor2),
      primary: generatePrimaryColors(brandColor),
      secondary: generatePrimaryColors(secondaryColor),
      text: generatePrimaryColors(textColor),
      neutral: [
        "#ffffff", // Neutral-0 = Neutral white
        "#ededed", // +Neutral-1 = Neutral 50
        "#E6E6E6", // +Neutral-2 = Neutral 75
        "#e4e2e2", // + Neutral-3 = Neutral 100
        "#CCCCCC", //+ Neutral-4 = Neutral 300
        "#b4b4b4", //+ Neutral-5 = Neutral 500
        "#9293A5", // + Neutral-6 = Neutral 600
        "#868282", // +Neutral-7 = Neutral 700
        "#7B7B7B", // +Neutral-8 = Neutral 800
        "#3E3E3E", // + Neutral-9 = Neutral 900
        "#343434", // +Neutral-10 = Neutral 1000
        "#343434", // +Neutral-11 = Neutral 1100
        "#c1c1c1", // +Neutral-12
      ],
    },
    black: "#363636", // Neutral black
    primaryColor: "primary",

    defaultRadius: "lg",

    // Typography
    fontFamily: `Poppins, ${DEFAULT_THEME.fontFamily}`,
    headings: {
      fontWeight: "400",
      sizes: {
        h1: {
          fontSize: rem(40),
          lineHeight: rem(40),
          fontWeight: "600",
        },
        h2: {
          fontSize: rem(36),
          lineHeight: rem(36),
          fontWeight: "700",
        },
        h3: {
          fontSize: rem(24),
          lineHeight: rem(24),
          fontWeight: "600",
        },
        h4: {
          fontSize: rem(16),
          lineHeight: rem(16),
          fontWeight: "500",
        },
        h5: {
          fontSize: rem(16),
          lineHeight: rem(16),
          fontWeight: "500",
        },
      },
    },
    fontSizes: {
      xs: rem(12),
      sm: rem(13),
      md: rem(14),
      lg: rem(16),
      xl: rem(20),
    },
    lineHeights: {
      xs: rem(18),
      sm: rem(18),
      md: rem(18),
      lg: rem(18),
      xl: rem(22),
    },
    spacing: {
      xss: rem(6),
      xs: rem(12),
      sm: rem(16),
      md: rem(18),
      lg: rem(24),
      xl: rem(32),
      xxl: rem(48),
      paragraphSpacing: rem(8),
    },
    breakpoints: UIconfig.breakPoints,
    radius: {
      xs: "0",
      sm: "4px",
      md: "6px",
      lg: "12px",
      xl: "20px",
      xxl: "50px",
    },
    shadows: {
      sm: "0px 1px 3px 0px rgba(33, 37, 41, 0.02), 0px 0px 15px -5px rgba(33, 37, 41, 0.06), 0px 7px 7px -5px rgba(33, 37, 41, 0.01)",
    },
  });
