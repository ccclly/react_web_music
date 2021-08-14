import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';

import HYSongsCover from '@/component/songs-cover';
import{
  HotRecommendWrapper
} from './style';

export default memo(function HotRecommend(){

  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }),shallowEqual);
  // console.log(hotRecommends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <div className={'recommend-list'}>
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  );
})