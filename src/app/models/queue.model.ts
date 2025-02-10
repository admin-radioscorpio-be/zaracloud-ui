export interface TrackData {
    fade_duration: number;
    filename: string;
    prefix: string;
  }
  
  export interface QueueTrack {
    data: TrackData;
    name: string;
    next: string | null;
  }
  
  export interface QueueResponse {
    current: QueueTrack;
    first_10_tracks: QueueTrack[];
    last_10_tracks: QueueTrack[];
    length: number;
  }
  