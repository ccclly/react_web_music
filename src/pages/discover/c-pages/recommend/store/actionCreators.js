import * as actionType from './constants';

import {
  getTopBanner,
  getHotRecommend,
} from '@/services/recommend';

const changeTopBanner = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBanner(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  };
};