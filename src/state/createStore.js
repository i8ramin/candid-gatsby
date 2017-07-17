import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const appInitialState = {
  menuOpen: false,
};

export const actionTypes = {
  MENU_TOGGLE: 'briya/app/MENU_TOGGLE',
  ROUTE_CHANGE: 'briya/app/ROUTE_CHANGE',
};

// REDUCERS
export const reducer = (state = appInitialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_TOGGLE:
      return Object.assign({}, state, { menuOpen: action.menuOpen });
    default: return state;
  }
}

// ACTIONS
export const toggleMenu = (menuOpen) => dispatch => {
  return dispatch({
    type: actionTypes.MENU_TOGGLE,
    menuOpen
  });
}

export const initStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  );
}
