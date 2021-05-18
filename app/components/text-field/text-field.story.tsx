import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TextField } from "./text-field"

import { Formik } from "formik"
import * as yup from "yup"
import { Alert } from "react-native"

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Email Address is Required"),
})

storiesOf("TextField", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("States of Input", () => (
    <Story>
      <UseCase text="Normal" usage="Normal">
        <TextField label="Normal" />
      </UseCase>
      <UseCase text="onFocus" usage="Press to see TextField">
        <TextField label="On Focus" />
      </UseCase>
      <UseCase text="onError" usage="When having error">
        <TextField label="onError" errorText={"This is an error."} />
      </UseCase>
      <UseCase text="with help Message" usage="When having helper message">
        <TextField label="onError" helperText={"This is an error."} />
      </UseCase>
      <UseCase text="Too long helper Message" usage="Too long helper Message">
        <TextField
          label="Too long helper Message"
          helperText={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
          }
        />
      </UseCase>
      <UseCase text="Combine Helper and Error" usage="State change when error">
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            email: "",
          }}
          onSubmit={() => {}}
        >
          {({ values, handleChange, errors }) => (
            <TextField
              label="Email"
              inputProps={{
                value: values.email,
                onChangeText: handleChange("email"),
              }}
              helperText={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
              }
              errorText={errors.email}
            />
          )}
        </Formik>
      </UseCase>
    </Story>
  ))
  .add("Input with icons", () => (
    <Story>
      <UseCase text="With Left Icon" usage="Normal">
        <TextField label="With Left Icon" leftIcon="arrowDown" />
      </UseCase>
      <UseCase text="With Right Icon" usage="Normal">
        <TextField
          label="With Right Icon"
          rightIcon="arrowDown"
          onPressRightIcon={() => Alert.alert("Text field with Right Icon")}
        />
      </UseCase>
      <UseCase text="With Both Icons" usage="Normal">
        <TextField
          label="With 2 Icon"
          leftIcon="arrowDown"
          rightIcon="arrowDown"
          onPressRightIcon={() => Alert.alert("Text field with Right Icon")}
        />
      </UseCase>
      <UseCase text="Disabled Icon" usage="Normal">
        <TextField
          label="With 2 Icon"
          leftIcon="arrowDown"
          rightIcon="arrowDown"
          disabled
          onPressRightIcon={() => Alert.alert("Text field with Right Icon")}
        />
      </UseCase>
      <UseCase text="Password field" usage="Normal">
        <TextField label="Password" type="password" />
      </UseCase>
    </Story>
  ))
