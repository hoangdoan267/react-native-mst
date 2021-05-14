import * as React from "react"
import { ViewStyle, TextStyle, Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Button } from "./button"

declare let module

const buttonStyleArray: ViewStyle[] = [{ paddingVertical: 100 }, { borderRadius: 0 }]

const buttonTextStyleArray: TextStyle[] = [{ fontSize: 20 }, { color: "#a511dc" }]

storiesOf("Button", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Small" usage="The small button.">
        <Button
          text="Small"
          preset="primary"
          size="sm"
          onPress={() => Alert.alert("pressed primary")}
        />
      </UseCase>
      <UseCase text="Medium" usage="The medium button.">
        <Button
          text="Medium"
          preset="primary"
          size="md"
          onPress={() => Alert.alert("pressed disabled")}
        />
      </UseCase>
      <UseCase text="Large" usage="The large button.">
        <Button
          text="Large"
          preset="primary"
          size="lg"
          onPress={() => Alert.alert("pressed disabled")}
        />
      </UseCase>

      <UseCase text="Primary" usage="The Primary button.">
        <Button text="Primary" preset="primary" onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>
      <UseCase text="Secondary" usage="The Secondary button.">
        <Button
          text="Secondary"
          preset="secondary"
          onPress={() => Alert.alert("pressed disabled")}
        />
      </UseCase>
      <UseCase text="Brand" usage="The Brand button.">
        <Button text="Brand" preset="brand" onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>

      <UseCase text="Tertiary" usage="The Tertiary button.">
        <Button text="Tertiary" preset="tertiary" onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>
      <UseCase text="Negative" usage="The Negative button.">
        <Button text="Negative" preset="negative" onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>
      <UseCase text="Disabled" usage="The Disabled button.">
        <Button text="Disabled" disabled onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>
      <UseCase text="Loading" usage="The Loading button.">
        <Button text="Disabled" loading onPress={() => Alert.alert("pressed disabled")} />
      </UseCase>
    </Story>
  ))
