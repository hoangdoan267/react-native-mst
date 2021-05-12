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
import { flatten } from "ramda"
import { TextInput } from "react-native-gesture-handler"

const CONTAINER: ViewStyle = {
  justifyContent: "center",

  marginBottom: 20,
  marginTop: 10,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 18,
  color: color.text,
  flex: 1,
}

const LABEL: TextStyle = {
  // marginBottom: 12,
}

const INPUT: ViewStyle = {
  flexDirection: "row",
  borderBottomColor: color.dim,
  borderBottomWidth: 1,
  paddingVertical: 12,
}

const IconStyle: ImageStyle = {
  width: 19.93,
  height: 18.92,
  marginLeft: 10,
}

export interface TextFieldProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  type?: "text" | "textarea" | "password"
  label: string
  inputProps?: TextInputProps
  errorText: string
}

/**
 * Describe your component here
 */
export const TextField = observer(function TextField(props: TextFieldProps) {
  const { style, label, inputProps, type = "text", errorText } = props
  const styles = flatten([CONTAINER, style])

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const renderShowPasswordButton = (): JSX.Element => {
    if (type === "password") {
      return (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={require("../../../assets/showpassword.png")} style={IconStyle} />
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={styles}>
      <Text style={LABEL} preset="fieldLabel" text={label} />
      <View style={INPUT}>
        <TextInput
          autoCorrect={false}
          autoCapitalize={"none"}
          {...inputProps}
          style={TEXT}
          secureTextEntry={type === "password" && !showPassword}
        />
        {renderShowPasswordButton()}
      </View>
      {errorText && <Text preset="errorText" text={errorText} />}
    </View>
  )
})
