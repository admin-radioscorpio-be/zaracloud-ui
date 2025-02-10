export interface MixerStatus {
    playdetected: number;
    playing: number;
    statuses: MixerChannel[];
  }
  
  export interface MixerChannel {
    elapsed_time: number;
    fade_duration: number;
    file_duration: number;
    filename: string;
    name: string;
    playing: number;
    remaining_time: number | null;
    start_time: number | null;
    stop: number;
    stop_time: number;
    volume: number;
  }
  