import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 
  {
    name: 'Mixer',
    url: '/tables/mixer'
  },
  {
    name: 'Scheduler',
    url: '/tables/scheduler'
  },
  {
    name: 'Queue',
    url: '/tables//queue'
  },
  {
    name: 'Log',
    url: '/tables/log'
  },
    {
      name: 'Pages',
      url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  }
];
