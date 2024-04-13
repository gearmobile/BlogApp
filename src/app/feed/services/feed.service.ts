import {Injectable, inject} from '@angular/core'
import {Observable, map, take} from 'rxjs'
import {
  DocumentData,
  Firestore,
  QueryConstraint,
  collection,
  collectionData,
  endBefore,
  limit,
  orderBy,
  query,
  startAfter,
} from '@angular/fire/firestore'
import {Post} from '../types/post'
import {limitToLast} from 'firebase/firestore'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private firestore = inject(Firestore)

  getFeed(
    cursor: DocumentData | null = null,
    pageSize: number = 5,
    backward: boolean = false
  ): Observable<Post[]> {
    const q = this.createQuery(cursor, pageSize, backward)
    return collectionData(q, {
      idField: 'id',
    }).pipe(
      take(1),
      map((documents: DocumentData[]) =>
        documents.map((doc: DocumentData) => this.mapDocumentToPost(doc))
      )
    )
  }

  private createQuery(
    cursor: DocumentData | null = null,
    pageSize: number = 5,
    backward: boolean = false
  ) {
    const queryConstraints = [orderBy('createdAt', 'desc')] as QueryConstraint[]
    if (cursor) {
      if (backward) {
        queryConstraints.push(endBefore(cursor['createdAt']))
        queryConstraints.push(limitToLast(pageSize))
      } else {
        queryConstraints.push(startAfter(cursor['createdAt']))
        queryConstraints.push(limit(pageSize))
      }
    } else {
      queryConstraints.push(limit(pageSize))
    }
    return query(collection(this.firestore, 'posts'), ...queryConstraints)
  }

  private mapDocumentToPost(doc: DocumentData): Post {
    return {
      id: doc['id'],
      userId: doc['userId'],
      title: doc['title'],
      content: doc['content'],
      userEmail: doc['userEmail'],
      createdAt: doc['createdAt'],
    }
  }
}
