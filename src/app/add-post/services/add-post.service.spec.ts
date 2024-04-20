import {TestBed} from '@angular/core/testing'
import {Firestore} from '@angular/fire/firestore'
import {AddPostService} from './add-post.service'
import {AddPostRequest} from '../types/addPostRequest'
import {lastValueFrom} from 'rxjs'

jest.mock('@angular/fire/firestore', () => {
  return {
    Firestore: jest.fn().mockImplementation(() => ({})),
    collection: jest.fn((firestore, collectionName) => ({
      add: jest.fn().mockResolvedValue({id: 'abc123'}),
    })),
    addDoc: jest.fn((collectionRef, postData) =>
      Promise.resolve({id: 'abc123'})
    ),
  }
})

const post = {
  title: 'asdas',
  content: 'asdas',
  userId: 'asdas',
  userEmail: 'asdas@asda.com',
  createdAt: new Date(),
} as AddPostRequest

describe('AddPostService', () => {
  let addPostService: AddPostService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPostService, {provide: Firestore, useValue: jest.fn()}],
    })
    addPostService = TestBed.inject(AddPostService)
  })

  it('should be created', () => {
    expect(addPostService).toBeTruthy()
  })

  it('should add post', async () => {
    addPostService.addPost(post)
    const result = await lastValueFrom(addPostService.addPost(post))

    // Check the result of the Observable returned by the service
    expect(result).toEqual({id: 'abc123'})
  })
})
