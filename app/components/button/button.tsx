import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../text/text"
import { viewPresets, textPresets, buttonSizePreset, fontSizePreset } from "./button.presets"
import { ButtonProps } from "./button.props"
import { flatten } from "ramda"
import Spinner from "react-native-spinkit"
import { color } from "../../theme"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    size = "lg",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    loading,
    disabled,
    ...rest
  } = props

  const viewStyle =
    loading || disabled ? viewPresets["disabled"] : viewPresets[preset] || viewPresets.primary
  const viewHeight = buttonSizePreset[size] || buttonSizePreset["md"]
  const viewStyles = flatten([viewStyle, viewHeight, styleOverride])

  const textSize = fontSizePreset[size] || fontSizePreset["md"]
  const textStyle = textPresets[preset] || textPresets.primary
  const textStyles = flatten([textStyle, textSize, textStyleOverride])

  const loadingSize = size === "lg" || size === "md" ? 21 : 18

  const content = loading ? (
    <Spinner size={loadingSize} color={color.content.secondary} type="Arc" />
  ) : (
    children || <Text tx={tx} text={text} style={textStyles} />
  )

  return (
    <TouchableOpacity
      style={viewStyles}
      {...rest}
      activeOpacity={0.8}
      disabled={loading || disabled}
    >
      {content}
    </TouchableOpacity>
  )
}
