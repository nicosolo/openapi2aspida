/* eslint-disable */
import { Types } from '../../../../../../../@types'

export type Methods = {
  /** Creates an purchase order for an offer by its offer_id using invoice has payment method */
  post: {
    status: 201
    /** Created */
    resBody: Types.Order

    resHeaders: {
      /** Correlation id for the different services */
      'x-correlator': string
    }

    /** Body to create a purchase order */
    reqBody: Types.CreatePurchaseOrderByPhoneNumberInvoice
  }
}
