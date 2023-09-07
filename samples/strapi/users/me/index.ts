/* eslint-disable */
import { Types } from '../../@types'

export type Methods = {
  /** Retrieve the logged in user information */
  get: {
    status: 200
    /** response */
    resBody: Types.Users_PermissionsUser
  }
}
