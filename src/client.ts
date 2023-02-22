import { AuthApi } from './api'
import { USER_AGENT } from './constants'
import { IResponse } from './contracts'
import { IRequestOptions } from './types'

export interface IAnixartOptions {
  /**
   * API URL
   * @example 'https://api.example.com'
   */
  apiUrl: string | URL

  /**
   * User token
   * @example 'ee977806d7286510da8b9a7492ba58e2484c0ecc'
   */
  token?: string
}

export class Anixart {
  /** API URL */
  public readonly apiUrl: URL

  /** User token */
  public token: string | null

  /** Authentication API */
  public readonly auth = new AuthApi(this)

  /**
   * Creates a new instance of Anixart with the provided options.
   * @constructor
   * @param {IAnixartOptions} opts - Options.
   */
  public constructor(opts: IAnixartOptions) {
    this.apiUrl = new URL(opts.apiUrl)
    this.token = opts.token ?? null
  }

  /**
   * Calls an API endpoint with optional query parameters and request body.
   * @template {IResponse} T - Response type.
   * @param {IRequestOptions} opts - Options.
   * @returns {Promise<T>} A promise that resolves with the JSON response.
   */
  public async call<T extends IResponse>(opts: IRequestOptions): Promise<T> {
    const endpoint = new URL(opts.path, this.apiUrl)

    const headers: Record<string, string> = {
      'user-agent': USER_AGENT
    }

    const init: RequestInit = {
      headers
    }

    if (opts.token || this.token) {
      endpoint.searchParams.set('token', opts.token || this.token!)
    }

    if (opts.params) {
      for (const [key, value] of Object.entries(opts.params)) {
        endpoint.searchParams.set(key, value)
      }
    }

    if (opts.json || opts.urlencoded) {
      init.method = 'POST'
      init.body = opts.json
        ? JSON.stringify(opts.json)
        : new URLSearchParams(opts.urlencoded as any).toString()

      headers['content-type'] = opts.json
        ? 'application/json'
        : 'application/x-www-form-urlencoded'

      headers['content-length'] = init.body.length.toString()
    }

    const response = await fetch(endpoint, init)

    return response.json()
  }
}
