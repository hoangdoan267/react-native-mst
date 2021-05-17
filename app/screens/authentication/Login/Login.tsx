import { observer } from "mobx-react-lite"
import React from "react"
import { View } from "react-native"
import { Button, Text, TextField } from "../../../components"
import { styles } from "./styles"
import { Formik } from "formik"
import * as yup from "yup"
import { useStores } from "../../../models"
import { BodyGrant_type } from "../../../services/service-proxies/service-proxies"

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
})

export const Login = observer(function Login() {
  const { authenticationStore } = useStores()

  const onSubmit = (values: { email: string; password: string }) => {
    console.log(values)
    authenticationStore.login({
      username: values.email,
      password: values.password,
      type: BodyGrant_type.Password,
    })
  }
  console.log(authenticationStore)

  return (
    <View style={styles.screenContainer}>
      {!!authenticationStore.signInError && <Text text={authenticationStore.signInError} />}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleSubmit, errors, handleChange }) => (
          <>
            <TextField
              inputProps={{
                value: values.email,
                onChangeText: handleChange("email"),
              }}
              errorText={errors.email}
              placeholder={"Username/Email/Phone number"}
              leftIcon={"user"}
            />
            <TextField
              inputProps={{
                value: values.password,
                onChangeText: handleChange("password"),
              }}
              type={"password"}
              errorText={errors.password}
              placeholder={"Password"}
              leftIcon={"lock"}
            />
            <Button
              text={"Sign in"}
              size="lg"
              loading={authenticationStore.signInLoading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  )
})
