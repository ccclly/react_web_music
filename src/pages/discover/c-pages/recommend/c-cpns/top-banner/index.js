import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper,
} from './style';

export default memo(function TopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }), shallowEqual);

  const bannerRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper  bgImage={bgImage}>
      <div className={'banner wrap_v2'}>
        <BannerLeft>
          <Carousel effect={'fade'} autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                );
              })
            }
          </Carousel>

        </BannerLeft>
        <BannerRight/>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}/>
          <button className="btn right" onClick={e => bannerRef.current.next()}/>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});