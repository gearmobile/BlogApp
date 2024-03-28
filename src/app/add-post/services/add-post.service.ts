import {Injectable, inject} from '@angular/core'
import {AddPostRequest} from '../types/addPostRequest'
import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore'
import {Observable, from} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AddPostService {
  private firestore: Firestore = inject(Firestore)
  private postsCollection: CollectionReference = collection(
    this.firestore,
    'posts'
  )

  addPost(post: AddPostRequest, userId: string): Observable<any> {
    return from(
      addDoc(this.postsCollection, {...post, userId} as AddPostRequest)
    )
  }
}
