import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function WAppHeader () {

  const showSelectItem=(val, index)=>{
    if (index < 3) {
      return (
        <NavLink to={val.link}>{val.title}</NavLink>
      );
    } else {
      return (
        <a href={val.link}>{val.title}</a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className={'content wrap_v1'}>
        <HeaderLeft>
          <a href="#/" className={'logo sprite_01'}/>
          <div className={'select-list'}>
            {
              headerLinks.map((val, index) => {
                return (
                  <div key={val.title} className="select-item">
                    {showSelectItem(val, index)}
                  </div>
                );
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className={'divider'}></div>
    </HeaderWrapper>
  );
});