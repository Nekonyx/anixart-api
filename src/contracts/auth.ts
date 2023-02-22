import { IProfile, IProfileToken } from './profile'
import { IResponse } from './response'

export interface IAuthLoginRequest {
  login: string
  password: string
}

export interface IAuthLoginResponse extends IResponse {
  profile: IProfile
  profileToken: IProfileToken
}
