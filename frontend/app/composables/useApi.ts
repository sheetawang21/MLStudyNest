export interface ApiResult<T = unknown> {
  ok: boolean
  message?: string
  user?: UserProfile
  data?: T
  resources?: ResourceItem[]
  submissions?: AdSubmission[]
  ad?: AdSubmission | null
}

export interface UserProfile {
  id?: number
  username: string
  name?: string
  grade?: string
  birthday_month?: number | null
  birthday_day?: number | null
  favorite_subject?: string | null
  bio?: string | null
  savedState?: unknown
}

export interface ResourceItem {
  id: number
  username: string
  title: string
  description?: string
  link?: string
  created_at: string
}

export interface AdSubmission {
  id: number
  username: string
  content: string
  display_days: number
  votes: number
  created_at: string
}

export function useApi() {
  const request = async <T = ApiResult>(path: string, options: any = {}) => {
    return await $fetch<T>(`/api${path}`, {
      credentials: 'include',
      ...options,
      headers: {
        'content-type': 'application/json',
        ...(options.headers || {})
      }
    })
  }

  return {
    me: () => request<ApiResult<UserProfile>>('/me'),
    login: (payload: Record<string, unknown>) => request<ApiResult<UserProfile>>('/auth/login', { method: 'POST', body: payload }),
    register: (payload: Record<string, unknown>) => request<ApiResult<UserProfile>>('/auth/register', { method: 'POST', body: payload }),
    logout: () => request<ApiResult>('/auth/logout', { method: 'POST' }),
    saveProfile: (payload: Record<string, unknown>) => request<ApiResult<UserProfile>>('/profile', { method: 'PUT', body: payload }),
    saveProgress: (payload: unknown) => request<ApiResult>('/progress', { method: 'POST', body: { savedState: payload } }),
    resources: () => request<ApiResult<ResourceItem[]>>('/resources'),
    postResource: (payload: Record<string, unknown>) => request<ApiResult>('/resources', { method: 'POST', body: payload }),
    adSubmissions: () => request<ApiResult<AdSubmission[]>>('/ads/submissions'),
    postAd: (payload: Record<string, unknown>) => request<ApiResult>('/ads/submissions', { method: 'POST', body: payload }),
    voteAd: (id: number) => request<ApiResult>('/ads/vote', { method: 'POST', body: { submission_id: id } }),
    featuredAd: () => request<ApiResult<AdSubmission>>('/ads/featured')
  }
}
