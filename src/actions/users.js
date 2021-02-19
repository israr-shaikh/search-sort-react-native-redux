import ConnectionAPI from '../config/api';
import * as connectionURL from '../config/url';
import * as types from '../constants/types';
import store from '../config/store';

const connectionObj = new ConnectionAPI();

export const fetchingCommonRequest = () => ({
  type: types.FETCHING_USERS_REQUEST,
});

export const fetchingUsersSuccess = data => ({
  type: types.FETCHING_USERS_SUCCESS,
  payload: data,
});

export const fetchingCommonFailure = errorMsg => ({
  type: types.FETCHING_USERS_FAILURE,
  payload: errorMsg,
});

export const searchUserSuccess = (data, text, total) => ({
  type: types.SEARCH_USERS_SUCCESS,
  payload: data,
  text,
  total,
});

export const sortUserSuccess = (data, sort, total) => ({
  type: types.SORT_USERS_SUCCESS,
  payload: data,
  sort,
  total,
});

export const pagination = pageNum => ({
  type: types.CHANGE_PAGE,
  payload: pageNum,
});

export const changeConnection = flag => ({
  type: types.CHANGE_CONNECTION,
  flag,
});

export const cancel = () => ({
  type: types.CANCEL,
});

export const getUserList = (page, per_page) => {
  return dispatch => {
    dispatch(fetchingCommonRequest());
    try {
      connectionObj.fetchGet(connectionURL.getUsers(page, per_page), data => {
        if (data !== null) {
          dispatch(fetchingUsersSuccess(data));
        } else {
          dispatch(cancel());
        }
      });
    } catch (error) {
      dispatch(fetchingCommonFailure('Something went wrong'));
    }
  };
};

export const searchList = text => {
  return dispatch => {
    dispatch(fetchingCommonRequest());
    try {
      let state = store.getState();
      let {usersList} = state.users;
      let filteredList = usersList.filter(
        item =>
          item.first_name.toLowerCase().includes(text.toLowerCase()) ||
          item.last_name.toLowerCase().includes(text.toLowerCase()),
      );
      dispatch(searchUserSuccess(filteredList, text, filteredList.length));
    } catch (error) {
      dispatch(fetchingCommonFailure(error.message));
    }
  };
};

export const sortList = () => {
  return dispatch => {
    dispatch(fetchingCommonRequest());
    try {
      let state = store.getState();
      let {data, sort} = state.users;
      let user = [...data];
      let sortedList = [];
      if (sort) {
        sort = true;
        sortedList = user.sort(
          (a, b) =>
            b.first_name.localeCompare(a.first_name) ||
            b.last_name.localeCompare(a.last_name),
        );
      } else {
        sort = false;
        sortedList = user.sort(
          (a, b) =>
            a.first_name.localeCompare(b.first_name) ||
            a.last_name.localeCompare(b.last_name),
        );
      }
      dispatch(sortUserSuccess(sortedList, !sort, sortedList.length));
    } catch (error) {
      dispatch(fetchingCommonFailure(error.message));
    }
  };
};

export const changePage = flag => {
  return dispatch => {
    dispatch(fetchingCommonRequest());
    try {
      let state = store.getState();
      let {pageNum} = state.users;
      if (flag) {
        pageNum++;
      } else {
        pageNum--;
      }
      dispatch(pagination(pageNum));
    } catch (error) {
      dispatch(fetchingCommonFailure(error.message));
    }
  };
};
