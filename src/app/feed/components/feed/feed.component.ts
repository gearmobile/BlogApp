import {Component, inject} from '@angular/core'
import {FeedService} from '../../services/feed.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  private feedService = inject(FeedService)

  ngOnInit() {
    console.log('hello from feed')
    this.feedService.getFeed().subscribe()
  }
}
