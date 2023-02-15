import {
  ILLUSTRATION_GET_ALL,
  ILLUSTRATION_GET_BY_ID,
  ILLUSTRATION_DELETE,
  ILLUSTRATION_UPDATE,
} from "../constants/actionTypes";

const initialState = {
  illustrations: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ILLUSTRATION_GET_ALL: {
      const { payload } = action;
      return {
        ...state,
        illustrations: payload,
      };
    }
    case ILLUSTRATION_DELETE: {
      console.log("action", action);
        return {
          ...state,
          illustrations: state.illustrations.filter(i => i.id !== action.payload.id)
        }
    }
    default:
      return state;
  }
}
