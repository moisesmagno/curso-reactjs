/**
 * TYPES
 */
export const Types = {
    ADD_REQUEST: "favorites/ADD_REQUEST",
    ADD_SUCCESS: "favorites/ADD_SUCCESS",
    ADD_FAILURE: "favorites/ADD_FAILURE"
};


/**
 * ACTIONS
 */
export const creator = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),
  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};


/**
 * REDUCERS
 */
const INITIAL_STATE = {
  data: [],
  error: null
};

export default function favorites(state = INITIAL_STATE, action){
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { state };
    case Types.ADD_SUCCESS:
      return { ...state, error: null, data: [...state, action.payload.data] };
    case Types.ADD_FAILURE:
      return { ...state, error: action.payload.error }
    default:
      return state;
  }
};
