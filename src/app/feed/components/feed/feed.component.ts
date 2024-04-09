import {Component, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {feedActions} from '../../store/actions'
import {selectPosts} from '../../store/reducers'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  store = inject(Store)
  spinnerName = 'feed-spinner'

  posts$ = this.store.select(selectPosts)

  ngOnInit() {
    this.store.dispatch(feedActions.getFeed({spinnerName: this.spinnerName}))
  }
}
