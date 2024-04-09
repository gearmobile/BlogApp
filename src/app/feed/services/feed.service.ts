import {Injectable, inject} from '@angular/core'
import {Observable, map} from 'rxjs'
import {
  DocumentData,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore'
import {Post} from '../types/post'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private firestore = inject(Firestore)

  getFeed(): Observable<Post[]> {
    return collectionData(collection(this.firestore, 'posts')).pipe(
      map((documents: DocumentData[]) =>
        documents.map((doc: DocumentData) => this.mapDocumentToPost(doc))
      )
    )
  }

  private mapDocumentToPost(doc: DocumentData): Post {
    return {
      id: doc['id'],
      userId: doc['userId'],
      title: doc['title'],
      content: doc['content'],
      userEmail: doc['userEmail'],
    }
  }
}
