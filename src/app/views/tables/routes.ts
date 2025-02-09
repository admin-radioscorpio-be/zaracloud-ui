import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'mixer',
    loadComponent: () => import('./mixer/mixer.component').then(m => m.MixerComponent),
    data: {
      title: 'Mixer'
    }
  },
  {
    path: 'queue',
    loadComponent: () => import('./queue/queue.component').then(m => m.QueueComponent),
    data: {
      title: 'Queue'
    }
  },
  {
    path: 'scheduler',
    loadComponent: () => import('./scheduler/scheduler.component').then(m => m.SchedulerComponent),
    data: {
      title: 'Scheduler'
    }
  },
  {
    path: 'log',
    loadComponent: () => import('./log/log.component').then(m => m.LogComponent),
    data: {
      title: 'Log'
    }
  },
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'mixer',
        loadComponent: () => import('./mixer/mixer.component').then(m => m.MixerComponent),
        data: {
          title: 'Mixer'
        }
      },
      {
        path: 'queue',
        loadComponent: () => import('./queue/queue.component').then(m => m.QueueComponent),
        data: {
          title: 'Queue'
        }
      },
      {
        path: 'scheduler',
        loadComponent: () => import('./scheduler/scheduler.component').then(m => m.SchedulerComponent),
        data: {
          title: 'Scheduler'
        }
      },
      {
        path: 'log',
        loadComponent: () => import('./log/log.component').then(m => m.LogComponent),
        data: {
          title: 'Log'
        }
      },
      
    ]
  }
];


