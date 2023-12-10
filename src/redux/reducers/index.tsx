import { combineReducers } from 'redux' 
import { videosReducer } from './videos.reducers'

const rootReducer = combineReducers({
  videos: videosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer