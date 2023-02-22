import { Anixart } from '../client'
import {
  IAuthLoginRequest,
  IAuthLoginResponse,
  IProfile,
  IProfileToken
} from '../contracts'
import { IBaseApiParams } from '../types'

export interface IAuthLoginParams extends IBaseApiParams {
  login: string
  password: string
}

export interface IAuthLoginResult {
  profile: IProfile
  profileToken: IProfileToken
}

export class AuthApi {
  public constructor(private readonly client: Anixart) {}

  public async login(params: IAuthLoginParams): Promise<IAuthLoginResult> {
    const request: IAuthLoginRequest = {
      login: params.login,
      password: params.password
    }

    const response = await this.client.call<IAuthLoginResponse>({
      path: '/auth/signIn',
      urlencoded: request,
      ...params.request
    })

    return {
      profile: response.profile,
      profileToken: response.profileToken
    }
  }
}
