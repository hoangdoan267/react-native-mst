import React, { useState } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten, set } from "ramda"
import { TextInput } from "react-native-gesture-handler"

const CONTAINER: ViewStyle = {
  marginBottom: 12,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  // color: color.text,
  flex: 1,
}

const LABEL: TextStyle = {
  marginBottom: 4,
}

const INPUT: ViewStyle = {
  // backgroundColor: "black",
  height: 48,
  borderRadius: 8,
  borderWidth: 1,
  paddingHorizontal: 16,
}

export interface TextFieldProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  label: string
  inputProps?: TextInputProps
  errorText?: string
  helperText?: string
  disabled?: boolean
  leftIcon?: () => JSX.Element
  rightIcon?: () => JSX.Element
}

/**
 * Describe your component here
 */
export const TextField = observer(function TextField(props: TextFieldProps) {
  const { style, label, inputProps, errorText, helperText, disabled } = props

  const styles = flatten([CONTAINER, style])

  const [isFocus, setIsFocus] = useState<boolean>(false)

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

  const renderLeftIcon = () => {}

  const renderRightIcon = () => {}

  return (
    <View style={styles}>
      <Text style={LABEL} preset="fieldLabel" text={label} />
      <View style={inputStyles}>
        <TextInput
          autoCorrect={false}
          autoCapitalize={"none"}
          placeholder={label}
          {...inputProps}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          style={TEXT}
          editable={!disabled}
        />
      </View>
      {!errorText && helperText && (
        <Text numberOfLines={2} preset="inputHelper" text={helperText} />
      )}

      {errorText && <Text numberOfLines={2} preset="inputError" text={errorText} />}
    </View>
  )
})
