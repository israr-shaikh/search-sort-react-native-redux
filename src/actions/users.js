import ConnectionAPI from '../config/api';
import * as connectionURL from '../config/url';
import * as types from '../constants/types';
import store from '../config/store';

const connectionObj = new ConnectionAPI();

const data = {
  page: 1,
  per_page: 12,
  total: 12,
  total_pages: 1,
  data: [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
    },
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
    },
    {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
    },
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg',
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg',
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg',
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg',
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg',
    },
  ],
};

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
      // connectionObj.fetchGet(connectionURL.getUsers(page, per_page), data => {
      //   if (data !== null) {
      //     dispatch(fetchingUsersSuccess(data));
      //   } else {
      //     dispatch(cancel());
      //   }
      // });
      setTimeout(() => dispatch(fetchingUsersSuccess(data)), 2000);
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
      console.log(pageNum);
      dispatch(pagination(pageNum));
    } catch (error) {
      dispatch(fetchingCommonFailure(error.message));
    }
  };
};
