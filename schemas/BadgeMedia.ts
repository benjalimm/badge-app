export interface NFTMedia {
  id: number;
  name: string;
  storageUrl: string;
  quickAccessPath: string;
  gifUrl: string;
  storageGif: string;
  mediaType: 'Video' | 'Image';
}