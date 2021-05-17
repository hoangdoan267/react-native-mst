import { StyleSheet } from "react-native"
import { color } from "../../theme"

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  linearGradient: {
    width: "100%",
    height: 154,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.pastel.orange,
  },
  logo: {
    width: 162,
    height: 32,
    // alignSelf: "center",
  },
})
