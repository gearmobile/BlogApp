import {Injectable, inject} from '@angular/core'
import {Observable, map, tap} from 'rxjs'
import {Post} from '../types/post'
import {Firestore, collection, collectionData} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private firestore = inject(Firestore)

  getFeed(): Observable<Post[]> {
    return collectionData(collection(this.firestore, 'posts')).pipe(
      tap(console.log)
    )
  }
}
