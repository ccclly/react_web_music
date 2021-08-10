import WDiscover from '../pages/discover';
import WMine from '../pages/mine';
import WFriend from '../pages/friend';

const router = [
  {
    path: '/',
    exact: true,
    component: WDiscover
  },
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