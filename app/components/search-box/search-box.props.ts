import { StyleProp, TextInputProps, ViewStyle } from "react-native"
import { IconTypes } from "../icon/icons"

export interface SearchBoxProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  inputProps?: TextInputProps
  placeholder?: string
  value?: string
  leftIcon?: IconTypes
  rightIcon?: IconTypes
  clearButtonMode?: "never" | "while-editing" | "unless-editing" | "always"
}
