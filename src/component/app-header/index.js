import React, { memo } from 'react';

import { headerLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

export default memo(function WAppHeader() {

  const showSelectItem = (val, index) => {
    if (index < 3) {
      return (
        // 注意要exact!!!
        <NavLink to={val.link} exact>
          {val.title}
          <i className={'sprite_01 icon'}></i>
        </NavLink>
      );
    } else {
      return (
        <a href={val.link}>{val.title}</a>
      );
    }
  };

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
        <HeaderRight>
          <Input className={"search"} placeholder={'音乐/视频/电台/用户'} prefix={<SearchOutlined/>}/>
          <div className={"center"}>创作者中心</div>
          <div>登陆</div>
        </HeaderRight>
      </div>
      <div className={'divider'}></div>
    </HeaderWrapper>
  );
});