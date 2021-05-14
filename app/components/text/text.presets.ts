import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.content.primary,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 26, fontWeight: "bold", marginBottom: 16 } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {
    ...BASE,
    fontSize: 14,
    fontWeight: "500",
    color: color.content.primary,
  } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 15, color: color.dim } as TextStyle,

  darkSubtile: { ...BASE, fontSize: 14, color: color.palette.black },

  link: { ...BASE, fontSize: 14, color: color.palette.green, fontWeight: "600" },

  errorText: { ...BASE, fontSize: 12, color: color.border.error },

  inputError: {
    ...BASE,
    fontSize: 14,
    color: color.border.error,
    marginTop: 4,
    lineHeight: 20,
  },
  inputHelper: {
    ...BASE,
    fontSize: 14,
    color: color.content.secondary,
    marginTop: 4,
    lineHeight: 20,
  },
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
