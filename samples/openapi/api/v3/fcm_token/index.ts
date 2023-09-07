/* eslint-disable */
import { Types } from '../../../@types'

export type Methods = {
  /** Save newly updated firebase cloud messaging device token */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 204

    reqBody: {
      fcmToken: string
      deviceToken?: string | undefined
    }
  }
}
