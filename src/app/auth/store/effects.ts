import {inject} from '@angular/core'
import {map, catchError, of, switchMap, tap} from 'rxjs'
import {AuthService} from '../services/auth.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {authActions} from './actions'
import {HttpErrorResponse} from '@angular/common/http'

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({authData}) => {
        return authService.register(authData).pipe(
          map(() => authActions.registerSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(authActions.registerFailure({message: error.message}))
          )
        )
      })
    )
  },
  {functional: true}
)

export const loginEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({authData}) => {
        return authService.login(authData).pipe(
          map(() => authActions.loginSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(authActions.loginFailure({message: error.message}))
          )
        )
      })
    )
  },
  {functional: true}
)
