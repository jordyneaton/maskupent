export interface Artist {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  releases: Release[];
}

export interface Release {
  id: string;
  title: string;
  releaseDate: string;
  coverImageUrl: string;
  artistId: string;
} 