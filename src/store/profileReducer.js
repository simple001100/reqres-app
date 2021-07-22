
const initialState = {
  personalData: {
    firstName: 'name',
    lastName: 'Surname',
    email: 'name.syrname@reqres.in',
  }
};

export const GET_PROFILE = 'GET_PROFILE';

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return state;
  }
  return state;
}

export const getProfile = () => ({type: GET_PROFILE});
