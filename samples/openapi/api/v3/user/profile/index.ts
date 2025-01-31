/* eslint-disable */
import type { ReadStream } from 'fs'
import { Types } from '../../../../@types'

export type Methods = {
  put: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader | undefined
    status: 204
    reqFormat: FormData

    reqBody: {
      screenName?: string | undefined
      url?: string | undefined
      /** Profile picture to upload. */
      image?: (File | ReadStream) | undefined
      imageId?: string | undefined
    }
  }
}
