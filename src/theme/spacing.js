import { rem } from "polished";

const baseSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  xxl: 128,
};

const spacing = {
  xs: rem(`${baseSpacing.xs}px`),
  sm: rem(`${baseSpacing.sm}px`),
  md: rem(`${baseSpacing.md}px`),
  lg: rem(`${baseSpacing.lg}px`),
  xl: rem(`${baseSpacing.xl}px`),
  xxl: rem(`${baseSpacing.xxl}px`),
};

export default spacing;
