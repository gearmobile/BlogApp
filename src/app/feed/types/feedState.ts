import {Post} from './post'

export interface FeedState {
  posts: Post[] | null
  error: string | null
  hasMorePostsForward: boolean
  hasMorePostsBackward: boolean
  initialCursorId: string | null
}
