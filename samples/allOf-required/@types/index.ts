/* eslint-disable */
export namespace Types {
      
      
  export type ResponseSchema = Types.BaseSchema

  export type BaseSchema = {
    /** required property in response */
    req_property?: string | undefined
    /** unrequired property in response */
    unreq_property?: string | undefined
  }

}