/* eslint-disable */
import { Types } from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: Types.UserInfo & {
      settings?: Types.$200_UserSettings | undefined
    }
  }
}
