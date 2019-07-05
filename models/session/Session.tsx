export interface Credentials {
  accessToken: string
  idToken: string
  scope: string
  expiresIn: number,
  tokenType: string
}

export interface Login {
  type: typeof Loged
  credentials: Credentials
}

export const Error: string = "Error"

export interface Error {
  type: typeof Error
  error: {}
}

export class NoSession {
  type = null
}

export type auth = Login | Error | NoSession
export const Loged: string = "Loged"
