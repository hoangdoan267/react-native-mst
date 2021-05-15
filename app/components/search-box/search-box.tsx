import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Icon } from "../"
import { flatten } from "ramda"
import { useState } from "react"
import { TextInput } from "react-native"
import { SearchBoxProps } from "./search-box.props"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  height: 36,
  borderRadius: 18,
  backgroundColor: color.background.secondary,
  alignItems: "center",
  paddingHorizontal: 12,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.content.primary,
  backgroundColor: color.transparent,
  fontWeight: "400",
  flex: 1,
}

const INPUT: ViewStyle = {
  paddingLeft: 8,
  flex: 1,
}

/**
 * Describe your component here
 */
export function SearchBox(props: SearchBoxProps) {
  const { style, leftIcon, clearButtonMode, inputProps, placeholder, value } = props

  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      {leftIcon && <Icon icon={leftIcon} />}
      <View style={INPUT}>
        <TextInput
          clearButtonMode={clearButtonMode}
          autoCorrect={false}
          autoCapitalize={"none"}
          placeholderTextColor={color.content.secondary}
          value={value}
          placeholder={placeholder}
          {...inputProps}
          style={TEXT}
        />
      </View>
    </View>
  )
}
