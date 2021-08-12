import React, { memo } from 'react';

import {
  DiscoverWrapper,
  TopMenu
} from './style';
import { dicoverMenu } from '../../common/local-data';
import { NavLink } from 'react-router-dom';

export default memo(function WDiscover() {
  return (
    <DiscoverWrapper>
      <div className={"top"}>
        <TopMenu className={"wrap_v1"}>
          {
            dicoverMenu.map(value => {
              return(
                <div className={"item"} key={value.title} >
                  <NavLink to={value.link}>{value.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
});