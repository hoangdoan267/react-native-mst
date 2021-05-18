import React from "react"
import { observer } from "mobx-react-lite"
import { Button, TouchableOpacity, View, ViewStyle } from "react-native"
import { Header, Icon, Screen, Text } from "../../components"
import OTPInputView from "@twotalltotems/react-native-otp-input"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import { OTPScreenProps } from "../../navigators"

const resendOTP = () => {}
const changeType = () => {}
const onSubmit = (code, otpId) => {}

const renderPhoneOrEmail = (type, username) => {
  return (
    <View style={styles.phoneView}>
      <Icon icon={type === "email" ? "email16" : "phone16"} />
      <Text text={username} preset="default" style={styles.phone} />
    </View>
  )
}

const renderOTP = (otpId) => {
  return (
    <OTPInputView
      style={{ width: "80%", height: 80 }}
      pinCount={6}
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad
      codeInputFieldStyle={styles.inputField}
      codeInputHighlightStyle={styles.inputHighlight}
      onCodeFilled={(code) => {
        console.log(`Code is ${code}, you are good to go!`)
        onSubmit(code, otpId)
      }}
    />
  )
}

export const OTPScreen = observer(function OTPScreen({ route, navigation }: OTPScreenProps) {
  // const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const { type, username, otpId } = route.params
  console.log("route ", route)

  return (
    <Screen style={styles.main}>
      <Header leftIcon="back" onLeftPress={goBack} />
      <Screen style={styles.main} preset="scroll">
        <Text tx={type === "email" ? "otp.verifyAccount" : "otp.verifyOTP"} preset="header" />
        {renderPhoneOrEmail(type, username)}
        <Text
          tx={type === "email" ? "otp.inputEmailOTP" : "otp.inputSMSOTP"}
          preset="secondary"
          numberOfLines={0}
          style={styles.instruction}
        />
        {renderOTP(otpId)}
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.bottomButton} onPress={resendOTP}>
            <Text tx="otp.resend" preset="touchAction" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={changeType}>
            <Text
              tx={type === "email" ? "otp.getOTPViaPhone" : "otp.getOTPViaEmail"}
              preset="touchAction"
            />
          </TouchableOpacity>
        </View>
      </Screen>
    </Screen>
  )
})
