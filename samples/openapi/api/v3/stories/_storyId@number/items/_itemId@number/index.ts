/* eslint-disable */
import { Types } from '../../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader | undefined
    status: 200
    /** OK */
    resBody: Types.ModelCard
  }
}
