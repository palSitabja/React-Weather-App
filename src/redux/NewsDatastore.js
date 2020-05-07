const newsInitialState = {
  loading: false,
  news: "",
  error: ''
}
const STORE_NEWS_SUCCESS = 'STORE_NEWS_SUCCESS'


export const storeNewsSuccess = news => {
  return {
    type: STORE_NEWS_SUCCESS,
    news
  }
}

export const newsReducer = (state = newsInitialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case STORE_NEWS_SUCCESS:
      return {
        ...state,
        news: action.news
      }
    default: return {...state}
  }
}

