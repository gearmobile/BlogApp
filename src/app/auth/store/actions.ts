import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {AuthData} from '../types/authData'
import {UserCredential} from '@angular/fire/auth'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{authData: AuthData}>(),
    registerFailure: emptyProps(),
    login: props<{authData: AuthData}>(),
    logout: emptyProps(),
    setUser: props<{user: UserCredential}>(),
    clearUser: emptyProps(),
  },
})
