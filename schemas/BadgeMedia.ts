export interface BadgeMedia {
  id: number;
  name: string;
  storageUrl: string;
  quickAccessPath: string;
  gifUrl: string;
  mediaType: 'Video' | 'Image';
}