import {TestBed} from '@angular/core/testing'
import {Firestore, collection, addDoc} from '@angular/fire/firestore'
import {AddPostService} from './add-post.service'
import {Observable, of} from 'rxjs'
import {AddPostRequest} from '../types/addPostRequest'
import * as AngularFireModule from '@angular/fire/firestore'

jest.mock('@angular/fire/firestore')

// Mock Firestore
const firestoreMock = {
  collection: jest.fn(),
}

// Mock Firestore collection reference
const collectionMock = {
  addDoc: jest.fn(),
}

// Sample post data for testing
const samplePost: AddPostRequest = {
  title: 'Test Post',
  content: 'This is a test post.',
  createdAt: new Date(),
  userId: 'aaaaajjsektj',
  userEmail: 'userEmail@email.com',
}

describe('AddPostService', () => {
  let addPostService: AddPostService
  let firestore: Firestore

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddPostService,
        {provide: Firestore, useValue: firestoreMock},
      ],
    })
    addPostService = TestBed.inject(AddPostService)
    firestore = TestBed.inject(Firestore)

    // Mock Firestore methods
    ;(firestoreMock.collection as jest.Mock).mockReturnValue(collectionMock)
  })

  it('should be created', () => {
    expect(addPostService).toBeTruthy()
  })
})
