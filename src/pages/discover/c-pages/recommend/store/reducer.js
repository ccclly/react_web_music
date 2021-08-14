import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommends: action.hotRecommends };
    default:
      return state;
  }
}

export default reducer;