import React from 'react';
import { Redirect } from 'react-router-dom';

import WDiscover from '../pages/discover';
import WMine from '../pages/mine';
import WFriend from '../pages/friend';

const router = [
  {
    path: '/',
    exact: true,
    // render: () => (
    //   <Redirect to={'/discover'}/>
    // )
    component: WDiscover
  },
  // {
  //   path: '/discover',
  //   component: WDiscover
  // },
  {
    path: '/mine',
    component: WMine
  },
  {
    path: '/friend',
    component: WFriend
  }
];

export default router;