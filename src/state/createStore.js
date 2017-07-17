import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS
const reducer = (state, action) => {
  switch (action.type) {
    case `TOGGLE_MENU`:
      return Object.assign({}, state, { menuOpen: action.menuOpen });
    default: return state;
  }
}

const initialState = { menuOpen: false }

export default () => createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);
