export const initialStatus = {
  pending: false,
  success: false,
  notFound: false,
  hasError: false,
  code: 0
}

export type Status = {
  pending: boolean
  success: boolean
  notFound: boolean
  hasError: boolean
  code?: number
}

export type RemoteData<T> = {
  status: Status
  data: T
}
