import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import router from './router';

import WAppHeader from '@/component/app-header';
import WAppFooter from '@/component/app-footer';

function App() {
  return (
    <HashRouter>
      <WAppHeader/>
      {renderRoutes(router)}
      <WAppFooter/>
    </HashRouter>
  );
}

export default memo(App);

