import {inject} from '@angular/core'
import {map, catchError, of, switchMap, tap} from 'rxjs'
import {AuthService} from '../services/auth.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {authActions} from './actions'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {withSpinner} from '../../shared/operators/with-spinner.operator'

export const registerEffect = createEffect(
  (
    store = inject(Store),
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({authData, spinnerName}) => {
        return authService.register(authData).pipe(
          withSpinner(spinnerName, store),
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
  (
    store = inject(Store),
    actions$ = inject(Actions),
    authService = inject(AuthService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({authData, spinnerName}) => {
        return authService.login(authData).pipe(
          withSpinner(spinnerName, store),
          map(() => authActions.loginSuccess()),
          catchError((error: HttpErrorResponse) => {
            return of(authActions.loginFailure({message: error.message}))
          })
        )
      })
    )
  },
  {functional: true}
)

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/')
      })
    )
  },
  {functional: true, dispatch: false}
)

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/')
      })
    )
  },
  {functional: true, dispatch: false}
)
