import React, { useState } from "react"
import {
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { flatten, set } from "ramda"
import { TextInput } from "react-native-gesture-handler"
import { IconTypes } from "../icon/icons"
import { Icon } from "../icon/icon"
import { placeholder } from "i18n-js"

const CONTAINER: ViewStyle = {
  marginBottom: spacing[3],
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  // color: color.text,
  flex: 1,
  marginRight: 17,
}

const LABEL: TextStyle = {
  marginBottom: 4,
}

const INPUT: ViewStyle = {
  // backgroundColor: "black",
  height: 48,
  borderRadius: 8,
  borderWidth: 1,
  paddingLeft: 16,
  flexDirection: "row",
  alignItems: "center",
}

export interface TextFieldProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  label?: string
  inputProps?: TextInputProps
  errorText?: string
  helperText?: string
  disabled?: boolean
  leftIcon?: IconTypes
  rightIcon?: IconTypes
  type?: "text" | "password"
  onPressRightIcon?: () => void
  placeholder: string
}

/**
 * Describe your component here
 */
export const TextField = observer(function TextField(props: TextFieldProps) {
  const {
    style,
    label,
    inputProps,
    errorText,
    helperText,
    disabled,
    type = "text",
    leftIcon,
    rightIcon,
    onPressRightIcon,
    placeholder,
  } = props

  const styles = flatten([CONTAINER, style])

  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [showPassword, setshowPassword] = useState<boolean>(false)

  const borderStyle = () => {
    if (!!errorText) return color.border.error
    if (!!isFocus) return color.palette.primary

    if (disabled) return "transparent"

    return color.border.primary
  }

  const inputStyles = flatten([
    INPUT,
    {
      borderColor: borderStyle(),
      backgroundColor: disabled ? color.background.tertiary : color.background.primary,
    },
  ])

  const iconDefaultStyle: ImageStyle = {
    width: 22,
    height: 22,
  }

  const rightIconStyle = flatten([
    iconDefaultStyle,
    { tintColor: disabled ? color.content.secondary : color.content.primary },
  ])
  const leftIconStyle = flatten([
    iconDefaultStyle,
    { marginRight: 17, tintColor: color.content.secondary },
  ])
  const secureTextEntry = type !== "password" ? false : !showPassword

  const renderRightIcon = () => {
    if (type === "password") {
      return (
        <TouchableOpacity
          style={{ marginRight: 17 }}
          onPress={() => setshowPassword(!showPassword)}
        >
          <Icon icon={showPassword ? "hidePassword" : "showPasswod"} style={rightIconStyle} />
        </TouchableOpacity>
      )
    } else if (!!rightIcon) {
      return (
        <TouchableOpacity style={{ marginRight: 17 }} onPress={onPressRightIcon}>
          <Icon icon={rightIcon} style={rightIconStyle} />
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles}>
      {label && <Text style={LABEL} preset="fieldLabel" text={label} />}

      <View style={inputStyles}>
        {leftIcon && <Icon icon={leftIcon} style={leftIconStyle} />}
        <TextInput
          autoCorrect={false}
          autoCapitalize={"none"}
          placeholder={placeholder}
          {...inputProps}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          style={TEXT}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={color.content.secondary}
        />
        {renderRightIcon()}
      </View>
      {!errorText && helperText && (
        <Text numberOfLines={2} preset="inputHelper" text={helperText} />
      )}

      {errorText && <Text numberOfLines={2} preset="inputError" text={errorText} />}
    </View>
  )
})
