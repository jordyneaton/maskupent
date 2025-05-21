import { Artist } from './artist'

export interface Release {
  id: string
  title: string
  releaseDate: string
  coverImageUrl: string
  artistId: string
  artist: Artist
} 