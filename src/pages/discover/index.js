import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import request from '../../services/request';

import {
  DiscoverWrapper,
  TopMenu,
} from './style';
import { dicoverMenu } from '../../common/local-data';

export default memo(function WDiscover(props) {

  useEffect(() => {
    request({
      url: '/banner',
    }).then(res => {
      console.log(res);
    });
  }, []);

  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className={'top'}>
        <TopMenu className={'wrap_v1'}>
          {
            dicoverMenu.map(value => {
              return (
                <div className={'item'} key={value.title}>
                  <NavLink to={value.link}>{value.title}</NavLink>
                </div>
              );
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routers)}
    </DiscoverWrapper>
  );
});