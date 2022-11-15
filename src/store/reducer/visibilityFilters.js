import { FILTERS } from "../../constants";
const defaultState = FILTERS.ALL;

const visibilityFilter = (state = defaultState, action) => {
  switch (action.type) {
    case 'set-filter': {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
