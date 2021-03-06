import * as React from "react"
import { ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon } from "../icon/icon"
import { Text } from "../text/text"
import { viewPresets, textPresets } from "./select-button.presets"
import { flatten } from "ramda"
import { SelectButtonProps } from "./select-button.props"
import { color, typography } from "../../theme"

const ARROW_ICON: ImageStyle = {
  width: 24,
  height: 24,
}

const ICON: ImageStyle = {
  marginRight: 16,
}

const DISABLED_ICON: ImageStyle = {
  tintColor: color.content.secondary,
}

const LEFT_VIEW: ImageStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const CONTAINER: ViewStyle = {
  marginBottom: 12,
}

const LABEL: TextStyle = {
  marginBottom: 4,
}

/**
 * Describe your component here
 */
export function SelectButton(props: SelectButtonProps) {
  // grab the props
  const {
    disabled,
    error,
    leftIcon,
    label,
    labelTx,
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    ...rest
  } = props

  const preset = disabled ? "disabled" : "enabled"
  const viewStyle = error ? viewPresets["error"] : viewPresets[preset] || viewPresets.enabled
  const viewStyles = flatten([viewStyle, styleOverride])
  const textStyle = textPresets[preset] || textPresets.enabled
  const textStyles = flatten([textStyle, textStyleOverride])
  const rightIconStyles = disabled ? { ...ARROW_ICON, ...DISABLED_ICON } : ARROW_ICON

  console.log("views ", JSON.stringify(viewStyles))

  return (
    <View style={label ? CONTAINER : {}}>
      {label ? <Text style={LABEL} preset="fieldLabel" text={label} tx={labelTx} /> : null}
      <TouchableOpacity style={viewStyles} {...rest} disabled={disabled}>
        <View style={LEFT_VIEW}>
          {leftIcon ? <Icon icon={leftIcon} style={ICON} /> : null}
          <Text tx={tx} text={text} style={textStyles} />
        </View>
        <Icon icon="arrowDown" style={rightIconStyles} />
      </TouchableOpacity>
    </View>
  )
}
