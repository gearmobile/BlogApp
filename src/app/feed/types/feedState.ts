import {Post} from './post'

export interface FeedState {
  posts: Post[] | null
  error: string | null
}
