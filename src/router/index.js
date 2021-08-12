import React from 'react';
import { Redirect } from 'react-router-dom';

import WDiscover from '../pages/discover';
import WMine from '../pages/mine';
import WFriend from '../pages/friend';

import Recommend from '../pages/discover/c-pages/recommend';
import Ranking from '../pages/discover/c-pages/ranking';
import Songs from '../pages/discover/c-pages/songs';
import DjRadio from '../pages/discover/c-pages/djradio';
import Artist from '../pages/discover/c-pages/artist';
import Album from '../pages/discover/c-pages/album';

const routers = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to={'/discover'}/>
    ),
  },
  {
    path: '/discover',
    component: WDiscover,
    routers: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to={'/discover/recommend'}/>
        ),
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/songs',
        component: Songs,
      },
      {
        path: '/discover/djradio',
        component: DjRadio,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
      {
        path: '/discover/album',
        component: Album,
      },
    ],
  },
  {
    path: '/mine',
    component: WMine,
  },
  {
    path: '/friend',
    component: WFriend,
  },
];

export default routers;