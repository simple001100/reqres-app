const initialState = {
  id: null,
  firstName: 'unknown',
  lastName: 'unknown',
  email: 'not found',
  avatar: 'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg',
  updatedAt: null,
};

export const GET_PROFILE = 'GET_PROFILE';
export const GET_ID = 'GET_ID';
export const REMOVE_PERSONAL_DATA = 'REMOVE_PERSONAL_DATA';
export const CHANGE_PERSONAL_DATA = 'CHANGE_PERSONAL_DATA';
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_DATA:
      const {firstName, lastName, email, avatar, updatedAt} = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        email: email ? email : state.email,
        avatar: avatar ? avatar : state.avatar,
        updatedAt: updatedAt ? updatedAt : state.updatedAt,
      };
    case REMOVE_PERSONAL_DATA:
      return {
        ...state,
        id: null,
        firstName: 'unknown',
        lastName: 'unknown',
        email: 'not found',
        avatar:
          'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg',
        updatedAt: null,
      };
    case GET_ID:
      const {id} = action.payload;
      return {...state, id};
    default:
      return state;
  }
}

export const getProfile = () => ({type: GET_PROFILE});
export const getId = payload => ({type: GET_ID, payload});
export const removePersonalData = () => ({type: REMOVE_PERSONAL_DATA});
export const changePersonalData = payload => ({
  type: CHANGE_PERSONAL_DATA,
  payload,
});
export const setProfileData = payload => ({type: SET_PROFILE_DATA, payload});
