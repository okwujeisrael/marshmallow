export const FETCH_ROCKETS = "FETCH_ROCKETS"
export const FETCH_DRAGONS = "FETCH_DRAGONS"
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const MODAL_DESCRIPTION = "MODAL_DESCRIPTION"
export const MODAL_IMAGE = "MODAL_IMAGE"

export type TPayload = Array<TPayloadProps>

export type TPayloadProps = {
  id: string,
  description: string,
  flickr_images: Array<string>,
  name?: string,
  rocket_name?: string
}

export interface IFetchRockets {
  type: typeof FETCH_ROCKETS,
  payload: TPayload
}

export interface IFetchDragons {
  type: typeof FETCH_DRAGONS,
  payload: TPayload
}

interface IToggleModal {
  type: typeof TOGGLE_MODAL
}

interface IModalDescription {
  type: typeof MODAL_DESCRIPTION,
  payload: string
}
interface IModalImage {
  type: typeof MODAL_IMAGE,
  payload: string
}

export type TDispatchTypes = IFetchDragons | IFetchRockets | IToggleModal | IModalDescription | IModalImage
