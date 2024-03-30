import {createActionGroup, props} from '@ngrx/store'

export const toastActions = createActionGroup({
  source: 'toast',
  events: {
    showSuccessToast: props<{message: string}>(),
    showErrorToast: props<{message: string}>(),
  },
})
