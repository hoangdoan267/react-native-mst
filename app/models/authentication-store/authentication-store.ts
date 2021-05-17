import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { BodyGrant_type, UserServiceProxy } from "../../services/service-proxies/service-proxies"

interface LoginParams {
  type: BodyGrant_type
  username: string
  password: string
}
/**
 * Model description here for TypeScript hints.
 */

const userService = new UserServiceProxy()

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    refreshToken: types.optional(types.string, ""),
    accessToken: types.optional(types.string, ""),
    signInLoading: types.optional(types.boolean, false),
    signUpLoading: types.optional(types.boolean, false),
    signInError: types.optional(types.string, ""),
    signUpError: types.optional(types.string, ""),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    login: flow(function* ({ username, type, password }: LoginParams) {
      try {
        self.signInError = ""
        self.signInLoading = true

        const ret = yield userService.login({
          username,
          grant_type: type,
          password,
          client_id: "1111",
          client_secret: "1111",
        })

        //
        self.signInLoading = false
      } catch (error) {
        console.log(error)
        self.signInLoading = false
        self.signInError = JSON.stringify(error)
      }
    }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type AuthenticationStoreType = Instance<typeof AuthenticationStoreModel>
export interface AuthenticationStore extends AuthenticationStoreType {}
type AuthenticationStoreSnapshotType = SnapshotOut<typeof AuthenticationStoreModel>
export interface AuthenticationStoreSnapshot extends AuthenticationStoreSnapshotType {}
export const createAuthenticationStoreDefaultModel = () =>
  types.optional(AuthenticationStoreModel, {})
