import * as types from '../constants/types';

const intialState = {
  isFetching: false,
  error: false,
  errorMessage: '',
  isConnected: true,
  total: 0,
  pageNum: 1,
  data: [],
  usersList: [],
  sort: null,
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_USERS_REQUEST:
      return {...state, isFetching: true};

    case types.FETCHING_USERS_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};

    case types.FETCHING_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
        usersList: action.payload.data,
      };

    case types.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        text: action.text,
        sort: null,
        pageNum:1,
        total: action.total,
      };

    case types.SORT_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        sort: action.sort,
        total: action.total,
      };

    case types.CHANGE_PAGE: {
      return {...state, pageNum: action.payload, isFetching: false};
    }

    case types.CHANGE_CONNECTION: {
      return {...state, isConnected: action.flag};
    }

    case types.CANCEL:
      return {...state, isFetching: false};

    default:
      return state;
  }
};

export default todoReducer;
