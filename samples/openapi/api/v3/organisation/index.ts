/* eslint-disable */
import { Types } from '../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired | undefined
    status: 200
    /** OK */
    resBody: Types.OrganisationModel
  }
}
