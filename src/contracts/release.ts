import { IPageableResponse } from './response'

export enum ReleaseCategory {
  Unknown = 0,
  Series = 1,
  Movie = 2,
  OVA = 3,
  Special = 6
}

export enum ReleaseStatus {
  Unknown = 0,
  Finished = 1,
  Airing = 2,
  Announced = 3
}

export interface IReleaseFilterRequest {
  categoryId?: number
  country?: string
  endYear?: number
  episodeDurationFrom?: number
  episodeDurationTo?: number
  episodesFrom?: number
  episodesTo?: number
  isGenresExcludeModeEnabled?: boolean
  season?: number
  startYear?: number
  statusId?: number
  studio?: string
  sort?: number
  genres?: string[]
  profileListExclusions?: number[]
  types?: number[]
  ageRatings?: number[]
}

export interface IReleaseFilterResponse extends IPageableResponse<IRelease> {}

export interface IReleaseCategory {
  id: ReleaseCategory
  name: string
}

export interface IReleaseStatus {
  id: ReleaseStatus
  name: string
}

export interface IRelease {
  '@id': number
  id: number
  poster: string
  image: string
  year: string
  genres: string
  country: string
  director: string
  author: string
  translators: string
  studio: string
  description: string
  note: null
  related: null
  category: IReleaseCategory
  rating: number
  grade: number
  status: IReleaseStatus
  duration: number
  season: number
  broadcast: number
  screenshots: any[]
  comments: any[]
  title_original: string
  title_ru: string
  title_alt: null
  episodes_released: number
  episodes_total: number
  release_date: string
  vote_1_count: number
  vote_2_count: number
  vote_3_count: number
  vote_4_count: number
  vote_5_count: number
  vote_count: number
  creation_date: number
  last_update_date: number
  aired_on_date: number
  favorites_count: number
  watching_count: number
  plan_count: number
  completed_count: number
  hold_on_count: number
  dropped_count: number
  is_adult: boolean
  is_play_disabled: boolean
  is_tpp_disabled: boolean
  can_video_appeal: boolean
  can_torlook_search: boolean
  is_deleted: boolean
  age_rating: number
  your_vote: number
  related_count: number
  comment_count: number
  comments_count: number
  collection_count: number
  profile_list_status: number
  status_id: number
  last_view_timestamp: number
  last_view_episode: null
  is_viewed: boolean
  is_favorite: boolean
  is_view_blocked: boolean
  screenshot_images: any[]
  related_releases: any[]
  recommended_releases: any[]
  episode_last_update: null
  comment_per_day_count: number
  video_banners: any[]
  profile_release_type_notification_preference_count: number
  is_release_type_notifications_enabled: boolean
}
