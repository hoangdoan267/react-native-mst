import React from "react"
import { observer } from "mobx-react-lite"
import { Image, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Screen, SelectButton, Text, TextField } from "../../components"
import { styles } from "./styles"
import { Formik } from "formik"
import * as yup from "yup"
import { useStores } from "../../models"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
})

const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  flex: 1,
}

export const LoginScreen = observer(function LoginScreen() {
  const { userStore } = useStores()

  const { user, loading } = userStore

  const onSubmit = (values: { email: string; password: string }) => {
    console.tron.log(values)
    userStore.login({ email: values.email, name: "Hoang" })
  }
  console.tron.log(userStore)

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={styles.brandSection}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleSubmit, errors, handleChange }) => (
          <View style={styles.formSection}>
            <Text preset="header" text="Login" />
            <Text preset="secondary" text="Enter your emails and password" />
            <View style={styles.formContainer}>
              <TextField
                label="Email"
                inputProps={{
                  value: values.email,
                  onChangeText: handleChange("email"),
                }}
                errorText={errors.email}
              />
              <TextField
                label="Password"
                type="password"
                inputProps={{
                  value: values.password,
                  onChangeText: handleChange("password"),
                }}
                errorText={errors.password}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}></View>
              <TouchableOpacity>
                <Text preset="darkSubtile" text="Forgot Password?" style={{ textAlign: "right" }} />
              </TouchableOpacity>
            </View>
            <Button
              text={"Login"}
              preset="primary"
              style={styles.submitButton}
              onPress={handleSubmit}
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text preset="darkSubtile" text="Don't have an account?" style={{ marginRight: 5 }} />
              <TouchableOpacity>
                <Text preset="link" text="Signup" />
              </TouchableOpacity>
            </View>
            <Text preset="link" text={JSON.stringify(loading)} />
            <Text preset="link" text={user.email} />
          </View>
        )}
      </Formik>
    </Screen>
  )
})
