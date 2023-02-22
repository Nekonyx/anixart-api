import { Anixart } from '../client'
import {
  IRelease,
  IReleaseFilterRequest,
  IReleaseFilterResponse
} from '../contracts'
import { IBaseApiParams } from '../types'

export interface IReleaseFilterParams extends IBaseApiParams {
  page: number
  extendedMode?: boolean
}

export interface IReleaseFilterResult {
  items: IRelease[]
  totalCount: number
  page: number
  pagesCount: number
}

export class ReleaseApi {
  public constructor(private readonly client: Anixart) {}

  public async filter(
    params: IReleaseFilterParams
  ): Promise<IReleaseFilterResult> {
    const body: IReleaseFilterRequest = {}

    const response = await this.client.call<IReleaseFilterResponse>({
      path: `/filter/${params.page}`,
      params: {
        extended_mode: params.extendedMode
      },
      json: body,
      ...params.request
    })

    return {
      items: response.content,
      totalCount: response.total_count,
      page: response.current_page,
      pagesCount: response.total_page_count
    }
  }
}
