import { Types } from '../actions/videos.actions'

interface initializeState {
  all_videos: Array<any>
}

const INITIAL_STATE: initializeState = {
  all_videos: []
}

export const videosReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
      case Types.FETCH_VIDEOS:
          return {
              ...state,
              all_videos: action.payload
          }
      default:
          return state
  }
}