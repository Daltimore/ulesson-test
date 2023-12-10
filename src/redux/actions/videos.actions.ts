import { Dispatch } from 'redux';

const videoArr = [
  {
    id: 1,
    name: 'Recognising Living things',
    lesson: 'Lesson 1',
    icon: 'lesson1',
    videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773952/BIO10_01_01_01_RV_qpw65a.mp4'
  },
  {
    id: 2,
    name: 'Recognising Living things 2',
    lesson: 'Lesson 2',
    icon: 'lesson2',
    videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_01_02_01_RV_wllml1.mp4'
  },
  {
    id: 3,
    name: 'Calculations on Maginification and Resolution',
    lesson: 'Lesson 3',
    icon: 'lesson3',
    videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_03_01_06_NEW_u2oo0m.mp4'
  },
  {
    id: 4,
    name: 'Three Domains of Life',
    lesson: 'Lesson 4',
    icon: 'lesson4',
    videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773950/BIO10_02_07_02_tvrsx7.mp4'
  },
  {
    id: 5,
    name: 'Kingdom or Domain?',
    lesson: 'Lesson 5',
    icon: 'lesson5',
    videoUrl: 'https://res.cloudinary.com/www-pluslitedesigns-org/video/upload/v1701773949/BIO10_02_07_01_ydc4em.mp4'
  },
]

export const Types = {
  FETCH_VIDEOS: 'FETCH_VIDEOS',
}

export const fetchVideos = () => (dispatch: Dispatch) => {
  return new Promise<any>((resolve) => {
    dispatch({ type: Types.FETCH_VIDEOS, payload: videoArr })
    resolve(videoArr)
})
}