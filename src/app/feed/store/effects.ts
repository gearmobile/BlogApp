// export const getFeedEffect = createEffect(
//   (
//     store = inject(Store),
//     actions$ = inject(Actions),
//     feedService = inject(FeedService)
//   ) => {
//     return actions$.pipe(
//       ofType(authActions.login),
//       switchMap(({authData, spinnerName}) => {
//         return authService.login(authData).pipe(
//           withSpinner(spinnerName, store),
//           map(() => authActions.loginSuccess()),
//           catchError((error: HttpErrorResponse) => {
//             return of(authActions.loginFailure({message: error.message}))
//           })
//         )
//       })
//     )
//   },
//   {functional: true}
// )
