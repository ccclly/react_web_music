import React, { memo } from 'react';

import {FooterWrap} from './style';

export default memo(function WAppFooter(){
  return (
    <FooterWrap>
      <h2>This is Footer</h2>
    </FooterWrap>
  );
})