import {Component, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {addPostActions} from '../../store/actions'
import {AddPostRequest} from '../../types/addPostRequest'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  store = inject(Store)

  spinnerName = 'add-post-spinner'

  postForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    content: new FormControl('', {validators: [Validators.required]}),
  })

  addPost(): void {
    const post = this.postForm.getRawValue() as AddPostRequest
    this.store.dispatch(
      addPostActions.addPost({post, spinnerName: this.spinnerName})
    )
  }
}
