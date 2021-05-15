import { button } from "./button"
import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  transparent: "rgba(0,0,0,0)",

  /*
   * Button colors
   */
  button: button,

  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  content: {
    primary: "#2F3136",
    secondary: "#888B96",
    tertiary: "#C8CACF",
    inversePrimary: "#DEDFE2",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "rgba(20, 33, 65, 0.06)",
    tertiary: "#F1F2F4",
    inversePrimary: "#DEDFE2",
  },
  border: {
    primary: "#DEDFE2",
    error: "#E94040",
  },
  line: {
    primary: "#DEDFE2",
    secondary: "#C8CACF",
    tertiary: "#E9EAEC",
  },
  function: {
    accentPrimary: "#3080EA",
    accentSecondary: "rgba(48, 128, 234, 0.12)",
    brandPrimary: "#FCAF16",
    linkPrimary: "#096DD9",
    scimPrimary: "rgba(0, 0, 0, 0.6)",
    alwaysLightPrimary: "#ffffff",
    alwaysDarkPrimary: "#131416",
    negativePrimary: "#E94040",
    negativeSecondary: "rgba(233, 64, 64, 0.12)",
    positivePrimary: "#56CA76",
    positiveSecondary: "rgba(86, 202, 118, 0.16)",
    criticalPrimary: "#FA8C16",
    criticalSecondary: "grba(250, 140, 22, 0.12)",
    informativePrimary: "#18BAFF",
    informativeSecondary: "gba(24, 186, 255, 0.12)",
    stateHoverPrimary: "rgba(38, 40, 44, 0.1)",
    stateHoverSecondary: "rgba(255, 255, 255, 0.1)",
    statePressPrimary: "rgba(38, 40, 44, 0.24)",
    statePressSecondary: "rgba(255, 255, 255, 0.2)",
  },
}
