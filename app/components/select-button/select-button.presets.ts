import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, size, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingHorizontal: 16,
  flexDirection: "row",
  borderWidth: 1,
  borderRadius: 8,
  justifyContent: "space-between",
  alignItems: "center",
  height: size.button.height.medium,
}

const BASE_TEXT: TextStyle = {
  fontWeight: "400",
  fontSize: 16,
  fontFamily: typography.primary,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * Enabled select-button
   */
  enabled: {
    ...BASE_VIEW,
    backgroundColor: color.palette.white,
    borderColor: color.border.primary,
  } as ViewStyle,

  /**
   * Disabled select-button
   */
  disabled: {
    ...BASE_VIEW,
    backgroundColor: color.button.disabled,
    borderColor: color.button.disabled,
  } as ViewStyle,

  /**
   * Error select-button
   */
  error: {
    ...BASE_VIEW,
    borderColor: color.function.negativePrimary,
    backgroundColor: color.palette.white,
  },
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  enabled: {
    ...BASE_TEXT,
    color: color.content.primary,
  } as TextStyle,
  disabled: {
    ...BASE_TEXT,
    color: color.content.secondary,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
