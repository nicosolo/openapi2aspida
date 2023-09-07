/* eslint-disable */
import { Types } from '../../../@types'

export type Methods = {
  /** List orders for a user */
  get: {
    query?: Types.Identifier | undefined
    status: 200
    /** Ok */
    resBody: Types.Orders

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string
    }
  }
}
