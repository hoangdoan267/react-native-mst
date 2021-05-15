import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { SearchBox } from "./search-box"

storiesOf("SearchBox", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <SearchBox placeholder="Search here" />
      </UseCase>
      <UseCase text="Icon" usage="The primary.">
        <SearchBox placeholder="Search here" leftIcon="search" />
      </UseCase>
      <UseCase text="Icon & Clear mode" usage="The primary.">
        <SearchBox placeholder="Search here" leftIcon="search" clearButtonMode="while-editing" />
      </UseCase>
    </Story>
  ))
