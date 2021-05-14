import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native"
import { TxKeyPath } from "../../i18n"
import { IconTypes } from "../icon/icons"

export interface SelectButtonProps extends TouchableOpacityProps {
  leftIcon?: IconTypes
  disabled?: boolean
  error?: boolean
  tx?: TxKeyPath
  text?: string
  textStyle?: StyleProp<TextStyle>
}
