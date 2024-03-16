import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AddPostComponent} from './components/add-post/add-post.component'
import {AddPostRoutingModule} from './add-post-routing.module'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [AddPostComponent],
  imports: [CommonModule, AddPostRoutingModule, SharedModule],
})
export class AddPostModule {}
