import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {
    path: 'add-post',
    loadChildren: () =>
      import('./add-post/add-post.module').then((m) => m.AddPostModule),
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
