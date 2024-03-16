import {HttpErrorResponse} from '@angular/common/http'
import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import {switchMap, map, catchError, of} from 'rxjs'
import {withSpinner} from 'src/app/shared/operators/with-spinner.operator'
import {AddPostService} from '../services/add-post.service'
import {addPostActions} from './actions'

// export const addPostEffect = createEffect(
//   (
//     store = inject(Store),
//     actions$ = inject(Actions),
//     addPostService = inject(AddPostService)
//   ) => {
//     return actions$.pipe(
//       ofType(addPostActions.addPost),
//       switchMap(({post, spinnerName}) => {
//         return addPostService.addPost(post).pipe(
//           withSpinner(spinnerName, store),
//           map(() => addPostActions.addPostSuccess()),
//           catchError((error: HttpErrorResponse) =>
//             of(addPostActions.addPostFailure({message: error.message}))
//           )
//         )
//       })
//     )
//   },
//   {functional: true}
// )
