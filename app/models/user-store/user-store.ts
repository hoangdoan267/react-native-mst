import { getParent, Instance, SnapshotOut, types } from "mobx-state-tree"
import { RootNavigation } from "../../navigators"
import { RootStoreModel } from "../root-store/root-store"
import { UserModel } from "../user/user"
const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Model description here for TypeScript hints.
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    user: types.optional(types.maybe(UserModel), { name: "", email: "" }),
    loading: types.optional(types.boolean, false),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    login: async ({ email }: { name: string; email: string }) => {
      self.loading = true
      self.user.email = email
      self.user.name = email
      await timeout(1000)
      self.endLogin()
      // await getParent<typeof RootStoreModel>(self).characterStore.getCharacters()
      RootNavigation.navigate("welcome")
    },
    endLogin: () => {
      self.loading = false
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
