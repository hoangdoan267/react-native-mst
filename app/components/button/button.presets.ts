import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  fontWeight: "500",
}

const NAVIGATION: ViewStyle = {
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  primary: { ...BASE_VIEW, backgroundColor: color.function.accentPrimary } as ViewStyle,
  secondary: { ...BASE_VIEW, backgroundColor: color.function.accentSecondary } as ViewStyle,
  brand: { ...BASE_VIEW, backgroundColor: color.function.brandPrimary } as ViewStyle,
  tertiary: { ...BASE_VIEW, backgroundColor: color.background.secondary } as ViewStyle,
  negative: { ...BASE_VIEW, backgroundColor: color.function.negativeSecondary } as ViewStyle,
  disabled: { ...BASE_VIEW, backgroundColor: color.background.tertiary } as ViewStyle,
  navigation: { ...BASE_VIEW, backgroundColor: color.transparent, ...NAVIGATION } as ViewStyle,

  /**
   * A button without extras.
   */
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, color: color.function.alwaysLightPrimary } as TextStyle,
  secondary: { ...BASE_TEXT, color: color.function.accentPrimary } as TextStyle,
  brand: { ...BASE_TEXT, color: color.function.alwaysLightPrimary } as TextStyle,
  tertiary: { ...BASE_TEXT, color: color.content.primary } as TextStyle,
  negative: { ...BASE_TEXT, color: color.function.negativePrimary } as TextStyle,
  disabled: { ...BASE_TEXT, color: color.content.tertiary } as TextStyle,
}

export const buttonSizePreset: Record<string, ViewStyle> = {
  lg: { height: 48 } as ViewStyle,
  md: { height: 40 } as ViewStyle,
  sm: { height: 32 } as ViewStyle,
}

export const fontSizePreset: Record<string, TextStyle> = {
  lg: { fontSize: 16 } as TextStyle,
  md: { fontSize: 16 } as TextStyle,
  sm: { fontSize: 14 } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
