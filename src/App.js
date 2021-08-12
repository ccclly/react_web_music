import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routers from './router';
import store from './store';

import WAppHeader from '@/component/app-header';
import WAppFooter from '@/component/app-footer';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WAppHeader/>
        {renderRoutes(routers)}
        <WAppFooter/>
      </HashRouter>
    </Provider>

  );
}

export default memo(App);

