export interface EventMeta {
    size: number;
    tag: string;
  }
  
  export interface TaskEvent {
    args?: any[];
    kwargs?: any;
    name: string;
    run_next?: number;
    run_once?: string;
    target_method?: string;
    target_object?: string;
  }
  
  export interface ScheduledEvent {
    dayhour: number;
    daymask: number;
    enabled: number;
    expirationdate: string;
    expires: number;
    fichero: string;
    hourbits: number;
    maxwait: number;
    name: string;
    now: number;
    overlapped: number;
    prioridad: number;
    startdate: string;
    tab: string;
    telecommand: number;
  }
  
  export interface EventWrapper {
    event: TaskEvent | ScheduledEvent;
    timestamp: string;
    timestamp_iso: string;
    unique_id: number;
  }
  
  export interface SchedulerResponse {
    event_meta: EventMeta;
    events: EventWrapper[];
  }
  