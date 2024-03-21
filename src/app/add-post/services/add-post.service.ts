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

  addPost(): Observable<any> {
    return this.addDataToDatabase()
  }

  private addDataToDatabase(): Observable<any> {
    return from(addDoc(this.postsCollection, {title: 'Test'} as AddPostRequest))
  }
}
