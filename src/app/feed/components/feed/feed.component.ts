import {Component, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {feedActions} from '../../store/actions'
import {
  selectHasMorePostsBackward,
  selectHasMorePostsForward,
  selectPage,
  selectPosts,
} from '../../store/reducers'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  store = inject(Store)
  spinnerName = 'feed-spinner'

  posts$ = this.store.select(selectPosts)
  page$ = this.store.select(selectPage)
  hasMorePostsForward$ = this.store.select(selectHasMorePostsForward)
  hasMorePostsBackward$ = this.store.select(selectHasMorePostsBackward)

  ngAfterViewInit() {
    this.store.dispatch(feedActions.getFeed({spinnerName: this.spinnerName}))
  }

  getNextPage() {
    this.store.dispatch(
      feedActions.getNextPage({spinnerName: this.spinnerName})
    )
  }

  getPreviousPage() {
    this.store.dispatch(
      feedActions.getPreviousPage({spinnerName: this.spinnerName})
    )
  }
}
