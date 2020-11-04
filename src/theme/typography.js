import Typography from "typography";
//import fairyGatesTheme from "typography-theme-fairy-gates";
import fairyGatesTheme from "typography-theme-sutro";

const typography = new Typography(fairyGatesTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
