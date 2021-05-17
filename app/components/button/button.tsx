import * as React from "react"
import { ImageStyle, TouchableOpacity } from "react-native"
import { Text } from "../text/text"
import { viewPresets, textPresets, buttonSizePreset, fontSizePreset } from "./button.presets"
import { ButtonProps } from "./button.props"
import { flatten } from "ramda"
import Spinner from "react-native-spinkit"
import { color } from "../../theme"
import { Icon } from "../icon/icon"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */

export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    size = "md",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    loading,
    disabled,
    leftIcon,
    rightIcon,
    ...rest
  } = props

  const viewStyle =
    loading || disabled ? viewPresets["disabled"] : viewPresets[preset] || viewPresets.primary
  const viewHeight = buttonSizePreset[size] || buttonSizePreset["md"]
  const viewStyles = flatten([viewStyle, viewHeight, styleOverride])

  const textSize = fontSizePreset[size] || fontSizePreset["md"]
  const textStyle = disabled ? textPresets["disabled"] : textPresets[preset] || textPresets.primary
  const textStyles = flatten([textStyle, textSize, textStyleOverride])

  const loadingSize = size === "lg" || size === "md" ? 21 : 18
  const iconSize = size === "lg" || size === "md" ? 22 : 18

  const iconDefaultStyle: ImageStyle = {
    tintColor: disabled
      ? textPresets["disabled"].color
      : textPresets[preset].color || textPresets.primary.color,
    width: iconSize,
    height: iconSize,
  }

  const leftIconStyle = flatten([
    iconDefaultStyle,
    { marginRight: size === "lg" || size === "md" ? 9 : 6 },
  ])

  const rightIconStyle = flatten([
    iconDefaultStyle,
    { marginLeft: size === "lg" || size === "md" ? 9 : 6 },
  ])

  const content = () => {
    if (loading) {
      return <Spinner size={loadingSize} color={color.content.secondary} type="Arc" />
    }
    if (leftIcon || rightIcon) {
      return (
        <>
          {leftIcon && <Icon icon={leftIcon} style={leftIconStyle} />}
          {children || <Text tx={tx} text={text} style={textStyles} />}
          {rightIcon && <Icon icon={rightIcon} style={rightIconStyle} />}
        </>
      )
    } else {
      return children || <Text tx={tx} text={text} style={textStyles} />
    }
  }

  return (
    <TouchableOpacity
      style={viewStyles}
      {...rest}
      activeOpacity={0.8}
      disabled={loading || disabled}
    >
      {content()}
    </TouchableOpacity>
  )
}
