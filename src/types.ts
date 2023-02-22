export interface IRequestOptions {
  /** Requested URL */
  path: string

  /** Optional abort signal */
  signal?: AbortSignal

  /**
   * User token.
   * If not present, then taken from the client.
   */
  token?: string

  /** Optional query parameters */
  params?: object

  /**
   * Optional request body as a JSON object.
   * **This property changes the request method to POST.**
   */
  json?: object

  /**
   * Optional request body as URL-encoded form data.
   * **This property changes the request method to POST.**
   */
  urlencoded?: object
}

export interface IBaseApiParams {
  request?: Omit<IRequestOptions, 'path'>
}
