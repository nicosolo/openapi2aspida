/* eslint-disable */
import type { ReadStream } from 'fs'
import { Types } from '../../../../../../@types'

export type Methods = {
  /** Create shared image item in chat */
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined
    status: 200

    /** OK */
    resBody: {
      id: string
    }

    reqFormat: FormData

    reqBody: {
      /** Image to upload. */
      file: (File | ReadStream)
      caption?: string | undefined
      headline?: string | undefined
      published?: boolean | undefined
      /** text message to send to pubnub */
      formattedText?: string | undefined
    }
  }
}
