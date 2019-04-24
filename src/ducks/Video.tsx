import { ActionWithData, VideoStoreType } from '../types'

const VIDEO_SET_SOURCE = '@treadmill/video/setSource'
const VIDEO_SET_CURRENT_POSITION = '@treadmill/video/setCurrentPosition'

export const setVideoSource = (source: string): ActionWithData<string> => ({
  type: VIDEO_SET_SOURCE,
  data: source
})

export const setVideoCurrent = (current: number): ActionWithData<number> => ({
  type: VIDEO_SET_CURRENT_POSITION,
  data: current
})

const initialState: VideoStoreType = {
  source: '',
  current: 0
}

export default function reducer(
  store: VideoStoreType = initialState,
  action: ActionWithData<string> | ActionWithData<number>
) {
  if (action.type === VIDEO_SET_SOURCE) {
    return { source: action.data, current: 0 }
  }

  if (action.type === VIDEO_SET_CURRENT_POSITION) {
    return { ...store, current: action.data }
  }

  return store
}
