/* eslint-disable */
import { Types } from '../../../../../../../@types'

export type Methods = {
  /** Returns chat items by list of ids */
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined

    query: {
      /** coma separated ids of requested cards */
      ids: string
    }

    status: 200
    /** OK */
    resBody: Types.ModelCard[]
  }
}
