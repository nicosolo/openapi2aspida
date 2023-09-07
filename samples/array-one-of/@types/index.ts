/* eslint-disable */
export namespace Types {
      
      
  export type User = {
    id?: string | undefined
    roles?: (Types.RoleA | Types.RoleB)[] | undefined
  }

  export type RoleA = {
    name?: string | undefined
  }

  export type RoleB = {
    name?: string | undefined
    authority?: string | undefined
  }

}