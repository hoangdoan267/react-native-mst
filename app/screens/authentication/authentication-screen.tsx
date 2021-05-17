import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, View, ViewStyle, useWindowDimensions } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import LinearGradient from "react-native-linear-gradient"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import { color } from "../../theme"
import { styles } from "./authentication.styles"
import { Login } from "./Login/Login"

const ROOT: ViewStyle = {
  flex: 1,
}

const FirstRoute = () => <View style={{ flex: 1 }} />

const SecondRoute = () => <View style={{ flex: 1 }} />

const renderScene = SceneMap({
  first: Login,
  second: SecondRoute,
})

export const AuthenticationScreen = observer(function AuthenticationScreen() {
  const insets = useSafeAreaInsets()
  const layout = useWindowDimensions()

  const headerStyle: ViewStyle = {
    paddingTop: insets.top,
  }

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "Sign In" },
    { key: "second", title: "Sign Up" },
  ])

  const renderTabbar = (props) => {
    return (
      <TabBar
        {...props}
        style={{ backgroundColor: color.pastel.orange }}
        indicatorStyle={{ backgroundColor: color.function.brandPrimary, height: 4 }}
        indicatorContainerStyle={{
          backgroundColor: color.pastel.orange,
          borderBottomColor: "transparent",
        }}
        renderLabel={({ route, focused, color }) => (
          <Text preset="headingLarge">{route.title}</Text>
        )}
      />
    )
  }

  return (
    <Screen style={ROOT} preset="fixed" statusBar="dark-content" unsafe>
      <View style={[styles.linearGradient, headerStyle]}>
        <Image source={require("../../../assets/Logo.png")} style={styles.logo} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabbar}
      />
    </Screen>
  )
})
