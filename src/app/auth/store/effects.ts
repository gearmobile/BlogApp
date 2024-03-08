import {inject} from '@angular/core'
import {map, catchError, of, switchMap} from 'rxjs'
import {AuthService} from '../services/auth.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {authActions} from './actions'

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({authData}) => {
        return authService.register(authData).pipe(
          map((user) => authActions.setUser({user})),
          catchError((error) => of(authActions.registerFailure())),
        )
      }),
    )
  },
)

export const loginEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({authData}) => {
        return authService.login(authData).pipe(
          map((user) => authActions.setUser({user})),
          catchError((error) => of(authActions.registerFailure())),
        )
      }),
    )
  },
)

export const logoutEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.logout),
      switchMap(() => {
        return authService.logout().pipe(map(() => authActions.clearUser()))
      }),
    )
  },
)
