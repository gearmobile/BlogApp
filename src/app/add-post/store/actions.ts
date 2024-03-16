import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {AddPostRequest} from '../types/addPostRequest'

export const addPostActions = createActionGroup({
  source: 'addPost',
  events: {
    addPost: props<{post: AddPostRequest; spinnerName: string}>(),
    addPostSuccess: emptyProps(),
    addPostFailure: props<{message: string}>(),
  },
})
