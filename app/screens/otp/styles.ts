import { StyleSheet } from "react-native"
import { color } from "../../theme"

export const styles = StyleSheet.create({
  main: {
    backgroundColor: color.palette.white,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  phoneView: {
    flexDirection: "row",
    marginBottom: 12,
    height: 32,
    borderRadius: 16,
    backgroundColor: color.background.tertiary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  phone: {
    marginLeft: 8,
  },
  instruction: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 32,
  },
  inputField: {
    backgroundColor: color.palette.white,
    borderRadius: 16,
    color: color.content.primary,
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: color.border.primary,
  },
  inputHighlight: {
    borderColor: color.function.accentPrimary,
  },
  bottomView: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 32,
  },
  bottomButton: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
})
