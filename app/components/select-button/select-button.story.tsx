import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { SelectButton } from "./select-button"
import { Alert } from "react-native"

storiesOf("SelectButton", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Enabled" usage="The normal button.">
        <SelectButton text="Enabled button" onPress={() => Alert.alert("pressed enabled")} />
      </UseCase>
      <UseCase text="Enabled with icon" usage="The normal button.">
        <SelectButton
          leftIcon="arrowDown"
          text="Enabled icon button"
          onPress={() => Alert.alert("pressed enabled icon")}
        />
      </UseCase>
      <UseCase text="Error" usage="The error button.">
        <SelectButton
          error={true}
          text="Error button"
          onPress={() => Alert.alert("pressed error")}
        />
      </UseCase>
      <UseCase text="Disabled" usage="The disabled button.">
        <SelectButton
          disabled={true}
          text="Disabled button"
          onPress={() => Alert.alert("pressed disabled")}
        />
      </UseCase>
    </Story>
  ))
