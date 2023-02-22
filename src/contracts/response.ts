/** Response code */
export enum ResponseCode {
  Ok = 0,
  Error = 1,
  Ban = 402,
  PermBan = 403
}

/** API response */
export interface IResponse {
  code: ResponseCode
}

/** API response with pagination */
export interface IPageableResponse<T> extends IResponse {
  content: T[]
  current_page: number
  total_count: number
  total_page_count: number
}
