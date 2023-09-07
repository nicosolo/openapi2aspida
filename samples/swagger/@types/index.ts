/* eslint-disable */
export namespace Types {
      
      
export type Category = {
  id?: number | undefined
  name?: string | undefined
}

export type Pet = {
  id?: number | undefined
  category?: Types.Category | undefined
  name: string
  photoUrls: string[]
  tags?: Types.Tag[] | undefined
  /** pet status in the store */
  status?: 'available' | 'pending' | 'sold' | undefined
}

export type Tag = {
  id?: number | undefined
  name?: string | undefined
}

export type ApiResponse = {
  code?: number | undefined
  type?: string | undefined
  message?: string | undefined
}

export type Order = {
  id?: number | undefined
  petId?: number | undefined
  quantity?: number | undefined
  shipDate?: string | undefined
  /** Order Status */
  status?: 'placed' | 'approved' | 'delivered' | undefined
  complete?: boolean | undefined
}

export type User = {
  id?: number | undefined
  username?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  email?: string | undefined
  password?: string | undefined
  phone?: string | undefined
  /** User Status */
  userStatus?: number | undefined
}

}